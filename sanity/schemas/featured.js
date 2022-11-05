export default {
    name: 'featured',
    title: 'Featured Menu Category',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Featured Category name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'image',
        title: 'image of Category',
        type: 'image',
        validation: (Rule) => Rule.max(200),
      },
      {
        name: 'resturants',
        title: 'Resturants',
        type: 'array',
        of:[{type:'reference', to:[{type: 'resturant'}]}]
      },
    ],
  }