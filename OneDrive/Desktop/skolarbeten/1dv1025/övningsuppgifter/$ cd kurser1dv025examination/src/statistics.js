/* eslint-disable jsdoc/require-description */

/**
 * Module for obtaining statistical analysis about a set of data.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author  Hossein Amer <ha223dp@student.lnu.se>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Type definitions
// ------------------------------------------------------------------------------

/**
 * Represents statistical summary.
 *
 * @typedef {object} StatisticalSummary
 * @property {number} average - The average value.
 * @property {number} maximum - The maximum value.
 * @property {number} median - The median value.
 * @property {number} minimum - The minimum value.
 * @property {number[]} mode - The mode value.
 * @property {number} range - The range value.
 * @property {number} standardDeviation - The standard deviation value.
 * @returns {number} The results that's return to the function due to the arithmetic operation.
 *
 */

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------
/**
 * @param {Array} numbers - array of numbers
 * @returns {number} The results that's return to the function due to the arithmetic operation.
 */
function sum (numbers) {
  // kollar med funktion checkerrors med numbers.
  checkError(numbers)
  // gör så att jag sum blir till = 0.
  var sum = 0
  // for loopar för att mer simpelt kunna repetera arrayen.
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
    // retunerar uppgiften, och går tillbaka till funktionen.
  } return sum
}
// Function to control the indata for every function.

/**
 * Returns a numbers.
 *
 * @param {Array} numbers  - array of numbers.
 * @returns {number} Function to control the indata for every function, and checking the function of average.
 */
export function average (numbers) {
  // kollar med funktion checkerrors med numbers.
  checkError(numbers)
  // anger så att average är lika med sum(numbers).
  var average = sum(numbers)
  // Divisionsuppdragsoperatören (/ =) delar en variabel.
  // med värdet på rätt operand och tilldelar variabeln resultatet.
  // Så att average och numbers.length kan linkas ihop.
  average /= numbers.length
  // retunerar uppgiften, och går tillbaka till funktionen.
  return average
};
/**
 * @param {Array} numbers - array of numbers
 * @returns {number}  Function to control the indata for every function, and checking the function of maximum.
 */
export function maximum (numbers) {
  // kollar med funktion checkerrors med numbers.
  checkError(numbers)
  // låter maximum att bli lika med numbers och utge det ett ny Array.
  let max = numbers[0]
  // for loopar för att kolla av max värdet
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) max = numbers[i]
    // retunerar uppgiften, och går tillbaka till funktionen maximum.
  } return max
};

/**
 * @param {Array} numbers - array of numbers
 * @returns {number} Function to control the indata for every function, and checking the function of median.
 */
export function median (numbers) {
  // kollar med funktion checkerrors med numbers.
  checkError(numbers)
  // låter mediumvalue i det här fallet bli =0
  // Metoden slice () returnerar de valda elementen i en array som ett nytt array-objekt.
  // Den nya array sorteras, med variblerna a,b och sedan subtrahera.
  let mediumvalue = 0
  let newArray = numbers.slice()
  newArray = newArray.sort((a, b) => a - b)
  // Följande if statement hänvisar till hur median skulle visas med hjälp av om det var udda antal tal i arrayen.
  // Och om det var jämn antal tal i arrayen.
  if (newArray.length % 2 === 0) {
    mediumvalue = newArray[(newArray.length / 2 - 1)]
    mediumvalue += newArray[(newArray.length / 2)]
    mediumvalue = mediumvalue / 2
    // För att kunna av avrunda arrayen neråt, istället för uppåt.
  } else {
    mediumvalue = newArray[Math.floor(newArray.length / 2)]
    // retunerar uppgiften, och går tillbaka till funktionen median.
  } return mediumvalue
};

/**
 * @param {Array} numbers - array of numbers
 * @returns {number}  Function to control the indata for every function, and checking the function of minimum.
 */
export function minimum (numbers) {
  // kollar med funktion checkerrors med numbers
  checkError(numbers)
  // retunerar uppgiften, och går tillbaka till funktionen minimum
  // Kollar matematiken för min
  return (Math.min(...numbers))
}
/**
 * @param {Array}numbers - array of numbers
 * @returns {numbers}
 * Function to control the indata for every function, and checking the function of mode
 */
