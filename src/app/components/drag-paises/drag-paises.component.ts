import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { PaisesAPIService } from '../../services/paises-api.service';

@Component({
  selector: 'app-drag-paises',
  templateUrl: './drag-paises.component.html',
  styleUrls: ['./drag-paises.component.css']
})
export class DragPaisesComponent implements OnInit {
  paises:any=[];
  constructor( private paisService: PaisesAPIService) { }

  ngOnInit(): void {
    this.paisService.consumirAPI().subscribe(paisesAPI=>this.paises=paisesAPI)
  }
  drop(evento:CdkDragDrop<any>){
    console.log(evento);
    moveItemInArray(this.paises,evento.previousIndex,evento.currentIndex);

  }

}
