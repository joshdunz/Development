
import React from 'react';
import Product from './Product';

export default function Main(props) {
    const {
      products,
      onAdd,
      filterPrice,
      setFilterPrice,
      filterBrand,
      setFilterBrand,
      filterScent,
      setFilterScent,
      sortOrder,
      setSortOrder,
    } = props;
  
  const allScentNotes = [...new Set(products.flatMap(product => product.scentNotes))];
  const allBrands = [...new Set(products.map(product => product.brand))];

  const handleBrandChange = (e) => {
    setFilterBrand(e.target.value);
  };

  const handleSelectChange = (e) => {
    setFilterScent(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    setFilterPrice(parseInt(e.target.value));
  };


  const handleReset = () => {
    setFilterPrice('');
    setFilterScent(''); 
    setFilterBrand('');
    setSortOrder(''); 
  };

  const filteredProducts = products
  .filter((product) =>filterPrice ? (product.price >= parseInt(filterPrice) &&
    product.price < parseInt(filterPrice) + 100
    ) : true
    )
    .filter((product) =>
      filterScent ? product.scentNotes.includes(filterScent) : true
    )
    .filter((product) =>
       filterBrand ? product.brand === filterBrand : true
    )
    
    .sort((a, b) =>
      sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );

  return (
    <main className="block col-2">
        <div className="filters">
          <h1>Filters</h1>
          <label>
            <b>Filter by Price:</b>
            <select value={filterPrice} onChange={handlePriceRangeChange}>
              <option value="">-- Select --</option>
              <option value="1">$0 - $100</option>
              <option value="100">$101 - $200</option>
              <option value="200">$201 - $300</option>
              <option value="300">$301 - $400</option>
            </select>
          </label>
          <label>
            Filter by Scent:
            <select value={filterScent} onChange={handleSelectChange}>
              <option value="">-- Select --</option>
              {allScentNotes.map((note) => (
                <option key={note} value={note}>
                  {note}
                </option>
              ))}
            </select>
          </label>
          <label>
            Filter by Brand:
            <select value={filterBrand} onChange={handleBrandChange}>
              <option value="">-- Select --</option>
              {allBrands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </label>
          <label>
            Sort by Price:
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
              <option value="">-- Select --</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </label>
          <button onClick={handleReset}>Reset</button>
        </div>
      <div className='item-section'>
        <h1>Products</h1>
        <h3>Number of items: {filteredProducts.length}</h3>
        <div className="items">
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
          ))}
        </div>
      </div>
    </main>
  );
}