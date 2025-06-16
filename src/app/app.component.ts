import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutHeaderComponent } from "./layouts/layout-header/layout-header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'estore';
}
