import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-front',
  templateUrl: 'front.html'
})
export class FrontPage {



  constructor(
    public navCtrl: NavController,
    // public navParams: NavParams
  ) {

  }

  goToSingin(){
    this.navCtrl.push(SigninPage)
  }

  goToSignup(){
    this.navCtrl.push(SignupPage)
  }

}
