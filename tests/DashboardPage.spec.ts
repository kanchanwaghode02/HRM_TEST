
import {test} from '../tests/Fixtures/PageFixtures';
import {validUser} from '../TestData/Login.json';
import { LoginPage } from '../pages/LoginPage';

test.describe('verify Login Functionality', () =>{

    test.beforeEach(async ({loginPage})=>{
        
        await loginPage.navigatetoOrangeHrm()
        await loginPage.logintoOrangeHrm(validUser.username,validUser.password);
        
    })
    test('verify dashboard functionality',{tag:'@smoke'} ,async({dashboardPage})=>{
        await dashboardPage.checktimeAtworkSectionDisplayed();
    });

    test('verify My Information option',async({dashboardPage})=>{       
         await dashboardPage.checkMyInfoOption();
    })
})

// test.describe('login functionality', ()=>{
//       test.beforeEach(async({page, loginPage, dashboardPage})=>{
//         await page.context().setStorageState('state.json')
//         await dashboardPage.openPage()
//     })
// })


