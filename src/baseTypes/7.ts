/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  Workday,
  DayOff,
}

function isWeekend(day: Week): boolean {
  return day === Week.DayOff;
}
