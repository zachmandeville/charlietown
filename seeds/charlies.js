exports.seed = function (knex, promise) {
  return knex('charlies').del()
    .then(function () {
      return knex('charlies').insert([
      {name: 'coy charlie', image: 'https://coolguy.website/images/charlie-coy.jpg', mood: 'happy', notes: 'a good charlie'},
      {name: 'shrimp charlie', image: 'https://coolguy.website/images/charlie-shrimp.jpg',  mood: 'happy', notes: 'a good charlie'},
      {name: 'happy charlie', image: 'https://coolguy.website/images/charlie-with-bear.jpg', mood: 'happy', notes: 'a good charlie'}
      ])
    })
}
      
