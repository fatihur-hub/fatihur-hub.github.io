/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.wait(10);
});

const firstCondition = "You haven't marked any restaurants as favorites. Time to pick your favorites!";

Scenario('showing empty liked restaurants', async ({ I }) => {
  I.waitForElement('#blogs', 5);
  I.waitForElement('#like-restaurant', 5);
  I.see(firstCondition, '#like-restaurant');

  // Menambahkan pesan log untuk memahami apa yang terjadi
  I.say('Successfully checked for empty liked restaurants');
});

Scenario('liking and unliking one restaurant', async ({ I }) => {
  I.waitForElement('#like-restaurant', 5);
  I.amOnPage('/');

  I.seeElement('a');

  // Pilih 1 restoran yang ingin ditambahkan ke favorit
  const firstRestaurant = locate('a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  // Klik tombol add to favorite
  I.waitForElement('#likeButton', 5);
  I.click('#likeButton');

  // Menambahkan pesan log untuk memahami apa yang terjadi
  I.say('Successfully liked a restaurant');

  // Cek restoran tadi yang ditambahkan ke favorit
  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item', 5);
  const likedRestaurant = locate('a').first();
  const likedRestauranTitle = await I.grabTextFrom(likedRestaurant);

  assert.strictEqual(firstRestaurantTitle, likedRestauranTitle);

  // Buka kembali detail restoran yang ingin di unlike
  I.click(likedRestaurant);

  // Menambahkan pesan log untuk memahami apa yang terjadi
  I.say('Successfully unliked a restaurant');

  I.waitForElement('#likeButton', 5);
  I.click('#likeButton');

  // Cek jika tidak ditemukan restoran favorit
  I.amOnPage('/#/favorite');
  I.waitForElement('#blogs', 5);
  I.waitForElement('#like-restaurant', 5);
  I.see(firstCondition, '#like-restaurant');

  // Menambahkan pesan log untuk memahami apa yang terjadi
  I.say('Successfully checked for empty liked restaurants');
});
