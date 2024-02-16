import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alumno } from 'src/app/interface/alumnos-interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html'
})
export class TablaComponent  implements OnInit {

  @Input() alumnosList:Alumno[] =[];
  @Output() eliminar: any = new EventEmitter<Alumno>();
  @Output() editar:  any = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {}

}