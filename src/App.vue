<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">       
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">PWA Sample - Brewdog's</span>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">PWA Sample</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Accueil</router-link>
        <router-link class="mdl-navigation__link" to="/search" @click.native="hideMenu">Recherche avancée</router-link>
        <router-link class="mdl-navigation__link" to="/camera" @click.native="hideMenu">Caméra</router-link>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>        
      </div>
    </main>
</div>
</template>

<script>
require('material-design-lite')

export default {
  name: 'app',
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    hideMenu: function () {
      document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
      document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.mdl-layout-title {
  padding: 0;
  padding-left: 25px;
}

.mdh-expandable-search {
  align-items: center;
  justify-content: right;
}

.mdh-expandable-search form {
  max-width: 500px;
}

.mdh-expandable-search,
.mdh-expandable-search form,
.mdh-expandable-search input {
  /* Cross browser flex-grow */
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.mdh-expandable-search,
.mdh-expandable-search form {
  /* Cross browser inline-flex */
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
}

/* Position search icon */
.mdh-expandable-search .material-icons {
  position: relative;
  right: -40px;
  margin-left: -24px; /* Remove the blank space left behind by the icon being relatively positioned */
}

.mdh-expandable-search input {
  outline: none;
  border: none;
  font-size: 16px;
  color: #FFFFFF;
  background-color: #ADD8E6;
  padding: 0px 35px 0px 70px;
  height: 40px;
  line-height: 40px; /* TODO: This was recommended for cross browser compatability of input height, check if its actually needed in modern browsers */
  
  border-radius: 5px 5px 5px 5px;
  -moz-border-radius: 5px 5px 5px 5px;
  -webkit-border-radius: 5px 5px 5px 5px;
}

.mdh-expandable-search input::-webkit-input-placeholder { /* WebKit browsers */
    color:    #FFFFFF;
}
.mdh-expandable-search input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    #FFFFFF;
   opacity:  1; /* Firefox gives the placeholder a reduced opacity so we have to increase it */
}
.mdh-expandable-search input::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    #FFFFFF;
   opacity:  1; /* Firefox gives the placeholder a reduced opacity so we have to increase it */
}
.mdh-expandable-search input:-ms-input-placeholder { /* Internet Explorer 10+ */
   color:    #FFFFFF;
}

/* Bug fix: https://github.com/google/material-design-lite/issues/1078
 * To much padding on the left of header when the menu button is hidden */
@media screen and (min-width: 851px) {
  .mdl-layout__header-row {
    padding: 0 40px 0 40px;
  }
}
</style>
