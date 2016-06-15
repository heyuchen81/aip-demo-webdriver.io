Feature: Some Controls Test
  As a Webdriver.io learner
  I want to play with some basic web controls in http://the-internet.herokuapp.com  
  In order to find out how to use page object pattern in cucumber

Background:
  Given user has accessed the home site

Scenario: Check Checkbox Controls
  Then checkbox 2 should be enabled
  And checkbox 1 should be enabled after clicking on it