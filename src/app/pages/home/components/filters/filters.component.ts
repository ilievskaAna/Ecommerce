import { response } from 'express';
import { StoreService } from './../../../../services/store.service';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html',
  styles: [
  ]
})

export class FiltersComponent implements OnInit, OnDestroy{

  @Output() showCategory = new EventEmitter<string>();
  categoriesSubscription: Subscription | undefined;

  categories: Array<string> | undefined;

  constructor(private StoreService: StoreService) { }

  ngOnInit(): void {
    this.categoriesSubscription= this.StoreService.getAllCategories()
      .subscribe((response)=> {
        this.categories = response;
      });
  }

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }

  ngOnDestroy(): void {
    if(this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }
}
