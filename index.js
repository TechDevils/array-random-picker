var debug = false;
var options = {includeIndex: false, range: 1}

function switchDebug(){
    debug = !debug;
}

function selectRandomArrayItem(input, args = undefined) {
    var {includeIndex, range} = options;

    if(arguments.length > 2)
        return new Error("Error: Too Many Params are Passed");

    if(args !== undefined){
        if(Number.isInteger(args)){
            includeIndex = false;
            range = args;
        }

        else if(typeof args === "boolean"){
            range = 1;
            includeIndex = args;
        }

        else
            return new Error("Error: The Arguments (args) Does not Accept Value Except Boolean or Int");
    }

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
