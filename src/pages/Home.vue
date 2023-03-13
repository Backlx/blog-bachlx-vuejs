<template>
    <h1>Các bài viết</h1>
    <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col
        v-for="n in post"
        :key="n"
        cols="12"
        sm="4"
      >
        <v-sheet class="ma-2 pa-2">
          {{n.title}}
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import store from '../store/post'

export default {
  data() {
    return {
      post: store.state.post
    }
  },


  methods: {
  },

  mounted() {
    console.log(this.post)
  }
}
</script>