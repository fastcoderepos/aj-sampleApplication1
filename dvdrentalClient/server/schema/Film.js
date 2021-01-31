cube(`Film`, {
  sql: `SELECT * FROM public.film`,

  joins: {
    Language: {
      sql: `${CUBE}.language_id = ${Language}.language_id`,
      relationship: `belongsTo`,
    },
  },

  measures: {
    count_description: {
      sql: 'description',
      type: 'count',
    },
    countDistinct_description: {
      sql: 'description',
      type: 'countDistinct',
    },
    countDistinctApprox_description: {
      sql: 'description',
      type: 'countDistinctApprox',
    },
    count_title: {
      sql: 'title',
      type: 'count',
    },
    countDistinct_title: {
      sql: 'title',
      type: 'countDistinct',
    },
    countDistinctApprox_title: {
      sql: 'title',
      type: 'countDistinctApprox',
    },
    count_rating: {
      sql: 'rating',
      type: 'count',
    },
    countDistinct_rating: {
      sql: 'rating',
      type: 'countDistinct',
    },
    countDistinctApprox_rating: {
      sql: 'rating',
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
    sum_film_id: {
      sql: 'film_id',
      type: 'sum',
    },
    avg_film_id: {
      sql: 'film_id',
      type: 'avg',
    },
    min_film_id: {
      sql: 'film_id',
      type: 'min',
    },
    max_film_id: {
      sql: 'film_id',
      type: 'max',
    },
    runningTotal_film_id: {
      sql: 'film_id',
      type: 'runningTotal',
    },
    count_film_id: {
      sql: 'film_id',
      type: 'count',
    },
    countDistinct_film_id: {
      sql: 'film_id',
      type: 'countDistinct',
    },
    countDistinctApprox_film_id: {
      sql: 'film_id',
      type: 'countDistinctApprox',
    },
    sum_release_year: {
      sql: 'release_year',
      type: 'sum',
    },
    avg_release_year: {
      sql: 'release_year',
      type: 'avg',
    },
    min_release_year: {
      sql: 'release_year',
      type: 'min',
    },
    max_release_year: {
      sql: 'release_year',
      type: 'max',
    },
    runningTotal_release_year: {
      sql: 'release_year',
      type: 'runningTotal',
    },
    count_release_year: {
      sql: 'release_year',
      type: 'count',
    },
    countDistinct_release_year: {
      sql: 'release_year',
      type: 'countDistinct',
    },
    countDistinctApprox_release_year: {
      sql: 'release_year',
      type: 'countDistinctApprox',
    },
    sum_rental_duration: {
      sql: 'rental_duration',
      type: 'sum',
    },
    avg_rental_duration: {
      sql: 'rental_duration',
      type: 'avg',
    },
    min_rental_duration: {
      sql: 'rental_duration',
      type: 'min',
    },
    max_rental_duration: {
      sql: 'rental_duration',
      type: 'max',
    },
    runningTotal_rental_duration: {
      sql: 'rental_duration',
      type: 'runningTotal',
    },
    count_rental_duration: {
      sql: 'rental_duration',
      type: 'count',
    },
    countDistinct_rental_duration: {
      sql: 'rental_duration',
      type: 'countDistinct',
    },
    countDistinctApprox_rental_duration: {
      sql: 'rental_duration',
      type: 'countDistinctApprox',
    },
    sum_rental_rate: {
      sql: 'rental_rate',
      type: 'sum',
    },
    avg_rental_rate: {
      sql: 'rental_rate',
      type: 'avg',
    },
    min_rental_rate: {
      sql: 'rental_rate',
      type: 'min',
    },
    max_rental_rate: {
      sql: 'rental_rate',
      type: 'max',
    },
    runningTotal_rental_rate: {
      sql: 'rental_rate',
      type: 'runningTotal',
    },
    count_rental_rate: {
      sql: 'rental_rate',
      type: 'count',
    },
    countDistinct_rental_rate: {
      sql: 'rental_rate',
      type: 'countDistinct',
    },
    countDistinctApprox_rental_rate: {
      sql: 'rental_rate',
      type: 'countDistinctApprox',
    },
    sum_replacement_cost: {
      sql: 'replacement_cost',
      type: 'sum',
    },
    avg_replacement_cost: {
      sql: 'replacement_cost',
      type: 'avg',
    },
    min_replacement_cost: {
      sql: 'replacement_cost',
      type: 'min',
    },
    max_replacement_cost: {
      sql: 'replacement_cost',
      type: 'max',
    },
    runningTotal_replacement_cost: {
      sql: 'replacement_cost',
      type: 'runningTotal',
    },
    count_replacement_cost: {
      sql: 'replacement_cost',
      type: 'count',
    },
    countDistinct_replacement_cost: {
      sql: 'replacement_cost',
      type: 'countDistinct',
    },
    countDistinctApprox_replacement_cost: {
      sql: 'replacement_cost',
      type: 'countDistinctApprox',
    },
    sum_length: {
      sql: 'length',
      type: 'sum',
    },
    avg_length: {
      sql: 'length',
      type: 'avg',
    },
    min_length: {
      sql: 'length',
      type: 'min',
    },
    max_length: {
      sql: 'length',
      type: 'max',
    },
    runningTotal_length: {
      sql: 'length',
      type: 'runningTotal',
    },
    count_length: {
      sql: 'length',
      type: 'count',
    },
    countDistinct_length: {
      sql: 'length',
      type: 'countDistinct',
    },
    countDistinctApprox_length: {
      sql: 'length',
      type: 'countDistinctApprox',
    },
  },

  dimensions: {
    description: {
      sql: `description`,
      type: `string`,
    },

    title: {
      sql: `title`,
      type: `string`,
    },

    rating: {
      sql: `rating`,
      type: `string`,
    },

    lastUpdate: {
      sql: `last_update`,
      type: `time`,
    },

    filmId: {
      sql: `film_id`,
      type: `number`,
      primaryKey: true,
    },

    releaseYear: {
      sql: `release_year`,
      type: `number`,
    },

    rentalDuration: {
      sql: `rental_duration`,
      type: `number`,
    },

    rentalRate: {
      sql: `rental_rate`,
      type: `number`,
    },

    replacementCost: {
      sql: `replacement_cost`,
      type: `number`,
    },

    length: {
      sql: `length`,
      type: `number`,
    },
  },
});
