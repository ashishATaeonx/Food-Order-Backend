import express, { Request, Response, NextFunction } from 'express';
import { GetFoodAvailabilty, GetFoodsIn30Min, GetTopRestaurants, RestaurantById, SearchFoods } from '../controllers';


const router = express.Router();

// food availability
router.get('/:pincode', GetFoodAvailabilty)

// top restaurants
router.get('/top-restaurants/:pincode', GetTopRestaurants)

// food available in 30 mins
router.get('/foods-in-30-min/:pincode', GetFoodsIn30Min)

// search foods
router.get('/search/:pincode', SearchFoods)

// find restaurant by id
router.get('/restaurant/:id', RestaurantById)


export { router as ShoppingRoute };