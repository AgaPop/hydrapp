"use strict";

import { NPN_ENABLED } from "constants";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const counter = document.querySelector('.counter__value--js');
const buttonAdd= document.querySelector('.button-add--js');
const buttonDelete = document.querySelector('.button-delete--js');
// klucz z datą np: 2019-07-23:
const key = new Date().toISOString().slice(0,10); 


if (localStorage.getItem(key)){
  counter.innerHTML = localStorage.getItem(key);
} else {
  localStorage.setItem(key, 0);
  counter.innerHTML = 0;
}

buttonAdd.addEventListener('click', (e) => {
  localStorage.setItem(key, parseInt(localStorage.getItem(key), 10) + 1);
  counter.innerHTML = localStorage.getItem(key);
  
});

buttonDelete.addEventListener('click', (e) => {
  const currentValue = parseInt(localStorage.getItem(key), 10);
  if (currentValue > 0) {   
    localStorage.setItem(key, parseInt(localStorage.getItem(key), 10) -1);    
    counter.innerHTML = localStorage.getItem(key);
    
  }
});


