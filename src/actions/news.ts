import {schema, normalize} from 'normalizr';

const newsSchema = new schema.Entity('news');
const newsArraySchema = new schema.Array(newsSchema);

export interface NewsInterface{
  id: number;
  title: string;
  content: string;
  link : string;
}

export const REQUEST_NEWS = 'REQUEST_NEWS'
function requestNews() {
  return {
    type: REQUEST_NEWS
  }
}

export const RECEIVE_NEWS = 'RECEIVE_NEWS'
function receiveNews(newsItems) {
  return {
    type: RECEIVE_NEWS,
    posts: newsItems,
    receivedAt: Date.now()
  }
}
export const SET_NEWS_IDS = 'SET_NEWS_IDS'
function setNewsIds(newsIds) {
  return {
    type : SET_NEWS_IDS,
    ids : newsIds
  }
}
// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts('reactjs'))

export default function fetchNews() {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestNews())

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
    var newsItems = [];
    return fetch('https://www.navy.mil/xml/rssFeatureStories.asp').then(function(resp){ return resp; }).then(function(response){
        // parse response
        return response.text().then(function(data){
          var oParser = new DOMParser();
          var oDOM = oParser.parseFromString(data, "text/xml");
          var xmlItems = oDOM.getElementsByTagName('item');
          Object.keys(xmlItems).map(function(iter){
            newsItems.push({
              id : parseInt(iter)+1,
              title : xmlItems[iter].getElementsByTagName("title")[0].childNodes[0].nodeValue,
              content : xmlItems[iter].getElementsByTagName("description")[0].childNodes[0].nodeValue,
              link : xmlItems[iter].getElementsByTagName("link")[0].childNodes[0].nodeValue
            });
            //console.log(xmlItems[iter]); 
          });
          let normalizedNews = normalize(newsItems, newsArraySchema),
          defaultNews = normalizedNews.entities.news,
          defaultNewsIds = normalizedNews.result;
          dispatch(receiveNews(defaultNews));
          dispatch(setNewsIds(defaultNewsIds));
        });
    });
  }
}