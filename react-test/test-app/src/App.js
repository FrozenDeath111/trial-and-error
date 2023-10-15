import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name:'Photo', price:'100 USD'},
    {name:'Lotto', price:'90 USD'}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter></Counter>
      </header>
      <div className='container'>
        <ul>
          {
            products.map(products => <li key={products.name}>{products.name}</li>)
          }
        </ul>
        <Person name="cobalt" game="sebal"></Person>
        {
          products.map(products => <Product products={products}></Product>)
        }
      </div>
      <Users></Users>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>decrease</button>
      <button onClick={ () => setCount(count * 2)}>2X value</button>
      <button onClick={ () => setCount(count / 2)}>half value</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic User</h3>
      <ul>
        {
          users.map(user => <li key={user.phone}>{user.name} -- {user.phone}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border:'1ps solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    padding:'10px',
    maxWidth:'20vh',
  }
  return (
    <div style={productStyle}>
      <h2>Name: {props.products.name}</h2>
      <h1>Price: {props.products.price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  const divStyle = {
    border:'2px solid red',
    margin:'10px',
    padding:'10px'
  }
  return (
    <div style={divStyle}>
      <h1>ibex {props.name}</h1>
      <h2>conosuela {props.game}</h2>
    </div>
  )
}

export default App;
