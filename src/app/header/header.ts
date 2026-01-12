import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { Floor } from '../floor/floor';
import { SelectButtonModule } from 'primeng/selectbutton';
import { PanelModule } from 'primeng/panel';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Tooltip } from 'primeng/tooltip';
import { ToolbarModule } from 'primeng/toolbar';
import { ProgressBarModule } from 'primeng/progressbar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [FormsModule,Floor,SelectButtonModule,PanelModule,Toast,Tooltip,ToolbarModule,ProgressBarModule,
     IconFieldModule, InputIconModule, InputTextModule,CardModule,ChartModule,DatePickerModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  providers: [MessageService]

})
export class Header {
  chartData: any;
  chartOptions: any;
  occupancyPercentage: number = 25;

  constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
    }


  legendChartData: any;
  legendChartOptions: any;
  

  ngOnInit() {
    this.initChartOptions();
    this.updateChart();
    this.initLegendChart();
  }


  initChartOptions() {
    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: false,
        }
      },
      cutout: '85%',
      radius: '95%'
    };
  }

  updateChart() {
    const remainingValue = 100 - this.occupancyPercentage;
    
    this.chartData = {
      datasets: [
        {
          data: [this.occupancyPercentage, remainingValue],
          backgroundColor: [
            '#E8E9EA',
            '#5b9fd9'
            
          ],
          borderColor: [
            '#5b9fd9',
            '#E8E9EA'
          ],
          borderWidth: 0,
          borderRadius: 3,
          spacing: 1
        }
      ]
    };
  }
  
  initLegendChart() {
    this.legendChartOptions = {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: true
        }
      },
      scales: {
        x: {
          stacked: true,
          display: false,
          grid: { display: false }
        },
        y: {
          stacked: true,
          display: false,
          grid: { display: false }
        }
      }
    };
    this.updateLegendChart();
  }

  updateLegendChart() {
    this.legendChartData = {
      labels: ['Status'],
      datasets: [
        {
          label: 'Dirty',
          data: [18],
          backgroundColor: '#ff6b6b',
          borderWidth: 0
        },
        {
          label: 'In Progress',
          data: [12],
          backgroundColor: '#ffbe3b',
          borderWidth: 0
        },
        {
          label: 'Cleaned',
          data: [50],
          backgroundColor: '#4ade80',
          borderWidth: 0
        },
        {
          label: 'Inspect',
          data: [8],
          backgroundColor: '#38bdf8',
          borderWidth: 0
        },
        {
          label: 'Out of Service',
          data: [5],
          backgroundColor: '#6366f1',
          borderWidth: 0
        },
        {
          label: 'Out of Order',
          data: [3],
          backgroundColor: '#9ca3af',
          borderWidth: 0
        }
      ]
    };
  }



  selectedDate: Date = new Date();

  stateOptions: { label: string; value: string }[] = [{ label: 'Overview', value: 'overview' },{ label: 'Chart View', value: 'chart' }];

    value: string = 'chart';


  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log('Searching for:', value);
  }

}