import { Component } from '@angular/core';
import {LayoutHeaderComponent} from '../../layouts/layout-header/layout-header.component';
import {CatnavigationComponent} from '../../shared/catnavigation/catnavigation.component';
import {NavBarComponent} from '../nav-bar/nav-bar.component';

@Component({
  selector: 'estore-home',
  imports: [
    LayoutHeaderComponent,
    CatnavigationComponent,
    NavBarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
