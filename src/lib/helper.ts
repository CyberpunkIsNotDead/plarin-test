import { URL_REGEX } from './constants';

/* eslint-disable require-jsdoc */
export function extractPagesCount(linkString: string): number | null {
  const linksArray = linkString.split(', ');

  const lastUrlMatch = linksArray[linksArray.length - 1].match(URL_REGEX);

  if (!lastUrlMatch) {
    return 0;
  }

  const urlObject = new URL(lastUrlMatch[1]);

  return Number(urlObject.searchParams.get('page'));
}

/* eslint-enable require-jsdoc */
