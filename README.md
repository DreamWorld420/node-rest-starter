# NODE-REST-STARTER

a simple node backend REST boilerplate via express and mongoose.

## features

-   User model with password hashing
-   JWT Authentication
-   Auth routes and controllers (login, signup)
-   Auth protected routes controller
-   Auto router mounting
-   Clean folder structure

## usage

clone the repository:
`git clone https://github.com/DreamWorld420/node-REST-starter`

cd into the folder
`cd ./node-REST-starter`

remove the `.git` folder:
`rm -rf .git`

install dependencies:
`yarn`

create a `.env` file in your root folder, use the following predefined options (⚠️**change with care**⚠️):

```
NODE_ENV="development"
PORT_DEV=3000
HOST_DEV="127.0.0.1"
MONGODB_URI_DEV="mongodb://127.0.0.1:27017/"
JWT_SECRET=<your-secret>
JWT_EXPIRES_IN="90d"
```

## folders and files description

minimal description of important folder and files, just a personal opinion (⚠️**change with care**⚠️):

```
.
├── src                                     # source folder
    ├── api                                 # controllers and routes
        ├── controllers                     # controllers (controller layer)
        └── routes                          # routes
            └── index.js                    # any router in here will get auto mounted
    ├── config                              # config
        └── index.js                        # process.env configs
    ├── loader                              # loaders
        ├── expressLoader.js                # router mounting, middle-wares, global error handling
        ├── mongooseLoader.js               # database connection
        └── index.js                        # main loader (expressLoader + mongooseLoader)
    ├── models                              # mongoose models (data layer)
    ├── services                            # business logics (service layer)
    ├── utils                               # utility classes and functions
    └── index.js                            # app entry point + database name

```
