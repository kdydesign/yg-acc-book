<template>
  <q-layout view="hHh Lpr lFf">
    <header-tools/>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import HeaderTools from '@/layouts/HeaderTools'

export default {
  name: 'Layout',
  components: { HeaderTools }
}
</script>

<style scoped>

</style>
