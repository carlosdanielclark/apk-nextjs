import { mount, shallow } from 'enzyme';
import Form from '../app/form';

describe('Tests in "Form"', () => {

    test('Must show correctly', () => {
        //(1) initialization
        const wrapper = shallow( <Form /> );
        //(2) Stimulus  and  //(3) Observation 
        expect( wrapper ).toMatchSnapshot();
    });
  
   
})