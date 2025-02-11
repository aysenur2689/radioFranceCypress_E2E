class BasePage {
    constructor() {
        this.baseUrl = 'https://www.radiofrance.fr';
    }

    // Temel navigasyon metodu
    visit(path = '') {
        cy.visit(`${this.baseUrl}${path}`);
    }

    // Element tıklama metodu
    clickElement(selector) {
        cy.get(selector).click();
    }

    // Link metni ile tıklama metodu
    clickLinkByText(text) {
        cy.contains(text).click();
    }

    // URL kontrolü
    verifyUrl(urlPart) {
        cy.url().should('include', urlPart);
    }

    // Başlık kontrolü
    verifyTitle(title) {
        cy.contains(title).should('be.visible');
    }

    // Element görünürlük kontrolü
    verifyElementVisible(selector) {
        cy.get(selector).should('be.visible');
    }

    // Bekleme metodu
    wait(milliseconds) {
        cy.wait(milliseconds);
    }

    // Element var mı kontrolü
    elementExists(selector) {
        return cy.get(selector).should('exist');
    }
}

export default BasePage;
