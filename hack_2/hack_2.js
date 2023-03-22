/**
* mediante el loop for agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [2,3,4]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];

let i = 0;
let limite = arr.length - 1;
for (; i <= limite; i++) {
    if (i == 0) {
        delete arr[i]

    }else if(i == limite) {
        delete arr[i]

    } else {
        result.push(...Object.values(arr[i]));
    }
}

//export result
module.exports = result;