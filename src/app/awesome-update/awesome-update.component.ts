import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AwesomeService } from '../awesome-service.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-awesome-update',
  templateUrl: './awesome-update.component.html',
  styleUrls: ['./awesome-update.component.css']
})
export class AwesomeUpdateComponent implements OnInit {

  id!: number;
  awesomeForm!: FormGroup;

  constructor(
    private awesomeService: AwesomeService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.initForm();
    });
  }

  private initForm() {
    this.awesomeService
      .getAwesome(this.id)
      .pipe(first())
      .subscribe((awesome) => {
        console.log(awesome);
        this.awesomeForm = this.fb.group({
          tag: [awesome?.tag],
          url: [awesome?.url],
          descriptions: [awesome?.descriptions],
        });
      });
  }

  onSubmit() {
    this.awesomeService.update(this.id, this.awesomeForm.value);
  }
}

