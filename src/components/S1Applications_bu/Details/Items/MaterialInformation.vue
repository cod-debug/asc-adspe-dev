<template>
  <q-expansion-item header-class="text-dark bg-blue-2 shadow-3"
                    bordered>
    <template v-slot:header>
      <q-item-section avatar>
        <q-avatar icon="label_important" color="blue-2" text-color="dark" />
      </q-item-section>

      <q-item-section style="font-size: 18px; flex-wrap: unset;">
        <div class="row q-pa-none">
          <div class="col-md-4">
            <strong>Material Information</strong>
          </div>
          <div class="col-md-4 text-grey-14">
            Ads Details
          </div>
        </div>
      </q-item-section>
      <q-item-section side>
        <div class="row items-center">
          <q-icon name="ads_click" color="dark" size="24px" />
        </div>
      </q-item-section>
    </template>


    <q-card class="text-dark border-dark q-mb-md" bordered>
      <q-card-section>
        <q-form>
          <q-card bordered :square="true" class="q-pa-md">
            <div class="row">
              <div class="col-sm-12 q-pa-sm">
                <q-select outlined label="Name of Applicant" v-model="company_name"></q-select>
              </div>
              <div class="col-sm-6 q-pa-sm">
                <q-select outlined label="Company Name" v-model="affiliate"></q-select>
              </div>
              <div class="col-sm-6 q-pa-sm">
                <q-select outlined label="Address" v-model="company_name"></q-select>
              </div>
            </div>
          </q-card>

          <q-card bordered :square="true" class="q-pa-md q-mt-md">
            <q-card-section class="q-pa-sm">
              <q-icon name="bookmark" class="text-red-15" style="font-size: 24px" /> Type of Medium
            </q-card-section>
            <div class="row">
              <div class="col-sm-12 q-pa-sm">
                <div class="q-gutter-sm">
                  <q-radio dense v-model="type_of_medium" val="single" label="Single Media" />
                  <q-radio dense v-model="type_of_medium" val="multimedia" label="Multimedia" />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12 q-pa-sm">
                <q-select outlined label="Single Media *" v-model="single_media"></q-select>
              </div>
              <div class="col-sm-4 q-pa-sm">
                <q-select outlined label="Execution *" v-model="execution"></q-select>
              </div>
              <div class="col-sm-4 q-pa-sm">
                <q-select outlined label="Language / Dialect" v-model="language"></q-select>
              </div>
              <div class="col-sm-4 q-pa-sm">
                <q-input outlined label="Size / Length (in seconds)" v-model="size_length" />
              </div>
            </div>
          </q-card>

          <q-card bordered :square="true" class="q-pa-md q-mt-md">

            <q-card-section class="q-pa-sm">
              <p class="text-center text-grey-14 q-ma-none">ORIGINAL</p>
              <hr />
            </q-card-section>
            <q-card-section>
              <q-card bordered class="q-pa-sm">
                <q-card-section class="q-pa-sm">
                  <b>ORIGINAL</b>
                  <br />
                  <div class="q-mt-sm">
                    <q-icon name="bookmark" class="text-red-15" style="font-size: 24px" /> MAIN DOCUMENT
                  </div>
                </q-card-section>

                <q-card-section>
                  <div class="row">
                    <div class="col-sm-12 q-pa-sm">
                      <div class="q-gutter-sm">
                        <div class="">
                          <label>File name:</label>
                          <br />
                          <label class="text-grey-14">Sample-ORIGINAL-1-1-01-:35:55:881.pdf</label>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12 q-pa-sm text-right">
                      <q-btn color="red-14">
                        <q-icon name="open_in_new" />
                        VIEW DOCUMENT
                      </q-btn>
                    </div>
                  </div>
                </q-card-section>
                <hr />

                <q-card-section class="q-pa-sm">
                  <div class="q-mt-sm">
                    <q-icon name="bookmark" class="text-red-15" style="font-size: 24px" /> SUPPORT DOCUMENT
                  </div>
                </q-card-section>

                <q-card-section>
                  <div class="row">
                    <div class="col-sm-12 q-pa-sm">
                      <div class="q-gutter-sm">
                        <div class="">
                          <label>File name:</label>
                          <br />
                          <label class="text-grey-14">Sample-ORIGINAL-1-1-01-:35:55:881.pdf</label>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12 q-pa-sm text-right">
                      <q-btn color="red-14">
                        <q-icon name="open_in_new" />
                        VIEW DOCUMENT
                      </q-btn>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </q-card-section>
          </q-card>
        </q-form>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>
