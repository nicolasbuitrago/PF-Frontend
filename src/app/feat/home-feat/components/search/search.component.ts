import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
// import { Search } from '@app/shared/interfaces/search.model';
import { ResourceType } from '@shared/interfaces/component-item.model';
import { DataComponent } from '@shared/interfaces/data-component.model';
import { ContentService } from '@core/services/content.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private form: FormGroup;
  @Input() resourceType: string;
  @Output() data = new EventEmitter<DataComponent[]>();
  tags: string[];

  constructor(
    private formBuilder: FormBuilder,
    private contentService: ContentService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      search: ['', Validators.required],
      newest: ['false'],
      filter: ['']
    });
    if (this.haveTags) {
      this.getTags();
    }
  }

  get haveTags() {
    return this.resourceType === ResourceType.STUDIO || this.resourceType === ResourceType.GAME;
  }

  get getForm() {
    return this.form;
  }

  getTags() {
    this.contentService.getTags(this.resourceType).subscribe(
      (tags: string[]) => {
        this.tags = tags;
      },
      (err) => {
        this.tags = [];
        console.log('Err ' + err);
      }
    );
  }

  search() {
    if (this.form.invalid) {
      return;
    }
    console.log('Enviando');
    this.contentService.search(
      this.resourceType,
      this.form.value.search,
      this.form.value.filter,
      this.form.value.newest
    ).subscribe(
      (data: DataComponent[]) => {
        this.data.emit(data);
      },
      (err) => {
        console.log('Err = ' + err);
      }
    );
  }

}
