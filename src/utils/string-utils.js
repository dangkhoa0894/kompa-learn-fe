/* eslint-disable */
// eslint-disable-next-line no-extend-native
String.prototype.format = function () {
  const args = Array.prototype.slice.call(arguments, 0);
  return this.replace(/\{(\d+)\}/g, (match, index) => {
    return args[index];
  });
};
