cube(`Store`, {
  sql: `SELECT * FROM public.store`,

  joins: {
    Address: {
      sql: `${CUBE}.address_id = ${Address}.address_id`,
      relationship: `belongsTo`,
    },
  },

  measures: {
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
    sum_store_id: {
      sql: 'store_id',
      type: 'sum',
    },
    avg_store_id: {
      sql: 'store_id',
      type: 'avg',
    },
    min_store_id: {
      sql: 'store_id',
      type: 'min',
    },
    max_store_id: {
      sql: 'store_id',
      type: 'max',
    },
    runningTotal_store_id: {
      sql: 'store_id',
      type: 'runningTotal',
    },
    count_store_id: {
      sql: 'store_id',
      type: 'count',
    },
    countDistinct_store_id: {
      sql: 'store_id',
      type: 'countDistinct',
    },
    countDistinctApprox_store_id: {
      sql: 'store_id',
      type: 'countDistinctApprox',
    },
  },

  dimensions: {
    lastUpdate: {
      sql: `last_update`,
      type: `time`,
    },

    store_id: {
      sql: `store_id`,
      type: `number`,
      primaryKey: true,
    },
  },
});
