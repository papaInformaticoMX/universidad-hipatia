import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ContactanosService } from './contactanos.service';

@Component({
  selector: 'app-contactanos',
  imports: [ FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.scss'
})
export class ContactanosComponent {
  frmContactanos = new FormGroup({
    name : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    cel : new FormControl('', [Validators.required]),
    message : new FormControl('', [Validators.required])
  });

  constructor(private contactServices: ContactanosService){
  }

  
  contactanos(data: any){
    console.log(data);
    this.contactServices.sendData(data);
  }
}
