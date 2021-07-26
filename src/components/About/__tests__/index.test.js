import React from 'react';
import { render, cleanup } from '@testing-library/react';
// render - Renders the component
// cleanup - Removes components from the DOM to prevent memory leaking, as well as variable or data collisions between tests that could corrupt results

import '@testing-library/jest-dom/extend-expect';
// jes-dom offers access to custom machers that are used to test DOM elements.

import About from '..';

afterEach(cleanup); // ensures that after each test we won't have anymemory data that could give us false results

describe('About component', () => {
    // this function declares the component we're testing - in this case: About
    // The string 'About component' will show up on the test

    // First test - baseline to verify the component is rendering
    it('renders', () => {
        render(<About/>);
    })

    // Second test - to compare a snapshot version of the DOM node structure.
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About/>);
        expect(asFragment()).toMatchSnapshot();
    })

})