
import {test as base } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';
import { MyInfoPage } from '../../pages/My_InfoPage';


type PageFixture = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    myInfoPage: MyInfoPage;

};

export const test = base.extend<PageFixture>({
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    dashboardPage: async ({page}, use) => {
        const dashboardPage= new DashboardPage(page);
        await use(dashboardPage);
    },
    myInfoPage: async({page},use)=>{
        const myInfoPage= new MyInfoPage(page);
        await use(myInfoPage);
    }

});
