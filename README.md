# BURGER SHACK
## Description
This application demonstrates a simple full stack application with a front end implemented with HTML/CSS and elements from the Bootstrap framework and the backend implemented with Node.js and Express. HTML templating is done with the help of Handlebars JS.

The user may enter any burger name to add it to the menu. This also adds the new burger entry into the MySQL database. The initial burger entry is added as available on the menu and placed on the left side of the screen. The user may then eat any burger by clicking on it, which moves it into the adjacent column and updates its status accordingly in the database.

## Demo
Burger Shack is deployed to Heroku. Please check it out [here](https://sadeq-friendfinder-2018.herokuapp.com/)

You can also find it linked in my portfolio website [here](https://sadeq786.github.io/new-bootstrap-portfolio/)

## Installation
To run the application locally, first clone this repository with the following command.
```
git clone git@github.com:angrbrd/eat-da-burger.git
```
Next, install the application dependencies.
```
cd eat-da-burger
npm install
```
Finally, run the node server on port 8080.
```
node server.js
```
Once you get confirmation in the terminal that the connection is up and running, open the local application in your browser at the URL: http://localhost:8080/.

Enjoy and have a burger!
