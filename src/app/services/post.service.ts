import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class PostService {

    postList: Array<any> = [
        {
            id: 1,
            title: 'post 1'
        },
        {
            id: 2,
            title: 'post 2'
        },
        {
            id: 3,
            title: 'post 3'
        }
    ];

    addPost(post: any) {
        this.postList.push(post);
    }
}