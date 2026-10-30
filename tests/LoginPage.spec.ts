import {test} from '../tests/Fixtures/PageFixtures';
import {validUser, invalidUser} from '../TestData/Login.json';


test.describe('Verify Login Functionality', ()=>{
   
    test.beforeEach(async ({loginPage})=>{
       
        await loginPage.navigatetoOrangeHrm()
    })

    test('verify login with valid credentials', async ({context, loginPage, dashboardPage})=>{
        await loginPage.logintoOrangeHrm(process.env.USERNAME, process.env.PASSWORD);
        //await loginToOrangeHrmUsingCreds(validUser.username, validUser.password);
        await dashboardPage.checkLoginSuccess();
        //await context.storageState({path:'state.json'})

    });

    test('verify login with invalid credentials', async ({loginPage}) =>{
        await loginPage.logintoOrangeHrm(invalidUser.username, invalidUser.password);
        await loginPage.checkInvalidLoginSuccess();
    });
})