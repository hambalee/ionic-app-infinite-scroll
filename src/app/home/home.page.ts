import { Component, OnInit } from '@angular/core';
import {StartrekService} from '../services/startrek.service';
import {Character} from '../models/characters'
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  characters: Character[] = [];
  hasNext: boolean = false;
  page: number = 0;
  private infiniteScroll: IonInfiniteScroll;

  constructor( private startrekService: StartrekService) {}

  ngOnInit(){
    this.startrekService.loadCharacters(this.page).subscribe(
      data => {
        this.hasNext = data.hasNext;
        this.characters = [...this.characters, ...data.characters];
        this.notifyScrollComplete();
      }
    )
  }

  load(event){
    this.page ++;
    this.startrekService.loadCharacters(this.page).subscribe(
      data => {
        this.hasNext = data.hasNext;
        this.characters = [...this.characters, ...data.characters];
        this.notifyScrollComplete();
      }
    )
    this.infiniteScroll = event.target;
  }


  notifyScrollComplete() {
    if (this.infiniteScroll) {
      this.infiniteScroll.complete();
    }
  }

}
