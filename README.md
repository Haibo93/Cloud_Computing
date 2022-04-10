# Cloud-Computing

## FPF Solution:
This is a generic web application demonstrating the use of REST API and cloud-based deployment. The app serves as a product demo of e-commerce website with membership management. 

### Table of Contents:
- [About](#about)
- [Tech Stack](#Tech-Stack)
- [Backend](#backend)
  - [CRUD Operations](#crud-operations)
- [Front-end](#Front-end)
- [Cloud App](#Cloud-app)
- [Disclaimer](#Disclaimer)

### About: 	
FPF Solution provides a demonstration of dynamically generated REST API which has a series of Create, Read, Update and Delete (CRUD) services. All the responses conform to REST standards such as the status codes. FPF Solution also makes use of an external REST service and a cloud database to complement the application's functionality and accessing of persistent information. The security of this app is enforced with simple user account and access management with hash-based authentication is also included in this demo. To enforce further security, our app is served over Hypertext Transfer Protocol Secure (HTTPS). 

Note: The project is still in development and not all features and services are implemented on the front-end side. To test the functionalities, we recommend using [insomnia](insomnia.rest).

## Tech Stack:
### Backend
It is advised to use [Postman](https://www.postman.com/) for testing the CRUD operations when accessing the backend.
### CRUD Operations
Basic CRUD operations are possible by accessing the API routes via adding ``api/registerUser`` and ``api/getProducts`` at the end of the web address following the REST standard. A full list of CRUD is presented below:

Register User:  <POST /registerUser> Description: it creates a new user record including the name, email, the password hash, company name in the SQL database 

Log In User:  <POST /logInUser> Description: verifies user trying to log in by checking if the email and password has provided exist in the database. It also verifies the user’s identity i.e. member or admin

Log Out User:  <GET /logOutUser> Description: log out a user given the person is logged in 

Get Product:  <GET /getProducts> Description: gets the product information from the database

Admin add product:  <POST /admin/adminAddProduct> Description: allows the admin to create a product by entering the product name, product cost, product description

Admin delete product:  <Delete /admin/deleteProduct/:id> Description: allows the admin to delete a product according to the id provided

Admin update product:  <Put /admin/updateProduct/:id> Description: allows the admin to update the information of a specific product

User adds order:  <Post /user/:id/addOrder> Description: allows the user to create a new order

User deletes order:  <Delete /user/ :user_id/deleteOrder/:order_id> Description: allows the user to delete an existing order in the database

User gets Details:  <Get /user/:id> Description: Gets a user’s detail or return an error message if the user is not found

User gets orders:  <Get /user/:id/getUserOrder> Description: gets the detail of the orders of an user in the database

Get login status:  <Get /getLogInStatus> Description: Get the status or a user or return an error message if the user in not in the database 

Update user profile: <Put /user/:id/updateProfile> Description: Update the user profile in the database


### Front-end
The current front end can be seen on the deployment server or when run locally. 
It has been written using the front end framework Bootstrap and was built to be dynamic.
On login for users it shows the orders the user has made, and for the admins it shows details of all products currently available.

### Cloud App
#### Heroku
[![Run](https://www.herokucdn.com/deploy/button.svg)]()

This deployment is currently not load balanced yet but supports an HTTPS certificate. 

<!-- ### Disclaimer -->
###### Disclaimer
This project is part of a cloud computing coursework taught by [Dr. Sukhpal Singh Gill](https://github.com/iamssgill) at the Queen Mary University of London Electrical Engineering & Computer Science Department to create a prototype of a cloud application.
