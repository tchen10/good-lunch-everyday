export interface IRestaurant {
    name: string
}

export class Restaurant implements IRestaurant {
    name: string

    constructor(name: string) {
        this.name = name;
    }
}