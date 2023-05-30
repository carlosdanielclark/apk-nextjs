import { mount } from 'enzyme';
import Home from '../app/page';

describe('Tests in "FormTitle"', () => {


    test('Snapshot of the html', () => {
        //(1) initialization
        const wrapper = mount( <Home /> );
        //(2) Stimulus  and  //(3) Observation 
        expect( wrapper ).toMatchSnapshot();
    });


})