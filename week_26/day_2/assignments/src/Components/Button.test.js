import React from "react"
import ReactDOM from "react-dom"
import {render,cleanup, fireEvent} from "@testing-library/react" 
import renderer from "react-test-renderer"
import Button from "./Button"



afterEach(cleanup)

it("should render without crashing",()=>{
    const div = document.createElement("div")
    ReactDOM.render(<Button label="button"></Button>,div)
})


it("should render button correctly with label click me",()=>{
    const {getByTestId}=render(<Button label="click me"></Button>)
    expect(getByTestId("button")).toHaveTextContent("click me")
})

it("should render button correctly with label add",()=>{
    const {getByTestId}=render(<Button label="add"></Button>)
    expect(getByTestId("button")).toHaveTextContent("add")
})

//snapshot testing -it creates a dummy-json of your entire dom
it("matches snapshot",()=>{
    const tree =renderer.create(<Button label="REMOVE"></Button>).toJSON()
    expect(tree).toMatchSnapshot()
})
//for every changes u make u have to update it pressing u




it("invokes function onClick",()=>{
    const mockFn=jest.fn()
    const {getByTestId} = render (<Button label="CLICK ME" onClick={mockFn}></Button>)

    const button=getByTestId("button")

    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)
    expect(mockFn).toHaveBeenCalledTimes(3)
    
    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)
    expect(mockFn).toHaveBeenCalledTimes(6)

})


