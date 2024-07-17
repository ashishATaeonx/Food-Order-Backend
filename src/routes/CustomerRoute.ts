import express, { Request, Response, NextFunction } from 'express';
import { CustomerLogin, CustomerSignup, CustomerVerify, EditCustomerProfile, GetCustomerProfile, RequestOtp } from '../controllers';
import { Authenticate } from '../middlewares';


const router = express.Router();

// SignUp / Create customer
router.post('/signup', CustomerSignup)

// Login
router.post('/login', CustomerLogin)


// authentication

router.use(Authenticate)


// Verify Customer account 
router.patch('/verify', CustomerVerify)

// Otp / Requesting Otp
router.get('/otp', RequestOtp)

// Profile
router.get('/profile', GetCustomerProfile)

router.patch('/profile', EditCustomerProfile)


// Cart
// order
// payment


export { router as CustomerRoute };