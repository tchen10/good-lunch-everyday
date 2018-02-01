import { Observable } from 'rxjs/Observable';

export class MockAuthService {
    user: Observable<any>;
    loginWithGoogle() {}
    logOut() {}
}