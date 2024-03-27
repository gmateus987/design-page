import { Component } from '@angular/core';
import { DefaultHomeComponent } from '../../components/default-home/default-home.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DefaultHomeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
