const validate = require( 'polish-id-card-validate' );

describe( 'Polish personal ID cards validation.', () => {
    it( 'Validation of correct ID card numbers.', () => {
        expect( validate( 'ABS123456' ) ).toBeTruthy();
        expect( validate( 'abs123456' ) ).toBeTruthy();
        expect( validate( 'ABS 123456' ) ).toBeTruthy();
        expect( validate( 'abs 123456' ) ).toBeTruthy();
    } );
	
    it( 'Validation of incorrect ID card numbers.', () => {
        //Too many numbers:
        expect( validate( 'ABS 1234567' ) ).toBeFalsy();
		
        //Invalid control digit:
        expect( validate( 'ABS 523456' ) ).toBeFalsy();
    } );
} );