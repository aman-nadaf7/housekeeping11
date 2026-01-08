import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatePickerModule } from 'primeng/datepicker';
import { Floor } from '../floor/floor';
import { SelectButtonModule } from 'primeng/selectbutton';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PanelModule } from 'primeng/panel';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Ripple } from 'primeng/ripple';
import { Tooltip } from 'primeng/tooltip';
import { ToolbarModule } from 'primeng/toolbar';
import { ProgressBarModule } from 'primeng/progressbar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Card, CardModule } from 'primeng/card';


@Component({
  standalone: true,
  selector: 'app-header',
  imports: [FormsModule,Floor,SelectButtonModule,PanelModule,Toast,Tooltip,ToolbarModule,ProgressBarModule,
     IconFieldModule, InputIconModule, InputTextModule,CardModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
      providers: [MessageService]

})
export class Header {

  constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
    }



  selectedDate: Date = new Date();

  stateOptions: { label: string; value: string }[] = [{ label: 'Overview', value: 'overview' },{ label: 'Chart View', value: 'chart' }];

    value: string = 'chart';


  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log('Searching for:', value);
  }
    
}
