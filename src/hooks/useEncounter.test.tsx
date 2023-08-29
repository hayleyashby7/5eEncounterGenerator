import useEncounter from './useEncounter';
import { EncounterFormData } from '../types/encounter.types';
import { mockEncounterResponse} from '../mocks/mockData';
describe('useEncounter', () => {
    describe('when passed valid form data', () => {
        const data: EncounterFormData = {
            characters: 3,
            level: 1,
            difficulty: 'Easy',
        };

        test('returns a challenge rating', async () => {
            // Arrange
            const expected = mockEncounterResponse.challengeRating;

            // Act
            const response = await useEncounter(data);

            // Assert
            expect(response?.challengeRating).toEqual(expected);
        });

        test('returns monsters for the encounter', async () => {
            // Arrange
            const expected = mockEncounterResponse.monsters;

            // Act
            const response = await useEncounter(data);

            // Assert
            expect(response?.monsters).toEqual(expected);
        });

        test('returns null if no monsters are returned', async () => {
            // Arrange
            const expected = null;
            const blankData: EncounterFormData = {
                characters: 0,
                level: 0,
                difficulty: 'Easy',
            };

            // Act
            const response = await useEncounter(blankData);

            // Assert
            expect(response).toEqual(expected);
        });
    
    });

    describe('when passed invalid form data', () => {
        test('throws an error with server message when the response is not 200', async () => {
            // Arrange
            const expected = null;
            const data: EncounterFormData = {
                characters: 3,
                level: -50,
                difficulty: 'Easy',
            };
            const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

            // Act
            const response = await useEncounter(data);

            // Assert
            expect(response).toEqual(expected);
            expect(errorSpy).toHaveBeenCalledWith('No encounter generated');
        });
    });
});
