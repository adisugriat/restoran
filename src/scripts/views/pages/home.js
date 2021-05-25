import TheRestoDbSource from '../../data/therestodb-source'
import { createRestoItemTemplate } from '../templates/template-creator'

const Home = {
  async render () {
    return `
      <div class="content">
        <h2 class="content__heading">Home Page</h2>
        <div class="restaurantes" id="restaurant">
        
        </div>
      </div>
    `
  },

  async afterRender () {
    const restoes = await TheRestoDbSource.homeResto()
    const restoesContainer = document.querySelector('#restaurant')
    restoes.forEach((resto) => {
      restoesContainer.innerHTML += createRestoItemTemplate(resto)
    })
  }
}

export default Home
