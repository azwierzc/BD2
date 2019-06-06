import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {serverAddress} from '../../assets/server.constant';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  formData: FormData;
  submitted = false;


  constructor(private http: HttpClient,
              private router: Router,
              private formBuilder: FormBuilder
              ) {
  }


  ngOnInit() {
    this.formData = new FormData();
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.formData.append('username', this.f.username.value);
    this.formData.append('password', this.f.password.value);
    this.http.post(serverAddress + '/login', this.formData)
      .toPromise()
      .then(() => this.router.navigate(['']))
      .catch(reason => this.submitted = false);
  }
}
