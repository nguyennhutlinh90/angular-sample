import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  id: number | undefined;
  isEdit: boolean | undefined;
  title: string | undefined;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = +(params.get('id') || '0');
      this.isEdit = this.id > 0;
      this.title = this.isEdit ? `Update User - ${this.id}` : 'New User';
    })
  }

}
