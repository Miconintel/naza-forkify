import icons from 'url:../../img/icons.svg';
import fracty from 'fracty/fracty';
import View from './view.js';

class paginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      console.log(btn);
      if (!btn) return;
      const gotoPage = +btn.dataset.goto;
      handler(gotoPage);
    });
  }

  _generatemarkUp() {
    const curPage = this._data.page;
    const numberofPages = Math.ceil(
      this._data.results.length / this._data.pageResult
    );
    // page 1 and others
    if (curPage === 1 && numberofPages > 1) {
      return `<button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
      <span>page ${curPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button> `;
    }

    // last page.
    if (curPage === numberofPages && numberofPages > 1) {
      return `<button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                  <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>page ${curPage - 1}</span>
              </button>`;
    }

    // other ages

    if (curPage < numberofPages) {
      return `<button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>page ${curPage - 1}</span>
    </button>
    
    <button data-goto="${
      curPage + 1
    }" class="btn--inline pagination__btn--next">
      <span>page ${curPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>
    `;
    }
    // page 1 and there are no other paes

    return ``;
  }
}

export default new paginationView();
