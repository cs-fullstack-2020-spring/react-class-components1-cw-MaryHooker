# Class components
#### Nice touch with the styling since you had so much time left over after one and two (code ninja!). Looks good. Super close on the challenge but you should use map to iterate through the array to render the component bc for each does not return.
Found this right as y'all were levavin study session
```
Well, the forEach() method doesn’t actually return anything (undefined). It simply calls a provided function on each element in your array. This callback is allowed to mutate the calling array.
Meanwhile, the map() method will also call a provided function on every element in the array. The difference is that map() utilizes return values 
```
[source](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)
We have to use return because that's how our components are rendered
#### Score : 5/5


# React Introduction Class Components 1 Classwork

### Exercise 1:
Create a new React application using ```create-react-app``` called ```greetings```. Create a React component called ```SayHello``` that doesn't accept any properties and will render 

```<h2>Well Hello There!</h2>```. 

Create a 2nd React component called ```SayHowdy``` that doesn't accept any properties and will render 

```<h2>Howdy Partner!</h2>```. 

From the main ```app.js``` module, render both React components.

### Exercise 2:
Create a new React application using ```create-react-app``` called ```got_bank```. Create a React component called ```BankAccount``` that accepts ```customerName``` and ```balance``` as properties and will render 
```
<h2>Welcome FIRSTNAME_PASSED_IN</h2> 
<h3>Your account balance is $BALANCE_PASSED_IN</h3>
``` 

From the main ```app.js``` module, render the component and pass in the 2 properties. 

### Challenge:
Create a new React component called ```Netflix```. In ```Netflix``` component create an array of at least 3 Movie object literals with the properties ```movieName```, ```yearReleased```, and ```genre```. Render the ```NetFlix``` component from ```app.js``` and then have that component, render a 2nd child component called ```DisplayMovies```, passing in the array of movies to the child component. In ```DisplayMovies```, print the movies and their information from the properties passed in.
