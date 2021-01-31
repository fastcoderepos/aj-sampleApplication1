cube(`Category`, {
  sql: `SELECT * FROM public.category`,

  joins: {},

  measures: {
    count_name: {
      sql: 'name',
      type: 'count',
    },
    countDistinct_name: {
      sql: 'name',
      type: 'countDistinct',
    },
    countDistinctApprox_name: {
      sql: 'name',
      type: 'countDistinctApprox',
    },
    min_last_update: {
      sql: 'last_update',
      type: 'min',
    },
    max_last_update: {
      sql: 'last_update',
      type: 'max',
    },
    count_last_update: {
      sql: 'last_update',
      type: 'count',
    },
    countDistinct_last_update: {
      sql: 'last_update',
      type: 'countDistinct',
    },
    countDistinctApprox_last_update: {
      sql: 'last_update',
      type: 'countDistinctApprox',
    },
    sum_category_id: {
      sql: 'category_id',
      type: 'sum',
    },
    avg_category_id: {
      sql: 'category_id',
      type: 'avg',
    },
    min_category_id: {
      sql: 'category_id',
      type: 'min',
    },
    max_category_id: {
      sql: 'category_id',
      type: 'max',
    },
    runningTotal_category_id: {
      sql: 'category_id',
      type: 'runningTotal',
    },
    count_category_id: {
      sql: 'category_id',
      type: 'count',
    },
    countDistinct_category_id: {
      sql: 'category_id',
      type: 'countDistinct',
    },
    countDistinctApprox_category_id: {
      sql: 'category_id',
      type: 'countDistinctApprox',
    },
  },

  dimensions: {
    name: {
      sql: `name`,
      type: `string`,
    },

    lastUpdate: {
      sql: `last_update`,
      type: `time`,
    },

    category_id: {
      sql: `category_id`,
      type: `number`,
      primaryKey: true,
    },
  },
});
