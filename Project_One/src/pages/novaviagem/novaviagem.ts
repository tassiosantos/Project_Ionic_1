import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { NovaViagemProvider } from '../../providers/globaldataprovider/globaldataprovider';
/**
 * Generated class for the NovaviagemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-novaviagem',
  templateUrl: 'novaviagem.html',

})

export class NovaviagemPage {

nome: string;
descri: string;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    public novaViagem: NovaViagemProvider,
    ) {}


createNewTravel(viagem:any):void{
      this.novaViagem.createNewTravel(
        {
          nome: this.nome,
          descri: this.descri
        })
    }




  ionViewDidLoad() {
    console.log('ionViewDidLoad NovaviagemPage');
  }

}
