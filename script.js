// Basic Data Structures: Iterate Through All an Array 's Items Using For Loops

/*We have defined a function, filteredArray, which takes arr, a nested array,
and elem as arguments, and returns a new array.elem represents an element that
may or may not be present on one or more of the arrays nested within arr.
Modify the function, using a for loop, to return a filtered version of the passed
array such that any array nested within arr containing elem has been removed.*/

function filteredArray(arr, elem) {
    let newArr = [];
    debugger
    // change code below this line
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) <= -1) {
            newArr.push(arr[i]);
        }
    }
    if (newArr.length == 0) {
        return [];
    } else {
        return newArr;
    }
}


// change code here to test different cases:
console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2));
