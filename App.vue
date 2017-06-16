<template>
  <div>
    <h1>Just links</h1>

    <input type="text"
          placeholder="Link..."
          v-model="linkValue"
          @keyup.enter="addLink" />

    <div v-for="(link, linkIndex) in $store.state.links">
      <div style="display: inline-block">
        <a target="_blank" :href="link" v-text="link"></a></div>
      <div style="display: inline-block"
           @click="$store.commit('removeLink', linkIndex)">Remove</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      linkValue: '',
    }
  },
  methods: {
    addLink() {
      this.$store.commit('addLink', this.linkValue)
      this.linkValue = ''
    }
  }
}
</script>
