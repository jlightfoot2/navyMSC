import {schema, normalize} from 'normalizr';
import resourceData from './resource-data';

const Schema = new schema.Entity('resources');
const ArraySchema = new schema.Array(Schema);

export interface ResourcesInterface{
  id: number;
  title: string;
  link : string;
  isExternal : boolean;
}

export const normalizedResources = normalize(resourceData, ArraySchema);
export const defaultResources = normalizedResources.entities.resources;
export const defaultResourcesIds = normalizedResources.result;