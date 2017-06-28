import {defaultspecialty, defaultSpecialtyIds} from '../res/data/specialties';

import {
  WINDOW_RESIZE,
  SET_PAGE_TITLE
} from '../actions';
import {combineReducers} from 'redux';

const specialties = (state = defaultspecialty, action) => {
  return state;
}

const specialtyIds = (state = defaultSpecialtyIds, action) => {
  return state;
}
const defaultView = {
  screen: {
    width: 500,
    height: 500
  },
  page: {
    title: 'Navy MSC'
  }
}
const view = (state = defaultView, action) => {
  switch (action.type) {
    case WINDOW_RESIZE:
      state = {...state,screen: {...state.screen, width: action.width, height: action.height}};
      break;
    case SET_PAGE_TITLE:
      state = {...state,page: {...state.page, title: action.title}};
      break;
  }
  return state;
}

const reducer = combineReducers({
  specialties,
  specialtyIds,
  view
});

export default reducer;

