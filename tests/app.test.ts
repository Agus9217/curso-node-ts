import { Server } from '../src/presentation/server'

jest.mock('../src/presentation/server')


describe('testing App.ts', () => {
  test('should work', async () => {
    await import ('../src/app')
  });
});
