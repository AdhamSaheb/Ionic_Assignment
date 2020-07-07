import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  firstName =''; 
  lastName = '' ;

  constructor(private storage : Storage) { }

  ngOnInit() {
    this.storage.get('name').then ((name)=> {
      this.storage.get('lastName').then ((lastName)=> {
        this.firstName=name ; 
        this.lastName=lastName;
        console.log(this.lastName);
      })

    })

  }

}
