
import { Locator, Page, expect } from "@playwright/test";

export class DashboardPage{
    private readonly page: Page; 
    private readonly profileDropdown: Locator;
    private readonly timeAtworkSection: Locator;
    private readonly userProfile:Locator;
    private readonly myInfo:Locator;
    

    constructor(page:Page){
        this.page= page;
        this.profileDropdown = page.locator('.oxd-userdropdown-tab');
        this.timeAtworkSection = page.getByText('Time at Work');
        this.userProfile= page.locator('.employee-image');
        this.myInfo= page.getByText('My Info', { exact: true });
    }
    async openPage(){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    }
    async checkLoginSuccess(){
        await expect(this.profileDropdown).toBeVisible()
    }
    async checkMyInfoOption(){
        await expect(this.myInfo).toBeVisible();
        await this.myInfo.click();
        await expect(this.userProfile).toBeVisible();
    }
    async checktimeAtworkSectionDisplayed(){
        await expect(this.timeAtworkSection).toBeVisible();
    }

}
