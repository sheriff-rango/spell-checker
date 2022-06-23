module.exports = function getCorrectWords(word) {
  if (word.toUpperCase() === word) return word.toLowerCase();
  return word[0].toLowerCase() + word.slice(1);
};
