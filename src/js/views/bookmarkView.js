import View from './view.js';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';

class bookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = `No bookmarks yet, find a recipe and bookmark it`;
  _successMessage = '';

  addHandlerBookmark(handler) {
    window.addEventListener('load', handler);
  }

  _generatemarkUp() {
    return this._data
      .map(result => previewView.render(result, false))
      .join(' ');
    // return this._data.map(previewView._getResult).join(' ');
    // in my opinion, we could have called the previwView. getresult, passing in the element. but the teacher stated otherwise
  }
}
export default new bookmarksView();
