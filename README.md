# ng2Store
An online Shopping Cart in Angular 2

This is a shopping cart app being developed in Angular2 using Typescript. This is very much at development stage and the changes section would reflect the latest features added.

Version: NodeJs: 6.2.2 NPM: 3.9.5 Angular2: Final Release 2.0.0

Installation Instructions:
1. Clone the repository, this is client.
2. Run npm install and then npm start.
3. Clone the server side repository from https://github.com/alokj10/nodestore.
4. Follow the DB set up instructions at https://github.com/alokj10/nodestore repository.
4. Run npm install and then npm start.


Uses angular's modular approach to add new features.

The server side implementation is a NodeJs REST API available at https://github.com/alokj10/nodestore.

Payment Gateways Integrated:
Paypal

Features:
1. User Management Module
2. JWT Authentication
3. Facebook, Google Authentication
4. Admin Module
5. Admin -> Add/Edit Product
6. Admin -> Add/Edit Category
7. Admin -> View/Edit Orders
8. Admin -> View/Edit Users
9. Admin -> Set Payment gateway Details
10. Checkout module

Features To be Added:
1. Admin -> Add/Edit home page Menu
2. Add Product Options in Add/Edit Product page
3. Render Search Page with Product Options dynamically based on Selected Category

Technical tasks/bugs pending:
1. Update cart component when users places order successfully.
2. Update cart component in localstorage when user logs out.
3. Update Order Summary Total when user adds/removes/edits quantity in Checkout's Order Confirmation page.
4. Install Mocha & Chai testing frameworks.
5. Write unit tests to ensure complete coverage. 
