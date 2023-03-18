<template>
  <div>
    <h1>안녕하세요!</h1>
    <p>{{ cwd }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cwd: ''
    }
  },
  created() {
    this.$api.get('/api/cwd').then((res) => {
      if (res.status === 200) {
        this.cwd = res.data;
      }
      else {
        this.cwd = "axios 에러";
      }
    })
  }
}
</script>