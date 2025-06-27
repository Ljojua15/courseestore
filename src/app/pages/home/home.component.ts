import { Component } from '@angular/core';
import {LayoutHeaderComponent} from '../../layouts/layout-header/layout-header.component';
import {CatnavigationComponent} from '../../shared/catnavigation/catnavigation.component';

@Component({
  selector: 'estore-home',
  imports: [
    LayoutHeaderComponent,
    CatnavigationComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
