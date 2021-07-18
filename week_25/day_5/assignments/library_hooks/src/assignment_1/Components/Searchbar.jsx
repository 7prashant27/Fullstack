import React from "react"
import styled from "styled-components"


const SearchBarWrapper = styled.div`

    border: 1px solid black;
    border-radius : 20px;
    padding: 10px;
    display:flex;
    position:relative;
`
const IconImage = styled.img`
    height:30px;
    padding-right:20px;
`

const Input = styled.input` 
    border:none;
    outline:none;
    flex:1;
    height:25px;
    font-size:20px;
` 

 function SearchBar(){
    return (
        <SearchBarWrapper>
            <IconImage src="https://simpleicon.com/wp-content/uploads/active-search.png" alt="search logo"/>
            <Input/>
        </SearchBarWrapper>
    )
}


export {SearchBar}