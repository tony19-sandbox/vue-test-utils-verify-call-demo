<template>
  <button data-testid="save" @click="onSave">Save</button>
</template>

<script>
export default {
  methods: {
    onSave () {
      console.log('createDim', this.$qiwaApi.createDimension())
      this.$qiwaApi.createDimension()
        .then(() => {})
        .catch(err => console.log('error', err))
    }
  }
}
</script>