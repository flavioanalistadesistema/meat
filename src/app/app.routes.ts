import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDatailComponent } from './restaurant-datail/restaurant-datail.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'restaurants/:id', component: RestaurantDatailComponent },
    { path: 'about', component: AboutComponent },
];
