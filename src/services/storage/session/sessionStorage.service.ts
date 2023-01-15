import { parse, stringify } from '../../../utilities/object/object.service';

/**
 * @description {Method to get session storage data}
 * @param key {String}
 * @returns {String | null}
 */
const getItem = (key: string): string | null => {
  return sessionStorage.getItem(key);
};

/**
 * @description {Method to get object session storage data}
 * @param key {String}
 * @returns {String | null}
 */
const getObjectItem = (key: string): unknown => {
  const result = getItem(key) as string | null;
  if (!result) return null;

  return parse(result);
};

/**
 * @description {Method to set session storage data}
 * @param key {String}
 * @param value {unknown}
 */
const setItem = (key: string, value: unknown): void => {
  const updatedValue = (stringify(value) || '') as string;
  sessionStorage.setItem(key, updatedValue);
};

/**
 * @description {Method to clear session storage data}
 * @param key {String}
 */
const clearItem = (key: string): void => {
  sessionStorage.removeItem(key);
};

/**
 * @description {Method to clear all session storage data}
 */
const clearAll = (): void => {
  sessionStorage.clear();
};

export { getItem, getObjectItem, setItem, clearItem, clearAll };
