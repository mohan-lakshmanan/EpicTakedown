import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})

export class MembersComponent implements OnInit {

  name: any;
  state: string = '';

  constructor(public af: AngularFire,private router: Router) {

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
        console.log(this.name.displayName);
        console.log(this.name);

      }
    });

  }

  logout() {
     this.af.auth.logout();
     console.log('logged out');
     this.router.navigateByUrl('/login');
  }
  doctorvisit() {
    console.log('Clicked on Doctor Visit History');
  }
  insurance() {
    console.log('Clicked on Insurance');
  }
  vaccination() {
    console.log('Clicked on vaccination');
  }


  ngOnInit() {
  }

}


