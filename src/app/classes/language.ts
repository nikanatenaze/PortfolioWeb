export class Language {
    name: string;
    desc: string;
    imageUrl: string;
    constructor(Name:string, Desc:string, ImageUrl:string) {
        this.name = Name;
        this.desc = Desc;
        this.imageUrl = ImageUrl
    }

    getLanguageName() {
        return this.name;
    }

    getLanguageDescription() {
        return this.desc;
    }

    getImageUrl() {
        return this.imageUrl;
    }
}
