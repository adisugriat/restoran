import FavoriteRestoIdb from '../../data/favoriteResto'
import { createRestoItemTemplate } from '../templates/template-creator'

const Favorite = {
  async render () {
    return `
    <div class="content">
      <h2 class="content__heading">Your Liked Restaurant</h2>
      <div id="likedRestaurant" class="restaurantes">

      </div>
  </div>
    `
  },

  async afterRender () {
    const restaurantes = await FavoriteRestoIdb.getAllRestoes()
    const restaurantesContainer = document.querySelector('#likedRestaurant')
    restaurantes.forEach(restaurant => {
      restaurantesContainer.innerHTML += createRestoItemTemplate(restaurant)
    })
  }
}

export default Favorite
