export class Feature{
   public title:string;
    description:string;
    url:string;

    constructor(title:string,description:string,url:string){}

    public setTitle(inputTitle:string){
        this.title=inputTitle;
    }

    public getTitle():string{
        return this.title;
    }

    
    public setDescription(inputDescription:string){
        this.description=inputDescription;
    }

    public setUrl(inputUrl:string){
        this.url=inputUrl;
    }
}