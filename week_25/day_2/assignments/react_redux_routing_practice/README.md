## Problem Statement
Build an application to showcase the list of cities along with their countries <br/>
WRITE CLEAN CODE WITH PROPER VARIABLE NAMES <br/>

## Required Functionality
You should be able to add a country and store it in the countries list<br/>
You should be able to add a city with the countries list as a drop down (from the list of stored countries)<br/>
Input a city description along with this, this data should only be shown when user clicks on a city name<br/>
The home page should look like the table given below with the ability to sort based on population or average income and should also be able to filter based on the country<br/>
The home page should also have a drop down to select the no of rows to be shown in the page and the results and pagination links should appear accordingly<br/>


| Country | City           | Population | Avg Income | Edit | Delete |
|---------|----------------|------------|------------|------|--------|
| India   | Delhi          | 19245000   | 32600      | Link | Button |
| India   | Bangalore      | 8445000    | 34500      | Link | Button |
| USA     | New York       | 8175133    | 125000     | Link | Button |
| Brazil  | Rio de Janeiro | 6688930    | 48600      | Link | Button |
<br/>
Use redux store<br/>
When clicking City name to /<country_name>/<city_name><br/>
Show description along with other data of the city and the country in this page with an edit button<br/>
add a go back button to take to the home page<br/>
When clicking Edit move the user to /<country_name>/<city_name>/edit<br/>
On edit, the daa should be updated and user should be redirected to page<br/>
add a go back button to take to the home page<br/>
use json-server<br/>