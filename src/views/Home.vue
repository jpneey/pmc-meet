<template>
  <div id="home">
    <h1 class="h2 fw-bold text-white position-relative mb-0 ps-0 arial">Progressive Medical Corporation</h1>
    <p class="text-white ps-0 mb-4"><b>{{greet}}!</b> Select an app and start you video conference easily.</p>
    <Meetings />
  </div>
  <img src="../assets/office.png" class="bg" alt="google-logo" />
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