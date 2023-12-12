import { envs } from '../src/config/envs';
import { Server } from '../src/presentation/server';

jest.mock('../src/presentation/server');

describe('Should call server with argumetns and start', () => {
  test('should work', async () => {
    await import('../src/app');
    expect(Server).toHaveBeenCalledTimes(1);
    expect(Server).toHaveBeenLastCalledWith({
      port: envs.PORT,
      public_path: envs.PUBLIC_PATH,
      routes: expect.any(Function),
    });

    expect(Server.prototype.start).toHaveBeenCalledWith();
  });
});
