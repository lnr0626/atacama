# Atacama

## Dev environment setup

1. Install required software
    - [NodeJS](https://nodejs.org/en/)
        - I am on version 6.10.0 (this is the latest LTS as of 2017-02-26)
    - [Yarn](https://yarnpkg.com/en/docs/install)
2. Clone the project
3. Run `yarn global add ts-node typescript`
    - This command globally install ts-node and typescript so that nodemon will work
    - If you're on osx or linux, you may need to run this command using sudo because 
        of how node handles globally installed packages. If you're not comfortable 
        doing this, this step is not required, it just provides some convenience 
        for auto restarting the server on changes.
3. Run `yarn start`
4. Go to http://localhost:3000/
    - You should see Hello, World!
    
To have yarn monitor for changes and restart the server when it detects those, run `yarn run monitor`
