<template>
  <swiper
      :slides-per-view="'6'"
      :space-between="20"
      :centereSlides="true"
      class="meeting"
    >
    
    <swiper-slide>
      <div class="meeting-card google-meet" data-bs-toggle="modal" data-bs-target="#google-meet-modal">
        <img src="../assets/google.png" alt="google-logo" />
        <p class="text-white"><span>Google Meet</span></p>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="meeting-card zoom-meeting" @click="loadExternalApp('zoom', path_to_zoom)">
        <img src="../assets/zoom.png" alt="zoom-logo" />
        <p class="text-white"><span>Zoom Meeting</span></p>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="meeting-card goto-meeting" @click="loadExternalApp('goto', path_to_goto)">
        <img src="../assets/goto.png" alt="goto-logo" />
        <p class="text-white"><span>GoTo Meeting</span></p>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="meeting-card microsoft-teams" @click="loadExternalApp('team', path_to_team)">
        <img src="../assets/teams.png" alt="teams-logo" />
        <p class="text-white"><span>Microsoft Teams</span></p>
      </div>
    </swiper-slide>
    
    <swiper-slide>
      <div class="meeting-card skype" @click="loadExternalApp('skype', path_to_skype)">
        <img src="../assets/skype.png" alt="teams-logo" />
        <p class="text-white"><span>Skype App</span></p>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="meeting-card webex" @click="loadExternalApp('webex', path_to_webex)">
        <img src="../assets/webex.png" alt="teams-logo" />
        <p class="text-white"><span>Webex App</span></p>
      </div>
    </swiper-slide>

  </swiper>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

// ipcRenderer.on('error', (event, arg) => {
//   alert(arg)
// })

// const path_to_zoom = _zoom;
// const path_to_goto = _goto;
// const path_to_team = _team;
// const path_to_skype = _skype;
// const path_to_webex = _webex;

const path_to_zoom = '';
const path_to_goto = '';
const path_to_team = '';
const path_to_skype = '';
const path_to_webex = '';

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