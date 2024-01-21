/** product: calculate the product of an array of numbers. */

function product(nums) {

  if(nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1))
}


/** longest: return the length of the longest word in an array of words. */

function longest(words) {

  if(words.length === 0) return 0;
  const lengthOfWord = words[0].length;
  allWordsArr = longest(words.slice(1))

  return Math.max(lengthOfWord, allWordsArr)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0, letter='') {

  if(idx >= str.length) return letter;
  letter += str[idx]
  return everyOther(str, idx+2, letter)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if(str.length <= 0) return true;
  if(str[0] === str[str.length -1]) {
    return isPalindrome(str.slice(1, -1));
  } else {
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {

  if(idx >= arr.length) return -1;

    if(arr[idx] === val){

      return idx;
    } else {
      idx += 1

      return findIndex(arr, val, idx)
    }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, reversed='') {

  if(str.length <= 0) return reversed;

  return str.slice(-1) + revString(str.slice(0, -1))
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, str=[]) {

  for(key in obj){

    if(typeof obj[key] == 'string') {

      str.push(obj[key])
    } else {

      str = str.concat(gatherStrings(obj[key]))
    }    
  }
  return str;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, idx=0) {
  if(idx === arr.length) return -1;
  if(arr[idx] === val){
    return idx;
  } else {
    console.log(arr.slice(0))
    return binarySearch(arr, val, idx+1)
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
