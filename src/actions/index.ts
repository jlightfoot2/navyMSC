export const WINDOW_RESIZE = 'T2.WINDOW_RESIZE';
export const SET_PAGE_TITLE = 'T2.SET_PAGE_TITLE';

export const setPageTitle = (title:string) => {
  return {
    type: SET_PAGE_TITLE,
    title: title
  }
}

export const windowResize = (width:number,height: number) => {
  return {
    type: WINDOW_RESIZE,
    width,
    height
  }
}

