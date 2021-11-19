import { Injectable } from '@angular/core';
import { POSTS } from './db/posts.db';
import { Post } from './interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private arrPosts: Post[];

  constructor() {

    (localStorage.getItem('posts')) ? this.arrPosts = JSON.parse(localStorage.getItem('posts')!) : this.arrPosts = POSTS;
  }

  agregar(post: Post) {
    this.arrPosts.unshift(post);
    localStorage.setItem('posts', JSON.stringify(this.arrPosts));
  }

  getAll(): Post[] {
    return this.arrPosts;
  }

  getByCategory(category: string): Post[] {
    if (category === 'todas las categorías') {
      return this.getAll();
    } else {
      return this.arrPosts.filter(post => post.categoria === category);
    }
  }

  getByName(name: string): Post[] {
    return this.arrPosts.filter(post => post.titulo.includes(name));
  }

  getCategories(): string[] {
    return [...new Set(this.arrPosts.map(post => post.categoria))];
  }


}
