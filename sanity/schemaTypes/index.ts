import { type SchemaTypeDefinition } from 'sanity'
import {Author} from './Author'
import { Startup } from './Startup'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Author, Startup],
}
