import React, { useEffect, useState } from 'react';
import './Orders.css';
import { db } from './firebase';
import { useStateValue } from './StateProvider';
import Order from './Order';

function Orders() {
    const [{ user }] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            const unsubscribe = db
                .collection('users')
                .doc(user.uid)
                .collection('orders')
                .orderBy('created', 'desc') // <-- field name must match Firestore
                .onSnapshot((snapshot) => {
                    setOrders(
                        snapshot.docs.map((doc) => ({
                            id: doc.id,
                            data: doc.data(),
                        }))
                    );
                });

            // cleanup listener
            return () => unsubscribe();
        } else {
            setOrders([]);
        }
    }, [user]);

    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders_order">
                {orders?.map((order) => (
                    <Order key={order.id} order={order} /> // <-- key added
                ))}
            </div>
        </div>
    );
}

export default Orders;
