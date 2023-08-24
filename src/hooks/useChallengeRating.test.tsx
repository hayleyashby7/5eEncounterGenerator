import { useChallengeRating } from './useChallengeRating';
import { EncounterFormData } from '../components/encounter_form/encounter_form';


describe('useChallengeRating', () => {
    describe('when passed valid form data', () => {
        const data: EncounterFormData = {
            characters: 3,
            level: 1,
            difficulty: 'Easy',
        };

        test('returns a challenge rating', async () => {
            // Arrange
            const expected = { challenge_rating: 1 };

            // Act
            const response = await useChallengeRating(data);

            // Assert
            expect(response).toEqual(expected);
        });

        test('returns a numberic challenge rating', async () => {
            // Act
            const response = await useChallengeRating(data);

            // Assert
            expect(typeof response.challenge_rating).toEqual('number');
        });
    });

    describe('when passed invalid form data', () => {
        test('returns nothing when the response is not 200', async () => {
            const data: EncounterFormData = {
                characters: 3,
                level: -50,
                difficulty: 'Easy',
            };

            const response = await useChallengeRating(data);

            expect(response).toEqual(null);
        });
    });
});
