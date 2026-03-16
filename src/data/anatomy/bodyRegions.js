import { kneeAnatomy } from './knee';
import { ankleAnatomy } from './ankle';
import { shoulderAnatomy } from './shoulder';

export const anatomyRegistry = {
  膝部: kneeAnatomy,
  踝部: ankleAnatomy,
  肩部: shoulderAnatomy,
};

export const regionOptions = Object.keys(anatomyRegistry);
