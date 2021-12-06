import { Pipe, PipeTransform } from '@angular/core';
import {Venue} from "./Venue";

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(venues: Venue[], searchValue: string): Venue[] {
    if(!venues) {
      return [];
    }
    if(!searchValue) {
      return venues;
    }
    return venues.filter(venue =>
      venue.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      venue.location.city.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      venue.location.adress.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      venue.location.zipcode.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    )
  }
}
