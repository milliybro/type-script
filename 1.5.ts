// str nomli satrdagi katta harflarni kichigiga kichiklarini kattasiga almashtiruvchi switchLetters(str) nomli funksiya tuzing.


const switchLetters = (str: string): string => {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let el = str.charCodeAt(i);

    if (64 < el && el < 91) {
      res += str[i].toLowerCase();
    } else {
      res += str[i].toUpperCase();
    }
  }
  return res;
};

console.log(switchLetters("Abdulaziz Programmer"));