import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-floor',
  standalone: true,
  imports: [CommonModule, AccordionModule, CardModule],
  templateUrl: './floor.html',
  styleUrl: './floor.css'
})
export class Floor {
  floors = [
    {
      number: 1,
      title: 'FLOOR: 1',
      roomsCount: '10 Rooms',
      status: '5 Cleaned, 3 Dirty, 2 Inspect',
      rooms: [
        { no: '1200', type: 'Deluxe', color: 'green' },
        { no: '1200', type: 'Deluxe', color: 'pink' },
        { no: '1200', type: 'Deluxe', color: 'blue' },
        { no: '1200', type: 'Deluxe', color: 'green' },
        { no: '1200', type: 'Deluxe', color: 'blue' },
        { no: '1200', type: 'Deluxe', color: 'pink' },
        { no: '1200', type: 'Deluxe', color: 'blue' },
        { no: '1200', type: 'Deluxe', color: 'green' },
        { no: '1200', type: 'Deluxe', color: 'blue' },
        { no: '1200', type: 'Deluxe', color: 'pink' }
      ]
    },
    {
      number: 2,
      title: 'FLOOR: 2',
      roomsCount: '8 Rooms',
      status: '7 Cleaned,1 Inspect',
      rooms: [
        { no: '1200', type: 'Deluxe', color: 'blue' },
        { no: '1200', type: 'Deluxe', color: 'green' },
        { no: '1200', type: 'Deluxe', color: 'blue' },
        { no: '1200', type: 'Deluxe', color: 'pink' },
        { no: '1200', type: 'Deluxe', color: 'blue' },
        { no: '1200', type: 'Deluxe', color: 'green' },
        { no: '1200', type: 'Deluxe', color: 'green' },
        { no: '1200', type: 'Deluxe', color: 'pink' }
      ]
    }
  ];
}