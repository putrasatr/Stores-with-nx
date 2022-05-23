import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { storeUtility, getCurrency } from '@stores/store/utility';

const Home = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    storeUtility();
    getCurrency();
    axios.get('https://jsonplaceholder.typicode.com/todos/2').then((res) => {
      setData(res.data.title);
    });
  }, []);
  return <div>{data}</div>;
};

export default Home;
