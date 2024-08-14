export class Noticia {
  constructor(
    public title: string,
    public org: string,
    public createdAt: string,
    public lide: string,
    public isRead: boolean,
    public score: number
  ) { }
}