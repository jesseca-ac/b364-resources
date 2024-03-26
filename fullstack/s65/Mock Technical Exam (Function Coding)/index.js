function countLetter(letter, sentence) {
    let result = 0;

    // Implement input validation to ensure that the letter parameter is a single character. If it's not, return a message, "Invalid letter input"
    // Implement input validation to ensure that the sentence parameter is not single character. If it is, return a message, "Invalid sentence input"

    // Then, identify how many times a letter has occurred in a given sentence then return count.
    // If letter does not occur in the sentence, return undefined.

}


function isIsogram(text) {
    // An isogram is a word where there are no repeating letters.
    // The function should disregard text casing before doing anything else.
    // If the function finds a repeating letter, return false. Otherwise, return true.
    // Should be able handle phrases or sentences rather than just single words.
    
}

function purchase(age, price) {
    // Return undefined for people aged below 13.
    // Return the discounted price (rounded off) for students aged 13 to 21 and senior citizens. (20% discount)
    // Return the rounded off price for people aged 22 to 64.
    // The returned value should be a string.
    
}

function findHotCategories(items) {
    // Find categories that has no more stocks.
    // The hot categories must be unique; no repeating categories.

    // The passed items array from the test are the following:
    // { id: 'tltry001', name: 'soap', stocks: 14, category: 'toiletries' }
    // { id: 'tltry002', name: 'shampoo', stocks: 8, category: 'toiletries' }
    // { id: 'tltry003', name: 'tissues', stocks: 0, category: 'toiletries' }
    // { id: 'gdgt001', name: 'phone', stocks: 0, category: 'gadgets' }
    // { id: 'gdgt002', name: 'monitor', stocks: 0, category: 'gadgets' }

    // The expected output after processing the items array is ['toiletries', 'gadgets'].
    // Only putting return ['toiletries', 'gadgets'] will not be counted as a passing test during manual checking of codes.

}

function findFlyingVoters(candidateA, candidateB) {
    // Find voters who voted for both candidate A and candidate B.

    // Validate the voter entries:
    
    // Handle cases where one or both candidate arrays are empty or contain no common voters.
    // Return a message if one or both candidate arrays are empty: "Candidate array must not be empty."
    // Return a message if the arrays has no common voters: "No common voters."

    // Consider scenarios where the inputs might be null, undefined, or of different lengths, and handle such cases gracefully.
    //Return a message if the input is null or undefined: "Invalid Values",
    //Return a message if the inputs are not the same length: "Invalid Entry"

    // The passed values from the test are the following:
    // candidateA: ['LIWf1l', 'V2hjZH', 'rDmZns', 'PvaRBI', 'i7Xw6C', 'NPhm2m']
    // candidateB: ['kcUtuu', 'LLeUTl', 'r04Zsl', '84EqYo', 'V2hjZH', 'LIWf1l']

    // The expected output after processing the candidates array is ['LIWf1l', 'V2hjZH'].
    // Only putting return ['LIWf1l', 'V2hjZH'] will not be counted as a passing test during manual checking of codes.
    
}

module.exports = {
    countLetter,
    isIsogram,
    purchase,
    findHotCategories,
    findFlyingVoters
};