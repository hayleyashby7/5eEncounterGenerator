import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Encounter from './encounter';
import useEncounter from '../../hooks/useEncounter';
import userEvent from '@testing-library/user-event';
import { mockEncounterResponse } from '../../mocks/mockData';

jest.mock('../../hooks/useEncounter');

const MockEncounterSuggestions = jest.fn();

jest.mock('../encounter_suggestions/encounter_suggestions', () => (props: any) => {
    MockEncounterSuggestions(props);
    return <MockEncounterSuggestions />;
});

describe('Encounter renders', () => {

    test('Encounter renders form on load', () => {
        // Arrange    
        render(<Encounter />);

        // Act
          const formElement = screen.getByRole('form');

        // Assert
        expect(formElement).toBeInTheDocument();

    });
});

describe('Encounter Generation', () => {
     test('Encounter calls useEncounter hook on form submission', async () => {
        // Arrange
        (useEncounter as jest.Mock).mockResolvedValueOnce(null);
        
        render(<Encounter />);

        // Act
        await userEvent.type(screen.getByLabelText('Number of Characters'), '5');
        await userEvent.type(screen.getByLabelText('Level'), '8');
        await userEvent.selectOptions(screen.getByRole('combobox'), 'Medium');
        await userEvent.click(screen.getByRole('button', { name: 'Submit' }));
        
        // Assert
        expect(useEncounter).toHaveBeenCalledWith({ characters: '5', difficulty: 'Medium', level: '8' });
    });
     
    test('Encounter displays error message if no encounter is generated', async () => {
        // Arrange
        (useEncounter as jest.Mock).mockResolvedValueOnce({});
        
        render(<Encounter />);

        // Act
        await userEvent.type(screen.getByLabelText('Number of Characters'), '5');
        await userEvent.type(screen.getByLabelText('Level'), '8');
        await userEvent.selectOptions(screen.getByRole('combobox'), 'Medium');
        await userEvent.click(screen.getByRole('button', { name: 'Submit' }));
        
        // Assert
        expect(screen.getByText('No encounter generated.', { selector: 'p' })).toBeInTheDocument();
    });
      
    test('Encounter passes data to display component', async () => {
        // Arrange 
        (useEncounter as jest.Mock).mockResolvedValueOnce(mockEncounterResponse);
        
        render(<Encounter />);

        // Act
        await userEvent.type(screen.getByLabelText('Number of Characters'), '5');
        await userEvent.type(screen.getByLabelText('Level'), '8');
        await userEvent.selectOptions(screen.getByRole('combobox'), 'Medium');
        await userEvent.click(screen.getByRole('button', { name: 'Submit' }));
        
        // Assert
        expect(MockEncounterSuggestions).toHaveBeenCalledWith({ encounter: mockEncounterResponse });

      
      
    });
});



