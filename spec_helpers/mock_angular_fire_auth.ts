import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from "angularfire2/auth";
import { FirebaseApp } from "angularfire2";
import { FirebaseAuth } from '@firebase/auth-types';

export class MockAngularFireAuth {
    app: FirebaseApp;
    idToken: Observable<string>;
    authState = null;
    auth: MockAuth = new MockAuth();
}

class MockAuth {
    signInWithPopup() {}
    signOut() {}
}