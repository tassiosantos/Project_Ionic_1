import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';



/**
 * Generated class for the ViagemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viagem',
  templateUrl: 'viagem.html',
})
export class ViagemPage {
// viagem : any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private nativeStorage: NativeStorage) {
  }



  // public getTravel(viagem){
  //   this.viagens;
  //   this.presentToast(2);
  //   }




  ionViewDidLoad() {
    console.log('ionViewDidLoad ViagemPage');
  }

}
