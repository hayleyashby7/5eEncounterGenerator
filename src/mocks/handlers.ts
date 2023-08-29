import { rest } from 'msw';
import { mockEncounterResponse, mockEncounterResponseNoMonsters } from './mockData';
import { EncounterFormData } from '../types/encounter.types';

export const handlers = [
    // Get challenge rating from form data
    rest.post(`https://ddeg-api.cyclic.cloud/api/encounter`, async (req, res, ctx) => {
        const testData: EncounterFormData = {
            characters: 3,
            level: 1,
            difficulty: 'Easy',
        };
        const blankData: EncounterFormData = {
            characters: 0,
            level: 0,
            difficulty: 'Easy',
        };

        const data = await req.text();
        if (data !== JSON.stringify(testData)) {

            if (data === JSON.stringify(blankData)) {
                return res(
                    ctx.status(200),
                    ctx.json(mockEncounterResponseNoMonsters),
                );
            }
            else {
                return res(
                    ctx.status(400),
                    ctx.json({
                        message: 'No encounter generated',
                    }),
                );
            }
        }   

        return res(
            ctx.status(200),
            ctx.json(mockEncounterResponse),
           );
    }),   
];

export default handlers;
