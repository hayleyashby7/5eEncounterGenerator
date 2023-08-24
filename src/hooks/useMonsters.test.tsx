import useMonsters from './useMonsters';
import { mockChallengeRatingList } from '../mocks/mockMonsterData';

describe('useMonsters', () => {
    test('when passed a challenge rating it returns a list of monsters', async () => {
            // Arrange
            const challenge_rating = 10;
            const expected = { monsters: mockChallengeRatingList };

            // Act
            const response = await useMonsters(challenge_rating);        

            // Assert
            expect(response).toEqual(expected);
    });
    
    test('when passed a challenge rating the returned list has the correct challenge rating', async () => {
        // Arrange
        const challenge_rating = 10;
    
        // Act
        const response = await useMonsters(challenge_rating);
    
        // Assert
        response.monsters.forEach((monster: { challenge_rating: number; }) => {
            expect(monster.challenge_rating).toEqual(challenge_rating);
        });
        
    });
});