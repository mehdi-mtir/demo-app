import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }

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

  ngOnInit(): void {
  }

}
