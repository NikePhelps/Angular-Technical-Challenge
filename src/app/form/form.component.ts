import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpService } from '../http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public searchForm: FormGroup;
  public weatherValues: any;

  constructor(private formBuilder: FormBuilder,
              private http: HttpService) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      location: [""]
    });
  }

  getWeatherValues(formValues: Location) {
    this.http.getWeather(formValues.location).subscribe(data => {
      this.weatherValues = data
    });
  }

}
