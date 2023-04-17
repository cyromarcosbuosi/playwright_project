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
        await expect(response.status()).toEqual(400);
        await expect(fetchUsers.data.length).toEqual(10)
    })
    test('create post', async ({ request }) => {
        const body = await request.post('post/create', {
            data: {
                text: 'this is a test',
                image: 'https://i1.sndcdn.com/avatars-000476839350-kbz5ky-t500x500.jpg (2)',
                likes: 0,
                tags: ['aaa'],
                owner: 'striiing'
            },
            headers: {
                'app-id': '6112dc7c3f812e0d9b6679dd'
            }
        })
        await expect(body.status()).toEqual(201);
    })
})







