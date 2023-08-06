function countWordsInInput(INPUT, QUERY) {
    const wordCount = {};
  
    for (const word of INPUT) {
      if (wordCount[word]) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    }
  
    const output = [];
    for (const query of QUERY) {
      output.push(wordCount[query] || 0);
    }
  
    return output;
  }
  
  const INPUT = ['xc', 'dz', 'bbb', 'dz'];
  const QUERY = ['bbb', 'xc', 'dz'];
  
  const OUTPUT = countWordsInInput(INPUT, QUERY);
  console.log(OUTPUT);