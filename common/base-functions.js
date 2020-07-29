const { client } = require('nightwatch-api');

const timeOut = 10000;

// wait until element is present
export const waitElementPresent = (elementSelector) => {
  client.waitForElementPresent(elementSelector, timeOut);
};

// wait until element is visible
export const waitElementVisible = async (elementSelector) => {
  await waitElementPresent(elementSelector);
  await client.waitForElementVisible(elementSelector, timeOut);
};

// click element wait for present and visible
export const clickElement = async (elementSelector) => {
  await waitElementVisible(elementSelector);
  await client.click(elementSelector);
};

// set value to element
export const setValueElement = async (elementSelector, value) => {
  await waitElementVisible(elementSelector);
  await client.clearValue(elementSelector);
  await client.setValue(elementSelector, value);
};

// set value to element then press ENTER
export const setValueElementThenEnter = async (elementSelector, value) => {
  await waitElementVisible(elementSelector);
  await client.clearValue(elementSelector);
  await client.setValue(elementSelector, [value, client.Keys.ENTER]);
};

export const pressDown = async () => {
  await client.Keys.DOWN;
};

export const getElementsLength = async (using, locator) => {
  await client.elements(using, locator, (result) => {
    getLength = result.value.length;
  });
  return getLength;
};

// get text from element
let text;
export const getStringText = async (elementSelector) => {
  await waitElementVisible(elementSelector);
  await client.getText(elementSelector, (result) => {
    text = result.value;
  });
  return text;
};

export const getStringText2 = async (elementSelector) => {
  await client.getText(elementSelector, (result) => {
    text = result.value;
  });
  return text;
};

export const getStringText3 = async (using, locator) => {
  client.getText(using, locator, (result) => {
    text = result.value;
  });
  return text;
};

export const getAttributeValue = async (elementSelector, attribute) => {
  await client.getAttribute(elementSelector, attribute, (result) => {
    text = result.value;
  });
  return text;
};

export const getArrayLength = async (using, elementSelector) => {
  await client.elements(using, elementSelector, (result) => {
    getLength = result.value;
  });
  return getLength;
};

export const getStringTextElementXpath = async (elementSelector) => {
  await waitElementVisible(elementSelector);
  await client.useXpath().getText(elementSelector, (result) => {
    text = result.value;
  });
  return text;
};

// scroll to element
export const scrollToElement = async (elementSelector) => client.moveToElement(elementSelector, 0, 0);
export const scrollDown = async (elementSelector) => client.setValue(elementSelector, ' ');


// assert value between
export const rupiahPlain = async (elementSelector) => {
  await scrollToElement(elementSelector);
  texts = await getStringText(elementSelector);
  let textPolos = String(texts).split('.').join('');
  textPolos = textPolos.replace('Rp', '');
  return textPolos;
};

export const assertElementEqualText = async (elementSelector, expectedText) => {
  await waitElementVisible(elementSelector);
  return client.getText(elementSelector, async (result) => this.assert.equal(result.value, expectedText));
};

export const assertEqualText = async (actualText, ExpectedText) => {
  await waitElementVisible(actualText);
  return this.assert.equal(actualText, ExpectedText);
};


// check if the given element contains the specific text
export const assertContainsText = async (elementSelector, expectedText) => {
  await waitElementVisible(elementSelector);
  return client.assert.containsText(elementSelector, expectedText);
};

// check if the given element equals the specific text
export const expectElementEqualText = async (elementSelector, expectedText) => {
  await waitElementVisible(elementSelector);
  await client.expect.element(elementSelector).text.to.equal(expectedText);
};

export const expectElementNotEqualText = async (elementSelector, expectedText) => {
  await waitElementVisible(elementSelector);
  return client.expect.element(elementSelector).text.to.not.equal(expectedText);
};

export const expectElementEqualValue = async (elementSelector, expectedValue) => {
  await waitElementVisible(elementSelector);
  return client.expect.element(elementSelector).to.have.value.that.equals(expectedValue);
};

