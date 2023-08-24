import useMonsters from './useMonsters';
import { mockChallengeRatingList, mockFullList } from '../mocks/mockMonsterData';

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

    test('when not passed a challenge rating it returns a list of all monsters', async () => {
        // Arrange
        const expected = { monsters: mockFullList };
    
        // Act
        const response = await useMonsters();
    
        // Assert
        expect(response).toEqual(expected);
    });

    test('when passed an invalid challenge rating it returns null', async () => {
        // Arrange
        const challenge_rating = -24;
        const expected = null;
    
        // Act
        const response = await useMonsters(challenge_rating);
    
        // Assert
        expect(response).toEqual(expected);
    });
});