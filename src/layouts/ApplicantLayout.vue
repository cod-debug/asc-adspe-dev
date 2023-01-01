<template>
  <div>
    <q-layout view="hHh Lpr lff" container style="height: 100vh" class="shadow-2">
      <q-header flat class="bg-white border-bottom-red text-dark q-pa-md">
        <div class="row">
          <div class="col-sm-3">
            <q-toolbar>
              <!--<q-btn flat @click="drawer = !drawer" round icon="menu" />-->
              <img alt="icon" src="~assets/images/asc-logo.jpg" class="navbar-logo" style="height: 5em" />
            </q-toolbar>
          </div>
          <div class="col-sm-6">
            <div class="text-center">
              <h3 class="time-container">{{currentTime}}</h3>
              <b>{{todayFormatted}}</b>
            </div>
          </div>
          <div class="col-3 text-right">
            <div class="text-center profile-wrapper">
              <q-avatar>
                <img src="~assets/images/user-profile-default.png">
              </q-avatar>
              <label class="profile-name">
                Hi {{ user_name?.toUpperCase() || "Unknown" }}
              </label>
              <q-popup-proxy :offset="[10, 10]"
                @show="show_context_menu"
              >
                <q-banner
                  style="border: 1px solid #c5140c;border-radius: 4px;"
                  class="profile-context-menu"
                >
                  <div class="mat-menu-content ng-tns-c149-38">
                    <div class="avatar-content text-center q-px-md q-pt-md">
                      <q-avatar size="80px">
                        <img src="~assets/images/user-profile-default.png">
                      </q-avatar>
                    </div>
                    <div class="avatar-details text-center q-px-md q-pt-md">
                      <b class="text-red-14">Ad Standard Council</b>
                      <p class="user-role text-red-14">
                        AD SPECIALIST
                      </p>
                    </div>

                    <q-separator class="q-my-lg" />

                    <q-list>
                      <q-item clickable v-ripple
                        @click="view_profile"
                      >
                        <q-item-section avatar>
                          <q-icon color="primary" name="arrow_right" />
                        </q-item-section>
                        <q-item-section>View Profile</q-item-section>
                      </q-item>

                      <q-item clickable v-ripple
                        @click="confirm_logout"
                      >
                        <q-item-section avatar>
                          <q-icon color="primary" name="arrow_right" />
                        </q-item-section>

                        <q-item-section>Logout</q-item-section>
                      </q-item>
                    </q-list>
                  </div>
                </q-banner>
              </q-popup-proxy>
            </div>
          </div>
        </div>

      </q-header>

      <Drawer />



      <q-page-container style="background: #dfdfdf;">
        <router-view />
      </q-page-container>
      <footer class="admin-footer text-white" >
        <p>
          Ad Standards Council - Screening System - v2.0
          <br />
          © 2022. Ad Standards Council
        </p>
      </footer>
    </q-layout>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import { date } from 'quasar'
  import Drawer from "components/LayoutComponents/Drawer/DrawerIndex.vue";

  const miniState = ref(false)

  export default {
    data: () => ({
      currentTime: "",
      todayFormated: "",
      user_name: "",
      show_context_menu: null,
    }),
    watch: {
    },

    computed: {
      todayFormatted() {
        let currentDate = new Date();
        return date.formatDate(currentDate,'dddd, MMMM D, YYYY');
      }
    },
    components: {
      Drawer
    },
    mounted() {
      let vm = this;
      vm.getCurrentDateTime();

      setInterval(() => {
        vm.getCurrentDateTime();
      }, 1000);
    },
    methods: {
      getCurrentDateTime() {
        let currentdate = new Date();
        let hours = currentdate.getHours() > 12 ? currentdate.getHours() - 12 : currentdate.getHours() == 0 ? '12' : currentdate.getHours();
        let mins = currentdate.getMinutes();
        mins = mins < 10 ? "0"+ mins : mins;
        hours = hours < 10 ? '0' + hours : hours;
        let ampm = currentdate.getHours() > 12 ? "PM" : "AM";

        this.currentTime = `${hours}:${mins}:${currentdate.getSeconds() < 10 ? '0'+currentdate.getSeconds(): currentdate.getSeconds()} ${ampm}`;
      },
      getToday() {
        let currentdate = new Date();

      }
    },

    setup() {
      return {
        drawer: ref(false),
      }
    }
  }
</script>