export function mode (numbers) {
  // kollar med funktion checkerrors med numbers
  checkError(numbers)

  // Skapa ett tomt objekt
  const db = {}

  // Räkna alla element
  // eslint-disable-next-line no-return-assign
  numbers.forEach(number => db[number] = db[number] ? db[number] + 1 : 1)

  // Hitta det största antalet
  const max = Object.values(db).reduce((a, b) => a > b ? a : b)

  // Mappa alla entries till respektive värde om dess antal == max, annars undefined.
  const result = Object.entries(db).map(([a, b]) => b === max ? a : undefined)
  // retunerar uppgiften, och går tillbaka till funktionen och även.
  // Filtrera bort alla undefined
  return result.filter(v => v !== undefined).map(a => parseFloat(a)).sort((a, b) => a - b)
}

/**
 * @param {Array} numbers - array of numbers
 * @returns {number} Function to control the indata for every function, and checking the function of range.
 */
export function range (numbers) {
  // kollar med funktion checkerrors med numbers
  checkError(numbers)
  // Anger att konstanten till variebalen max till maximum
  // Anger att konstanten till variebalen min till minimum
  // Sedan kollar skillnaden från bege
  const max = maximum(numbers)
  const min = minimum(numbers)
  const range = max - min
  // retunerar uppgiften, och går tillbaka till funktionen range.
  return range
};

/**
 * @param {Array} numbers - array of numbers
 */

/**
 * Beskrivning av vad standardDeviatio formeln görs i kodform.
 *
 * @param {Array} numbers - The number of array
 * @returns {number} Function to control the indata for every function, and checking the function of standardDeviation.
 */
export function standardDeviation (numbers) {
  // kollar med funktion checkerrors med numbers
  checkError(numbers)
  // namnger konstanten average till variebeln average
  // likadan konstant för att göra det enklare
  const average_ = average(numbers)
  // gör så att att sum blir = 0
  let sum = 0
  // for loopar för att kunna variera av de olika arrayen är korrekta
  // gör så att const nummer får värdet numbers i, så det används for loopar
  // Let Term gör så vi deklarar att det är lika med konstanterna nummer och average_
  // För att kunna utnytta formeln
  // Låter sedan se vad formeln gör genom att ta upphöjt till
  // Sedan se vad summan är med term i det här läget
  for (let i = 0; i < numbers.length; i++) {
    const nummer = numbers[i]
    let term = nummer - average_
    term = term * term
    sum = sum + term
  }
  // Kollar summan blir med delat med antal arrays som ska returneras
  // anvisa sedan vad sum är lika med Math.sqrt(sum)
  sum = sum / numbers.length
  sum = Math.sqrt(sum)
  // retunerar uppgiften, och går tillbaka till funktionen standardDeviation
  return sum
};

/**
 * @param {Array}numbers - array of numbers
 * Function to control the indata for every function, and checking the functions of checkerrors if array is array, for numbers that are undefined, and for loops.
 */
function checkError (numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError('The passed argument is not an array.')
  }
  if (numbers === undefined || numbers.length === 0) {
    // array empty or does not exist
    throw new Error('The passed array contains no elements.')
  }
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i]
    if (typeof element !== 'number' || Number.isNaN(element)) {
      throw new TypeError('The passed array may only contain valid numbers.')
    }
  }
};

/**
 * Returns several descriptive statistics (average, maximum, median, minimum,
 * mode, range and standard deviation) from a set of numbers.
 *
 * @param {Array} numbers - The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {StatisticalSummary} An object whose properties correspond to the descriptive statistics from the data set.
 */

/**
 *
 * @param {Array}numbers - array of numbers
 * @returns {number} Function to control the indata for every function, and checking the functions.
 */
export function summary (numbers) {
  // kollar med funktion checkerrors med numbers
  checkError(numbers)
  // retunerar uppgiften, och går tillbaka till funktionen
  // till alla dessa funktioner
  return {
    average: average(numbers),
    maximum: maximum(numbers),
    median: median(numbers),
    minimum: minimum(numbers),
    mode: mode(numbers),
    range: range(numbers),
    standardDeviation: standardDeviation(numbers)
  }
}
