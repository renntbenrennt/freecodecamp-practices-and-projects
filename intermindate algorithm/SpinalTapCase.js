/**
 * 
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 * 
 * Test case:
 * spinalCase("This Is Spinal Tap") : "this-is-spinal-tap"
 * spinalCase("thisIsSpinalTap") : ""this-is-spinal-tap""
 * spinalCase("The_Andy_Griffith_Show") : "the-andy-griffith-show"
 * spinalCase("Teletubbies say Eh-oh") : "teletubbies-say-eh-oh"
 * spinalCase("AllThe-small Things") : "all-the-small-things"
 * 
 */

function spinalCase(str) {

    function replacer(match, offset, string) {
        return (offset > 0 ? 
            string[offset - 1] === '-' ? '' : '-' /// in here we first test if there's already uppercase character
            : '') + match.toLowerCase();
    }

    return str.replace(/\s|_|-/g, '-')
              .replace(/[A-Z]/g, replacer);
}

/**
 * 
 * From MDN 
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 * 
 * # Using an inline function that modifies the matched characters
 * 
 * In this example, all occurrences of capital letters in the string are converted to lower case, 
 * and a hyphen is inserted just before the match location. 
 * The important thing here is that additional operations are needed on the matched item 
 * before it is given back as a replacement.
 * 
 * The replacement function accepts the matched snippet as its parameter, 
 * and uses it to transform the case and concatenate the hyphen before returning.
 * 
 */

// function styleHyphenFormat(propertyName) {
//     function upperToHyphenLower(match, offset, string) {
//         return (offset > 0 ? '-' : '') + match.toLowerCase();
//     }
//     return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
// } 


