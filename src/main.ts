import { bootstrapApplication } from '@angular/platform-browser';
import { Header } from './app/header/header';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

  export const appConfig: ApplicationConfig = {
      providers: [
      provideHttpClient(withFetch()),
      provideAnimationsAsync(),
      providePrimeNG({
          theme: { preset: Aura, options: { darkModeSelector: '.p-dark' } },
      }),
    ],
  };

    bootstrapApplication(Header, appConfig).catch((err) =>
    console.error(err)
);




/*

<div class="main_header">

<i class="pi pi-arrow-left" ></i>

    <span class="title">Unicorn Groups / Radiant Retreat  / </span>
    <span class="highlighted">  Task Management</span>


    <div class="header_logos">
        <img src="/header/aura-logo.png" height="28" width="82">
        <img src="/header/chat2.png" height="28" width="82">
        <i class="pi pi-bell"></i>
        <img src="/header/lasticon.png" height="24" width="24">
    
    </div>
</div>

<div class="mid_header">

    

    <div class="mid-header_logos">

        <span class="property_overview">Property Overview</span>
        
        <div class="selectbtn">
    <p-selectbutton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value" aria-labelledby="basic" />
</div>
        
        <div class="search-container">
  <img src="/header/search.png" class="search-icon" />
  <input
    type="text"
    placeholder="Search"
    class="search-input"
    (input)="onSearch($event)"
  />
</div>
        <div class="prime-date">
          <p-datepicker [(ngModel)]="selectedDate"  dateFormat="dd MM yy"/>
        </div>

        <img src="/header/filter.png" height="32" width="106">
        <img src="/header/autoassign.png" height="32" width="143">
    
    </div>

</div>


<div class="last-header">

  <div class="kpi-container">

    <!-- KPI CARD 1 -->

        <img src="/header/KPI.png" height="112" width="550" class="progressbar">

    

    <div class="kpi-card-1">
      <div class="left">
      <div class="kpi-top">
        <span class="kpi-title">Occupancy</span>
      </div>

      <div class="kpi-value1">
        232 <span class="kpi-total">/ 290</span>
      </div>
    </div>

      <div class="kpi-circle">
        <img src="/header/perecentage.png" height="40" width="40" class="image1">
      </div>
    </div>

    <!-- KPI CARD 2 -->
    <div class="kpi-card">
      <div class="kpi-top">
        <span class="kpi-title">Arrival</span>
        <div class="kpi-icon"><img src="/header/arrival.png" height="40" width="40" class="image11"></div>
      </div>

      <div class="kpi-value2">42</div>
      <div class="kpi-meta positive">+2.0% <span>From last week</span></div>
    </div>

    <!-- KPI CARD 3 -->
    <div class="kpi-card">
      <div class="kpi-top">
        <span class="kpi-title">Departure</span>
        <div class="kpi-icon"><img src="/header/departure.png" height="40" width="40" class="image2"></div>
      </div>

      <div class="kpi-value3">42</div>
      <div class="kpi-meta negative">-2.1% <span>From last week</span></div>
    </div>

    <!-- KPI CARD 4 -->
    <div class="kpi-card">
      <div class="kpi-top">
        <span class="kpi-title">Guest Request</span>
        <div class="kpi-icon"><img src="/header/guestreq.png" height="40" width="40" class="image3"></div>
      </div>

      <div class="kpi-value4">42</div>
      <div class="kpi-meta positive">4.5 min <span>Avg. service time</span></div>
    </div>

  </div>

</div>

<app-floor></app-floor>

*/




