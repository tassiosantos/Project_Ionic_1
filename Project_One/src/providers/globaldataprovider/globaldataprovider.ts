import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';
import { ToastController } from 'ionic-angular';


import 'rxjs/add/operator/map';

/*
  Generated class for the GlobaldataproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NovaViagemProvider{
  viagens = [];
  viagem: Viagem;


  constructor(
    private nativeStorage: NativeStorage,
    public toastCtrl: ToastController

  ) {
    this.nativeStorage.getItem('viagem').then(data => {
      console.log(data);

    }, error => {
      console.log(error);
    })
  }

  public createNewTravel(viagem:any):void{
    this.viagens.push(viagem);
    this.nativeStorage.setItem('viagem',
    this.viagem)
      .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item', error)
      );
    this.presentToast(1);
  }


  public getTravel(){
    this.viagens;
    this.presentToast(2);
    }


    presentToast(x:number) {
     if (x == 1){
        let toast = this.toastCtrl.create({
          message: 'Travel was added successfully',
          duration: 3000});
          toast.present();}
     else if (x == 2){
        let toast = this.toastCtrl.create({
              message: 'Travel was recovered successfully',
              duration: 3000});
              toast.present();}}
}


export class Viagem{
  nome: any;
  descri: any;


  constructor(
    nome:string, descri:string
  ) {
    this.nome = nome;
    this.descri = descri;
  }

}
