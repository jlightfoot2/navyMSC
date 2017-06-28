import {schema, normalize} from 'normalizr';
import newsData from './news-data';

const newsSchema = new schema.Entity('news');
const newsArraySchema = new schema.Array(newsSchema);

export interface NewsInterface{
  id: number;
  title: string;
  content: string;
  link : string;
}

export const normalizedNews = normalize(newsData, newsArraySchema);
export const defaultNews = normalizedNews.entities.news;
export const defaultNewsIds = normalizedNews.result;