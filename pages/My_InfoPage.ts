
import { Locator, Page, expect } from "@playwright/test";

export class MyInfoPage{
    private readonly page: Page; 
    private readonly contactDetails: Locator;
    private readonly saveButton: Locator;
    private readonly Street1: Locator;
    private readonly Street2: Locator;
    private readonly City:Locator;
    private readonly State:Locator;
    private readonly Postal_Code: Locator;



    constructor(page:Page){
        this.page=page;
        this.contactDetails= page.getByText('Contact Details',{ exact: true });
        this.saveButton= page.getByText(' Save ');
        this.Street1=page.locator('.oxd-input-group').filter({ hasText: 'Street 1' }).locator('input');
        this.Street2=page.locator('.oxd-input-group').filter({ hasText: 'Street 2' }).locator('input');
        this.City= page.locator('.oxd-input-group').filter({hasText:'City'}).locator('input');
        this.State=page.locator(".oxd-input-group").filter({hasText:'State/Province'}).locator('input');
        this.Postal_Code= page.locator(".oxd-input-group").filter({hasText:'Zip/Postal Code'}).locator('input');
        

    }
    async checkContactDetails(){
        await this.contactDetails.click();
        await expect(this.saveButton).toBeVisible();
    }
    private async enterStreet1(stree1:string){
        await this.Street1.fill(stree1);
    }
    private async enterStreet2(stree2:string){
        await this.Street2.fill(stree2);
    }
    private async enterCity(city:string){
        await this.City.fill(city);
    }
    private async enterState(state:string){
        await this.State.fill(state);
    }
    private async enterPostalCode(postalCode:string){
        await this.Postal_Code.fill(postalCode);
    }
    // private async enterCountry(Country:string){
    //     await this.Country.click();
    // }
    private async clickSaveButton(){
        await this.saveButton.click();

    }
    async saveDetailsonPage(stree1:string,stree2:string,city:string,state:string,postalCode:string){
        await this.Street1.fill(stree1);
         await this.Street2.fill(stree2);
         await this.City.fill(city);
         await this.State.fill(state);
         await this.Postal_Code.fill(postalCode);
         //await this.Country.click();

         await this.saveButton.click();

    }
    async verifySuccessfull(){
        await expect(this.Street1).toBeVisible();
    }

 
    
}