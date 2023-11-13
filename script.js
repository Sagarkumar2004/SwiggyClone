'use strict'

console.log('javascript is running');

const OffersBanner = document.querySelector("#OffersBanner");
const mindFood = document.querySelector('#mindFood');
const restaurantChain = document.querySelector('#restaurantChain');

const leftArrowOfferBanner = document.querySelector("#leftArrowOfferBanner");
const rightArrowOfferBanner = document.querySelector("#rightArrowOfferBanner");
const leftArrowmind = document.querySelector("#leftArrowmind");
const rightArrowmind = document.querySelector("#rightArrowmind");
const leftArrowrestaurantChain = document.querySelector("#leftArrowrestaurantChain");
const rightArrowrestaurantChain = document.querySelector("#rightArrowrestaurantChain");

const scrollAmount = 400;

// for offersBanner left, right movement function
const scrollLeftOffersBanner = ()=> OffersBanner.scrollLeft -= scrollAmount;
const scrollRightOffersBanner = () => OffersBanner.scrollLeft += scrollAmount;

// for mindFood left, right movement function
const scrollLeftmind = ()=> mindFood.scrollLeft -= scrollAmount;
const scrollRightmind = ()=> mindFood.scrollLeft += scrollAmount;

// for restaurantChain left, right movement function
const scrollLeftrestaurantChain = ()=> restaurantChain.scrollLeft -= scrollAmount;
const scrollRightrestaurantChain = ()=> restaurantChain.scrollLeft += scrollAmount;

// Click event for offerBanner
leftArrowOfferBanner.addEventListener('click', scrollLeftOffersBanner);
rightArrowOfferBanner.addEventListener('click', scrollRightOffersBanner);

// Click event for MindFood
leftArrowmind.addEventListener('click', scrollLeftmind);
rightArrowmind.addEventListener('click', scrollRightmind);

// Click event for restaurntChain
leftArrowrestaurantChain.addEventListener('click', scrollLeftrestaurantChain);
rightArrowrestaurantChain.addEventListener('click', scrollRightrestaurantChain);





