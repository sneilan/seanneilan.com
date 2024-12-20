import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

import ReactDOM from 'react-dom';

class Hello extends Component {
  render() {
    return <h1>Hello California</h1>;
  }
}

// ReactDOM.render(<Hello />, document.getElementById('root'));

function MyApp() {
  return <h1>Hello, world!</h1>;
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Hello />);

