import ReactDOM from 'react-dom';

const { createPortal } = ReactDOM;

beforeAll(() => {
    ReactDOM.createPortal = node => node;
})

afterAll(() => {
    ReactDOM.createPortal = createPortal;
})