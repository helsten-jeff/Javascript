/** FOR LOOPS **/

/** For loop  **/

const concepts = [
  'Loops',
  'Conditional Statements',
  'Functions',
  'Variables',
  'Parameters',
  'Arrays',
  'Associative Arrays',
]
let newString = ''

/** This for loop allows traversing arrays/objects in reverse order **/
for (var i = concepts.length - 1; i >= 0; i--) {
  newString += concepts[i] 
  // Put a comma between all but last item
  if (i !== 0 ) {
    newString += ', '
  }
}

console.log('newString', newString)

/**
 * This could also be done using the Array.join method. Much cleaner.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 **/

const newString2 = concepts.join(', ')
console.log('newString2:', newString2)

/** For/in loop **/

const students = {
  suzie: {
    age: 18,
  },
  stan: {
    age: 20,
  },
  marco: {
    age: 19,
  },
  polo: {
    age: 17,
  },
}

let classAges = []
/** for loop using shorthand **/

for (var s in students) {
  classAges.push(students[s].age)
}

console.log('ages', classAges)
