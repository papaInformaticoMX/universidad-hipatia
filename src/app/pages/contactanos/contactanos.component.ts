import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ContactanosService } from './contactanos.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contactanos',
  imports: [ CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.scss'
})
export class ContactanosComponent {
  private _snackBar = inject(MatSnackBar);
  statusForm = signal('Enviar');
  frmContactanos = new FormGroup({
    name : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    cel : new FormControl('', [Validators.required]),
    message : new FormControl('', [Validators.required])
  });

  btnStatus = computed(()=> this.statusForm() == "<i>Enviando....</i>");

  constructor(private contactServices: ContactanosService){
  }

  
  contactanos(data: any){
    this.statusForm.set("<i>Enviando....</i>");
    console.log(data);
    this.contactServices.sendData(data).subscribe({
      next: (resp)=>{
        debugger;
        this._snackBar.open("Nos pondremos en contacto contigo en la brevedad");
        this.frmContactanos.reset({name:'', email:'', cel:'', message:''});
      },
      error: console.error,
      complete:()=>{
        this.statusForm.set("Enviado");
        setTimeout(()=>{
          this.statusForm.set("Enviar");
        }, 3000)
      }
    });
  
  }
}
