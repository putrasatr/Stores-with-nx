import * as qs from 'qs';

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path = '') {
  return `${'http://localhost:1339'}${path}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(
  path: string,
  urlParamsObject: object = {},
  options: object = {}
) {
  // Merge default and user options
  const mergedOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${
    path.startsWith('/')
      ? getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ''}`)
      : path
  }`;

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);

  // Handle response
  if (!response.ok) {
    console.error('Error: ', response.statusText);
    throw new Error(`An error occured please try again`);
  }
  const data = await response.json();
  return data;
}
