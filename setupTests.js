import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
Enzyme.configure({ adapter: new Adapter() });