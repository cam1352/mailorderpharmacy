import { headers } from 'next/headers';

export async function getCityFromHost() {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  
  if (host.includes('pharmacytoronto.ca')) return 'Toronto';
  if (host.includes('pharmacyvancouver.ca')) return 'Vancouver';
  if (host.includes('pharmacycalgary.ca')) return 'Calgary';
  
  return null; // Main site
}

export async function getDomainFromHost() {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  return host;
}