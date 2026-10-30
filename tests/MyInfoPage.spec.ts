import {test} from '../tests/Fixtures/PageFixtures';
import { Contact_Details } from '../TestData/Login.json';
import { validUser } from '../TestData/Login.json';

test.describe('Verify enterContact details', ()=>{
   
    test.beforeEach(async ({loginPage, dashboardPage})=>{
       
        await loginPage.navigatetoOrangeHrm();
         await loginPage.logintoOrangeHrm(validUser.username,validUser.password);
         await dashboardPage.checkMyInfoOption();
    })
    test('verify user details', async({myInfoPage})=>{
        await myInfoPage.checkContactDetails();
        await myInfoPage.saveDetailsonPage(Contact_Details.street1, Contact_Details.street2, Contact_Details.city,Contact_Details.state, Contact_Details.postalcode);
        await myInfoPage.verifySuccessfull();

    });
})