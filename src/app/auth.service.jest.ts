import { AuthService } from './auth.service';
import { DateService } from './date.service';
import { createService } from '@netbasal/spectator/jest';

describe('AuthService', () => {
  it('should ', () => {
    expect(true).toBeTruthy();
  });
  const spectator = createService({
    service: AuthService,
    mocks: [DateService]
  });
  // it('should not be logged in', () => {
  //   const dateService = spectator.get(DateService);
  //   dateService.isExpired.mockReturnValue(true);
  //   expect(spectator.service.isLoggedIn()).toBeFalsy();
  // });

  // it('should be logged in', () => {
  //   const dateService = spectator.get(DateService);
  //   dateService.isExpired.mockReturnValue(false);
  //   expect(spectator.service.isLoggedIn()).toBeTruthy();
  // });
});
