/**
 * Returns a string representation of a 2-dimensional data structure 
 * @param {number} depth 
 * @param {number} [width=depth] 
 * @returns {string}
 */
function nestedForLoops( depth, width = depth ) {
    let result = "\n";
    // Error handling:
    if ( !depth || isNaN( depth ) ) {
        return '';
    }
    for ( let i = 0; i < depth; i++ ) {
        for ( let j = 0; j < width; j++ ) {
            result += `{x:${ j }, y:${ i }}`;
            if ( j + 1 < width ) {
                result += ', ';
            } else {
                result += '\n';
            }
        }
    }
    return result;
};

// To see your console output outside the tests add function calls here.
// console.log(nestedForLoops(4));
