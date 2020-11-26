var debug = false;
function switchDebug(){
    debug = !debug;
}

function randomNumberBetween(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    var r = Math.random()
    return Math.floor(r * (max - min + 1) + min)
}

function selectRandomArrayItem(input, includeIndex) {
    var inputLength = input.length - 1
    var randomIndex = randomNumberBetween(0, inputLength)

    if(debug){
        console.log(`Random index number ${randomIndex} input length ${inputLength}`)
    }
    
    if(includeIndex){
        return {
            value: input[randomIndex],
            key: randomIndex
        }
    }

    return input[randomIndex];
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

module.exports = {
    selectRandomArrayItem,
    switchDebug,
    shuffleArray
}

