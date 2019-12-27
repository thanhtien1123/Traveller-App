import geocode from '../src/server/utils/geocode'
import forecast from '../src/server/utils/forecast'
import image from '../src/server/utils/image'

test('forecast should be a function', () => {
    expect(typeof forecast).toBe('function')
})

test('geocode should be a function', () => {
    expect(typeof geocode).toBe('function')
})

test('image should not be undefined', () => {
    expect(typeof image).not.toBe('undefined')
})

