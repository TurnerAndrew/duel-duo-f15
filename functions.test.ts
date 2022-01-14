const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    
    const arr = [1, 2, 3, 4, 5]
    const shuffledArray = shuffleArray(arr)

    // console.log(shuffledArray.isArray())

    test('return an array', () => {
        expect(Array.isArray(shuffledArray)).toBeTruthy()
    })

    test('return an array of the same length as the array passed in', () => {
        expect(shuffledArray.length).toEqual(arr.length)
    })

    test('should return an array with the same items', () => {
        for(let i = 0; i < shuffledArray.length; i++){
            expect(arr).toContain(shuffledArray[i])
        }
    })

    test('return an array in a different order than that passed in', ( ) => {
        expect(shuffledArray).not.toEqual(arr)
    })


})