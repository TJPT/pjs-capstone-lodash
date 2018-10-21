const _ = {
  clamp(num, low, high) {
       /* Initialize output variable. Returns 'undefined' or a number. */
      let clampedNum;
        /* Check for valid input. */
      if (typeof num === 'number' &&
          typeof low === 'number' &&
          typeof high === 'number') {
            /* Checks if 'num' is between lower and upper bounds, even if 'low' > 'high'
                and sets output variable to the result. */
          if (num < Math.min(low, high)) {
			  clampedNum = Math.min(low, high);
		  } else if (num > Math.max(low, high)) {
			  clampedNum = Math.max(low, high);
		  } else {
			  clampedNum = num;
		  }
      } else {
          /* Notification, if one of the input arguments is invalid. */ 
        console.log(`All input arguments must be numbers!`);
      }
	    /* Return result. */
      return clampedNum;
  },

  inRange(num, bound_1, bound_2 = 0) {
        /* Initialize output variable. Returns a Boolean. */
      let isInRange = false;
        /* Check for valid input. */
      if (typeof num === 'number' &&
          typeof bound_1 === 'number' &&
	      typeof bound_2 === 'number') {
	          /* If in range (including lower bound, excluding upper bound),
			      set output variable to true, even when bound_1 > bound_2. */
	        if (num >= Math.min(bound_1, bound_2) &&
                num < Math.max(bound_1, bound_2)) {
              isInRange = true;
            }
      } else {
		    /* Notification, if one of the input arguments is invalid. */ 
		  console.log(`All input arguments must be numbers!`);
	  }
        /* Return result. */
      return isInRange;
  },
  
  words(someString) {
      return someString.split(' ');
  },

  pad(someString, toLength) {
        /* Initialize output variable. Returns 'undefined' or the string with 0 or more padding. */
      let paddedString;
        /* Check for valid input. */
      if (typeof someString === 'string' &&
          typeof toLength === 'number') {
			    /* Copy some string, as-to not change te original. */
              paddedString = someString;
  	          let numOfPaddingNeeded = toLength - paddedString.length;
  	            /* Check if padding is required or not. */
  	          if (numOfPaddingNeeded > 0) {
				    /* Split total number of padding,
				        into padding before and padding after the string. */
  	              let numOfPrePadding = Math.floor(numOfPaddingNeeded / 2);
  	              let numOfPostPadding = Math.ceil(numOfPaddingNeeded / 2);
				    /* Combine pre-padding, string and post-padding. */
  	              paddedString = ' '.repeat(numOfPrePadding) + paddedString + ' '.repeat(numOfPostPadding);
	          }
      } else {
		    /* Notification, if one of the input arguments is invalid. */
		  console.log(`The first argument must be a string and the second argument must be a number!`);
	  }
        /* Return result */
      return paddedString;
  },

  has(someObject, someKey) {
	    /* Initialize output variable. Returns a Boolean. */
	  let itHas = false;
	    /* Check for valid input. */
	  if (typeof someObject === 'object' &&
	      typeof someKey === 'string') {
		    /* Check if the value of some key in some object is undefined
                and sets the output variable to true if it does. */
	      if (someObject[someKey] !== undefined){
			  itHas = true;
		  }
	  } else {
		    /* Notification, if one of the input arguments is invalid. */
		  console.log(`The first argument must be an object and the second argument must be a string. (We're ignoring the fact that a key can also be of type 'Symbol' :smiley_face:)`);
	  }
	    /* Return result */
	  return itHas;
  },

  invert(someObject) {
	    /* Initialize output variable. Returns an empty or the inverted object. */
	  let invertedObject = {};
	    /* Check for valid input. */
	  if (typeof someObject === 'object') {
		    /* Iterate over each key. */
          for (let k = 0; k < Object.keys(someObject).length; k++) {
			    /* Store key and value. */
              let aKey = Object.entries(someObject)[k][0];
              let aValue = Object.entries(someObject)[k][1];
                /* Add an entry with key as value and with value as key,
                    to the output variable. */
			  invertedObject[aValue] = aKey;
		  }
	  	/* Notification, if the input argument is invalid. */  
	  } else {
		  console.log(`The input argument must be an object!`);
	  }
	    /* Return result. */
	  return invertedObject;
  },

  findKey(someObject, somePredicateFunction) {
	    /* Initialize output variable. Returns 'undefined' or the first key that, when pasted into the function, has an output. */
	  let foundKey;
	    /* Check for valid input. */
	  if (typeof someObject === 'object' &&
	      typeof somePredicateFunction === 'function') {
			    /* Iterate through the keys,
				    check if the function returns thuthy with the value of this key as the argument,
					if it does, assign the key the output variable
					and break out of the loop. */
			  labeledLoop: for (let k in someObject) {
				  if (somePredicateFunction(someObject[k])) {
					  foundKey = k;
					  break labeledLoop;
				  }
			  }
	  } else {
		    /* Notification, if one of the input arguments is invalid. */ 
		  console.log(`The first argument must be an object and the second argument must be a predicate function!`);
	  }
	    /* Return result. */
	  return foundKey;
  },

  drop(someArray, someNumber = 1) {
	    /* Initialize output variable. Returns an empty array or the array without the droped elements. */
	  let remainderOfArray = [];
	    /* Check for valid input. */
	  if (typeof someArray === 'object' &&
	      typeof someNumber === 'number') {
			    /* Iterate through the array,
				    skip the indexes smaller than the number,
					and copy the elements from that point on. */
			  for (let i = someNumber; i < someArray.length; i++) {
				  remainderOfArray.push(someArray[i]);
			  }
	  } else {
		    /* Notification, if one of the input arguments is invalid. */ 
		  console.log(`The first argument must be an array and the second argument must be a number!`);
	  }
	    /* Return result. */
	  return remainderOfArray;
  },

  dropWhile(someArray, somePredicateFunction) {
	    /* Initialize output variable. Returns a copy of the array or the array without the droped elements. */
	  let remainderOfArray = Array.from(someArray);
	    /* Check for valid input. */
	  if (typeof someArray === 'object' &&
	      typeof somePredicateFunction === 'function') {
			    /* Initialize variable to store the index
				    of the first element of which some predicate function returns a falsy value. */
			  let someIndex = 0;
			    /* Run the predicate function on each index,
				   remove the first element of the copied array,
				   untill the predicate function returns a falsy value. */
			  while (somePredicateFunction(someArray[someIndex], someIndex, someArray)) {
				  remainderOfArray.shift();
				  someIndex += 1;
			  }
	  } else {
			/* Notification, if one of the input arguments is invalid. */ 
		  console.log(`The first argument must be an object and the second argument must be a predicate function!`);
	  }
	    /* Return result. */
	  return remainderOfArray;
  },

  chunk(someArray, someSize = 1) {
	    /* Initialize output variable. Returns an empty or the chunked array. */
	  let chunkyArray = [];
	    /* Check for valid input. */
	  if (typeof someArray === 'object' &&
		  Number.isInteger(someSize) &&
		  someSize > 0) {
			    /* Push a chunk to the output variable
				    and go to the next chunky bit :Yumm:. */
			  for (let c = 0; c < someArray.length; c += someSize) {
				  chunkyArray.push(someArray.slice(c, c + someSize));
			  }
      } else {
		    /* Notification, if one of the input arguments is invalid. */ 
		  console.log(`The first argument must be an object and the second argument must be a positive non-zero integer!`);
	  }
	    /* Return result. */
	  return chunkyArray;
  }
};

 
// Do not write or modify code below this line.
module.exports = _;









































