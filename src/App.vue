<template>
  <div id="electron-control">
    <i class="material-icons mx-3" data-bs-toggle="modal" data-bs-target="#reboot-modal">refresh</i>
    <i class="material-icons mx-3" data-bs-toggle="modal" data-bs-target="#shut-down-modal">power_settings_new</i>
    <i class="material-icons mx-3" data-bs-toggle="modal" data-bs-target="#fine-tune-modal">tune</i>
  </div>
  <router-view />
</template>
<script>

const admin_password = '';

export default {
  name: "PMC Meet App",
  data() {
    return {
      admin_password
    }
  }
}

</script>