import { type SchemaTypeDefinition } from 'sanity'
import history from './history'
import profile from './profile'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [history, profile],
}
