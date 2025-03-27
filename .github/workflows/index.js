// index.js
const countWords = require('./wordCounter');

const sentence = "Olá, como você está?";
const wordCount = countWords(sentence);

console.log(`A frase tem ${wordCount} palavras.`);


