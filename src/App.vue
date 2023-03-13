<script setup>
</script>

<template>
  <v-card>
    <v-layout>
      <v-app-bar color="teal-lighten-4" title="Blog của Bách"></v-app-bar>

      <v-navigation-drawer color="teal-lighten-5">
        <v-list>
          <v-list-item></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-navigation-drawer color="teal-lighten-5" location="right">
        <v-list>
          <v-list-item></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="min-height: 300px;">
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>

</style>
