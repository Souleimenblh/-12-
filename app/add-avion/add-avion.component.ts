import { Component, OnInit } from '@angular/core';
import { Avion } from '../model/avion.model';
import { AvionService } from '../services/avion.service';
import { Type } from '../model/Type.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-avion',
  templateUrl: './add-avion.component.html',
})
export class AddAvionComponent implements OnInit {
  newAvion = new Avion();
  types!: Type[];
  newIdTyp!: number;
  newType!: Type;

  message: string = '';

  constructor(private avionService: AvionService, private router: Router) {}
  ngOnInit(): void {
    //this.types = this.avionService.listeTypes();
  }

  addAvion() {
    console.log(this.newIdTyp);
   // this.newType = this.avionService.consulterType(this.newIdTyp);
    this.newAvion.type = this.newType;
    this.avionService.ajouterAvion(this.newAvion);
    this.router.navigate(['avions']);

    // this.message =
    //   'Avion ' + this.newAvion.matriculeAvion + ' ajouté avec succès !';
  }
}
