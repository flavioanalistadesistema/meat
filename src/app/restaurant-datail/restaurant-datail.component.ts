import { Component, OnInit } from "@angular/core";
import { Restaurant } from "../restaurants/restaurant/restaurant.model";
import { ActivatedRoute } from "@angular/router";
import { RestaurantsService } from "../restaurants/restaurants.service";

@Component({
  selector: "mt-restaurant-datail",
  templateUrl: "./restaurant-datail.component.html",
})
export class RestaurantDatailComponent implements OnInit {
  restaurant: Restaurant;
  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
      .subscribe((response) => { 
        this.restaurant = response
      });
  }
}
