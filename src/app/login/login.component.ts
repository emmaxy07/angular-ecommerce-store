import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  username: string;
  password: string;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { 
    this.loginForm = this.formBuilder.group({
      username: new FormControl ('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl ('', [Validators.required, Validators.minLength(5)])
    });
  }

  ngOnInit(): void {
  }

  onEnterInputField(input:HTMLInputElement) {
    input.classList.add("username");
  }

  onSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    this.http.post('https://jsonplaceholder.typicode.com/posts', this.loginForm.value)
      .subscribe((response: any) => {
        if (this.loginForm.valid) {
          this.router.navigate(['/dashboard']);
      }
    })
  }

}
