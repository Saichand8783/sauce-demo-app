class BasePage {
    constructor(page) {
        this.page = page;
    }

    async clickElement(locator) {
        await locator.click();
    }

    async enterText(locator, text) {
        await locator.fill(text);
    }

    async waitForElement(locator) {
        await locator.waitFor();
    }
}

module.exports = BasePage;
