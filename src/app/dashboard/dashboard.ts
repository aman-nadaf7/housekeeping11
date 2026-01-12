import { Component } from '@angular/core';
import { Floor } from '../floor/floor';
import { Header } from '../header/header';
import { Signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [Header , Floor],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {


}