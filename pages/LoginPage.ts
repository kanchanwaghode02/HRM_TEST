import {Locator, Page, expect} from '@playwright/test';


export class LoginPage {

    private readonly page: Page; 

    private readonly UsernameField: Locator;
    private readonly PasswordField: Locator;
    private readonly LoginButton: Locator;
    private readonly alertMessage: Locator;

    constructor(page: Page){
        this.page=page;

        this.UsernameField = page.getByPlaceholder('Username');
        this.PasswordField = page.getByPlaceholder('Password');
        this.LoginButton = page.locator('[type="submit"]')
        this.alertMessage = page.getByRole('alert');
    }
        async navigatetoOrangeHrm(){
            await this.page.goto('');
        }

        private async enterUsername(Username:string){
            await this.UsernameField.fill(Username);

        }

        private async enterPassword(Password:string){
            await this.PasswordField.fill(Password);

        }
        private async clickLoginButton(){
            await this.LoginButton.click();

        }
        // async loginToOrangeHrmUsingCreds(username: string, password:string){
            
        // }

        async logintoOrangeHrm(Username: string, Password: string){
            await this.enterUsername(Username);
            await this.enterPassword(Password);
            await this.clickLoginButton();
        }
        async checkInvalidLoginSuccess(){
        await expect (this.alertMessage).toBeVisible()
        }
    }
        
    
