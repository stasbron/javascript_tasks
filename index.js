//task1
function convert(amount) { 
    const result = amount * 8;
    console.log(`${amount} dollars is ${result.toFixed(1)} htyvnias`);
}







//task2
function reverse(str) {
    return str.split('').reverse().join('');
}








//task3
function printStairs(n) { 
    for(let i=1; i<=n; i++){
        for(let x=1; x<=i; x++){
            document.write('*');
  }
        document.write('<br>');
}
}









//task4
function sumRange(start, end) {
  ???
}







//task5
function min(a, b, c) { 
    console.log(Math.min(a, b, c))
}







//task6
function printPyramid(n) { 
    for(let i=1; i<=n; i++){
        for(let k=1; k<=(n-i); k++){
             document.write('&nbsp');
        }
        for(let x=1; x<=i; x++){
            document.write('* '); 
  }
        document.write('<br>');
}
}






//task7
function firstAndLastToUpper(str) { 
    return str[0].toUpperCase()+str.slice(1,-1)+str[str.length-1].toUpperCase();
}





//task8
function cursorCheck(str) { 
        if (str.toLowerCase().includes('ostap') || str.toLowerCase().includes('roman') || str.toLowerCase().includes('cursor')) {
            return true;
        } else {
            return false;
        }     
    }





//task9
function toUppercase(str) {
    let res = str.toUpperCase();
    console.log(res);
}



//task10

???







//task11
function fibonacci(n) {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[n];
}
