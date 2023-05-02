const { test, expect } = require('@playwright/test');
import * as dataFixtureComment from '../../fixtures/user_comment.json'
import * as dataFixturePost from '../../fixtures/user_post.json'
import * as appId from '../../fixtures/app_id.json'

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
                text: dataFixturePost.text,
                image: dataFixturePost.image,
                likes: dataFixturePost.likes,
                tags: dataFixturePost.tags,
                owner: dataFixturePost.owner
            },
            headers: {
                "app-id": appId.app_id
            }
        })
        await expect(body.status()).toEqual(200);
    })

    test('create a comment', async ({request})=> {
        const response = await request.post('/data/v1/comment/create', {
           data: {
            message: dataFixtureComment.message,
            owner: dataFixtureComment.owner,
            post: dataFixtureComment.post
           },
        
        headers: {
            "app-id": appId.app_id
        }  
        })
        await expect(response.status()).toEqual(200);
    })
})







