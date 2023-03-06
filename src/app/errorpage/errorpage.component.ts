import { ActivatedRoute, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent implements OnInit {

  errorMsg: string
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.errorMsg = this.route.snapshot.data['message'];
    this.route.data.subscribe((data: Data) => {
      this.errorMsg = data['message'];
    })
  }

}
