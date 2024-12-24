import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/cards/Card';
import Layout from '../../components/common/layout/Layout';
import { getBasketThunk } from '../../redux/reducer/basketSlice';
import styles from './Basket.module.scss'

const Basket = () => {

    const dispatch = useDispatch();
    const basketProducts = useSelector((state) => state.basket.basket);
    useEffect(() => {
      dispatch(getBasketThunk());
    }, []);

  return (
    <Layout>
    <div className={styles.container}>
    {basketProducts && basketProducts.map((item) => <Card item={item} />)}
  </div>
  </Layout>
  )
}

export default Basket