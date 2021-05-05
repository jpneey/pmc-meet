<template>
  <div id="home">
    <img src="../assets/sky.jpg" alt="ass" class="over-image" />
    <div id="app-label">
      <div>
        <h1 class="h2 fw-bold text-white position-relative mb-0 ps-5"><img src="../assets/ppi-highres.png" class="pmcg" height="45" alt="teams-logo" /> &nbsp; Panamed Philippines Inc.</h1>
        <p class="text-white ps-5"> &nbsp; <b>{{greet}}!</b> Select an app and start you video conference easily.</p>
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