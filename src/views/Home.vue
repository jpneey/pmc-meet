<template>
  <div id="home">
    <div class="ppi-frag"><div v-for="i in 9" :key="i"></div></div>
    <div class="blob"></div>
    <div id="app-label">
      <div class="pt-4">
        <h1 class="h2 fw-bold text-white position-relative mb-3 h-ex"><img src="../assets/ppi-logo.png" height="50" alt="teams-logo" /></h1>
        <p class="text-secondary text-white exceed position relative"><b>{{greet}}!</b> Select an app from the selections below and start you video conference easily.</p>
      </div>
    </div>
    <Meetings />
  </div>
  <Modals />
</template>

<script>

import Meetings from '../components/Meetings'
import Modals from '../components/Modals'

const greetings = () => {
  var today = new Date()
  var curHr = today.getHours()
  var greet;
  if (curHr < 12) {
    greet = 'Good Morning'
  } else if (curHr >= 12) {
    greet = 'Good afternoon'
  } else {
    greet = 'Good evening'
  }
  return greet
}

const greet = greetings()

export default {
  data() {
    return {
      greet
    }
  },      
  components: {
    Meetings,
    Modals
  },   
  mounted() {             
    console.log('mounted!')         
  },         
  updated() {             
    console.log('updated!')         
  }     
}

</script>