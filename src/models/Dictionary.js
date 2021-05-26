export default class Dictionary {
    constructor(NK, SK, mean) {
        this.NK = NK;
        this.SK = SK;
        this.mean = mean;
    }

    get_dic() {
        return {
            id: this.NK,
            south: this.SK,
            mean: this.mean,
        };
    }
}
