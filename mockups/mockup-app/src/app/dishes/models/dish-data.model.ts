export class DishDataModel {
    id: number = 0;
    title: string = '';
    subtitle: string = '';
    image: string = '';
    content: string = '';
    featured: boolean = false;

    constructor(id: number, title: string, subtitle: string, image: string, content: string, featured: boolean) {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.image = image;
        this.content = content;
        this.featured = featured;
    }
}