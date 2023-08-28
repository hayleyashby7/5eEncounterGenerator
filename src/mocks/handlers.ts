import { rest } from 'msw';
import { mockEncounterResponse } from '../mocks/mockMonsterData';

export const handlers = [
    // Get challenge rating from form data
    rest.post(`https://ddeg-api.cyclic.cloud/api/encounter`, async (req, res, ctx) => {
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
            ctx.json(mockEncounterResponse),
           );
    }),   
];

export default handlers;
