import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {Page} from  "./dataStructure/page";

test('renders learn react link', () => {
  render(<App whichPage={Page.FirstPage}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
