import { AuthService } from './auth.service';
import { MockAngularFireAuth } from './../../../spec_helpers/mock_angular_fire_auth';
import { MockRouter } from './../../../spec_helpers/mock_router';

describe('AuthService', () => {
  let authService;
  let mockFirebaseAuth, mockRouter;

  beforeEach(() => {
    mockFirebaseAuth = new MockAngularFireAuth()
    mockRouter = new MockRouter();
    authService = new AuthService(mockFirebaseAuth, mockRouter);
  });

  describe('loginWithGoogle', () => {
    it('should call signInWithPopup', () => {
      spyOn(mockFirebaseAuth.auth, 'signInWithPopup');

      authService.loginWithGoogle();

      expect(mockFirebaseAuth.auth.signInWithPopup).toHaveBeenCalled();
    });
  });

  describe('logout', () => {
    it('should call signout', () => {
      spyOn(mockFirebaseAuth.auth, 'signOut');

      authService.logOut();

      expect(mockFirebaseAuth.auth.signOut).toHaveBeenCalled();
    });
  });
});
