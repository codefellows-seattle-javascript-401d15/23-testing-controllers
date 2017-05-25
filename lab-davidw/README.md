# lab-22 Angular Controllers and scss

## A demo app illustrating the use of "Controller As" to control scope

### Setup:
Install the app:
`$ npm install`

Start the server:
`$ npm run build`

If you want to see debug output you can use this command to start the server:
`$ npm run watch`

You can also lint the files:
`$ npm run lint`

*Note:*
these files will be ignored:
`     **/node_modules/*
      **/vendor/*
      **/*.min.js
`
### Usage:

###### Basic example:

Simply enter some text and watch it change the default text of 'rawr' to your custom message.

If you click on the "Speak!" button, you see your customized character selection and text stored below, and a new button, "Undo!"  will appear in this section.  You can repeatedly click on Speak, changing selections between click or not.  Only the latest Speak! selection will be displayed.

If you click on the Undo! button, you will see your history of clicking on Speak step back, in a stacked manner. (last in first out) These will be removed one at a time until you finish up at the first time you had clicked on "Speak!".  One more click and the history will be removed, along with the "Undo!" button.

###### Attributions:
Ben Ayzenberg helped me figure out the undo bug.
  Steven helped me find a misspelled "cowsay" (was "cosway") in my index.html, which was breaking the default selection and setting it to Bevis.
