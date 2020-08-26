import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer'
import ProductAdd from './container/productadd'

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// test('Display Products Snapshot',()=>{
//   const snap=renderer.create(
//     <ProductAdd/>
//   ).toJSON();
//   expect(snap).toMatchSnaphot();
// })

// DisplayProducts