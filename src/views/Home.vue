<template>
  <img src="../assets/bg.jpg" class="bg" />
  <div id="home">
    <h1 class="text-white h2 fw-bold position-relative mb-0 text-center ts-s"> &nbsp; <b>Welcome !</b> </h1>
    <p class="text-white mb-5 text-center ts-s"> &nbsp; Select an app and start you video conference easily.</p>
  </div>

  <div id="platform"></div>
  <div id="apps">  
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