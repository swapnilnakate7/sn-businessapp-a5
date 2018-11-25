export class Service {
    public name: string;
    public description: string;
    private price: number;

    constructor(nameTobeSet: string, descriptionTobeSet: string) {
        this.name = nameTobeSet;
        this.description = descriptionTobeSet;
    }
}
