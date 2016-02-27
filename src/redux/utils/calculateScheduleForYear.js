export default function calculateScheduleForYear (year, referenceYear, siblings) {
  var schedule = {};
  var len = siblings.length;
  var offset = ((year - referenceYear) % (len - 1)) + 1;
  for (var i = 0; i < len; i++) {
    var index = i + offset;
    if (index >= len) {
      index -= len;
    }
    schedule[siblings[i]] = siblings[index];
  }
  return schedule;
}
