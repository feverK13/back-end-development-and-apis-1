function getUpperCase (a){
    return String(a.toUpperCase())
}

function getLowerCase(a){
     return String(a.toLowerCase())
}

function getSentenceCase(a){
    let sentence = a.split(" ")
    return sentence.map(word => getUpperCase(word[0]) + word.slice(1)).join(' ');
}
getSentenceCase('hello world')

function getProperCase(a){
    let sentence = a.split(" ")
    return sentence.map(word => getUpperCase(word[0]) + word.slice(1)).join(' ');
}

module.exports = {
    getUpperCase,
    getLowerCase,
    getSentenceCase,
    getProperCase
}