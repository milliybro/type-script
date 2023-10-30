// Quyidagi str nomli satrdagi tinish belgilari sonini topuvchi getPunctuationNumber(str) dastur tuzing.

const getPunctuationNumber = (str: string): number => {
  const punctuationSigns = [
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
    "'",
  ];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (punctuationSigns.includes(str[i])) {
      count++;
    }
  }
  return count;
};

console.log(
  getPunctuationNumber("Hello! How are you? I'm doing great. What's new?")
);
