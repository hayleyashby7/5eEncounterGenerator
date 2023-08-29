import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Router from './router';
import { renderWithRouter } from '../../utils/test_utils';

test('Router defaults to homepage', () => {
    //Arrange
    renderWithRouter(<Router />);

    //Act
    const homeElement = screen.getByRole('main');

    //Assert
    expect(homeElement).toBeInTheDocument();
    expect(homeElement.textContent).toContain('Welcome');
});

test('Router renders not found page', () => {
    //Arrange
    renderWithRouter(<Router />, { route: '/bad-link' });

    //Act
    const notFoundHeading = screen.getByRole('heading', { level: 2 });
    const notFoundText = screen.getByText(/Sorry/i);

    //Assert
    expect(notFoundHeading).toBeInTheDocument();
    expect(notFoundHeading).toHaveTextContent('404 - Not Found!');
    expect(notFoundText).toBeInTheDocument();
    expect(notFoundText).toHaveTextContent('Sorry, the page you are looking for does not exist.');
});