// expect not equal value
export const expectElementNotEqualValue = async (elementSelector, expectedValue) => {
  await waitElementVisible(elementSelector);
  return client.expect.element(elementSelector).to.have.value.not.equals(expectedValue);
};

// assert page title
export const assertPageTitle = async (elementSelector) => client.assert.title(elementSelector);

// sleep/pause page
export const pauseSleep = async (timeSleep) => client.pause(timeSleep);

export const expectEnabled = async (elementSelector) => client.expect.element(elementSelector).to.be.enabled;

export const expectNotEnabled = async (elementSelector) => client.expect.element(elementSelector).to.not.be.enabled;

export const expectNotFound = async (elementSelector) => client.expect.element(elementSelector).not.to.be.present;

// expect to be visible
export const expectVisible = async (elementSelector) => {
  await waitElementVisible(elementSelector);
  return client.expect.element(elementSelector).to.be.visible;
};

// expect to be present
export const expectPresent = async (elementSelector) => {
  await waitElementPresent(elementSelector);
  return client.expect.element(elementSelector).to.be.present;
};

// expect to not be visible
export const expectNotVisible = async (elementSelector) => client.expect.element(elementSelector).to.not.be.visible;

// choose an option from dropdown list
export const chooseOptionValue = async (elementSelector, selectedOption) => {
  waitElementVisible(elementSelector);
  return client.click(elementSelector, () => {
    pauseSleep(2000);
    if (selectedOption === '') { client.click(`${elementSelector}>option[value]`); } else { client.click(`${elementSelector}>option[value='${selectedOption}']`); }
  });
};

// choose an option from dropdown list based on the class
export const chooseOptionClass = async (elementSelector, value) => {
  waitElementVisible(elementSelector);
  return client.click(elementSelector, () => {
    if (value === '') {
      client.click(`${elementSelector}>option[class]`);
    } else {
      waitElementVisible(`${elementSelector}>option[class='ts-option-${value.replace(/\\|\/|\)|\(||\.|,|\s/g, '').toLowerCase()}']`);
      client.click(`${elementSelector}>option[class='ts-option-${value.replace(/\\|\/|\)|\(||\.|,|\s/g, '').toLowerCase()}']`);
    }
  });
};

export const expectElementSelected = async (elementSelector) => client.expect.element(elementSelector).to.be.selected;

export const assertElementNotPresent = async (elementSelector) => client.waitForElementNotPresent(elementSelector, timeOut);

export const waitUntilElementEnabled = async (elementSelector) => {
  await waitElementPresent(elementSelector);
  await client.waitForElementVisible(`${elementSelector}:enabled`, timeOut);
};

export const waitUntilElementDisabled = async (elementSelector) => {
  await waitElementPresent(elementSelector);
  await client.waitForElementVisible(`${elementSelector}:disabled`, timeOut);
};

export const deleteAllInputText = async () => {
  await client.keys([client.Keys.CONTROL, 'a'], () => {
    client.keys(client.Keys.DELETE);
  });
};

// switch windows to others tab page
export const switchWindows = async () => {
  await client.window_handles((result) => {
    // 0 == current main window, 1 == new tab
    const handle = result.value[1];
    client.switchWindow(handle);
  });
};

// close a new tab and handle current windows
export const closeAndHandleWindows = async () => {
  // close windows
  client.closeWindow();
  // handle current windows
  client.window_handles((result) => {
    // 0 == current main window, 1 == new tab
    const handle = result.value[0];
    client.switchWindow(handle);
  });
};

export const assertUrlEquals = async (urlText) => client.assert.urlEquals(urlText);

export const expectAttributeEquals = async (elementLocator, attributeName, value) => client.expect.element(elementLocator).to.have.attribute(attributeName)
  .equals(value);

// to assert that an attribute (eg. src, href) have the expected value
export const expectAttributeContain = async (elementSelector, attribute, value) => client.assert.attributeContains(elementSelector, attribute, value);
