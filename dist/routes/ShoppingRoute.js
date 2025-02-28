"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingRoute = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const router = express_1.default.Router();
exports.ShoppingRoute = router;
// food availability
router.get('/:pincode', controllers_1.GetFoodAvailabilty);
// top restaurants
router.get('/top-restaurants/:pincode', controllers_1.GetTopRestaurants);
// food available in 30 mins
router.get('/foods-in-30-min/:pincode', controllers_1.GetFoodsIn30Min);
// search foods
router.get('/search/:pincode', controllers_1.SearchFoods);
// find restaurant by id
router.get('/restaurant/:id', controllers_1.RestaurantById);
//# sourceMappingURL=ShoppingRoute.js.map