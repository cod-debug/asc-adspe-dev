<template>
  <div class="q-pa-md q-mt-lg q-ml-lg">
    <q-card bordered class="my-card" elevated>
      <q-card-section class="row">
        <div class="text-h6 page-title text-dark col-md-6"><q-icon name="list" />  S1 APPLICATION -  INDIVIDUAL</div>
        <div class="text-right col-md-6">
          <q-btn label="VIEW APPLICATION" elevated class="q-mr-sm position-right" size="md" icon="list" color="red-14" @click="backToList" />
        </div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <q-section class="row">
          <div class="col-md-6 col-lg-6 col-sm-12">
            <strong class="text-red-14 bold">Submission Date: September 28, 2022</strong>
          </div>
          <div class="col-md-6 col-lg-6 col-sm-12 text-right">
            <q-badge color="yellow-14" class="q-pa-sm text-dark"><strong>UNPAID: ₱ 7,150.00</strong></q-badge>
          </div>
        </q-section>
        <div class="row q-mt-md">
          <div class="col-md-4 col-lg-4 col-sm-12 q-px-sm">
            <q-select v-model="application_type" label="Application Type" outlined>

            </q-select>
          </div>
          <div class="col-md-4 col-lg-4 col-sm-12 q-px-sm">
            <q-select v-model="submission_type" label="Submission Type" outlined>
            </q-select>
          </div>
        </div>
        <hr class="q-my-xl" />
        <q-list class="rounded-borders">
          <ClientInformation class="q-mb-sm" />
          <q-separator />
          <PresentorInformation class="q-mb-sm" />
          <q-separator />
          <MaterialInformation class="q-mb-sm" />
        </q-list>
      </q-card-section>

      <q-card-section>
        <q-card :square="true">
          <q-card-section>

            <q-tabs v-model="tab"
                    dense
                    indicator-color="blue"
                    class="text-grey-14">
              <q-tab name="internal_comments_tab" label="Internal Comments" />
              <q-tab name="copy_claims_tab" label="Copy Claim Tab" />
              <q-tab name="external_comments_tab" label="External Comments" />
            </q-tabs>
            <hr class="q-tabs-gutter" color="lightgray" />
          </q-card-section>

          <q-card-section>
            

              <!-- INTERNAL COMMENTS -->
              <transition appear
                          v-if="tab == 'internal_comments_tab'"
                          enter-active-class="animated fadeInRight"
                          leave-active-class="animated fadeOut">
                <div>
                  <strong class="text-grey-14">INTERNAL</strong>
                  <RichText v-model="internal_comment" />
                </div>
              </transition>
              <!-- END INTERNAL COMMENTS -->

              <!-- EXTERNAL COMMENTS -->
              <transition appear
                          v-if="tab == 'copy_claims_tab'"
                          enter-active-class="animated fadeInRight"
                          leave-active-class="animated fadeOut">
                <div>
                  <strong class="text-grey-14">COPY / CLAIMS</strong>
                  <RichText v-model="copy_claim_comment" />
                </div>
              </transition>
              <!-- END EXTERNAL COMMENTS -->
              

              <!-- EXTERNAL COMMENTS -->
              <transition appear
                          v-if="tab == 'external_comments_tab'"
                          enter-active-class="animated fadeInRight"
                          leave-active-class="animated fadeOut">
                <div>
                  <strong class="text-grey-14">EXTERNAL</strong>
                  <RichText v-model="external_comment" />
                </div>
              </transition>
              <!-- END EXTERNAL COMMENTS -->

              <div class="q-mt-md">
                <q-btn label="Save" size="sm" icon="comment_bank" :color="disable_comment_btn ? 'grey-14': 'red-14'" :disabled="disable_comment_btn" class="q-mr-sm" />
                <q-btn label="Cancel" size="sm" icon="cancel" :color="disable_comment_btn ? 'grey-14': 'red-14'" :disabled="disable_comment_btn" />
              </div>
          </q-card-section>
        </q-card>
      </q-card-section>
      
      <q-separator inset />
      
      <q-card-section>
        <div>
          <strong><q-icon name="error_outline" style="font-size: 18pt;" /> [ x ] are the number of assigned S1 applications to the Screener.</strong>
        </div>
        <div class="row">
          <div class="col-md-4">
            <q-select outlined label="ASSIGN A SCREENER" class="q-my-md" />
            <q-btn color="red-14" label="FORWARD TO AD SCREENER" icon="verified" class="q-mr-sm" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <q-select outlined label="RE-ASSIGN AD SPECIALIST" class="q-my-md" />
            <q-btn color="red-14" label="RE-ASSIGN AD SPECIALIST" icon="verified" class="q-mr-sm" />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
  import ClientInformation from "./Items/ClientInformation";
  import PresentorInformation from "./Items/PresentorInformation";
  import MaterialInformation from "./Items/MaterialInformation";
  import RichText from "components/AddOns/RichText"
  export default {
    components: {
      ClientInformation,
      PresentorInformation,
      MaterialInformation,
      RichText
    },

    computed: {
      disable_comment_btn() {
        if (this.tab === 'internal_comments_tab' && this.internal_comment !== '') {
          return false;
        }
        if (this.tab === 'external_comments_tab' && this.external_comment !== '') {
          return false;
        }

        return true;
      }
    },
    data: () => ({
      internal_comment: "",
      external_comment: "",
      copy_claim_comment: "",
      tab: "internal_comments_tab",
      refresh_sec: 0,
    }),
    methods: {
      backToList() {
        this.$router.push({ name: "individual-application-list" });
      }
    }
  }
</script>
