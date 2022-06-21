# NoSQLSocialNetworkAPI
## Description
![NoSQLSocialNetworkAPI screenshot]()

<br/>
The NoSQL Social Network API is a back-end framework created using MongoDB and Mongoose, which allows a user to easily develop a social media application with users, friends, thoughts, and reactions. The use of NoSQL (MongoDB) allows for agility in the face of rapid, required changes, which is given some normalization using Mongoose to ensure that data structures and integrity still exist! <br/>

<br/>
<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Languages and Technologies Used:** 
- JavaScript ES6
- Node.js
- Express.js
- MongoDB
- Mongoose

## Table of Contents

1. [ Installation ](#installation)
2. [ Usage ](#usage)
3. [ License ](#license)
4. [ Contributing ](#contributing)
5. [ Questions ](#questions)


<a name="installation"></a>

## Installation
To install the application, please follow the steps listed below: 
1. Download the latest version of node.js on your computer and ensure you have access to MongoDB. <br/>
2. Clone this repository on your computer by opening your command-line interface and using git clone and the HTTPS or SSH URL retrieved from this repository's 'Code' dropdown above (e.g.```git clone git@github.com:TaimurHasan/NoSQLSocialNetworkAPI.git```). <br/>
3. Navigate or cd into the cloned directory from the CLI (i.e. ``` cd ./NoSQLSocialNetworkAPI ```). <br/>
4. Initialize the NPM registry, as it hosts the required packages needed to run this application, using ```npm init -y```. <br/>
5. Install the required packages using 'npm i'. <br/>
9. Call the application using ```npm start``` to launch the server and begin testing the API! 

<a name="usage"></a>

## Usage
To use this framework, please test the following API routes and endpoints using your browser or Insomnia (recommended).
**/api/users**
- GET all users
- POST a new user

**/api/users/:userId**
- GET a single user by _id
- PUT to update a user by _id
- DELETE to remove a user by _id

**/api/thoughts**
- GET all thoughts
- POST a new thought

**/api/thoughts/:thoughtId**
- GET a single thought by _id
- PUT to update a thought by _id
- DELETE to remove a thought by _id

**/api/users/:userId/friends/:friendId**
- POST a firend to user friend list
- DELETE to remove a friend from user friend list

**/api/thoughts/:thoughtId/reactions**
- POST a reaction to a thought
- DELETE a reaction from a thought

For more details, please refer to the [walkthrough video]().


<a name="license"></a>
## License
This project is licensed under the MIT License - see the [license info](https://opensource.org/licenses/MIT) for details.


<a name="contributing"></a>

## Contributing

This project can be contributed to by forking the application. For any contributions, please submit a Pull Request, which will be reviewed upon submission before acceptance.

<a name="questions"></a>

## Questions

[GitHub](https://github.com/TaimurHasan) <br/>
For any questions, please send an Email to [taimurhasan11@gmail.com](mailto:taimurhasan11@gmail.com)
