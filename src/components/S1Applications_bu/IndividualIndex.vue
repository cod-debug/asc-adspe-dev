<template>
  <div class="q-pa-md q-mt-lg q-ml-lg">
    <q-card bordered class="my-card" elevated>
      <q-card-section class="row">
        <div class="text-h6 page-title text-dark col-md-6"><q-icon name="list" />  S1 APPLICATION -  INDIVIDUAL</div>
        <div class="text-right col-md-6">
          <!-- <q-btn label="NEW APPLICATION" elevated class="q-mr-sm position-right" size="md" icon="add" color="red-14" /> -->
          <q-btn :label="refresh_sec == 0 ? '' : refresh_sec + ' sec'" elevated size="md" icon="sync" @click="refresh" :disabled="refresh_sec > 0" color="primary" />
        </div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <div class="row q-my-lg">
          <div class="col-md-9 col-sm-12">
            <q-input outlined label="Search Applications" class="q-mt-md" />
          </div>
          <div class="col-md-3 q-px-md col-sm-12">
            <div class="shadow-2 q-pa-sm">
              <b>Legend: </b>
              <table width="100%">
                <tr v-for="(item, key) in legends" :key="key">
                  <td width="5%">
                    <div :class="`legend ${item.color}`"></div>
                  </td>
                  <td class="q-pt-xs"><small><strong>{{item.title}}</strong></small></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <q-tabs v-model="active_tab"
                align="left"
                class="text-dark"
                indicator-color="primary">

          <q-tab :name="item.code" @click="setActiveTab(item.code)" v-for="(item, key) in tabs" :key="key" color="primary">
            <q-badge :label="item.count" color="red-14" rounded floating v-if="item.count > 0" />
            <strong class="q-pr-md">{{item.name}}</strong>
          </q-tab>
        </q-tabs>

        <hr class="q-tabs-gutter" color="lightgray" />

        <IndividualTbl :tab_type="tab" />
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
  import IndividualTbl from "./Tables/IndividualTbl";

  export default {
    components: {
      IndividualTbl,
    },
    data: () => ({
      pinkModel: false,
      tabs: [
        {
          name: "ORIGINAL",
          code: 'ORIG',
          count: 1
        },
        {
          name: "REVISION",
          code: 'REVI',
          count: 1
        },
        {
          name: "COMPLIANCE",
          code: 'COMP',
          count: 2
        },
        {
          name: "RELEASED APPEAL",
          code: 'RELE',
          count: 3
        },
        {
          name: "RETURNED APPLICATION",
          code: 'RET',
          count: 1
        }
      ],
 /*LOCKED
 OPEN
 ORIGINAL
 FOR COMPLIANCE
 REVISION*/
      legends: [
        {
          color: "yellow",
          title: "LOCKED",
        },
        {
          color: "white",
          title: "OPEN",
        },
        {
          color: "blue",
          title: "ORIGINAL",
        },
        {
          color: "gold",
          title: "FOR COMPLIANCE",
        },
        {
          color: "green",
          title: "REVISION",
        }
      ],

      refresh_sec: 0,
      active_tab: "ORIG",
    }),
    methods: {
      setActiveTab(tab) {
        this.active_tab = tab;
      },
      refresh() {
        let vm = this;

        vm.refresh_sec = 60;

        setInterval(() => {
          if (vm.refresh_sec > 0) {
            vm.refresh_sec--;
          }
        }, 1000);
      }
    }
  }
</script>
