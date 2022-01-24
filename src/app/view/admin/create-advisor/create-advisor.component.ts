import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdvisorsService } from 'src/app/services/advisors.service';

@Component({
  selector: 'app-create-advisor',
  templateUrl: './create-advisor.component.html',
  styleUrls: ['./create-advisor.component.scss'],
})
export class CreateAdvisorComponent implements OnInit {
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private advisorService: AdvisorsService,
    private router: Router
  ) {}

  advisorForm = this.fb.group({
    name: ['', Validators.required],
    firstname: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    username: ['', Validators.required],
  });

  ngOnInit(): void {}

  submit() {
    if (this.advisorForm.dirty && this.advisorForm.valid) {
      this.advisorService.createAdvisor(this.advisorForm.value).subscribe(
        (res) => {
          this.router.navigate(['/adm/advisors']);
        },
        (err) => {
          console.log(err);
        }
      );
      this.submitted = true;
    } else {
      console.log('Formulaire non valide');
    }
  }

  get name(): any {
    return this.advisorForm.get('name');
  }

  get firstname(): any {
    return this.advisorForm.get('firstname');
  }

  get email(): any {
    return this.advisorForm.get('email');
  }

  get password(): any {
    return this.advisorForm.get('password');
  }

  get username(): any {
    return this.advisorForm.get('password');
  }
}
