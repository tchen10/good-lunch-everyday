export class MockAngularFireDatabase {
    path: string;
    dbList: MockFirebaseList;

    list(path: string): MockFirebaseList {
        this.path = path;
        this.dbList = new MockFirebaseList();
        return this.dbList;
    }
}

class MockFirebaseList {
    valueChangesCalled: boolean = false;
    values = [];

    valueChanges() {
        this.valueChangesCalled = true;
    }

    push(value) {
        this.values.push(value);
    }
}