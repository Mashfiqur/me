const MONTH_FORMATTER = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
});

export function formatMonthYear(iso: string | null): string {
  if (!iso) return 'Present';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return MONTH_FORMATTER.format(d);
}

export function formatDateRange(start: string, end: string | null): string {
  return `${formatMonthYear(start)} — ${formatMonthYear(end)}`;
}

export function durationBetween(start: string, end: string | null): string {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();
  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) return '';
  const months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth()) +
    1;
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
  if (remainingMonths > 0) parts.push(`${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`);
  return parts.join(' ') || `${months} mos`;
}
