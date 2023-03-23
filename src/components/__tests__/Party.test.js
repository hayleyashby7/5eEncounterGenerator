import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Party from '../Party';

describe('Party component', () => {
	it('renders the party composition form', () => {
		// Arrange
		const { container } = render(<Party />);

		//Assert
		expect(container).toMatchSnapshot();
	});

	it('form validation rejects number of characters outside of 1-10 values', async () => {
		// Arrange
		const user = userEvent.setup();
		render(<Party  />);
		const input = screen.getByLabelText('Number of characters (Max 10)');

		// Act
		await user.type(input, '25');

		//Assert
		expect(input).toBeInvalid();
	});

	it('form validation rejects character level outside of 1-20 values', async () => {
		// Arrange
		const user = userEvent.setup();
		render(<Party />);
		const input = screen.getByLabelText('Level (1-20)');

		// Act
		await user.type(input, '68');

		//Assert
		expect(input).toBeInvalid();
	});

});