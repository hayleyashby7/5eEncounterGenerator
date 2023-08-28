import useEncounter from './useEncounter';
import { EncounterFormData } from '../components/encounter_form/encounter_form';
import { mockEncounterResponse} from '../mocks/mockMonsterData';
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
            expect(response.challengeRating).toEqual(expected);
        });

        test('returns monsters for the encounter', async () => {
            // Arrange
            const expected = mockEncounterResponse.monsters;

            // Act
            const response = await useEncounter(data);

            // Assert
            expect(response.monsters).toEqual(expected);
        });
    
    });

    describe('when passed invalid form data', () => {
        test('throws an error when the response is not 200', async () => {
            const data: EncounterFormData = {
                characters: 3,
                level: -50,
                difficulty: 'Easy',
            };

            const response = useEncounter(data);

            expect(response).rejects.toThrow('Request failed with status code 400');
        });
    });
});
