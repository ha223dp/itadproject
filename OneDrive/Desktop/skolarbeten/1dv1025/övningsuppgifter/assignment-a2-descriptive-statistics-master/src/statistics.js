/**
 * Module for obtaining statistical analysis about a set of data.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author  Hossein Amer <ha223do@student.lnu.se>
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
 */

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------
/**
 * @param numbers
 */
function sum (numbers) {
  checkError(numbers)
  var sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  } return sum
}
// Function to control the indata for every function
/**
 * @param numbers
 */
export function average (numbers) {
  checkError(numbers)
  var average = sum(numbers)
  average /= numbers.length
  return average
};
/**
 * @param numbers
 */
export function maximum (numbers) {
  checkError(numbers)
  let max = numbers[0]
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) max = numbers[i]
  } return max
};
/**
 * @param numbers
 */
export function median (numbers) {
  checkError(numbers)
  let mediumvalue = 0

  numbers.sort((a, b) => a - b)
  if (numbers.length % 2 == 0) {
    mediumvalue = numbers[Math.round((numbers.length - 1) / 2)]
  } else {
    mediumvalue = [Math.floor(arr.length / 2)]
  } return mediumvalue
};

/**
 * @param numbers
 */
export function minimum (numbers) {
  checkError(numbers)
  return (Math.min(...numbers))
}
/**
 * @param numbers
 */
export function mode (numbers) {
  checkError(numbers)
  const mode = numbers
};

/**
 * @param numbers
 */
export function range (numbers) {
  checkError(numbers)
  const max = maximum(numbers)
  const min = minimum(numbers)
  const range = max - min
  return range
};

/**
 * @param numbers
 */
export function standardDeviation (numbers) {
  checkError(numbers)
  return (Math.std(numbers))
};

/**
 * @param numbers
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
 * @param {number[]} numbers - The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {StatisticalSummary} An object whose properties correspond to the descriptive statistics from the data set.
 */

/**
 * @param numbers
 */
export function summary (numbers) {
  checkError(numbers)
}
