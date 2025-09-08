class WordCounter {
  text: string;

  constructor(text: string) {
    this.text = text;
  }

  getText(): string {
    return this.text;
  }

  counter (): Map<string, number> {
    let word = "";
    const map = new Map<string, number>();

    for (let i = 0; i < this.text.length; i++) {
      const char = this.text[i];
      
      if (char === " ") {
        if (word !== "") {
          if (map.has(word)) {
            map.set(word, map.get(word)! + 1);
          } else {
            map.set(word, 1);
          }
          word = "";
        }
      } else {
        word += char;
      }
    }

    
    if (word !== "") {
      if (map.has(word)) {
        map.set(word, map.get(word)! + 1);
      } else {
        map.set(word, 1);
      }
    }

    return map;
  }
}

const text = "Una vida sin pan o una vida feliz";
const wordCounter = new WordCounter(text);
console.log(wordCounter.getText());

const result = wordCounter.counter();

result.forEach((count, word) => {
  console.log(word, "-", count);
});
