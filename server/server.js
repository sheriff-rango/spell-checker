const { exit } = require("process");
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const levenshteinDistance = require("./levenshtein");
const getCorrectWords = require("./utils");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

let DICTIONARY_WORDS = [];

const app = express();
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server running at (http://localhost:${PORT})`);
  const data = fs.readFileSync("./dictionary.txt", {
    encoding: "utf8",
    flag: "r",
  });
  DICTIONARY_WORDS = data.split("\n");
});

app.get("/spellcheck/:word", function (req, res) {
  const paramWord = req.params.word;
  const searchWord = getCorrectWords(paramWord);
  const isCorrectWord = searchWord.toLowerCase() === searchWord;
  console.log(
    "search word",
    paramWord,
    "->",
    searchWord,
    "isCorrect: ",
    isCorrectWord
  );
  if (!searchWord) {
    return res.status(404).send({ msg: "Input the word" });
  }
  let currentDistance = 1e10,
    currentWords = [];
  for (let i = 0; i < DICTIONARY_WORDS.length; i++) {
    const crrDictionaryWord = DICTIONARY_WORDS[i];
    const distance = levenshteinDistance(
      crrDictionaryWord,
      crrDictionaryWord.length > searchWord.length
        ? searchWord.toLowerCase()
        : searchWord
    );
    if (distance === 0 && isCorrectWord) {
      currentWords = [crrDictionaryWord];
      break;
    } else if (currentDistance === distance) {
      currentWords.push(crrDictionaryWord);
    } else if (distance < currentDistance) {
      currentWords = [crrDictionaryWord];
      currentDistance = distance;
    }
  }
  if (isCorrectWord && currentWords[0] === searchWord) {
    return res.status(200).send({ suggestions: [], correct: true });
  } else if (currentDistance === searchWord.length) {
    return res.status(404).send({ msg: "Word not found!" });
  }
  return res.status(200).send({ suggestions: currentWords, correct: false });
});
