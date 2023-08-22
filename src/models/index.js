// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Match, Location, LocationMatch } = initSchema(schema);

export {
  Match,
  Location,
  LocationMatch
};