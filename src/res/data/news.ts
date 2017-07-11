import {schema, normalize} from 'normalizr';
//import newsData from './news-data';

var newsItems = [];
fetch('http://www.navy.mil/xml/rssHeadline.xml').then(function(resp){ return resp; }).then(function(response){
    // parse response
    return response.text().then(function(data){
      var oParser = new DOMParser();
      var oDOM = oParser.parseFromString(data, "text/xml");
      var xmlItems = oDOM.getElementsByTagName('item');
      Object.keys(xmlItems).map(function(iter){
        newsItems.push({
          id : iter+1,
          title : xmlItems[iter].getElementsByTagName("title")[0].childNodes[0].nodeValue,
          content : xmlItems[iter].getElementsByTagName("description")[0].childNodes[0].nodeValue,
          link : xmlItems[iter].getElementsByTagName("link")[0].childNodes[0].nodeValue
        });
        //console.log(xmlItems[iter]);
      });
      console.log(newsItems);
      return oDOM;
    });
});


const newsSchema = new schema.Entity('news');
const newsArraySchema = new schema.Array(newsSchema);

export interface NewsInterface{
  id: number;
  title: string;
  content: string;
  link : string;
}

export const normalizedNews = normalize(newsItems, newsArraySchema);
export const defaultNews = normalizedNews.entities.news;
export const defaultNewsIds = normalizedNews.result;