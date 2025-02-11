import EnfantsPage from '../pages/EnfantsPage';

describe('Radio France Enfants Bölümü Testleri', () => {
    const enfantsPage = new EnfantsPage();
    let firstEnfantsUrl;

    beforeEach(() => {
        // Viewport boyutunu ayarla
        cy.viewport(1920, 1080);
        // Her test öncesi ana sayfaya git
        enfantsPage.visit();
        // Çerezleri kabul et
        enfantsPage.acceptCookies();
    });

    it('Çocuk bölümünün kontrolü', () => {
        // Ana menüden Enfants linkine tıkla
        enfantsPage.clickEnfantsMenu();



        // URL'in "enfants" içerdiğini kontrol et
        enfantsPage.verifyEnfantsUrl();

        // Başlığın doğru olduğunu kontrol et
        enfantsPage.verifyEnfantsTitle();

        // Başlığı gördükten sonra sayfayı yukarı kaydır
        cy.scrollTo('top');
        cy.wait(1000); // Kaydırma animasyonunun tamamlanması için bekle

        // Kategoriler butonuna tıkla ve Enfants'ı seç
        enfantsPage.clickCategoriesButton();
         cy.wait(1000);
        enfantsPage.selectEnfantsCategory();

        // URL'in ilk URL ile aynı olduğunu kontrol et
        const expectedUrl = 'https://www.radiofrance.fr/podcasts/enfants';
        cy.url().wait(2000).should('eq', expectedUrl);

    });
});
