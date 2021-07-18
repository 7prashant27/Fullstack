import React from 'react';
import { cleanup, fireEvent, getByTestId, render } from '@testing-library/react';
import App from './App';


afterEach(cleanup)

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Count/i);
  expect(linkElement).toBeInTheDocument();
});

it("should have add and reduce button , and default value of count should be 0", () =>{
  const {getAllByTestId,getByTestId}= render(<App/>)
  const [add,reduce] = getAllByTestId("button")
  const counter=getByTestId('counter')
  expect(counter).toHaveTextContent('0')
  expect(add).toHaveTextContent('ADD')
  expect(reduce).toHaveTextContent('REDUCE')
} )



it("on click of add count should icrement by 5",()=>{
  const {getAllByTestId,getByTestId}=render(<App/>)
  const [add,reduce]=getAllByTestId('button')
  const counter=getByTestId('counter')

  fireEvent.click(add)
  fireEvent.click(add)
  fireEvent.click(add)
  expect(counter).toHaveTextContent('15')
})

it("on click of add count should reduce should decrement by 5",()=>{
  const {getAllByTestId,getByTestId}=render(<App/>)
  const [add,reduce]=getAllByTestId('button')
  const counter=getByTestId('counter')


  fireEvent.click(reduce)
  fireEvent.click(reduce)
  fireEvent.click(reduce)
  expect(counter).toHaveTextContent('-15')
})
