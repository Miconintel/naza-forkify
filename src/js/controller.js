//
import test from './test.js';
import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeViews.js';
import searchView from './views/searchView.js';
import ResultView from './views/resultView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarkView.js';
import addRecipeView from './views/addRecipeView.js';

//

import icons from 'url:../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import paginationView from './views/paginationView.js';
import resultView from './views/resultView.js';

if (module.hot) {
  module.hot.accept();
}

const recipeContainer = document.querySelector('.recipe');

// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });
// };

// https://forkify-api.herokuapp.com/v2
// 484f04c5-1b1a-4365-b31f-92fc361c8813
///////////////////////////////////////

const controlRecipe = async function () {
  try {
    // get id
    const id = window.location.hash.slice(1);
    if (!id) return;
    // console.log(id);
    // rendr spinner
    recipeView.renderSpinner();

    // resultview to mark selected page
    resultView.update(model.loadPageResults());

    bookmarksView.update(model.state.bookmarks);

    // loading recipe
    await model.loadRecipe(id);
    const { recipe } = model.state;

    // rendering_recipe;

    recipeView.render(model.state.recipe);

    // TEST
    // controlServings();
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  }
};

const controlSearchResults = async function () {
  try {
    // render spinner
    ResultView.renderSpinner();

    // get query
    const query = searchView.getQuery();
    if (!query) return;

    // load search Result

    await model.loadSearchResult(query);
    // console.log(model.state.search.results);

    // render search result

    // ResultView.render(model.state.search.results); without page
    ResultView.render(model.loadPageResults());

    //render pagination

    paginationView.render(model.state.search);

    //

    // console.log(document.querySelector('.copyright').firstChild);
  } catch (err) {
    ResultView.renderError();
    console.error(err);
  }
};

const controlPage = function (gotoPage) {
  console.log(gotoPage);
  // render search result

  ResultView.render(model.loadPageResults(gotoPage));

  //render pagination

  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // update servings from model
  model.changeServings(newServings);
  // render new servings andrecipe view
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // add or remove bookmark
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else model.deleteBookmark(model.state.recipe.id);

  // update recipe views
  recipeView.update(model.state.recipe);

  // render bookmarks
  bookmarksView.render(model.state.bookmarks);

  // chmgethe url

  window.history.pushState(null, '', `${model.state.recipe.id}`);
};

const controlBookmark = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    console.log(newRecipe);
    //
    addRecipeView.renderSpinner();
    // set state. recipe

    await model.uploadRecipe(newRecipe);
    // render state.recipe

    recipeView.render(model.state.recipe);
    // render message
    addRecipeView.renderMessage();

    // render bookmark view
    bookmarksView.render(model.state.bookmarks);

    // close form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error(err);
    addRecipeView.renderError(err);
  }
};

const init = function () {
  bookmarksView.addHandlerBookmark(controlBookmark);
  recipeView.addHandlerMethod(controlRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPage);
  addRecipeView.addHandlerUpload(controlAddRecipe);

  console.log(model.state.search.results);
};
init();

// (function () {
//   recipeView.addHandlerMethod(controlRecipe);
//   recipeView.addHandlerUpdateServings(controlServings);
//   recipeView.addHandlerAddBookmark(controlAddBookmark);
//   searchView.addHandlerSearch(controlSearchResults);
//   paginationView.addHandlerClick(controlPage);

//   console.log(model.state.search.results);
// })();

// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);

// work
let igwe = {
  b_cf: 3,
  b_fg: 4,
};
igwe = {
  cf: igwe.b_cf,
  fg: igwe.b_fg,
};

console.log('emm');

//

// class Test {
//   constructor() {}
//   rest(x) {
//     console.log(x);
//   }

//   talk(b) {
//     console.log(b);
//   }
//   static reach() {
//     console.log('I am static');
//   }
// }
// const test1 = new Test();

// console.log(Test.reach());
// console.log(Test.prototype === test1.__proto__);
// console.log(Test.prototype.constructor);

// const container = document.querySelector(`.container`);

// setTimeout(function () {
//   const cookie = document.createElement('div');
//   cookie.className = 'cookie';
//   cookie.innerHTML = `<p class="cookie-p"> This website uses cookies to enhance user experience</p> <button class="cookie-button"> close</button>`;
//   document.body.prepend(cookie);

//   document
//     .querySelector('.cookie-button')
//     .addEventListener('click', function (e) {
//       e.preventDefault();
//       cookie.style.display = 'none';
//     });
//   console.log('I just arrived after 10 secons');
//   const bn = document.querySelector('.cookie-button');
//   console.log(bn);
// }, 10000);

// const bn = document.querySelector('.cookie-button');
// console.log(bn);

// const arr1 = [1, 3, 5, 'goat'];
// const yu = {
//   king: 'ui',
//   read: 'irenes',
// };

// console.log(arr1.entries());
// console.log(Object.entries(arr1));

// const ars = Object.entries(arr1);

// const yut = Object.entries(yu);

// const df = [2, 3, 3, 5, 6, 7];
// const reach = new Set(df);
// console.log(reach);

// const arrSet = [...reach];
// console.log(arrSet);

// const yMap = new Map([
//   [`names`, 'Emma'],
//   [1, 'ugo'],
//   [2, 'ari'],
// ]);

// const newM = new Map(yut);
// console.log(yMap);
// console.log([...yMap]);

// const newO = Object.fromEntries(yMap);
// console.log(newO);

const trimsa = ['yuiui  ', 'emma  '];
console.log(trimsa);
console.log(trimsa.map(el => el.trim()));
const ire = 'irene';
const iR = ire.startsWith('re', 1);
console.log(iR);
