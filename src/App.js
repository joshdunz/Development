import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const [filterPrice, setFilterPrice] = useState('');
  const [filterBrand, setFilterBrand] = useState('');
  const [filterScent, setFilterScent] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x)=> x.id ===product.id);
    if(exist.qty===1){
      setCartItems(cartItems.filter((x)=> x.id!== product.id));}
    else{
      setCartItems(
        cartItems.map((x)=>
        x.id===product.id ?{...exist, qty: exist.qty -1 } : x
      )
      );
    }
  }

  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        <Main
          onAdd={onAdd}
          onRemove={onRemove}
          products={products}
          filterPrice={filterPrice}
          setFilterPrice={setFilterPrice}
          filterScent={filterScent}
          setFilterScent={setFilterScent}
          filterBrand={filterBrand}
          setFilterBrand={setFilterBrand}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}

        ></Main>
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
      </div>
    </div>
  );
}

export default App;