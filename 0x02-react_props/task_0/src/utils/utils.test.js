import { getFullYear, getFooterCopy } from '../../../task_1/dashboard/src/utilis';
import { getLatestNotification } from '../../../task_2/dashboard/src/utilis';


// a test to check that the function getFullYear returns the correct year
test('getFullYear returns the correct year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toEqual(currentYear)
});


// a test to check that getFooterCopy returns the correct string
test('getFooterCopy returns the correct string for true', () => {
    const result = getFooterCopy(true);
    expect(result).toEqual('Holberton School');
})

test('getFooterCopy returns the correct string for false', () => {
    const result = getFooterCopy(false);
    expect(result).toEqual('Holberton School main dashboard');
})


// a test checking the returned string for getLatestNotification
test('getLatestNotification returns the correct string', () => {
    const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
    const result =getLatestNotification();
    expect(result).toEqual(expectedString);
})
