export class Language {
    name: string;
    desc: string;
    level: string;
    imageUrl: string;
    
    constructor(Name:string, Desc:string, level: string, ImageUrl:string) {
        this.name = Name;
        this.desc = Desc;
        this.imageUrl = ImageUrl
        this.level =level
    }

    getLanguageName() {
        return this.name;
    }

    getLanguageDescription() {
        return this.desc;
    }

    getLanguageLevel() {
        return this.level
    }

    getImageUrl() {
        return this.imageUrl;
    }
}
