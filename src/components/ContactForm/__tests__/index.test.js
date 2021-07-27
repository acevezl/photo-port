import React from 'react';
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '..'

afterEach(cleanup);

describe('Contact Form is rendering', () => {

    it('renders', () => {
        render(<ContactForm/>);
    })

})