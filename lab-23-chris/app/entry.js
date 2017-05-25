'use strict';

// require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');
const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', CowsayController]);

function CowsayController($log) {

// initialize the state before it is rendered or compiled
  this.$onInit = () => {

    $log.debug('CowsayController()');

    this.title = 'Welcome to Cowsay';
    this.history = [];

    cowsay.list((err, cows) => {
      this.cowfiles = cows;
      this.current = this.cowfiles[40];
    });

    this.update = function(input) {
      $log.debug('cowsayCtrl.update()');
      return cowsay.say({text: input || 'moo', f: this.current, W: 60});
    };

    this.speak = function(input) {
      $log.debug('cowsayCtrl.speak()');
      this.text = input;
      this.spoken = this.update(input);
      this.history.push(this.spoken);
    };

    this.undo = function() {
      $log.debug('cowsayCtrl.undo()');
      this.history.pop();
      this.spoken = this.history[this.history.length - 1] || '';
    };

    this.logger = function(input) {
      $log.debug('cowsayCtrl.logger()');
      $log.log(input);
      return input;
    };
  };
}

cowsayApp.controller('NavigationController', ['$log', NavigationController]);

function NavigationController($log) {
  $log.debug('#NavigationController');

  this.routes = [
    {
      name: 'home',
      url: '/home',
    },
    {
      name: 'about',
      url: '/about',
    },
    {
      name: 'contact',
      url: '/contact-us',
    },
  ];
}

// ::::>>>>>> IPSUM GENERATOR <<<<<<:::: \\

// 'use strict';
//
// const angular = require('angular');
//
// angular.module('ipsumApp', []);
//
// angular.module('ipsumApp')
// .controller('IpsumController', ['$log', IpsumController]);
// function IpsumController($log){
//   $log.debug('ipsumCtrl()');
//
//   this.$onInit = () => {
//     this.dictionary  = {
//       hacker: [ 'rm -rf', 'password is password', 'hack the mainfraim', 'im in the matrix', 'the password are plain text', 'access granted', 'segfault 11', 'no file found', 'system malfunction', 'leave no trace'],
//
//       bob: ['what an interesting approach', 'why?', 'how delightful', 'its too ova done', 'happy little trees', 'your beautiful', 'happy little accident'],
//
//       simpsons: ['spider cow', 'doh', 'donuts', 'booyea'],
//     };
//
//     this.choices = Object.keys(this.dictionary);
//     this.selected = this.choices[0];
//     this.content = '';
//
//     this.getRandomItem = (list) => {
//       return list[Math.floor(Math.random() * list.length)];
//     };
//
//     this.handleSubmit = () => {
//       let result = [];
//
//       for(let i = 0; i< 15; i++){
//         let choice = this.dictionary[this.selected];
//         result.push(this.getRandomItem(choice));
//       }
//
//       this.content = result.join('. ');
//     };
//   };
// }
