import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RoleTypes } from '@app/shared/interfaces/vinculate.model';
import { ContentService } from '@app/core/services/content.service';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss']
})
export class JoinUsComponent implements OnInit {

  private vinculationForm: FormGroup;
  roles = [
    RoleTypes.ACADEMY,
    RoleTypes.STUDIO,
    RoleTypes.SPONSOR,
    RoleTypes.INDEPENDANT
  ];

  constructor(
    private formBuilder: FormBuilder,
    private contentService: ContentService
  ) { }

  get role() {
    return RoleTypes;
  }

  ngOnInit(): void {
  }

  roleChange(ob) {
    const selectedRole = ob.value;


  }

}
