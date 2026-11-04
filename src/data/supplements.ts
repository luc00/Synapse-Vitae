import { Supplement } from '../types/supplement';
import { VITAMINS_DATA } from './supplements/vitaminsData';
import { MINERALS_DATA } from './supplements/mineralsData';
import { AMINO_ACIDS_DATA } from './supplements/aminoAcidsData';
import { NOOTROPICS_DATA } from './supplements/nootropicsData';
import { HERBS_DATA } from './supplements/herbsData';
import { MUSHROOMS_DATA } from './supplements/mushroomsData';
import { LONGEVITY_DATA } from './supplements/longevityData';
import { DIGESTIVE_DATA } from './supplements/digestiveData';
import { LIPIDS_JOINTS_DATA } from './supplements/lipidsJointsData';

export const SUPPLEMENTS_DATABASE: Supplement[] = [
  ...VITAMINS_DATA,
  ...MINERALS_DATA,
  ...AMINO_ACIDS_DATA,
  ...NOOTROPICS_DATA,
  ...HERBS_DATA,
  ...MUSHROOMS_DATA,
  ...LONGEVITY_DATA,
  ...DIGESTIVE_DATA,
  ...LIPIDS_JOINTS_DATA,
];

export const getSupplementById = (id: string): Supplement | undefined => {
  return SUPPLEMENTS_DATABASE.find(s => s.id === id);
};

export const getSupplementsByCategory = (category: string): Supplement[] => {
  return SUPPLEMENTS_DATABASE.filter(s => s.category === category);
};
