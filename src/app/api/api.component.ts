import { Component, OnInit } from '@angular/core';
import { ApiService, Post } from '../api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  posts : Post[];


  constructor(private service : ApiService) { }

  addPost(){
    this.service.addPost(new Post(1, 5, "title 1", "body 1"));
  }

  editPost(id : number){
    this.service.editPost(id, this.posts[id]);
  }

  deletePost(id : number){
    this.service.deletePost(id);
  }

  ngOnInit(): void {
    this.service.getPosts().subscribe(
      //next
      (data) => this.posts = data,
      //error
      (error) => console.error(error),
      //complete
      () => console.log("completed!")
    )
  }

}
