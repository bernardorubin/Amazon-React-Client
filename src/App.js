import React, { Component } from 'react';
import logo from './logo.svg';
import ProductsIndex from './components/ProductsIndex';
import ProductShow from './components/ProductShow';
import './App.css';

const BASE_URL = 'http://localhost:3000/api/v1';
const API_KEY = 'be8658d93a0100efe9af9fcb63e8278d'


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      product: null,
      products: []
    }
    this.getProduct = this.getProduct.bind(this);
    // this.postProduct = this.postProduct.bind(this);
  }

  getProducts () {
    fetch(`${BASE_URL}/products?api_key=${API_KEY}`)
    .then(r => r.json())
    .then(({products}) => this.setState({products}))
  }

  getProduct (id) {
    fetch(`${BASE_URL}/products/${id}?api_key=${API_KEY}`)
    .then(r => r.json())
    .then(product => this.setState({ product }))
  }

  componentDidMount () {
    this.getProducts();
  }

  render() {
    let productView = '';
    if (this.state.product !== null) {
              productView = (
                <ProductShow
                  onBackClick={e => {
                    e.preventDefault();
                    this.setState({product: null});
                  }}
                  product={this.state.product || {}} />
              );
            } else {
          productView = (
            <ProductsIndex
              onProductClick= {this.getProduct}
              products={this.state.products} />
          );
      }
      return (
        <div className="App">
          <h1>AMAZON</h1>
          {
            productView
          }
        </div>
      );
    }
  }

export default App;
