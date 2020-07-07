import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  Alert='' ;
  constructor(private  router:  Router , private storage : Storage) { }

  ngOnInit() {

  }

  login(form){
    if(form.valid) {
      this.storage.get('email').then ((val) => {
        this.storage.get('password').then((val2) => {
          if(val=== form.value['email'] && val2 === form.value['password']) this.router.navigateByUrl('home')
          else {
            this.Alert= 'wrong email or password ';
          }

        })
      })
    }
  }

}
