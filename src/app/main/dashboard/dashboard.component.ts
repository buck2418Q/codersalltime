import { Component } from '@angular/core';
import { NavComponent } from "./nav/nav.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { CommonModule } from '@angular/common';
import { CardsComponent } from "./cards/cards.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidenavComponent, NavComponent, CommonModule, CardsComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
