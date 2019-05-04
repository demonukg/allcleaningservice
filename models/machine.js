const machines = [];

module.exports= class Machine{
 
    constructor(name, description, image, category){
        this.name = name;
        this.description = description;
        this.image = image;
        this.category = category;
    }
    save(){
        machines.push(this);
    }
    static getAll(){
        return machines;
    }
}