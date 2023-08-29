import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import EncounterForm from './encounter_form';
import userEvent from '@testing-library/user-event';

describe('EncounterForm renders', () => {

    test('Form renders', () => {
        // Arrange
        const onSubmission = jest.fn();
        render(<EncounterForm onSubmission={onSubmission} />);

        // Act
        const formElement = screen.getByRole('form');

        // Assert
        expect(formElement).toBeInTheDocument();
    });

    test('Number of Characters input renders', () => {
        // Arrange
        const onSubmission = jest.fn();
        render(<EncounterForm onSubmission={onSubmission} />);

        // Act
        const inputElement = screen.getByLabelText('Number of Characters' );

        // Assert
        expect(inputElement).toBeInTheDocument();
    });

    test('Level input renders', () => {
        // Arrange
        const onSubmission = jest.fn();
        render(<EncounterForm onSubmission={onSubmission} />);

        // Act
        const inputElement = screen.getByLabelText('Level');

        // Assert
        expect(inputElement).toBeInTheDocument();
    });

    test('Difficulty input renders', () => {
        // Arrange
        const onSubmission = jest.fn();
        render(<EncounterForm onSubmission={onSubmission} />);

        // Act
        const inputElement = screen.getByRole('combobox');
        const easyOption = screen.getByRole('option', { name: 'Easy' });
        const mediumOption = screen.getByRole('option', { name: 'Medium' });
        const hardOption = screen.getByRole('option', { name: 'Hard' });
        const deadlyOption = screen.getByRole('option', { name: 'Deadly' });

        // Assert
        expect(inputElement).toBeInTheDocument();
        expect(easyOption).toBeInTheDocument();
        expect(mediumOption).toBeInTheDocument();
        expect(hardOption).toBeInTheDocument();
        expect(deadlyOption).toBeInTheDocument();
    });

    test('Submit button renders', () => {
        // Arrange
        const onSubmission = jest.fn();
        render(<EncounterForm onSubmission={onSubmission} />);

        // Act
        const buttonElement = screen.getByRole('button', { name: 'Submit' });

        // Assert
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveAttribute('type', 'submit');
    });
});

describe('EncounterForm user input', () => {
    test('Number of Characters input accepts user input', async () => {
        // Arrange
        const onSubmission = jest.fn();
        render(<EncounterForm onSubmission={onSubmission} />);
    
        // Act
        const inputElement = screen.getByLabelText('Number of Characters');
        await userEvent.type(inputElement, '1');

        // Assert
        expect(inputElement).toHaveValue(1);
   
    });

    test('Level input accepts user input', async () => {
        // Arrange
        const onSubmission = jest.fn();
        render(<EncounterForm onSubmission={onSubmission} />);
    
        // Act
        const inputElement = screen.getByLabelText('Level');
        await userEvent.type(inputElement, '1');

        // Assert
        expect(inputElement).toHaveValue(1);
   
    });

    test('Difficulty input accepts user input', async () => {
        // Arrange
        const onSubmission = jest.fn();
        render(<EncounterForm onSubmission={onSubmission} />);
    
        // Act
        const inputElement = screen.getByRole('combobox');
        await userEvent.selectOptions(inputElement, 'Medium');

        // Assert
        expect(inputElement).toHaveValue('Medium');
   
    });
    test('Number of Characters input cannot accept non-numeric input', async () => {
        // Arrange
        const onSubmission = jest.fn();
        render(<EncounterForm onSubmission={onSubmission} />);
    
        // Act
        const inputElement = screen.getByLabelText('Number of Characters');
        await userEvent.type(inputElement, 'abc');

        // Assert
        expect(inputElement).toHaveValue(null);
          
    });
    test('Level input cannot accept non-numeric input', async () => {
        // Arrange
        const onSubmission = jest.fn();
        render(<EncounterForm onSubmission={onSubmission} />);
    
        // Act
        const inputElement = screen.getByLabelText('Level');
        await userEvent.type(inputElement, 'abc');

        // Assert
        expect(inputElement).toHaveValue(null);
          
    });

});

describe('EncounterForm submission', () => {
    test('Form is submitted with correct data', async () => {
        // Arrange
        const onSubmission = jest.fn();
        render(<EncounterForm onSubmission={onSubmission} />);
    
        // Act
        await userEvent.type(screen.getByLabelText('Number of Characters'), '1');
        await userEvent.type(screen.getByLabelText('Level'), '1');
        await userEvent.selectOptions(screen.getByRole('combobox'), 'Medium');
        await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

        // Assert
        expect(onSubmission).toHaveBeenCalledWith({
            characters: "1",
            level: "1",
            difficulty: 'Medium',
        });   
    });
    test('Form cannot be submitted with invalid character number', async () => {
        // Arrange
        const onSubmission = jest.fn();
        render(<EncounterForm onSubmission={onSubmission} />);
    
        // Act
        await userEvent.type(screen.getByLabelText('Number of Characters'), '500');
        await userEvent.type(screen.getByLabelText('Level'), '10');
        await userEvent.selectOptions(screen.getByRole('combobox'), 'Medium');
        await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

        // Assert
        expect(onSubmission).not.toHaveBeenCalled();
expect(screen.getByText('Max 10', { selector: 'p' })).toBeInTheDocument();
   
    });

    test('Form cannot be submitted with invalid level number', async () => {
        // Arrange
        const onSubmission = jest.fn();
        render(<EncounterForm onSubmission={onSubmission} />);
    
        // Act
        await userEvent.type(screen.getByLabelText('Number of Characters'), '5');
        await userEvent.type(screen.getByLabelText('Level'), '1850');
        await userEvent.selectOptions(screen.getByRole('combobox'), 'Medium');
        await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

        // Assert
        expect(onSubmission).not.toHaveBeenCalled();
        expect(screen.getByText('Max 20', { selector: 'p' })).toBeInTheDocument();   
    });

    test('Form cannot be submitted with invalid difficulty', async () => {
        // Arrange
        const onSubmission = jest.fn();
        render(<EncounterForm onSubmission={onSubmission} />);
    
        // Act
        await userEvent.type(screen.getByLabelText('Number of Characters'), '5');
        await userEvent.type(screen.getByLabelText('Level'), '10');
        await userEvent.selectOptions(screen.getByRole('combobox'), 'default');
        await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

        // Assert
        expect(onSubmission).not.toHaveBeenCalled();        
        expect(screen.getByRole('combobox')).toHaveValue('default');
        expect(screen.getByText('Select Difficulty', { selector: 'p' })).toBeInTheDocument();
    });
});