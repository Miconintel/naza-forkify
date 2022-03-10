import icons from 'url:../../img/icons.svg';
import { API_URL } from '../config';

// MY OWN CODE
// class resultView {
//   #parentElement = document.querySelector('.search-results');
//   #data;
//   #errorMessage = `we cannot find your search`;
//   #successMessage = '';
//   render(data) {
//     this.#data = data;
//     const markUp = this.#generatemarkUp();
//     this.#clear();
//     console.log(markUp);
//     this.#parentElement.insertAdjacentHTML('afterbegin', markUp);
//   }
//   #clear() {
//     this.#parentElement.innerHTML = '';
//   }

//   renderSpinner() {
//     const markUp = `<div class="spinner">
//       <svg>
//         <use href="${icons}#icon-loader"></use>
//       </svg>
//     </div>`;
//     // console.log(this.#parentElement);

//     this.#clear();
//     this.#parentElement.insertAdjacentHTML('afterbegin', markUp);
//   }

//   renderError(message = this.#errorMessage) {
//     const markUp = ` <div class="message">
//     <div>
//       <svg>
//         <use href="${icons}#icon-snile"></use>
//       </svg>
//     </div>
//     <p>${message}</p>
//   </div>`;

//     this.#clear();
//     this.#parentElement.insertAdjacentHTML('afterbegin', markUp);
//   }

//   renderMessage(message = this.#successMessage) {
//     const markUp = ` <div class="error">
//     <div>
//       <svg>
//         <use href="${icons}#icon-alert-triangle"></use>
//       </svg>
//     </div>
//     <p>${message}</p>
//   </div>`;

//     this.#clear();
//     this.#parentElement.insertAdjacentHTML('afterbegin', markUp);
//   }

//   // addHandlerMethod(handler) {
//   //   ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
//   // }
//   #generatemarkUp() {
//     return `
//       <ul class="results">
//       ${this.#data.results.map(this.#getSearchResults).join(' ')}

//     </ul>`;
//   }

//   #getSearchResults(searchResult) {
//     return ` <li class="preview">
//     <a class="preview__link preview__link--active" href="#${searchResult.id}">
//       <figure class="preview__fig">
//       <img src="${searchResult.image}" alt="${searchResult.title}" />
//       </figure>
//       <div class="preview__data">
//         <h4 class="preview__title">${searchResult.title}</h4>
//         <p class="preview__publisher">${searchResult.publisher}</p>
//         <div class="preview__user-generated">
//           <svg>
//             <use href="${icons}#icon-user"></use>
//           </svg>
//         </div>
//       </div>
//     </a>
//   </li>`;
//   }
// }

// export default new resultView();

//  MY CODDE STOPS HERE
// MY TEACHER'S CODE STARTS HERE

export default class View {
  // _parentElement = document.querySelector('.recipe');
  // _errorMessage = `we could not find that recipe please try another one`;
  // _successMessage = '';
  _data;

  /**
   * Render the received object to the DOM
   * @param {Object | Object[]} data the data to be rendered
   * @param {boolean}[render=true] if false returns markup string instead of rendering to the DOM
   * @returns {undefined | string} A markup string if render=false
   * @this {Object} View Instance
   * @author Chinaza
   * @todo finish the implementation
   */
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markUp = this._generatemarkUp();
    if (!render) return markUp;
    // console.log(markUp);
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }

  update(data) {
    this._data = data;
    const newMarkUp = this._generatemarkUp();
    const newDOM = document.createRange().createContextualFragment(newMarkUp);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));
    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        curEl.textContent = newEl.textContent;
      }

      // replace attribute from current to new element.
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(att => {
          curEl.setAttribute(att.name, att.value);
        });
      }
    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markUp = `<div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>`;
    // console.log(this._parentElement);

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }

  renderError(message = this._errorMessage) {
    const markUp = ` <div class="message">
    <div>
      <svg>
        <use href="${icons}#icon-snile"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }

  renderMessage(message = this._successMessage) {
    const markUp = ` <div class="error">
    <div>
      <svg>
        <use href="${icons}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }

  // addHandlerMethod(handler) {
  //   ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  // }
  // _generatemarkUp() {
  //   return `
  //   <div>
  //   <figure class="recipe__fig">
  //     <img src="${this._data.image}" alt="${
  //     this._data.title
  //   }" class="recipe__img" />
  //     <h1 class="recipe__title">
  //       <span>${this._data.title}</span>
  //     </h1>
  //   </figure>

  //   <div class="recipe__details">
  //     <div class="recipe__info">
  //       <svg class="recipe__info-icon">
  //         <use href="${icons}#icon-clock"></use>
  //       </svg>
  //       <span class="recipe__info-data recipe__info-data--minutes">${
  //         this._data.cookingTime
  //       }</span>
  //       <span class="recipe__info-text">minutes</span>
  //     </div>
  //     <div class="recipe__info">
  //       <svg class="recipe__info-icon">
  //         <use href="${icons}#icon-users"></use>
  //       </svg>
  //       <span class="recipe__info-data recipe__info-data--people">${
  //         this._data.servings
  //       }</span>
  //       <span class="recipe__info-text">servings</span>

  //       <div class="recipe__info-buttons">
  //         <button class="btn--tiny btn--increase-servings">
  //           <svg>
  //             <use href="${icons}#icon-minus-circle"></use>
  //           </svg>
  //         </button>
  //         <button class="btn--tiny btn--increase-servings">
  //           <svg>
  //             <use href="${icons}#icon-plus-circle"></use>
  //           </svg>
  //         </button>
  //       </div>
  //     </div>

  //     <div class="recipe__user-generated">
  //       <svg>
  //         <use href="${icons}#icon-user"></use>
  //       </svg>
  //     </div>
  //     <button class="btn--round">
  //       <svg class="">
  //         <use href="${icons}#icon-bookmark-fill"></use>
  //       </svg>
  //     </button>
  //   </div>

  //   <div class="recipe__ingredients">
  //     <h2 class="heading--2">Recipe ingredients</h2>
  //     <ul class="recipe__ingredient-list">

  //     ${this._data.ingredients.map(this._getIngredients).join(' ')}

  //     </ul>
  //   </div>

  //   <div class="recipe__directions">
  //     <h2 class="heading--2">How to cook it</h2>
  //     <p class="recipe__directions-text">
  //       This recipe was carefully designed and tested by
  //       <span class="recipe__publisher">${
  //         this._data.publisher
  //       }</span>. Please check out
  //       directions at their website.
  //     </p>
  //     <a
  //       class="btn--small recipe__btn"
  //       href="${this._data.sourceURL}"
  //       target="_blank"
  //     >
  //       <span>Directions</span>
  //       <svg class="search__icon">
  //         <use href="${icons}#icon-arrow-right"></use>
  //       </svg>
  //     </a>
  //   </div>
  //   </div>`;
  // }

  // _getIngredients(ing) {
  //   return `<li class="recipe__ingredient">
  //   <svg class="recipe__icon">
  //     <use href="${icons}#icon-check"></use>
  //   </svg>
  //   <div class="recipe__quantity">${
  //     ing.quantity ? fracty(ing.quantity) : ''
  //   }</div>
  //   <div class="recipe__description">
  //     <span class="recipe__unit">${ing.description}</span>
  //     ricotta cheese
  //   </div>
  // </li>`;
  // }
}
