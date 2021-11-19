import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrPosts: Post[];
  arrCategories: string[];

  constructor(private postsService: PostsService) {

    this.arrPosts = [];
    this.arrCategories = [];
  }

  ngOnInit(): void {
    this.arrPosts = this.postsService.getAll();
    this.arrCategories = this.postsService.getCategories().sort();
  }

  onClick($event: any) {
    this.arrPosts = this.postsService.getByCategory($event.target.innerText.toLowerCase());
    const inputBusqueda = <HTMLInputElement>document.getElementById('busqueda');
    inputBusqueda.value = '';
    setTimeout(() => {
      scrollTo(0, 0);
    }, 1);
  }

  onInput($event: any) {
    this.arrPosts = this.postsService.getByName($event.target.value);
  }

}
