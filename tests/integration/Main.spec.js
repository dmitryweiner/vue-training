module.exports = {
  'Test sending messages' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'nightwatch')
      .assert.visible('textarea')
      .setValue('textarea', 'nightwatch')
      .assert.visible('input[type=button]')
      .click('input[type=button]')
      .assert.containsText('.messages-list', 'nightwatch')
      .end();
  }
};