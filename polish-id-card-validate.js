function validatePolishIDCard( id ) {
    //Basic validation with regular expression:
    const regexp = /^[A-Z]{3}\s*\d{6}$/i;
    
    if( !regexp.test( id ) ) {
        return false;
    }

    //Remove optional white chars
    //and convert string to array
    id = [...id.replace( /\s/g, '' )];
    
    //Setting control digit and remove this from array:
    const controlDigit = parseInt( id.splice( 3, 1 ), 10 );

    //Weights for all digits:
    const weight = [7,3,1,7,3,1,7,3];
    let sum = 0;

    //Algorithm for checksum calculate:
    for( let i = 0; i < 8; i++ ) {
        if( i < 3 ) { //litery
            //For letters we have to get ASCII code
            //and substraction number 55
            //e.g. fot letter "A": 65-55=10
            const letter = id[i].toUpperCase();
            sum += ( letter.charCodeAt() - 55 ) * weight[i];
        }
        else { //digits
            sum += id[i] * weight[i];
        }

    }

    return ( sum % 10 ) === controlDigit;
}

module.exports = validatePolishIDCard;