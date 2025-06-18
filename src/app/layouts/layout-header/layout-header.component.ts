import { Component } from '@angular/core';
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'estore-layout-header',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss'],
})
export class LayoutHeaderComponent {
  public faSearch: any = faSearch;
  public faUserCircle: any = faUserCircle;

  public readonly options = ['Men', 'Women', 'Kids'];
}
