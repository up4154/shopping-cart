import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankYouComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToHomepage(): void {
    this.router.navigate(['/home']); 
  }
}