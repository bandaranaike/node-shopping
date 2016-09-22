# Node Shopping

This application is designed for a shopping cart. 

###Technologies
* Node JS
* MySQL

###Web framework
* Express

###Installation
1. Clone from the Github `git clone https://github.com/bandaranaike/node-shopping.git`.
2. Go to the folder `cd node-shopping`.
3. Initialize dependencies `npm install`.
4. Create the database `node_shopping`.
5. Import `node_shopping.sql` located in root dir
6. Setup a user for this database and update user details with host details in `routes/connection.js` file. Default username is `eranda` and password is `password`.
7. Run the app. Use `npm start` or `forever start ./bin/www` if forever has installed.
8. Navigate to the `http://localhost:3000` using the browser.

###Known issues
* Not tested properly. It may have some errors.
 
####Time Line
1. Installed express `npm install express`.
2. Installed express-generator `npm install express-generator`.
3. Created the skeleton of the project `express node-shopping`.
4. Initialize the project `npm init`.
5. Installed MySQL `npm install mysql`.
6. Installed gulp `npm install gulp`.
7. Installed twitter bootstrap `npm install bootstrap@3`.
8. Added Database file.
9. Installed express session `npm install express-session`.
10. Installed gulp sass `npm install gulp-sass`.
11. Developments of the app.
12. Installed forever globally to keep server running continuously `npm install forever -g`.

