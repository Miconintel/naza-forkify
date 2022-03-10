import View from './view.js';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = `Sorry the recipe does not exist 🤔`;
  _successMessage = '';

  _generatemarkUp() {
    return this._data
      .map(result => previewView.render(result, false))
      .join(' ');
    // return this._data.map(previewView._getResult).join(' ');
    // in my opinion, we could have called the previwView. getresult, passing in the element. but the teacher stated otherwise
  }

  // _generatemarkUp() {
  //   // return this._data
  //   //   .map(el => {
  //   //     return `<li class="preview">
  //   //    <a class="preview__link preview__link--active" href="#${el.id}">
  //   //       <figure class="preview__fig">
  //   //         <img src="${el.image}" alt="Test" />
  //   //        </figure>
  //   //       <div class="preview__data">
  //   //          <h4 class="preview__title">${el.title}</h4>
  //   //         <p class="preview__publisher">${el.publisher}</p>
  //   //         <div class="preview__user-generated">
  //   //           <svg>
  //   //             <use href="${icons}#icon-user"></use>
  //   //           </svg>
  //   //         </div>
  //   //      </div>
  //   //  </a>
  //   //    </li>`;
  //   //   })
  //   //   .join(' ');

  //   return this._data.map(this._getResult).join(' ');
  // }

  // _getResult(el) {
  //   const id = window.location.hash.slice(1);

  //   return `<li class="preview">
  //      <a class="preview__link ${
  //        el.id === id ? `preview__link--active` : ''
  //      }" href="#${el.id}">
  //         <figure class="preview__fig">
  //           <img src="${el.image}" alt="${el.title}" />
  //          </figure>
  //         <div class="preview__data">
  //            <h4 class="preview__title">${el.title}</h4>
  //           <p class="preview__publisher">${el.publisher}</p>
  //        </div>
  //        <div class="preview__user-generated">
  //           <svg>
  //                  <use href="${icons}#icon-user"></use>
  //            </svg>
  //        </div>
  //    </a>
  //      </li>`;
  // }
}
export default new ResultView();
