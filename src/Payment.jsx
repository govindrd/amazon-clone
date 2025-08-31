import React, { useEffect, useState } from 'react'
import './Payment.css';
import { useStateValue } from './StateProvider';
import Checkoutproduct from './Checkoutproduct';
import { Link, useNavigate } from 'react-router-dom';
import Checkout from './Checkout';
import { CardElement,useStripe,useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer';
import axios from './Axios';
import { db } from './firebase';



function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

    const navigate = useNavigate();

    
    const stripe=useStripe();
    const elements=useElements();

    const [succeeded,setSucceeded]=useState(false);
    const [processing,setProcessing]=useState("");
    const [error,setError]=useState(null);
    const [disabled,setDisabled]=useState();
    const [clientSecret,setClientSecret]=useState(true);


    useEffect(()=>{
        // generate the special strippe ecret which us to charge the customer 
        const getClientSecret=async () =>{
            const response=await axios({
                method:'post',
                // Strip expects the total in a rupeas submits
                url:`/payment/create?total=${Math.round(getBasketTotal(basket) * 100)}`
            });

            setClientSecret(response.data.clientSecret)

        }
        getClientSecret();
    },[basket])

    console.log("The Secret is >>>",clientSecret)

    const handleSubmit=async  (event)=>{
        // do all the fancy stripe stuff...
        event.preventDefault();
        setProcessing(true);

         // const payload=await stripe
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentintent =>payment confirmation

                    db.collection('users')
                    .doc(user?.uid)
                    .collection('orders')
                    .doc(paymentIntent.id)
                    .set({
                        basket:basket,
                        amount:paymentIntent.amount,
                        created:paymentIntent.created,
                    })


            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type:'EMPTY_BASKET'
            })

            navigate('/orders', { replace: true });

        })


    }

    const handleChange= event=>{
        // Listen for changes in the CardElement
        // and display any error as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message:"");



    }

   
    return (
        <div className='payment'>
            <div className="payment_container">

                <h1>
                    Checkout {<Link to="/Checkout"> {basket?.length} items</Link>
                    }
                </h1>

                {/* Payment section 1-delivery address*/}
                <div className="payment_Section">

                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>

                    <div className="payment_address">
                        <p >{user?.email}</p>
                        <p>Banglore Banashankari 560050</p>
                        <p>Banglore, India</p>

                    </div>

                </div>


                {/* Payment section 2-Review the Items */}
                <div className="payment_Section">
                    <div className="payment_title">
                        <h3>Review Item and Delivery</h3>
                    </div>

                    <div className="payment_item">


                        {basket.map(item => (
                            <Checkoutproduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}

                        {/* This method also work */}
                        {/* {basket.map(item => {
                            return (
                                <Checkoutproduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price} 
                                    rating={item.rating}
                                />
                                })}  */}

                    </div>
                </div>


                {/* Payment section 3-payment method*/}
                <div className="payment_Section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="payment_details">
                        {/* strip magic will go hee */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className='payment_priceconatiner'> 

                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total:{value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)} // part of the homework
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'₹'}
                                />

                                <button disabled={ processing || disabled || succeeded }>
                                    <span >
                                        {processing ?  <p> Processing </p>:
                                        'Buy Now'}

                                    </span >

                                </button>

                            </div>

                            {/* if Error  */}
                            { error && <div>{error}</div> }
                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment;