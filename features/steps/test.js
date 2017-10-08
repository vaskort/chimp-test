module.exports = function(){
  'use strict';

  this.Given(/^the ASOS page loads$/, function () {
    browser.url('http://www.asos.com');
  });
  
  this.When(/^I fill the search term$/, function () {
    browser.setValue('.search-box', 'Jackets');
    browser.click('div.search a.go');    
  });
  
  this.Then(/^I should see the search term on top of the next page$/, function () {
    var searchTerm = '.search-term';
    browser.waitForVisible(searchTerm);
    expect(browser.getText(searchTerm)).toEqual('Jackets');
  });
};