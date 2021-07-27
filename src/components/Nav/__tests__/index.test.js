import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

const categories = [{ name: 'portraits', description: 'Portraits of people in my life' }];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

describe('Nav component', () => {
    // baseline test - Does it render?
    it('renders', () => {
        render(<Nav
          categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
        />);
    })

    // snapshot test - Does DOM structure match snapshot?
    it('matches snapshot', () => {
        // render About
        const { asFragment } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
          />);
        expect(asFragment()).toMatchSnapshot();
    })
    
})

describe('Emoji is visible', () => {

    it('inserts emoji into the h2', () => {
        // Arrange
        const { getByLabelText } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
          />);

        // Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
})

describe('Links are visible', () => {
    it('Inserts text into the links', () => {
        // Arrange
        const { getByTestId } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
          />);

        // Assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    })
})