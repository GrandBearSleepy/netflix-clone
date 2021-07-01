import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';

import { selectUser } from '../../features/user/userSlice';
import db from '../../firebase';
import './styles.css';

const Plans = () => {

  const [products, setProducts] = useState([]);
  const [subscribtion, setSubscribtion] = useState(null);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection('customers')
      .doc(user.uid)
      .collection('subscriptions')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(async subscribtion => {
          setSubscribtion({
            role: subscribtion.data().role,
            current_period_end: subscribtion.data().current_period_end.seconds,

          })
        })
      })
  }, [user.uid])

  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection('customers')
      .doc(user.uid)
      .collection('checkout_sessions')
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      })
    console.log(docRef)

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();

      if (error) {
        alert(`An error occurred: ${error.message}`)
      }
      if (sessionId) {
        const stripe = await loadStripe(
          'pk_test_51J7s6dCizZAdOLp35ZYuoPX3mAftqvvlOJMHFhFuz33unxsl9Irs1zuwXjjzxBtQQ0EUn8Lo9ysIHRVnRjGsgN8g00zdLuciHm'
        );
        stripe.redirectToCheckout({ sessionId });
      }
    })
  }

  useEffect(() => {
    db.collection('products')
      .where('active', '==', true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection('prices')
            .get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            }
          })
        })
        setProducts(products)
      })
  }, [])

  console.log(products)
  return (

    <div className="plans-container">
      <br />
      {subscribtion && (
        <p className="renewal-date">Renewal date:{" "}
          {new Date(subscribtion?.current_period_end * 1000)
            .toLocaleDateString()}
        </p>)
      }
      {Object.entries(products).map(([productId, productData]) => {

        const isCurrenPackage = productData.name?.toLowerCase().includes(subscribtion?.role)
        console.log(subscribtion)


        return (
          <div key={productId} className={`${isCurrenPackage && "plans-subcribed"} plans-plan`}>
            <div className="plan-info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button
              onClick={() =>
                !isCurrenPackage && loadCheckout(productData?.prices?.priceId)}
              className="sub-btn">
              {isCurrenPackage ? "Current Package" : "Subscribe"}
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Plans
