export default class Dictionary{
    constructor(north, south, mean){
        this.north = north
        this.south = south
        this.mean = mean
    }

    get_dic(){
        return{
            id: this.north,
            south : this.south,
            mean : this.mean
        }
    }
}