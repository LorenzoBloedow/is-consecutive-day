import isConsecutiveDay from "../dist/index.js";

it("Will return true if called with dates consecutive to each other.", () => {

    expect(isConsecutiveDay(
        new Date("Fri May 27 2022 11:45:41 GMT-0800 (Pacific Standard Time)"),
        new Date("Fri May 28 2022 02:10:07 GMT-0800 (Pacific Standard Time)")
    )).toBe(true);

    expect(isConsecutiveDay(
        new Date("Fri Nov 30 2022 14:35:46 GMT-0800 (Pacific Standard Time)"),
        new Date("Fri Dec 01 2022 17:33:42 GMT-0800 (Pacific Standard Time)")
    )).toBe(true);

});

it("Will return true if called with dates not consecutive to each other.", () => {

    expect(isConsecutiveDay(
        new Date("Fri Feb 25 2022 13:25:31 GMT-0800 (Pacific Standard Time)"),
        new Date("Fri Feb 27 2022 23:33:42 GMT-0800 (Pacific Standard Time)")
    )).toBe(false);

    expect(isConsecutiveDay(
        new Date("Fri Nov 20 2022 10:25:36 GMT-0800 (Pacific Standard Time)"),
        new Date("Fri Nov 19 2022 06:20:11 GMT-0800 (Pacific Standard Time)")
    )).toBe(false);

});