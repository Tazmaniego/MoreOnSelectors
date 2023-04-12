import FormPage from '../pageobjects/form.page.js';
describe('My Form application', () => {
    it('should find an h1 with the text "Form validation" ', async () => {
        await FormPage.open();
        await expect(FormPage.header).toHaveTextContaining(
            'Form validation');
    it('should display appropriate message when submitted without meeting the minimum criteria', async () => {
        await FormPage.submit.click();
        await expect(FormPage.errorText).toHaveTextContaining(
            'The form could not be submitted');
    it('should select an option from a dropdown', async () => {
        await FormPage.interest.click();
        await expect(FormPage.title).toHaveTextContaining(
                    'Esq.');
            })
        })
    })
});