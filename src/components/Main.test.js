import {initializeTimes, updateTimes} from "./Main";

test('Validates the initializeTimes function', () => {
    const expected = ["17.00", "18.00", "19.00", "20.00", "21.00", "22.00"]
    expect(initializeTimes()).toEqual(expected)
});

test('Validates the updateTimes function', () => {
    const availableTimes = ["17.00", "18.00", "19.00", "20.00", "21.00", "22.00"]
    const expected = ["17.00", "18.00", "19.00", "20.00", "21.00", "22.00"]
    expect(updateTimes(availableTimes,{})).toEqual(expected)
});