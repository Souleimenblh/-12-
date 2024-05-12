import { Component, OnInit } from '@angular/core';
import { AvionService } from '../services/avion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Avion } from '../model/avion.model';
import { Type } from '../model/Type.model';

@Component({
  selector: 'app-update-avion',
  templateUrl: './update-avion.component.html',
  styles: [],
})
export class UpdateAvionComponent implements OnInit {
  currentAvion = new Avion();
  types!: Type[];
  updatedTypId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private avionService: AvionService
  ) {}

  ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.params['id']);

    //this.types = this.avionService.listeTypes();

    this.currentAvion = this.avionService.consulterAvion(
      this.activatedRoute.snapshot.params['id']
    );
    //console.log(this.currentAvion);
    this.updatedTypId = this.currentAvion.type.idTyp;
  }

  updateAvion() {
    //console.log(this.currentAvion);
    
    //this.currentAvion.type = this.avionService.consulterType(this.updatedTypId);

    this.avionService.updateAvion(this.currentAvion);
    this.router.navigate(['avions']);
  }
}
