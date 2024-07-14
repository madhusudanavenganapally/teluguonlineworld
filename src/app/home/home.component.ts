import { Component } from '@angular/core';
import { FlyerComponent } from "../flyer/flyer.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FlyerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
