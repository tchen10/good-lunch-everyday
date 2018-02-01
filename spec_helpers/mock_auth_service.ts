import { Observable } from 'rxjs/Observable';

export class MockAuthService {
    user: Observable<any>;
    currentUser = {};
    loginWithGoogle() {}
    logOut() {}
}