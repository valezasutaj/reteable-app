import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateablesService } from '../../services/rateables.service';
import { Rateable } from '../../models/rateables.model';

@Component({
  selector: 'app-rateables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rateables.component.html',
  styleUrls: ['./rateables.component.css']
})
export class RateablesComponent implements OnInit {

  items = signal<Rateable[]>([]);

  constructor(private api: RateablesService) {}

  ngOnInit() {
    this.api.getAll().subscribe(data => {
      this.items.set(data);
    });
  }

  skip() {
    const list = this.items();
    this.items.set(list.slice(1));
  }

  like(id: number) {
    this.api.like(id).subscribe(() => {
      this.skip();
    });
  }
}
