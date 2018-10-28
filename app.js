/**
 * @ Add all the numbers function(2,3,4)  =>  Output :: 9
 */

// ES5 
function sumAll() {
    let total = 0;
    var args = Array.prototype.slice.call(arguments);
    for (let j = 0; j < args.length; j++) {
        total += args[j]
    }
    return total;
}
// ES6 
function sumAll1(...numbers) {
    return numbers.reduce((accumulator, currentElement) => accumulator + currentElement);
};

// console.log(sumAll1(1,2,3,4,5))
/**
 * @ Add all prime numbers from 0 to given number 
 *  AddPrime (10)  => output :: 17
 */

function isPrime(i) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            return false
        }
    }
    return true
}

function addPrimeNum(num) {
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            sum += i
        }
    }
    return sum;
}

// console.log(addPrimeNum(10))
/**
 * @ Add all prime numbers between 2 numbers
 *  AddPrime (1,10)  => output :: 17
 */

function addPrimeNum1(num1, num2) {
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        if (isPrime(i)) {
            sum += i
        }
    }
    return sum;
}

// console.log(addPrimeNum1(1, 10))
/**
 * Seek and destroy
 * 
 * 
 */

function findAndDestroy(arr, ...remain) {
    return arr.filter(element => !remain.includes(element));
}

// console.log(findAndDestroy([1,2,3,3,3,3], 3));


/**
 *  re arragnge the array without touching some constant element
 *  inputArray  = [0, 20, 10, 40, 0, 60, 50, 0, 100 ]
 *  output      = [0, 10, 20, 40, 0, 50, 60, 0, 100 ]
 */

function smartSort(inputArray) {
    let array1 = [];
    let array2 = [];
    inputArray.forEach((element, i) => {
        if (element === 0) {
            array1.push(i);
        } else {
            array2.push(element);
        }
    });
    let sortedArray = array2.sort((a, b) => a - b);
    array1.forEach((element) => {
        sortedArray.splice(element, 0, 0);
    });
    return sortedArray;
}

// console.log(smartSort([0, 20, 10, 40, 0, 60, 50, 0, 100 ]));


/**
 * find Missing charector
 * 
 * sampleString = "abcdf"  ,  findChar(sampleString) =>  output :: e
 * 
 */

function findChar(str) {
    let charCode = str.charCodeAt(0);
    let missing;
    str.split('').map((value, i) => (str.charCodeAt(i) == charCode) ? ++charCode : missing = String.fromCharCode(charCode));
    return missing;
}

// console.log(findChar('adbcd'))


/**
 * Sum of Even and Odd numbers
 */

function sumEvenOdd(arr) {
    let evenSum = 0;
    let oddSum = 0;
    arr.forEach(value => value % 2 === 0 ? evenSum += value : oddSum += value)
    return [evenSum, oddSum];
}

// let sampleArray = [1, 1, 2, 2, 3, 4];
// console.log(sumEvenOdd(sampleArray))


/**
 * 
 * Find given string is Palindrome or not... 
 */

function isPalindrome(sampleString) {
    return sampleString.split('').reverse().join('') == sampleString;

}

// console.log(isPalindrome('madam'));

/**
 * Capitalize the first letters in each word
 */

function toCapital(str) {
    let lowerStr = str.toLowerCase();
    let words = lowerStr.split(' ');
    let response = [];
    words.filter(word => {
        let x = word.substring(0, 1).toUpperCase() + word.substring(1);
        response.push(x)
    });
    return response.join(" ");
}

// Solution with regular expressions

function toCapitalRegx (str){
    return str.replace(/\b[a-z]/gi, (char)=>{
        return char.toUpperCase();
    })
}

// console.log(toCapital('i love coding'));
