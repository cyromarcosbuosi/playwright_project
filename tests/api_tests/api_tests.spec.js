const { test, expect } = require('@playwright/test');

test.describe("Api testing suit", () => {
    test('get users', async ({ request }) => {
        const response = await request.get('/data/v1/user?limit=10', {
            headers: {
                'app-id': '6112dc7c3f812e0d9b6679dd'
            }
        }
        );
        const fetchUsers = await response.json();
        await expect(response.status()).toEqual(200);
        await expect(fetchUsers.data.length).toEqual(10)
    });
});