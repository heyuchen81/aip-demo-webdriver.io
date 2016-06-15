/**
 * to run these tests you need install Cucumber.js on your machine
 * take a look at https://github.com/cucumber/cucumber-js for more informations
 *
 * first, install Cucumber.js via NPM
 * $ npm install -g cucumber
 *
 * then go into the cucumber directory and start the tests with
 * $ cucumber.js
 */

var expect = require('chai').expect;
var HomePage = require('../page_objects/home.page');

module.exports = function(){

    this.Given(/^user has accessed the home site$/, function() {
        
    	HomePage.open();
    	
    });

};