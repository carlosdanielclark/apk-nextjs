import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Tests in "useForm"', () => {

    const initialForm = {
        base: 1,
    };

    test('Must return a form for default', () => {
        //(1) initialization
        const { result } = renderHook( () => useForm(initialForm) );
        const [ formValues, handleInputChange, reset ] = result.current;
        //(2) Stimulus  and  //(3) Observation 
        expect( formValues ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );
       
    });
    
    test('Most change the form value (change base)', () => {
        //(1) initialization       
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange ] = result.current;
        //(2) Stimulus 
        act( /*Simulador de funciones*/
            () => {
                handleInputChange({
                    target: { //Simulador del target
                        base: 5
                    }
                });
            }
        );
        //(3) Observation
        const [ formValues ] = result.current;
        expect( formValues ).toEqual( { ...initialForm, base: 1 } );

    });

    test('Must reset the form with RESET', () => {
        //(1) Inicializacion          
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, reset ] = result.current;
        //(2) Estimulo 
        act( /*Simulador de funciones*/ 
            () => {
                handleInputChange({
                    target: { //Simulador del target
                        base: 5
                    }
                });

                reset();
            }
        );
       //(3) Observacion
        const [ formValues ] = result.current;
        expect( formValues ).toEqual( initialForm );
        
    })

})