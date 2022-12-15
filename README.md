# GET Some Gifts!

Let's GET some gifts for the frontend team! We'll want to keep track of what each instructor wants, and be able to see the total amount we need to spend. 

You'll be working to finish a partially complete application. The HTML and CSS has been built out for you (you are welcome to add, remove and change it however you see fit!). You'll need to make a GET request to display the following: 
* As a user, I should be able to see a list of all receipients with their wanted gift item and price. 
* As a user, I should be able to see the total amount I need to spend if I purchased all gifts. 
* BONUS IDEAS
  * As a user, when I check "purchased" for each item, I should see my total cost decrease accordingly.
  * As a user, I can see which items have associated links and can navigate to them

## The API

You'll need to use this [Holiday Shopping API](https://github.com/turingschool-examples/holiday-shopping-api) to complete your tasks. Please follow the instructions in the Holiday Shopping API README to run the API locally. You'll need to have this running while you're working. 

Hint: Once you've followed the directions in the Holiday Shopping API README, you should see "Holiday Shopping List API is now running on http://localhost:3001 !" print to your console. You should be able to visit the 'Get all items' Endpoint (listed in the README) in your browser. You'll use the 'Get all items' endpoint to craft your Fetch request. 


## Endpoint

| Description | URL | Method | Required Properties for Request | Sample Successful Response |
|----------|-----|--------|---------------------|-----------------|
| Get all items |`http://localhost:3001/items`| GET  | none | An array containing all items |


![comp](https://github.com/turingschool-examples/get-some-gifts/blob/main/images/giftlist.png)
