// HOL 7: Props - class components with array of Cart items
import React, { Component } from 'react';

class Cart {
  constructor(itemname, price) {
    this.itemname = itemname;
    this.price    = price;
  }
}

class OnlineShopping extends Component {
  constructor(props) {
    super(props);
    // HOL 7: Array of Cart objects passed as props via state
    this.items = [
      new Cart('Laptop',   79999),
      new Cart('Phone',    49999),
      new Cart('Earbuds',   2499),
      new Cart('Keyboard',  1899),
      new Cart('Mouse',      899),
    ];
  }

  render() {
    return (
      <div className="container">
        <h2>Online Shopping Cart</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: 8 }}>
          <thead style={{ background: '#1976d2', color: 'white' }}>
            <tr><th style={{ padding: '0.75rem' }}>Item</th><th>Price (₹)</th></tr>
          </thead>
          <tbody>
            {this.items.map((item, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.75rem' }}>{item.itemname}</td>
                <td>₹{item.price.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default OnlineShopping;
