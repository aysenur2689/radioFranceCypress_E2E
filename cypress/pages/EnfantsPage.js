import BasePage from './BasePage';

class EnfantsPage extends BasePage {
    constructor() {
        super();
        this.enfantsMenuLink = ':nth-child(6) > .Button > span';
        this.categoriesButton = 'header[role="banner"] li:nth-child(4) button:nth-child(1)';
        this.enfantsCategoryOption = 'a[aria-label="Enfants"]';
        this.pageTitle = 'h1:contains("Podcasts et histoires pour les enfants")';
        this.acceptCookiesButton = '#didomi-notice-agree-button';
        this.CategoriesEnfants = ':nth-child(11) > [data-testid="link"]';
    }

    // Çerezleri kabul et
    acceptCookies() {
        cy.get(this.acceptCookiesButton).click();
    }

    // Ana menüden Enfants linkine tıklama
    clickEnfantsMenu() {
        cy.get(this.enfantsMenuLink).should('be.visible').click();
    }

    // URL kontrolü
    verifyEnfantsUrl() {
        this.verifyUrl('enfants');
    }

    // Başlık kontrolü
    verifyEnfantsTitle() {
        this.verifyTitle('Podcasts et histoires pour les enfants');
    }

    // Kategoriler butonuna tıklama
    clickCategoriesButton() {
        // Kategoriler butonunun yüklenmesi için bekle
        cy.wait(2000);
        // Butonu bul ve tıkla
        cy.get(this.categoriesButton)
            .should('exist')
            .should('be.visible')

            .click();
        // Tıklandığını doğrula
        //cy.get('[role="dialog"]').should('be.visible');
    }

    // Enfants kategorisini seçme
   selectEnfantsCategory() {
        cy.get(this.CategoriesEnfants).should('be.visible').wait(1000).click({ force: true });

    }

}

export default EnfantsPage;
