<template>

    <div class="modal fade" id="google-meet-modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content rounded-0 border-0">
                <div class="modal-header">
                    <h5 class="modal-title">Meet Via Google Meet</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col col-5 pe-0">
                            <button class="btn btn-primary w-100 btn-googlemeet" @click="joinMeeting(false)"><i class="material-icons align-middle me-3">video_call</i> New meeting</button>
                        </div>
                        <div class="col col-7">
                            <div class="input-group">
                                <span class="input-group-text  bg-white border-end-0">
                                <i class="material-icons align-middle">keyboard</i>
                                </span>
                                <input v-model="joinstring" type="text" class="form-control border-start-0" placeholder="Enter a code or link">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary btn-googlemeet" @click="joinMeeting()">Join Meeting</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="fine-tune-modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content rounded-0 border-0">
                <div class="modal-header">
                    <h5 class="modal-title">Meeting Settings</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col col-12">
                            <div class="input-group">
                                <span class="input-group-text  bg-white border-end-0">
                                    <i class="material-icons align-middle">keyboard</i>
                                </span>
                                <input v-model="admin_password" type="password" class="form-control border-start-0" placeholder="Please enter password">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="quitApp()">Submit</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="reboot-modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content rounded-0 border-0">
                <div class="modal-header">
                    <h5 class="modal-title">System Reboot</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col col-12">
                            <div class="input-group">
                                <p class="text-secondary mb-0">This action will reboot the system. All unsaved items will be lost. Proceed to reboot?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-warning text-light" @click="rebootApp()">Reboot</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="shut-down-modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content rounded-0 border-0">
                <div class="modal-header">
                    <h5 class="modal-title">Shutdown System</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col col-12">
                            <div class="input-group">
                                <p class="text-secondary mb-0">This action will shut the system down. All unsaved items will be lost. Proceed to reboot?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-danger" @click="offApp()">Shutdown</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

const joinstring = '';
const admin_password = '';
const jello = '';

export default {
    name: 'modals',
    data() {
        return {
            joinstring,
            admin_password,
            jello    
        }
    },
    methods: {
        joinMeeting(instant = true) {
            
            var baseLink = 'https://meet.google.com/';

            if(!instant) {
                // window.open(baseLink)
                ipcRenderer.send('open-googlemeet', baseLink);
                return
            }

            var toMeet = this.joinstring.trim();
            if(toMeet == "") { 
                alert("Please enter your Google meeting code or your Google meeting link.")
                return    
            }

            if(toMeet.length <= 10) {
                alert("Invalid meeting code");
                return
            }

            if(this.isUrl(toMeet)) { 
                // window.open(toMeet);
                ipcRenderer.send('open-googlemeet', toMeet);
                this.joinstring = '';
                return
            }

            // window.open(baseLink + toMeet);
            ipcRenderer.send('open-googlemeet', baseLink + toMeet);
            this.joinstring = "";
            return
        },

        isUrl(str) {
            var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
            return !!pattern.test(str);
        },

        quitApp() {
            
            var p = this.admin_password;
            if(p !== 'Unimex123!') { 
                alert("Password incorrect.");
                return;
            }

            ipcRenderer.send('close-app', '' + p);
        },

        rebootApp() {
            ipcRenderer.send('reboot-app', "");

        },

        offApp() {
            ipcRenderer.send('off-app', "");
        }

    }
}
</script>