<template>
  <swiper
      :slides-per-view="'auto'"
      :space-between="20"
      :centereSlides="true"
      class="meeting"
    >
    
    <swiper-slide>
      <div class="meeting-card google-meet" data-bs-toggle="modal" data-bs-target="#google-meet-modal">
        <img src="../assets/google.png" alt="google-logo" />
        <p class="text-end text-white">Open<br><span>Google Meet</span></p>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="meeting-card zoom-meeting" @click="loadExternalApp('zoom', path_to_zoom)">
        <img src="../assets/zoom.png" alt="zoom-logo" />
        <p class="text-end text-white">Launch<br><span>Zoom Meeting App</span></p>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="meeting-card goto-meeting" @click="loadExternalApp('goto', path_to_goto)">
        <img src="../assets/goto.png" alt="goto-logo" />
        <p class="text-end text-white">Launch<br><span>GoTo Meeting App</span></p>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="meeting-card microsoft-teams" @click="loadExternalApp('team', path_to_team)">
        <img src="../assets/teams.png" alt="teams-logo" />
        <p class="text-end text-white">Launch<br><span>Microsoft Teans App</span></p>
      </div>
    </swiper-slide>
    
    <swiper-slide>
      <div class="meeting-card skype" @click="loadExternalApp('skype', path_to_skype)">
        <img src="../assets/skype.png" alt="teams-logo" />
        <p class="text-end text-white">Launch<br><span>Skype App</span></p>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="meeting-card webex" @click="loadExternalApp('webex', path_to_webex)">
        <img src="../assets/webex.png" alt="teams-logo" />
        <p class="text-end text-white">Launch<br><span>Webex App</span></p>
      </div>
    </swiper-slide>

  </swiper>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

ipcRenderer.on('error', (event, arg) => {
  alert(arg)
})

const path_to_zoom = _zoom;
const path_to_goto = _goto;
const path_to_team = _team;
const path_to_skype = _skype;
const path_to_webex = _webex;

export default {
  name: 'meetings',
  data() {
    return {
      path_to_zoom,
      path_to_goto,
      path_to_team,
      path_to_skype,
      path_to_webex
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    loadExternalApp(type, path) {
      ipcRenderer.send('open-' + type, path);
      console.log('ipc sent');
    }
  }
}
</script>