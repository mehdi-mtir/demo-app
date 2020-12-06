import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenu dans notre première application!*******';
  logo = "assets/logoBlack.png";
  jours = ["Lundi", "Mardi", "Mercredi", "..."]


  showMessage(){
    return ("Message de test");
  }

  joursFiltered(){
    return this.jours.filter(
      value => value != "Lundi"
    );
  }

  changeImage(){
    if (this.logo == "assets/logoBlack.png"){
      this.logo = "assets/angular.png";
    }
    else{
      this.logo = "assets/logoBlack.png";
    }
  }
}
