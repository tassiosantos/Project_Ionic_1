import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NovaviagemPage } from '../novaviagem/novaviagem';
import { NovaViagemProvider } from '../../providers/globaldataprovider/globaldataprovider';


@Component({
  selector: 'page-front',
  templateUrl: 'front.html',

})

export class FrontPage {


  viagens: any;


  constructor(
    public navCtrl: NavController,
    // public navParams: NavParams
    public travelist: NovaViagemProvider,
   ) {

  }




 goToTeste(){
   this.navCtrl.push(NovaviagemPage)
 }

 public getTravel(){
   
  //  name: this.viagens.nome;
  //  descri: this.viagens.descri;
   }


}
