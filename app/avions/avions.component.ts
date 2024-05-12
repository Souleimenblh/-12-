import { Component, OnInit } from '@angular/core';
import { Avion } from '../model/avion.model';
import { AvionService } from '../services/avion.service';

@Component({
  selector: 'app-avions',
  templateUrl: './avions.component.html',
})
export class AvionsComponent implements OnInit {
  // supprimerAvion(_t13: Avion) {
  //   throw new Error('Method not implemented.');
  // }
  avions?: Avion[]; //un tableau des avions

  constructor(private avionService: AvionService) {
    //this.avions = [];
  }
  ngOnInit(): void {
   // this.avions = this.avionService.listeAvions();

   this.avionService.listeAvion().subscribe(avios => {
    console.log(avios);
    this.avions = avios;
    });
    
  }

  supprimerAvion(avio: Avion) {
    //console.log(avio);
    //this.avionService.supprimerAvion(avio);
    let conf = confirm('Etes-vous sûr ?');
    if (conf) this.avionService.supprimerAvion(avio);
    this.avionService.supprimerAvion(avio);
  }
}
