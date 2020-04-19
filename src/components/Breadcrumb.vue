<template>
  <div class="nav-breadcrumb-wrap">
    <div class="container">
      <nav class="nav-breadcrumb">
        <a href="/">首页</a>
        <span>{{ navName }}</span>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    navName: {
      type: String,
      required: true
    }
  }
}
</script>
