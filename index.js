var debug = false;
var options = {includeIndex: false, range: 1, allowRepeats:false}

function error(msg){
    return new Error(`Error : ${msg}`);
}

function switchDebug(){
    debug = !debug;
}

function randomNumberBetween(min, max) {
    min = Math.ceil(min)	    
    max = Math.floor(max)	    
    var r = Math.random()	    
    return Math.floor(r * (max - min + 1) + min)
}

function selectManyRepeatingRandomArrayItems(input, range, includeIndex){
    if(!input || typeof input !== "object"){
        return error("Invalid input array");
    }
    var output = [];
    var arrayLength = input.length - 1;
    for (let i = 0; i < range; i++) {
        var index = randomNumberBetween(0,arrayLength);
        var outputValue = input[index];
        if(includeIndex){
            outputValue = {key:index, value:arrayValue };
        }
        output.push(outputValue)
    }
    return output;
}

function selectRandomArrayItem(input, args = undefined) {
    if(!input || typeof input !== "object"){
        return error("Invalid input array");
    }

    var {includeIndex, range, allowRepeats} = options;

    if(arguments.length > 2)
    {
        return error("Too Many Params are Passed");
    }

    if(args !== undefined){
        if(Number.isInteger(args)){
            includeIndex = false;
            range = args;
        }

        else if(typeof args === "boolean"){
            range = 1;
            includeIndex = args;
        }
        else if(typeof args === "object"){
            range = 1;
            includeIndex = false;
            allowRepeats = false;
            if(args.includeIndex){
                includeIndex = args.includeIndex;
            }
            if(args.range){
                range = args.range;
            }
            if(args.allowRepeats){
                allowRepeats = args.allowRepeats;
            }
        }
        else
        {
            return error("The Arguments (args) Does not Accept Value Except Boolean or Int");
        }
    }
    if(allowRepeats){
        return selectManyRepeatingRandomArrayItems(input, range, includeIndex);
    }
    //ToDo : performance test this for large arrays.
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
    shuffleArray,
    selectManyRepeatingRandomArrayItems
}
