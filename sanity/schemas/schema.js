import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import category from './category'
import resturant from './resturant'
import dish from './dish'
import featured from './featured'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    resturant,
    dish,
    category,
    featured
  ]),
})
