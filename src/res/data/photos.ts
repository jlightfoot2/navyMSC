import {schema, normalize} from 'normalizr';
import resourceData from './photo-data';

const Schema = new schema.Entity('photos');
const ArraySchema = new schema.Array(Schema);

export interface PhotosInterface{
  id: number;
  content: string;
  src : string;
}

export const normalizedPhotos = normalize(resourceData, ArraySchema);
export const defaultPhotos = normalizedPhotos.entities.photos;
export const defaultPhotosIds = normalizedPhotos.result;