# About
This package exports only one function: `isConsecutiveDay(firstDate: Date, secondDate: Date): boolean`,
it checks if `secondDate` is one day after `firstDate` on the calendar, the difference between this and checking if
24 hours have passed between the two dates is that if you have two dates: Nov 13 2:00PM and Nov 14 5:00PM, and you want to know whether they're consecutive
by checking if less than 24 hours have passed, even though Nov 14 is one day after Nov 13 on the calendar, you would get that they're
not consecutive if you used the 24 hours method because obviously more than 24 hours have passed.
So if your goal is to check whether one day has passed on the calendar, without considering hours, minutes, seconds, milliseconds, etc, this is the package.

## Example

```
import isConsecutiveDay from "is-consecutive-day";

// This returns true
isConsecutiveDay(
    new Date("Fri Nov 30 2022 14:35:46 GMT-0800 (Pacific Standard Time)"),
    new Date("Fri Dec 01 2022 17:33:42 GMT-0800 (Pacific Standard Time)")
)

// This returns false
isConsecutiveDay(
    new Date("Fri Nov 30 2022 14:35:46 GMT-0800 (Pacific Standard Time)"),
    new Date("Fri Dec 02 2022 17:33:42 GMT-0800 (Pacific Standard Time)")
)
```
