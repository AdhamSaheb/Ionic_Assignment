import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {



  constructor(private storage : Storage , private router : Router) {


   }

  ngOnInit() {

  }

  register(form) {


    if(form.valid ){

      this.storage.set('name', form.value['name']); 
      this.storage.set('lastName', form.value['last-name']); 
      this.storage.set('email', form.value['email']); 
      this.storage.set('password', form.value['password']); 
      this.router.navigateByUrl('home');
      
    }

    
  }


}
