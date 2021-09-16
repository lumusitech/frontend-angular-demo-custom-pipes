import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: any[];
  constructor(private httpClient: HttpClient) {
    this.posts = [];
  }

  getAll(): Promise<any[]> {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts').toPromise();
  }
}
