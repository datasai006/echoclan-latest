const express = require("express");
const registerApi = require("./register");
const otpverifyAPi = require("./otpverify");
const createpasswordApi = require("./createpassword");
const loginApi = require("./login");
const homepageApi = require("./homepage");
const dashboardApi = require("./dashboard")
const categoriesApi = require("./categories")
const pickupApi = require("./pickup-treesplanted");
const dummyApi = require("./dummy");
const ordersApi = require("./orders");
const walletApi = require("./wallet")


const router = express.Router();


router.use(registerApi);
router.use(otpverifyAPi);
router.use(createpasswordApi);
router.use(loginApi);
router.use(homepageApi);
router.use(dashboardApi);
router.use(categoriesApi);
router.use(pickupApi);
router.use(dummyApi);
router.use(ordersApi);
router.use(walletApi);
















module.exports = router;
