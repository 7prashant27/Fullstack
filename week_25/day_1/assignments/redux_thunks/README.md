# Problem Statement:

Create a single page react application<br/>
use redux to manage state of the react application<br/>
use redux-thunk to manage the api requests.<br/>
Seperate the files for actions, reducers and stores<br/>
Use router-dom to manage routing<br/>
Use redirect to push users from one page to another<br/>

## Resource provided

A simple API that allows you to register a user, login a user and view the profile of a user is given to you.

You can read the documentation here https://github.com/masai-school/api-mocker/wiki/Authentication-API.

## Part-1

Create a route for Registration<br/>
Create a simple registration page that will allow a user to register with the necessary details mentioned in the API docs.<br/>
When the user submits the registration form, it must POST the data to the api and receive a 200 status code. It must also verify that all fields have been filled in.<br/>
If it receives an error status code of 401 it must tell the user an error has occurred.<br/>

## Part-2

Create a route called login<br/>
Create a simple login page that allows a user to enter their username and password.<br/>
When the user submits their login details you must send the data to the api.<br/>
If the login data is correct, you must display all the profile information. You must also hide the login page elements.<br/>
On success move to another route /dashboard<br/>

## Part-3

In the /dashboard page<br/>
Create a search bar<br/>
User should be able to search for github users<br/>
Show results with 5 users per page (by default github gives 30 override it: ?page=3&per_page=100 is an example of how you can pass query params )<br/>
Keep active page in redux store, such that when you goto another route and come back it will remain the same.<br/>
Create a dummy profile page so that you can test this out<br/>