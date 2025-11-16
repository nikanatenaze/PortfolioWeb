export class ProjectCardData {
    projectTitle: string
    projectDesc: string
    projectAccess:any
    githubUrl: any
    imageUrl:string
    projectLanguage:any
    uploadDate:any

    constructor(Title:string, Desc:string, Acces:any, GitUrl:any, imgUrl:any, Language:any, Date:any) {
        this.projectTitle = Title
        this.projectDesc = Desc
        this.projectAccess = Acces
        this.githubUrl = GitUrl
        this.imageUrl = imgUrl
        this.projectLanguage = Language
        this.uploadDate = Date
    }
}
