const service = [];
 
module.exports= class Service{
 
    constructor(name, image){
        this.name = name;
        this.image = image;
    }
    save(){
        service.push(this);
    }
    static getAll(){
        return service;
    }
}

