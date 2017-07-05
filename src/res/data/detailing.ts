import {schema, normalize} from 'normalizr';
import detailingData from './detailing-data';

const detailingSchema = new schema.Entity('detailing');
const detailingArraySchema = new schema.Array(detailingSchema);

export interface DetailingInterface{
  id: number;
  name: string;
  title : string;
  dept : string;
  area: string;
  email : string;
}

export const normalizedDetailing = normalize(detailingData, detailingArraySchema);
export const defaultDetailing = normalizedDetailing.entities.detailing;
export const defaultDetailingIds = normalizedDetailing.result;