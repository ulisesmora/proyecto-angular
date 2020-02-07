export class Project{
    public _id:string;
    public name:string;
    public description:string;
    public category:string;
    public year: number;
    public langs: string;
    public image: string;

    constructor(_id:string, name:string,description:string, category:string,year:number,langs:string, image:string){
        this._id = _id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.year = year;
        this.langs = langs;
        this.image = image;

    }

    
}