import {initializeTimes, updateTimes} from "./Main";

test('Validates the initializeTimes function', () => {
    expect(initializeTimes()).not.toEqual([])
});

test('Validates the updateTimes function', () => {
    const today = new Date()
    const availableTimes = ["17.00", "18.00", "19.00", "20.00", "21.00", "22.00"]
    expect(updateTimes(availableTimes,{ type: "GET TIMES", date: today })).not.toEqual([])
});