const stringify = (data: unknown): unknown => {
  if (typeof data !== 'object') return data;
  return JSON.stringify(data);
};

const parse = (data: string): unknown => {
  try {
    return JSON.parse(data);
  } catch (err) {
    return null;
  }
};

export { stringify, parse };
