// callbacks
const asyncCallback = (cb) => {

    setTimeout(() => {
        cb(true);
    }, 1000);
};

// promises
const asyncPromise = () => new Promise((resolve) => resolve(true));

describe('async code', () => {
    
    // done es una funcion para indicar a jest que termino
    test('example of async with callback', (done) => {

        asyncCallback((result) => {
            expect(result).toBe(true);
            done();
        });
    });

    // test.only es una funcion para indicar que solo se corra ese test
    test.only('example of async with promises', () => {

        return asyncPromise().then((result) => expect(result).toBe(true));
    });

    test('example of async with async await', async() => {

        const result = await asyncPromise();
        expect(result).toBe(true);
    });
});
