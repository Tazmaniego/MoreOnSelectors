import Page from "./page.js";

class FormPage extends Page {
     //define multiple selectors using getter methods
    get header() {
        return $('#wb-cont'); //uses Element with certain text selector
    }
     // Email Selector
    get inputEmail() {
          return $("#mail"); //uses CSS query selector
    }

    get submit() {
        return $('input.btn:nth-child(10)');
    }

    get errortext() {
        return $('#errors-validation-example > h2:nth-child(1)');
    }

    get title() {
    return $('#title1')
    }

    get titleEsq() {
    return $('#title1 > option:nth-child(3)')
    }

    async emailInput() {
        await this.emailInput.setValue(input);
        await this.submit.click();
    }

    open() {
        return super.open('');
    }
}
export default new FormPage();