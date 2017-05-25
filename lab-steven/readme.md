# Lab 23 - Angular Controller Testing

#### Description

This is a 401 JS lab where are creating a front end app that uses cowsay-browser, and then we use the app to fiddle with angular and scss. We also are learning to implement testing with karma and jasmine.

#### Instructions

- Clone the repo into a desired directory.
- Navigate to the lab-steven directory within the repo, and run ```npm i```
- Run the ```npm run watch``` script in your terminal, and app will be served on localhost:8080

#### "Features"

- Mobile first view, with scss media queries for the desktop view.
- When text is typed into the input element, click speak to save the cowsay state.
- An 'undo' button appears when a state is saved, and you can go back through your saved history.

#### Scripts

- ```npm run test``` : runs tests once
- ```npm run test-watch``` : runs tests, and watches for file changes and reruns tests.
- ```npm run lint``` : lints code
- ```npm run build``` : creates a build of the app using webpack
- ```npm run watch``` : uses webpack-dev-server to create a build of the app, and watch for file updates. Webpack-dev-server serves the build on localhost:8080
