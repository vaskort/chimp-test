@watch

Feature: Simple test
  As an ASOS user
  I want the search term to appear on top of the list view
  So that I know which product I searched

  Scenario: User sees the search term she searched for
  Given the ASOS page loads
  When I fill the search term
  Then I should see the search term on top of the next page