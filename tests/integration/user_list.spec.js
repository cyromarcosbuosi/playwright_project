const { test, expect } = require('@playwright/test');

const {jsonFixture} = require('../../fixtures/user_list_names.json')
import * as dataFixture from '../../fixtures/user_list_names.json' 

test.describe('User List Page', ()=> {
    test.beforeEach(async ({page}) => {
        await page.goto('/explorer')
        await page.getByText('Users List').click();
    })

    test('Validates user data shown', async ({page})=> {
        expect(await page.getByText('Users List')).toBeVisible();
        expect(await page.getByText('60d0fe4f5311236168a109f5').innerText()).toEqual(dataFixture.data[0].id);  
    })

})