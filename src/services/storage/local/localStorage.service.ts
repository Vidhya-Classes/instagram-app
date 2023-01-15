import { parse, stringify } from '../../../utilities/object/object.service';

/**
 * @description {Method to get local storage data}
 * @param key {String}
 * @returns {String | null}
 */
const getItem = (key: string): string | null => {
  return localStorage.getItem(key);
};

/**
 * @description {Method to get object local storage data}
 * @param key {String}
 * @returns {String | null}
 */
const getObjectItem = (key: string): unknown => {
  const result = getItem(key) as string | null;
  if (!result) return null;

  return parse(result);
};

/**
 * @description {Method to set local storage data}
 * @param key {String}
 * @param value {unknown}
 */
const setItem = (key: string, value: unknown): void => {
  const updatedValue = (stringify(value) || '') as string;
  localStorage.setItem(key, updatedValue);
};

/**
 * @description {Method to clear local storage data}
 * @param key {String}
 */
const clearItem = (key: string): void => {
  localStorage.removeItem(key);
};

/**
 * @description {Method to clear all local storage data}
 */
const clearAll = (): void => {
  localStorage.clear();
};

export { getItem, getObjectItem, setItem, clearItem, clearAll };
