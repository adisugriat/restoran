import TheRestoDbSource from '../../data/therestodb-source'
import UrlParser from '../../routes/url-parser'
import LikeButtonInitiator from '../../utils/like-button-initiator'
import { createRestoDetailTemplate } from '../templates/template-creator'

const Detail = {
  async render () {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer">
      
      </div>
      <div>
        <p>Masukan Ulasan Anda</p>
        <p>nama:</p>
        <input type="text" name="name" value="nama kamu ..." />
        <p>ulasan:</p>
        <textarea name="review">Ulasan Anda ...</textarea>
        <button>Kirim</butto>
      </div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const resto = await TheRestoDbSource.detailResto(url.id)
    const restoContainer = document.querySelector('#restaurant')
    restoContainer.innerHTML = createRestoDetailTemplate(resto)

    const buttonContainer = document.querySelector('#likeButtonContainer')

    LikeButtonInitiator.init({
      likeButtonContainer: buttonContainer,
      resto: {
        id: resto.restaurant.id,
        name: resto.restaurant.name,
        description: resto.restaurant.description,
        pictureId: resto.restaurant.pictureId,
        rating: resto.restaurant.rating
      }
    })
    // console.log(resto)
  }
}

export default Detail
