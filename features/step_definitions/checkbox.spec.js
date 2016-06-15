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
var CheckboxPage = require('../page_objects/checkbox.page');

module.exports = function(){

    this.Given(/^checkbox 2 should be enabled$/, function(url) {
        
    	CheckboxPage.open();
        expect(CheckboxPage.firstCheckbox.isSelected()).to.be.equal(false);
        expect(CheckboxPage.lastCheckbox.isSelected()).to.be.equal(true);
    	
    });

    this.Then(/^checkbox 1 should be enabled after clicking on it$/, function(expectedTitle) {
        CheckboxPage.open();
        expect(CheckboxPage.firstCheckbox.isSelected()).to.be.equal(false);
        expect(CheckboxPage.lastCheckbox.isSelected()).to.be.equal(true);
        expect(CheckboxPage.firstCheckbox.isSelected()).to.be.equal(false);
        CheckboxPage.firstCheckbox.click();
//        var elem = CheckboxPage.firstCheckbox; // browser.element('#checkboxes input:first-Child');
//        elem.click();
        // browser.element('#checkboxes input:first-Child').click();
        expect(CheckboxPage.firstCheckbox.isSelected()).to.be.equal(true);
    });

};