import {Component, inject, Renderer2} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./layout/navbar/navbar.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {fontAwesomeIcons} from "./shared/font-awesome-icons";
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly faIconLibrary = inject(FaIconLibrary);

  ngOnInit(): void {
    this.initFontAwesome();
  }

  private initFontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }

}
