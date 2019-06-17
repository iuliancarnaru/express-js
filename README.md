# express-js

1.Installing

Assuming you’ve already installed Node.js, create a directory to hold your application, and make that your working directory.

    npm init
    npm install express --save-dev

2.Express application generator

Use the application generator tool, express-generator, to quickly create an application skeleton.

    npm install express-generator -g
    express -h

For example, the following creates an Express app named myapp. The app will be created in a folder named myapp in the current working directory and the view engine will be set to Pug:

    express --view=pug myapp

The generated app has the following directory structure:

    .
    ├── app.js
    ├── bin
    │   └── www
    ├── package.json
    ├── public
    │   ├── images
    │   ├── javascripts
    │   └── stylesheets
    │       └── style.css
    ├── routes
    │   ├── index.js
    │   └── users.js
    └── views
        ├── error.pug
        ├── index.pug
        └── layout.pug

    7 directories, 9 files

Database integration

[Adding the capability to connect databases to Express apps is just a matter of loading an appropriate Node.js driver for the database in your app.](https://expressjs.com/en/guide/database-integration.html)
