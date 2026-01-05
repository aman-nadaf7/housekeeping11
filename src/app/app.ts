import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Floor } from './floor/floor';




@Component({
  selector: 'app-root',
  imports: [Header , Floor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('housekeeping2');
}
