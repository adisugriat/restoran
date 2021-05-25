import CONFIG from '../../globals/config'

const createRestoDetailTemplate = (resto) =>
    `
    <h2 class="restaurant__title">${resto.restaurant.name}</h2>
    <img src=${CONFIG.BASE_IMAGE + resto.restaurant.pictureId} alt="${resto.restaurant.name}" class="restaurant__poster">
    <div class="restaurant__info">
      <h3>Informasi</h3>
      <h4>Tagline</h4>
      <p>${resto.restaurant.description}</p>
      <h4>Lokasi</h4>
      <p>${resto.restaurant.city}</p>
      <p>${resto.restaurant.address}</p>
      <h4>Kategori makanan</h4>
      <p>${resto.restaurant.categories.map(categori => categori.name).join(' - ')}</p>
      <h4>Menu</h4>
      <p>Makanan: </p>
      <p>${resto.restaurant.menus.foods.map(food => food.name).join(', ')}</p>
      </br>
      <p>Minuman: </p>
      <p>${resto.restaurant.menus.drinks.map(drink => drink.name).join(', ')}</p>
    </div>
    <div class="restaurant__overview">
      <h3>Rating</h3>
      <p>${resto.restaurant.rating}</p>
      <h3>Ulasan dari pelanggan</h3>
      ${resto.restaurant.customerReviews.map(review => {
          return `
        <p>${review.name}</p>
        <p>${review.review}</p>
        <p>${review.date}</p>
        `
      })}
    </div>
  `

const createRestoItemTemplate = (resto) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img src="${resto.pictureId ? CONFIG.BASE_IMAGE + resto.pictureId : 'https://restaurant-api.dicoding.dev/images/small/21'}" alt="${resto.name}" class="restaurant-item__header__poster">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${resto.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
      <p>${resto.description}</p>
    </div>
  </div>
`

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate
}
