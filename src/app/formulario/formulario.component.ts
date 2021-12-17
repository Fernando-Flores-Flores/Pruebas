import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

   constructor(private router: Router, private renderer2: Renderer2) { }
  
    ngOnInit(): void {
    } 
/*     agregar(event:any){
      event.preventDefault();
      console.log("hey °!!!!");
         }  */ 
    nuevo:Personaje={
      nombre:"Trunks",
      poder:18000
    }

    agregar(){
      console.log(this.nuevo);
      
    } 

}
interface Personaje{
  nombre:string;
  poder:number;
  }