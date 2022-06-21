import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
import ListaPeliculas from '../../dominio/lista-peliculas.mjs';
import Pelicula from '../../dominio/pelicula.mjs';

import * as $ from "jquery/dist/jquery.min"

const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

$(document).ready(function(){
	$(".hamburger").on("click", function(){
		$(".hero").toggleClass("hidden")
	});
	$(".liked").on("click", function(){
	  alert("liked nfts")
	});
	$(".user").on("click", function(){
	  alert("user")
	});
});

// const topAppBarElement = document.querySelector('.mdc-top-app-bar');
// const topAppBar = new MDCTopAppBar(topAppBarElement);

// const buttonRipple = new MDCRipple(document.querySelector('.mcd-button'));

// buttonRipple.listen("material-icons mdc-top-app-bar__navigation-icon mdc-icon-button:activated", (activatedEventMenu) => {
// 	alert("Funciona")
// });

// topAppBar.listen("MDCtopAppBar:activated", (activatedEvent) => {
// 	alert("Funciona")
// });

// function myFunction(){
// 	alert("Hello")
// }

// tabBar.listen("MDCTabBar:activated", (activatedEvent) => {
// 	document.querySelectorAll(".content").forEach((element, index) => {
// 		if (index === activatedEvent.detail.index) {
// 			element.classList.remove("sample-content--hidden");
// 		} else {
// 			element.classList.add("sample-content--hidden");
// 		}
// 	});
// });

// const textFieldTitle = new MDCTextField(document.getElementById('title'));
// const textFieldYear = new MDCTextField(document.getElementById('year'));
// const selectGenre = new MDCSelect(document.querySelector('.mdc-select'));

// const addButton = new MDCRipple(document.getElementById('addButton'));
// addButton.listen('click', () => {
//   let title = textFieldTitle.value;
//   let year = textFieldYear.value;
//   let genre = selectGenre.value;
//   try {
//     let newPelicula = new Pelicula(title, genre, year);
//     listaPeliculas.agregar(newPelicula);
//   } catch (error) {
//     const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
//     snackbar.labelText = error.message;
//     snackbar.open();
//   } finally {
//     let peliculas = listaPeliculas.getPeliculas();
//     console.log(peliculas);
//   }
// })
