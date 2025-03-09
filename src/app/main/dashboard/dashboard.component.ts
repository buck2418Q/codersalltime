import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NavComponent } from "./nav/nav.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { CommonModule } from '@angular/common';
import { CardsComponent } from "./cards/cards.component";
import { FooterComponent } from "./footer/footer.component";
import { BarController, BarElement, CategoryScale, Chart, LinearScale, LineController, LineElement, PointElement } from 'chart.js';
declare var Scrollbar: any;

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidenavComponent, NavComponent, CommonModule, CardsComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {

  private barChart: Chart | undefined;
  private lineChart: Chart | undefined;
  private tasksChart: Chart | undefined;

  constructor() {
    // Register all required controllers once
    Chart.register(BarController, BarElement, CategoryScale, LinearScale, LineController, LineElement, PointElement);
  }

  ngOnInit(): void {
    // Moved chart creation to AfterViewInit to ensure canvas elements are available
  }

  ngAfterViewInit() {
    this.createBarChart();
    this.createLineChart();
    this.createTaskChart();
    var win = navigator.platform.indexOf('Win') > -1;
    let sidenavScrollbar = document.querySelector('#sidenav-scrollbar');
    
    if (win && sidenavScrollbar) {
      let options = { damping: 0.5 };
      Scrollbar.init(sidenavScrollbar, options);
    }
  }

  createBarChart() {
    if (this.barChart) {
      this.barChart.destroy(); // Destroy previous instance
    }

    const ctx = document.getElementById("chart-bars") as HTMLCanvasElement;
    if (ctx) {
      this.barChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          datasets: [{
            label: "Views",
            backgroundColor: "#43A047",
            data: [50, 45, 22, 28, 50, 60, 76],
            borderRadius: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } }
        }
      });
    }
  }

  createLineChart() {
    if (this.lineChart) {
      this.lineChart.destroy(); // Destroy previous instance
    }

    const ctx = document.getElementById("chart-line") as HTMLCanvasElement;
    if (ctx) {
      this.lineChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          datasets: [{
            label: "Sales",
            borderColor: "#43A047",
            pointBackgroundColor: "#43A047",
            data: [120, 230, 130, 440, 250, 360, 270, 180, 90, 300, 310, 220]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } }
        }
      });
    }
  }

  createTaskChart() {
    if (this.tasksChart) {
      this.tasksChart.destroy(); // Destroy previous instance
    }

    const ctx = document.getElementById("chart-line-tasks") as HTMLCanvasElement;
    if (ctx) {
      this.tasksChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [{
            label: "Tasks",
            borderColor: "#43A047",
            pointBackgroundColor: "#43A047",
            data: [50, 40, 300, 220, 500, 250, 400, 230, 500]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } }
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.barChart) this.barChart.destroy();
    if (this.lineChart) this.lineChart.destroy();
    if (this.tasksChart) this.tasksChart.destroy();
  }
}
