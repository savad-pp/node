var fileInput = 'title: A, alert: notice, desc: Starting\ntitle: B, alert: notice, desc: Process Step 1 and 2  Step 1 - Execute Step 2 - Log \ntitle: C, alert: notice, desc: "Ending"';

var parseFile = function(input){
		var rows = input.split('\n');
    var returnObj = [];
    for (var i=0; i < rows.length; i++){
    		var currRow = rows[i];
        returnObj.push(getDataObject(currRow));
    }
    return returnObj;
};

var getDataObject = function(inputRowString){
		var newObject = {};
		var propSplit = inputRowString.split(',');
    for (var i = 0; i < propSplit.length; i++){
    		var currSplit = propSplit[i];
        var keyValue = currSplit.split(':');
        newObject[keyValue[0].replace(/\s/g,'')] = keyValue[1];
    }
    return newObject;
};

console.dir(parseFile(fileInput));