import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}


})
export class SignupComponent implements OnInit {

  state: string = '';
  error: any;

  constructor(public af: AngularFire,private router: Router) {

  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      console.log(formData.value.name);
      this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
        console.log(success);
        console.log(success.auth.email);
        success.auth.updateProfile({
          displayName: formData.value.name,
          photoURL: null
        }).then(function() {
          // Update successful.
        }, function(error) {
          // An error happened.
        });
        this.router.navigate(['/login']);
        console.log(firebase.auth().currentUser);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }  
    }


  ngOnInit() {
  }

}
