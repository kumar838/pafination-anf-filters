import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'allpipes'
})
export class AllpipesPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
  
    return items.filter(function(it){
      return JSON.stringify(it).toLowerCase().includes(searchText);
    });
  }
}


@Pipe({
  name: 'mylanguage'
})
export class MyLanguage implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    console.log(items)
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
  
    return items.filter(function(it){
      return JSON.stringify(it).toLowerCase().includes(searchText);
    });
  }
}

