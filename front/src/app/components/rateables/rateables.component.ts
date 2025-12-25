import { Component, OnInit, signal, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateablesService } from '../../services/rateables.service';
import { Rateable } from '../../models/rateables.model';

type Filter = 'all' | 'image' | 'text';
@Component({
    selector: 'app-rateables',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './rateables.component.html',
    styleUrls: ['./rateables.component.css']
})

export class RateablesComponent implements OnInit {
    items = signal<Rateable[]>([]);
    filter = signal<Filter>('all');
    private api = inject(RateablesService);

    visibleItems = computed(() => {
        const f = this.filter();
        const list = this.items();

        if (f === 'image') {
            return list.filter(x => !!x.image);
        }
        
        if (f === 'text') {
            return list.filter(x => !x.image);
        }

        return list;
    });

    ngOnInit() {
        this.api.getAll().subscribe(data => this.items.set(data));
    }

    private removeFromList(id: number) {
        this.items.update(list => list.filter(x => x.id !== id));
    }

    skip() {
        const current = this.visibleItems()[0];
        if (!current) {
            return;
        }

        this.api.skip(current.id).subscribe({
            next: () => this.removeFromList(current.id),
            error: () => this.removeFromList(current.id)
        });
    }

    like() {
        const current = this.visibleItems()[0];
        if (!current) {
            return;
        }

        this.api.like(current.id).subscribe({
            next: () => this.removeFromList(current.id),
            error: () => this.removeFromList(current.id)
        });
    }

    deletew() {
        const current = this.visibleItems()[0];
        if (!current) {
            return;
        }

        this.api.delete(current.id).subscribe({
            next: () => this.removeFromList(current.id),
            error: () => this.removeFromList(current.id)
        });
    }
}
