cube(`Payment`, {
  sql: `SELECT * FROM public.payment`,

  joins: {
    Customer: {
      sql: `${CUBE}.customer_id = ${Customer}.customer_id`,
      relationship: `belongsTo`,
    },

    Staff: {
      sql: `${CUBE}.staff_id = ${Staff}.staff_id`,
      relationship: `belongsTo`,
    },

    Rental: {
      sql: `${CUBE}.rental_id = ${Rental}.rental_id`,
      relationship: `belongsTo`,
    },
  },

  measures: {
    min_payment_date: {
      sql: 'payment_date',
      type: 'min',
    },
    max_payment_date: {
      sql: 'payment_date',
      type: 'max',
    },
    count_payment_date: {
      sql: 'payment_date',
      type: 'count',
    },
    countDistinct_payment_date: {
      sql: 'payment_date',
      type: 'countDistinct',
    },
    countDistinctApprox_payment_date: {
      sql: 'payment_date',
      type: 'countDistinctApprox',
    },
    sum_amount: {
      sql: 'amount',
      type: 'sum',
    },
    avg_amount: {
      sql: 'amount',
      type: 'avg',
    },
    min_amount: {
      sql: 'amount',
      type: 'min',
    },
    max_amount: {
      sql: 'amount',
      type: 'max',
    },
    runningTotal_amount: {
      sql: 'amount',
      type: 'runningTotal',
    },
    count_amount: {
      sql: 'amount',
      type: 'count',
    },
    countDistinct_amount: {
      sql: 'amount',
      type: 'countDistinct',
    },
    countDistinctApprox_amount: {
      sql: 'amount',
      type: 'countDistinctApprox',
    },
    sum_payment_id: {
      sql: 'payment_id',
      type: 'sum',
    },
    avg_payment_id: {
      sql: 'payment_id',
      type: 'avg',
    },
    min_payment_id: {
      sql: 'payment_id',
      type: 'min',
    },
    max_payment_id: {
      sql: 'payment_id',
      type: 'max',
    },
    runningTotal_payment_id: {
      sql: 'payment_id',
      type: 'runningTotal',
    },
    count_payment_id: {
      sql: 'payment_id',
      type: 'count',
    },
    countDistinct_payment_id: {
      sql: 'payment_id',
      type: 'countDistinct',
    },
    countDistinctApprox_payment_id: {
      sql: 'payment_id',
      type: 'countDistinctApprox',
    },
  },

  dimensions: {
    paymentDate: {
      sql: `payment_date`,
      type: `time`,
    },

    amount: {
      sql: `amount`,
      type: `number`,
    },

    payment_id: {
      sql: `payment_id`,
      type: `number`,
      primaryKey: true,
    },
  },
});
