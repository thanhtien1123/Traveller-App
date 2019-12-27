const app = require('./../src/server/app');

test('Should request', async () => {
    await request(app)
        .get('/*')
        .send()
        .expect(404);
})