import { Component, OnInit } from '@angular/core';
import { Awesome } from '../awesome';
import { AwesomeService} from '../awesome-service.service';

@Component({
  selector: 'app-awesome-list',
  templateUrl: './awesome-list.component.html',
  styleUrls: ['./awesome-list.component.css'],
})
export class AwesomeListComponent implements OnInit {
  awesomes!: Awesome[];

  constructor(private awsService: AwesomeService ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.awsService
      .getAll()
      .subscribe((res) => {
        this.awesomes = res;
      });
  }
  delete(id:any){
    this.awsService.delete(id).subscribe(
      data => {
        console.log(data);
        this.getAll();
      },
      error => console.log(error));

  }
}
