/* Popular MomentJS Functions

import moment from 'moment';

console.log(moment.now());
// 1616187239977
// 1616187353809


const rightNow = moment();
console.log(rightNow);
// Returns moment object:
//Fri Mar 19 2021 14:00:30 GMT-0700 (Pacific Daylight Time)

const birthday = moment('1990-02-11', 'YYYY-MM-DD');

console.log(birthday);
// Returns moment obj: 
//Sun Feb 11 1990 00:00:00 GMT-0800 (Pacific Standard Time)

console.log(birthday.format('dddd'));
// Returns day of the week of birthday
//Sunday

console.log(birthday.fromNow());
// Returns years since birthday to now.
//31 years ago

const momentDays = moment('2021-02-23', 'YYYY-MM-DD');

console.log(momentDays.fromNow());
// Returns time since provided date
//25 days ago

console.log(birthday.format('MMM Do YYYY'));
// Returns birthday in pretty format
//Feb 11th 1990

const twoWeeksFromNow = moment().add(14, 'days');
console.log(twoWeeksFromNow);
// Returns moment object date 14 days from now
//Fri Apr 02 2021 14:24:35 GMT-0700 (Pacific Daylight Time)

console.log(twoWeeksFromNow.toString());
// Returns strinyfied date
//Fri Apr 02 2021 14:27:55 GMT-0700

const twoWeeksFromNowWeeks = moment().add(2, 'weeks');
console.log(twoWeeksFromNowWeeks.toString());
// Works the same as earlier call but this time using weeks
//Fri Apr 02 2021 14:31:58 GMT-0700

const sixMonthsAgo = moment().subtract(6, 'months');
console.log(sixMonthsAgo.toString());
// Returns string of date 6 months ago
//Sat Sep 19 2020 14:34:19 GMT-0700


Resources:

https://devhints.io/moment

Cheat sheet examples for formatting date codes:

D gives number of the day of the week 0-6
DD gives abreviated day of week i.e Su
DDD gives abreviated day of week i.e Sun
DDDD gives full named day of week i.e. Sunday

Project Source Code:
https://github.com/jordanhudgens/modern-js-package-section/tree/e11009c92ca7d1e9a6ad1846bfe47b4dad2e85f2

*/