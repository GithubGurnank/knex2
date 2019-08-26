**Need to do npm install first**

**then npm start**

KNEX
====
Knex can be used in 2 ways: either directly in the js module or seperately as migrations.
**1. Doing it straingt in project's javascript**

**2. Doing it via Migrations.**
We use migrations to do things like, create a table, change its schema, drop it etc. In fact anything you would normally do 
in the sql command line.
Creating migrations is a 3 step process. 1, make initialising file. This is similar to doing npm init to create a package.json


==Step 1== .CD to project root and run this command in terminal. This will create a knexfile in project root

==node_modules/.bin/knex init==

The init automatically writes some default settings. Change the client on each one to mysql.
Remove any reference to postgres or sqllite because this is a mysql project
Then copy paste one of the blocks and change the key to 'development'

==Step 2.== Now run the migrate command to make the migration folder and file
example: 
==node_modules/.bin/knex migrate:make add_engine_size==

where add-add_engine_size is the name I am giving to this particular migration task.

This command will make a folder called migrations in project root and add a js file with a time stamp plus the migration name.
You will need to add the code you want to run and then run it.



Inside the file there will be 2 empty function: exports.up and exports.down.
This is where you define the changes you want to make.

NOTE: you will need to ensure the current user has access provileges to the db.
You do this using this command GRANT grant_type ON my_db_name.* TO user_name@localhost;
example
    GRANT ALL ON mydb.* TO root@localhost;

    see more info here: https://dev.mysql.com/doc/refman/5.5/en/grant.html#grant-overview

Now you can run the node_modules/.bin/knex migrate:make add_engine_size command

==Step 3.== now run the new file
    ==node_modules/.bin/knex migrate:latest==

***REMEMBER:***
You can't delete any migrations files because they represent a change from previous to current
Also, you can't run the same file again.
migrate:latest means migrate up
migrate:rollback means migrate down

So you can do latest and rollback multiple times. Each one will be the next or previous command set in the migrations folder.
