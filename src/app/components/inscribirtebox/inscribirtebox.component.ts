import { Component, computed, inject, signal } from '@angular/core';
import { ContactanosService } from '../../pages/contactanos/contactanos.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-inscribirtebox',
  imports: [CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './inscribirtebox.component.html',
  styleUrl: './inscribirtebox.component.scss'
})
export class InscribirteboxComponent {
  private _snackBar = inject(MatSnackBar);
    statusForm = signal('Enviar');
    frmContactanos = new FormGroup({
      name : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required, Validators.email]),
      cel : new FormControl('', [Validators.required]),
      carrera : new FormControl('', [Validators.required])
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
          this._snackBar.open("En breve recibirás atención de un representante.");
          this.frmContactanos.reset({name:'', email:'', cel:'', carrera:''});
        },
        error: console.error,
        complete:()=>{
          this.statusForm.set("En breve recibirás atención de un representante.");
          setTimeout(()=>{
            this.statusForm.set("Enviar");
          }, 3000)
        }
      });
    
    }

}
