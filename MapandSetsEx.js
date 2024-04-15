//q1
// new Set([1,1,2,2,3,4])

//this will return the object {1, 2, 3, 4}

//q2
// [...new Set("referee")].join("")
//this will retrun 'ref'

//q3
// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

//this will print

//0: {Array(3) => true}
//1: {Array(3) => false}

//q4
// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false


 const hasDuplicate = arr => new Set(arr).size !==arr.length;



 //q5
//  vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }


function isVowel(char) {
    return 'aeiou'.includes(char); //return true if char is in 'aeiou' string
}

function vowelCount(str){
    const vowelMap = new Map(); //create map
    for(let char of str){//iterate through string
        let lowerCase = char.toLowerCase();//make char lowercase
        if(isVowel(lowerCase)){// if char is a vowel
            if(vowelMap.has(lowerCase)){//and the map already has this char
                vowelMap.set(lowerCase, vowelMap.get(lowerCase) + 1)//add + 1 to its count
            } else {
                vowelMap.set(lowerCase, 1); //or the char is in the map just once
            }
        }
    }
    return vowelMap();
}

 