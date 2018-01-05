/* tslint:disable */
/* To-fix:  Angular wants all selectors to have a dash (bl-th or app-th), but making a dash in this case will make HTML not recognize the <th> element */

import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SortService } from './sort.service';

@Component({
    selector: 'bl-th',
    templateUrl: './sortable-column.component.html',
    styleUrls: ['./sortable-column.component.scss']
})
export class SortableColumnComponent implements OnInit, OnDestroy {

    constructor(private sortService: SortService) { }

    // The display name for a certain column
    @Input('displayName')
    displayName: string;

    // The (data) valueI  for the column
    @Input('columnName')
    columnName: string;

    // The sort direction (asc / desc)
    @Input('sortDirection')
    sortDirection: string;

    private columnSortedSubscription: Subscription;

    @HostListener('click')
    sort() {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        this.sortService.columnSorted({ sortColumn: this.columnName, sortDirection: this.sortDirection });
    }

    ngOnInit() {
        // subscribe to sort changes so we can react when other columns are sorted
        this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(event => {
            // reset this column's sort direction to hide the sort icons
            if (this.columnName !== event.sortColumn) {
                this.sortDirection = '';
            }
        });
    }

    ngOnDestroy() {
        this.columnSortedSubscription.unsubscribe();
    }

}


