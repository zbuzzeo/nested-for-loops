/**
 * Returns a string representation of a 2-dimensional data structure 
 * @param {number} depth 
 * @param {number} [width=depth] 
 * @returns {string}
 */
function nestedForLoops( depth, width = depth ) {
    let result = "\n";
    let x = 0;
    let y = 0;
    console.log( `depth: ${ depth }\nwidth: ${ width }` );
    for ( let i = 0; i < depth; i++ ) {
        for ( let j = 0; j < width; j++ ) {
            x = j;
            y = i;
            result += `{x:${ x }, y:${ y }}`;
            if ( j + 1 < width ) {
                result += ', ';
            } else {
                result += '\n';
            }
            console.log( `%cx: ${ x }, y: ${ y }`, 'color: cornflowerblue; font-size: 1.2em;' );
        }
    }
    console.log(`FINISHED`);
    console.log( `%cRESULT: ${ result }`, 'color: orange; font-size: 1.2em;' );

    // Error handling:
    if ( !depth || isNaN( depth ) ) {
        return '';
    } else { return result };

};

// To see your console output outside the tests add function calls here.
// console.log(nestedForLoops(4));
