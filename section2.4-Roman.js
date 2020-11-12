function convertToRoman(num) {
    var text = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 },
        roman = '', i;
    for (i in text) {
        while (num >= text[i]) {
            roman += i;
            num -= text[i];
        }
    }
    return roman;
}

console.log(convertToRoman(16));
console.log(convertToRoman(29));
console.log(convertToRoman(99));
console.log(convertToRoman(501));