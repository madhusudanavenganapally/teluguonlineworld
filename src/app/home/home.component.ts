import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
whatsappLink: string;

  constructor() {
    // Base64 encoded phone number
    const base64Phone = "OTE3NDA2MjAyMjIwMg==";
    const phoneNumber = atob(base64Phone);
    this.whatsappLink = `https://wa.me/${phoneNumber}`;
  }
}
