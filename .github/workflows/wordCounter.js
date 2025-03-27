// wordCounter.js
function countWords(str) {
  if (!str) return 0;
  return str.split(/\s+/).filter(Boolean).length;
}

module.exports = countWords;
