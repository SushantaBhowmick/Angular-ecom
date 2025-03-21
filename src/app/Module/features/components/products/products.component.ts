import { Component } from '@angular/core';
import { filters, singleFilter } from './filteData';
import { mensPantsPage1 } from 'src/Data/pants/men_page1';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  filterData: any;
  singleFilterData: any;
  menPants: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.filterData = filters;
    this.singleFilterData = singleFilter;
    this.menPants = mensPantsPage1;
  }

  handleMultipleSelectFilter(value: string, sectionId: string) {
  try {
    
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };

    console.log("Query",queryParams);
    let filterValues = queryParams[sectionId]
      ? queryParams[sectionId].split(',')
      : [];
    let valueIndex = filterValues.indexOf(value);

    if (valueIndex !== -1) {
      filterValues.splice(valueIndex, 1);
    } else {
      filterValues.push(value);
    }

    if (filterValues.length > 0) {
      queryParams[sectionId] = filterValues.join(',');
    } else {
      delete queryParams[sectionId];
    }

    this.router.navigate([], { queryParams });
  } catch (error) {
    console.log(error)
    
  }
  }

  handleSingleSelectFilter(value: string, sectionId: string) {
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };
    queryParams[sectionId] = value;
    this.router.navigate([], { queryParams });
  }
}
