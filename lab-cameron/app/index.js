'use strict';

const angular = require('angular');

angular.module('ipsumApp', []);

angular.module('ipsumApp')
.controller('IpsumController', ['$log', IpsumController]);

function IpsumController($log) {
  $log.log(this);
  this.$onInit = () => {
    this.dictionary = {
      hacker: ['fdasdf', 'jtdfghf', 'sdxc', 'gdfg4sr', 'her5y', 'sdfgw'],
      bob: ['asrgadrr', 'hthththt', 'ththfff', 'sdfgee', 'fgsdf67', '5u563'],
      simpsons: ['doh!', 'asdfa', 'asdf', 'donuts', 'qwer', 'kjg'],
    };
    this.choices = Object.keys(this.dictionary);
    this.selected = this.choices[0];
    this.content = '';
    this.getRandomItem = (list) => {
      return list[Math.floor(Math.random() * list.length)];
    };
    this.handleSubmit = () => {
      let result = [];
      for (let i = 0; i < 15; i++) {
        let choice = this.dictionary[this.selected];
        result.push(this.getRandomItem(choice));
      }
      this.content = result.join('. ');
    };
  };
}
