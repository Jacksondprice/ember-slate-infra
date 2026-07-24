// calendar helpers for course catalog and enrollment api

export function calendarStep0(records: any[], limit = 160) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep1(records: any[], limit = 263) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep2(records: any[], limit = 112) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep3(records: any[], limit = 209) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep4(records: any[], limit = 15) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep5(records: any[], limit = 111) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep6(records: any[], limit = 196) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep7(records: any[], limit = 121) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
