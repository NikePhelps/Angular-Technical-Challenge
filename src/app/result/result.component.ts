import { Component, OnInit, Input } from '@angular/core';
import { FormComponent } from '../form/form.component'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() weatherResults: any;


  constructor() { }

  ngOnInit(): void {
  }


}
