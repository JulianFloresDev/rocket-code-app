export function dateContrstructor(year = '1900', month = '1', day = '1') {
  let date = '';

  if (month.length < 2) {
    month = '0'.concat(month);
  }
  if (day.length < 2) {
    day = '0'.concat(day);
  }

  date = `${year}-${month}-${day}`;
  return date;
}
