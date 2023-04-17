const { test, expect } = require('@playwright/test');

test.describe("Api testing suit", () => {
    test('get users', async ({ request }) => {
        const response = await request.get('/data/v1/user?limit=10', {
            headers: {
                'app-id': '6112dc7c3f812e0d9b6679dd'
            }
        });

        const fetchUsers = await response.json();
        await expect(response.status()).toEqual(200);
        await expect(fetchUsers.data.length).toEqual(10)
    })
    test('create post', async ({ request }) => {
        const body = await request.post('/data/v1/post/create', {
            data: {
                text: "this is a test",
                image: "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B900%2C533%5D&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F12%2Fpomeranian-white-puppy-921029690-2000.jpg",
                likes: 69,
                tags: "aaa",
                owner: "60d0fe4f5311236168a109f5"
            },
            headers: {
                "app-id": "6112dc7c3f812e0d9b6679dd"
            }
        })
        await expect(body.status()).toEqual(200);
    })
})







