import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AwesomeService } from '../awesome-service.service';

@Component({
  selector: 'app-awesome-add',
  templateUrl: './awesome-add.component.html',
  styleUrls: ['./awesome-add.component.css']
})
export class AwesomeAddComponent implements OnInit {
  myForm = new FormGroup({
    tag : new FormControl(),
    url: new FormControl(),
    descriptions : new FormControl()
  })

  constructor(private awsService: AwesomeService) {}

  ngOnInit(): void {
  }
  onSubmit(){
   
    this.awsService.create(this.myForm.value).subscribe
  }

}
