import { mount } from 'enzyme';
import FormTitle from '../app/title';

describe('Tests in "FormTitle"', () => {


    test('Snapshot of the html', () => {
        //(1) initialization
        const wrapper = mount( <FormTitle /> );
        //(2) Stimulus  and  //(3) Observation 
        expect( wrapper ).toMatchSnapshot();
    });

    test('Show title correctly', () => {
        //(1) initialization
        const wrapper = mount( <FormTitle /> );
        //(2) Stimulus 
        const textParagraph = wrapper.find('label').text().trim();
        //(3) Observation 
        expect(textParagraph).toBe('Currency Exchange!');
    });
  

})