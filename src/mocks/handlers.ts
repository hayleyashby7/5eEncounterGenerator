import { rest } from 'msw';
import { mockChallengeRatingList, mockFullList } from './mockMonsterData';

export const handlers = [
    // Get challenge rating from form data
    rest.post(`https://ddeg-api.cyclic.cloud/api/challenge_rating`, async (req, res, ctx) => {
        const testData = {
            characters: 3,
            level: 1,
            difficulty: 'Easy',
        };

        if ((await req.text()) !== JSON.stringify(testData)) {
            return res(
                ctx.status(400),
                ctx.json({
                    message: 'Invalid request body',
                }),
            );
        }

        return res(
            ctx.status(200),
            ctx.json({
                challenge_rating: 1,
            }),
        );
    }),

    // Get monsters from challenge rating or all monsters if no challenge rating
    rest.get(`https://ddeg-api.cyclic.cloud/api/monsters`, async (req, res, ctx) => {
        const challenge_rating = req.url.searchParams.get('challenge_rating');
   
        if (!challenge_rating) return res(
            ctx.status(200),
            ctx.json({
                monsters: mockFullList,
            }),
        );

        else return res(
            ctx.status(200),
            ctx.json({
                monsters: mockChallengeRatingList
            }),
        );
    }),
];

export default handlers;
