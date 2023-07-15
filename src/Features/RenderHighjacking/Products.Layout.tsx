import axios from 'axios';
import { useEffect, useState } from 'react';

const Products = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      axios.get('https://fakestoreapi.com/products').then((data) => {
        setProductList(data.data);
      });
    }, 4000);
  }, []);

  if (productList.length === 0) {
  }
};

export default Products;
