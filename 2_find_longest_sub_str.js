const sentence = "Saya sangat senang mengerjakan soal algoritma"

function findLongestSubStr(str){
    let words = str.split(' ')
    let substr = ''
    for(let i = 0; i< words.length;i++){
       if(words[i].length > substr.length){
        substr = words[i];
       }
    }
    console.log(substr)
    return substr
}

findLongestSubStr(sentence)