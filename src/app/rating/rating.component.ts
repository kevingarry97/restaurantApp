import { Component, OnInit } from '@angular/core';
import { Menu } from '../models/menu.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  breakfast: Menu[];
  lunch: Menu[];

  public errorMsg;

  restaurant;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.breakfast = this.menuService.getBreak();
    this.lunch = this.menuService.getLunch();
    this.menuService.getRestaurant().subscribe( data => this.restaurant = data);
  }

}
