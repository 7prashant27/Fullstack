import React from 'react';
import ReactDOM from "react-dom"
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';
import {store} from "./Redux/store"
import {Provider} from "react-redux"


beforeEach(() => {
  render(<Provider store={store}><App /></Provider>);
})

afterEach(()=>cleanup())

it("todo should render without crashing",() => {
  const div = document.createElement('div')
  ReactDOM.render( <Provider store={store}><App /></Provider>,div)
})


it("add todo should add item to todo list container", () => {
  const {getAllByTestId, getByTestId, debug} = screen
  const addTodo = getByTestId('add-todo-btn')
  const inputBar = getByTestId('todo-input')


  fireEvent.change(inputBar, { target : {value : "todo-test-1"}} )

  fireEvent.click( addTodo )
  fireEvent.click( addTodo )

  const todoList = getAllByTestId('todo-container')

  debug(todoList)

  expect(todoList.length).toBe(2)
})