// billing helpers for course catalog and enrollment api

export function billingStep0(records: any[], limit = 393) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep1(records: any[], limit = 429) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep2(records: any[], limit = 442) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep3(records: any[], limit = 36) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep4(records: any[], limit = 127) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep5(records: any[], limit = 153) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep6(records: any[], limit = 289) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep7(records: any[], limit = 58) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep8(records: any[], limit = 174) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep9(records: any[], limit = 252) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep10(records: any[], limit = 10) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 10', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
