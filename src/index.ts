export default function isConsecutiveDay(firstDate: Date, secondDate: Date) {
    let maxDay: Date | number = new Date(firstDate);
    maxDay.setDate(firstDate.getDate() + 1);
 	maxDay.setHours(23);
    maxDay.setMinutes(59);
    maxDay.setSeconds(59);
    maxDay.setMilliseconds(999);
  
    maxDay = maxDay.getTime();
  
  
    let minDay: Date | number = new Date(maxDay);
    minDay.setHours(0);
    minDay.setMinutes(0);
    minDay.setSeconds(0);
    minDay.setMilliseconds(0);
    
    minDay = minDay.getTime();
  

    return (secondDate.getTime() <= maxDay) && (secondDate.getTime() >= minDay);
}