//PROBLEM
// Given a integer you'll have to figure out if the number is a palindrome number
// you'll know that its a Palindrome number if the number is the same if its read the same forwards and backwards 

//if number is smaller then 0 return false 
// number will be made into a string
// make the number that is given into an array 
// The number will me push out of the array and be put into a variable
//after the whole loop is finished check the reverse variable to the variable that was given to see if they are the same and then return true 
//else they don't match return false

//CONSTRAINTS
//the number that is given to us is more then or equal to -2^31 and is smaller then adn equal to 2^31 - 1

var isPalindrome = function (x) {
    //if number is smaller then 0 return false 
    if (x < 0) {
        return false
    }
    let reverseNum = ''
    // number will be made into a string
    const stringX = x.toString()

    // make the number that is given into an array 
    const arrX = stringX.split("")

    // The number will me push out of the array and be put into a varaible
    const reverseArray = arrX.reverse()
    reverseNum = reverseArray.join("")

    //after the whole loop is finished check the reverse varaible to the variable that was given to see if they are the same and then return true 
    if (x === Number(reverseNum)) {
        return true
        //else they dont match return false
    } else {
        return false
    }
};