var filter = function (arr, callback) {
    var i, length = arr.length, results = [];
    for (i = 0; i < length; i = i + 1) {
        if (callback(arr[i])) {
            results.push(arr[i]);
        }
    }
    return results;
};


f = function(a) {
	if (a % 5 == 0){
		return true
	}
	else {
		return false
	}
}