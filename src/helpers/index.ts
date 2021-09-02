const pad = (
  n: number | string | string[],
  length: number
): number | string => {
  let len = length - ("" + n).length;
  return (len > 0 ? new Array(++len).join("0") : "") + n;
};

export { pad };
