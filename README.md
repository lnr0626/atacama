# Atacama

## Dev environment setup

1. Install required software
    - [NodeJS](https://nodejs.org/en/)
        - I am on version 6.10.0 (this is the latest LTS as of 2017-02-26)
    - [Yarn](https://yarnpkg.com/en/docs/install)
2. Clone the project
3. Run `yarn global add babel-cli flow-bin`
    - This command globally install babel-cli and flow
    - If you're on osx or linux, you may need to run this command using sudo because 
        of how node handles globally installed packages. If you're not comfortable 
        doing this, this step is not required, it just provides some convenience 
        for auto restarting the server on changes.
4. Run `yarn install` to install the `package.json` dependencies
5. Run `yarn start`
6. Go [here](http://localhost:3000/)
    - You should see Hello, World!
7. Go [here](http://localhost:3000/test.html)
    - You should see in bold "This is to ensure the static mappings are working."
    
Congrats, you have verified that your dev environment is setup.
    
To have yarn monitor for changes and restart the server when it detects those, run `yarn run monitor`
