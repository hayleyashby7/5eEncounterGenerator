import { server } from './src/mocks/server';
import './src/utils/constants';

jest.mock('./src/utils/constants', () => ({
    API_KEY: 'test-api-key',
}));

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => {
    jest.clearAllMocks();
    server.close();
});