# Lab 22 - Cowsay In The Browser 

The purpose of this lab is to create a cow that can speak dynamically based on what the user enters into the input field. This lab builds off of Lab 21. 

In this app, the user can choose to remember the previous animal and message when the `Speak!` button is clicked. This will continue indefinitely. The user can also choose to revert back to a previous animal and message by clicking the `Undo!` button.

The user can also change the animal/image displayed via the dropdown menu

This app uses basic HTML, Javascript, and SCSS for styling. Angular is also applied to the HTML page and updated with webpack.

To build this page, type `npm run build` in the command line. 
To preview this page without building it out, type `npm run watch` in the command line and visit `http://localhost:8080/` in Chrome.

The following developer dependency was used: 
* webpack-dev-server (for `npm run watch`)

The following dependencies were used: 
* angular
* babel-core
* babel-loader
* babel-preset-es2015 
* cowsay-browser
* css-loader
* extract-text-webpack-plugin
* html-webpack-plugin
* node-sass
* sass-loader
* style-loader
* webpack (for `npm run build`)