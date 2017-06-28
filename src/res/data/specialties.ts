import {schema, normalize} from 'normalizr';
import specialtyData from './specialties-data';
console.log(specialtyData);
const specialtySchema = new schema.Entity('specialty');
const specialtyArraySchema = new schema.Array(specialtySchema);

export interface SpecialtyInterface{
  id: number;
  title: string;
  content: string;
}

export const normalizedSpecialty = normalize(specialtyData, specialtyArraySchema);
export const defaultspecialty = normalizedSpecialty.entities.specialty;
export const defaultSpecialtyIds = normalizedSpecialty.result;