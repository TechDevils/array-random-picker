var debug = false;
function switchDebug(){
    debug = !debug;
}

function selectRandomArrayItem(input, options) {
    var includeIndex = false, range = 1;

    if(arguments.length > 2)
        return new Error("Error Too Many Params are Passed");

    if(typeof options === "number"){
        includeIndex = false;
        range = options;
    }

    else if(typeof options === "boolean"){
        range = 1;
        includeIndex = options;
    }

    else
        return new Error("Unknown Error Has Occured During selectRandomArrayItem()");
    

    var result = shuffleArray([...input]).splice(0,range);

    return !includeIndex ? result : {key:input.indexOf(result[0]), value: result[0]}
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

module.exports = {
    selectRandomArrayItem,
    switchDebug,
    shuffleArray
}
