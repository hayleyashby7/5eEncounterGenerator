import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('App rendered and default to homepage', () => {
    //Arrange
    render(<App />);

    //Act
    const homeElement = screen.getByRole('main');

    //Assert
    expect(homeElement).toBeInTheDocument();
    expect(homeElement.textContent).toContain('Welcome');
});
