import {Component} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TranslatePipe,
    NgStyle
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
