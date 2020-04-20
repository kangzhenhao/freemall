<template>
  <div>
    <div class="md-modal modal-msg md-modal-transition" :class="{'md-show': mdShow}">
      <div class="md-modal-inner">
        <div class="md-top">
          <button class="md-close" @click="closeMd">关闭</button>
        </div>
        <div class="md-content">
          <div class="confirm-tips">
            <slot name="message"></slot>
          </div>
          <div class="btn-wrap">
            <slot name="btnGroup"></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="md-overlay" v-if="mdShow" @click="closeMd"></div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    mdShow: {
      type: Boolean
    }
  },
  methods: {
    closeMd () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
</style>
