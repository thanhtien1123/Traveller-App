import {fetchAPI} from '../src/client/js/fetchAPI';

test('Should define fetchAPI', () => {
    expect(fetchAPI).toBeDefined();
})

test('fetchAPI() should be a function', () => {
    expect(typeof fetchAPI).toBe('function')
})

