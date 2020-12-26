import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http : HttpClient) {

   }

   //Pour récupérer des données à partir du serveur :

   // 1. REST API : Une route pour chaque type d'action (plusieurs endpoints)

   //   1.1. URL (endpoint) exemple : https://jsonplaceholder.typicode.com/posts
   //   1.2. Methode Http : GET (lire), POST (ajout), PUT ou PATCH (update), DELETE (suppression)
   //   1.3. Head : metadonnees (url, status, authorization, content-type ...)
   //   1.4. Body : data

   // 2. GraphQl : Une seule route (endpoint) + requete indiquant les donnees a récupérer
   getPosts(): Observable<Post[]>{
     return this.http
      .get<Post[]>(this.baseUrl + '/posts')
      .pipe(
        map(
          (data : Post[]) => data.filter(post => post.userId <= 3)
        )
      );
   }

   addPost(post : Post){
     this.http.post(this.baseUrl+'/posts', post)
     .subscribe(
       (post)=>{
         console.log(post);
       }
     );
   }

   editPost(id : number, post : Post){
     this.http.put(`${this.baseUrl}/posts/${id}`, post)
     .subscribe(
      (post)=>{
        console.log(post);
      }
    );;
   }

   deletePost(id : number){
     this.http.delete(`${this.baseUrl}/posts/${id}`)
     .subscribe(
      (post)=>{
        console.log(post);
      }
    );;
   }

}

export class Post{
  userId : number;
  id : number;
  title : string;
  body : string

  constructor(userId : number, id : number, title : string, body : string){
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;

  }
}
