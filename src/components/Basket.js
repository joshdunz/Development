import React from 'react';

export default function Basket(props){
    const {cartItems, onRemove} = props
    const totalCost = cartItems.reduce((acc, item) => acc + (item.qty * item.price), 0).toFixed(2);
    return (<aside className="block col-1">

        <h1>Cart Items</h1>
        <div>
            {cartItems.length === 0 &&  <div> Cart is Empty</div>}
        </div>
        {cartItems.map((item) => (
            <div key={item.id} className ="row">
                <div style={{ marginRight: '10px' }}>
                            <button onClick={() => onRemove(item)} className ="remove" style={{ padding: '0px 15px', fontSize: '1.8rem' }}>
                            -
                            </button>
                        </div>
                    <div className='cart-item'>
                        
                        <div className="col-2" style={{ marginRight: '10px' }}>{item.name}</div>
                    
                        {item.qty} x ${item.price.toFixed(2)}
                        
                    </div>
                </div>
            // </div>
            
        ))}

            {cartItems.length > 0 && (
                <div className="row">
                    <h2>Total:</h2>
                    <h2>${totalCost}</h2>
                </div>
            )}          
    </aside>
    );
}