import { Component, OnInit } from '@angular/core';
import { Model } from '../../Model/model';

@Component({
  selector: 'app-hometable',
  templateUrl: './hometable.component.html',
  styleUrls: ['./hometable.component.css']
})
export class HometableComponent implements OnInit {

  modelObj:Model[] = [];

  constructor() { 
    
    this.modelObj =
      [ {id:1 , Thaat:"Bilaval" , Mode:"Ionian"},
        {id:1 , Thaat:"Kalyan" , Mode:"Lydian"},
        {id:1 , Thaat:"Khamaj" , Mode:"Mixolydian"},
        {id:1 , Thaat:"Bhairav" , Mode:"Double Harmonic"},
        {id:1 , Thaat:"Kafi" , Mode:"Dorian"},
        {id:1 , Thaat:"Asavari" , Mode:"Aeolian"},
        {id:1 , Thaat:"Bhairavi" , Mode:"Phrygian"},
        {id:1 , Thaat:"Poorvi" , Mode:"-"},
        {id:1 , Thaat:"Marva" , Mode:"Lydian B2"},
        {id:1 , Thaat:"Todi" , Mode:"-"}]
  }

  ngOnInit(): void {
  }

}
