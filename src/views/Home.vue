<template>
  <q-page class="q-layout-padding card-examples row items-start q-gutter-md">
    <q-card v-for="i in 2"
            :key="i">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom">
          <div class="text-h6">
            오창 명종이네 집
          </div>
          <div class="text-subtitle2">
            2020-12-12
          </div>
        </div>
      </q-img>

      <q-card-actions>
        <q-btn flat>
          Action 1
        </q-btn>
        <q-btn flat>
          Action 2
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  computed: {
    tableEl () {
      return this.$refs.table ? this.$refs.table.$el : null
    }
  }
}
</script>
