import { render } from '@testing-library/react';
import { LooseObject } from './globalTypes';
import App from './App';
import RouterHOC from '../__tests__/routerHOC'

describe('App', () => {
    let container: LooseObject;

    beforeAll(() => {
        const { container: wrapper } = render(
          <RouterHOC>
            <App />
          </RouterHOC>
    );

        container = wrapper;
    });

    test('if App is rendering Properly', () => {
        expect(container.firstChild).toMatchSnapshot();
        expect(container).toBeTruthy();
    })
})