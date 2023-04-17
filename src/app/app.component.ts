import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang20app';
  posts:any=[];
  newPost:any={
    title:'',
    author:''
  }
  edPost:any={
    title:'',
    author:'',
    id:''
  }
  editFlag:boolean=false;
  constructor(public http:HttpClient) {
    this.getPosts()
  }
  getPosts(){
    this.http.get("http://localhost:3000/posts").subscribe((allposts:any)=>{
      this.posts = allposts.reverse();
    })
  }
  addPost(){
    console.log(this.newPost)
    this.http.post("http://localhost:3000/posts",{...this.newPost}).subscribe((resp)=>{
      this.getPosts()
    })
  }
  deletePost(id:string){
    this.http.delete("http://localhost:3000/posts/"+id).subscribe((res)=>{
      console.log(res)
      this.getPosts();
    })
  }
  editPost(post:any){
    this.editFlag=true;
    this.edPost=post
  }
  updatePost(){
    this.http.put("http://localhost:3000/posts/"+this.edPost.id,{...this.edPost})
    .subscribe((resp)=>{
      this.getPosts()
    })
  }
}
