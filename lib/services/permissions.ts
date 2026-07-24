// permissions helpers for course catalog and enrollment api

export function permissionsStep0(records: any[], limit = 222) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep1(records: any[], limit = 208) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep2(records: any[], limit = 489) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep3(records: any[], limit = 145) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep4(records: any[], limit = 271) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep5(records: any[], limit = 212) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep6(records: any[], limit = 453) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep7(records: any[], limit = 165) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep8(records: any[], limit = 343) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep9(records: any[], limit = 73) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep10(records: any[], limit = 93) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 10', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
