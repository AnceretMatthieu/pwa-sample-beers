<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--12-col">
      <h1>{{ this.beer.name }}</h1>
      <span>"{{ this.beer.tagline }}"</span>
    </div>

    <div class="mdl-cell mdl-cell--3-col">
      <div class="picture">
        <img :src="this.beer.image_url" />
      </div>      
    </div>

    <div class="mdl-cell mdl-cell--9-col">      
      <div class="info">
        <span>{{ this.beer.description }}</span>
      </div>

      <ul class="infos-list mdl-list">
        <li class="mdl-list__item">
          <span class="mdl-list__item-primary-content">
            <i class="material-icons mdl-list__item-icon">person</i>
            <span class="bold">First brewed</span> : {{ this.beer.first_brewed }}
          </span>
        </li>
        <li class="mdl-list__item">
          <span class="mdl-list__item-primary-content">
            <i class="material-icons mdl-list__item-icon">person</i>
            <span class="bold">Volume</span> : {{ this.beer.volume.value}} {{ this.beer.volume.unit}}
          </span>
        </li>
        <li class="mdl-list__item mdl-list__item--two-line">
          <span class="mdl-list__item-primary-content">
            <i class="material-icons mdl-list__item-icon">person</i>
            <span><span class="bold">ABV :</span> {{ this.beer.abv }}</span>
            <span class="mdl-list__item-sub-title">
              Alcool By Volume (~ degré d'alcool)
            </span>
          </span>
        </li>
        <li class="mdl-list__item mdl-list__item--two-line">
          <span class="mdl-list__item-primary-content">
            <i class="material-icons mdl-list__item-icon">person</i>
            <span><span class="bold">IBU :</span> {{ this.beer.ibu }}</span>
            <span class="mdl-list__item-sub-title">
              International Bitterness Unit - Amertume de la bière (plus l'IBU est élevé et plus la bière est amère)
            </span>
          </span>
        </li>
        <li class="mdl-list__item mdl-list__item--two-line">
          <span class="mdl-list__item-primary-content">
            <i class="material-icons mdl-list__item-icon">person</i>
            <span><span class="bold">EBC :</span> {{ this.beer.ebc }}</span>
            <span class="mdl-list__item-sub-title">
              European Brewery Convention - Echelle Européenne permettant de mesurer la couleur de la bière (plus l'EBC est élévé et plus la bière est foncée)
            </span>
          </span>
        </li>
        <li class="mdl-list__item mdl-list__item--two-line">
          <span class="mdl-list__item-primary-content">
            <i class="material-icons mdl-list__item-icon">person</i>
            <span><span class="bold">SMR :</span> {{ this.beer.srm }}</span>
            <span class="mdl-list__item-sub-title">
              Standard Reference Method - Equivalent de l'EBC aux Etats-Unis
            </span>
          </span>
        </li>
        <li class="mdl-list__item">
          <span class="mdl-list__item-primary-content">
            <i class="material-icons mdl-list__item-icon">person</i>
            <span class="bold">Levure :</span> {{ this.beer.ingredients.yeast }}
          </span>
        </li>
      </ul>

      <hr />

      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--6-col">
          <h3>Malts</h3>
          <table class="wide-table mdl-data-table mdl-js-data-table mdl-shadow--2dp">
            <thead>
              <tr>
                <th class="mdl-data-table__cell--non-numeric">Nom</th>
                <th>Quantité</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="ingredient in this.beer.ingredients.malt" :key="ingredient.name">
                <td class="mdl-data-table__cell--non-numeric">{{ ingredient.name}}</td>
                <td>{{ ingredient.amount.value }} {{ ingredient.amount.unit }}</td>
              </tr>          
            </tbody>
          </table>
        </div>
        <div class="mdl-cell mdl-cell--6-col">
          <h3>Houblons</h3>
          <table class="wide-table mdl-data-table mdl-js-data-table mdl-shadow--2dp">
            <thead>
              <tr>
                <th class="mdl-data-table__cell--non-numeric">Nom</th>
                <th>Quantité</th>
                <th>Moment</th>
                <th>Intérêt</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="ingredient in this.beer.ingredients.hops" :key="ingredient.name">
                <td class="mdl-data-table__cell--non-numeric">{{ ingredient.name}}</td>
                <td>{{ ingredient.amount.value }} {{ ingredient.amount.unit }}</td>
                <td>{{ ingredient.add }}</td>
                <td>{{ ingredient.attribute }}</td>
              </tr> 
            </tbody>
          </table>
        </div>
      </div>

      <h4>Plats d'accompagnement</h4>
      <ul class="mdl-list">
        <li v-for="food in this.beer.food_pairing" :key="food" class="mdl-list__item">
          <span class="mdl-list__item-primary-content">
            <i class="material-icons mdl-list__item-icon">cake</i>
            {{ food }}
          </span>
        </li>        
      </ul>

      <h4>Astuces du brasseur...</h4>
      <div class="info">
        <span>{{ this.beer.brewers_tips }}</span>
      </div>
    </div>
</div>
</template>

<script>
  import {HTTP} from '../punkapi'

  export default {
    data () {
      return {
        'beer': {}
      }
    },
    created () {
      HTTP.get('beers/' + this.$route.params.id)
        .then(response => {
            this.beer = response.data[0]
        })
        .catch(e => {
            console.error(e)
        })
    }
  }
</script>

<style scoped>
  h3, h4 {
    text-align: left;
  }
  .bold {
    font-weight: 700;
  }
  .picture > img {
    color: #fff;
    max-height: 30em;
  }
  .info {
    text-align: left;
    padding: 5px;
    color: #555;
    font-size: 12px;
  }
  .infos-list {
    text-align: left;
  }
  .wide-table {
    width: 100%;
  }
</style>