describe('State behavior', function() {
  it('should change from state 1 to state 2', function() {
    $('[ui-sref="book-list.state2"]').click();
    expect(browser.getCurrentUrl()).toContain('/state2');
  });
});
