import { Component, OnInit, Input } from '@angular/core';
import { DataItem } from '@shared/interfaces/data-item.model';
import { Register } from '@shared/interfaces/register.model';

/* REGISTRO DE NUEVO ESTUDIO */
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit, DataItem {

  @Input() data: Register;

  constructor() { }

  ngOnInit(): void {
  }

}
