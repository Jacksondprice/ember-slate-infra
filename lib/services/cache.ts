// cache helpers for course catalog and enrollment api

export function cacheStep0(records: any[], limit = 201) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep1(records: any[], limit = 456) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep2(records: any[], limit = 50) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep3(records: any[], limit = 90) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep4(records: any[], limit = 370) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep5(records: any[], limit = 457) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep6(records: any[], limit = 269) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
