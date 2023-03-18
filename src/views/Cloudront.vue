<template>
  <div>
    <h1>안녕하세요!</h1>
    <p>{{ text }}</p>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '이 단어가 보이면 axios가 안 되는 거예요!'
    }
  },
  async mounted() {
    await this.$api.get('/api/dummy').then((res) => {
      if (res.status === 200) {
        this.text = res.data;
      }
      else {
        this.text = "axios 에러";
      }
    })

    const canvas = this.$refs['canvas'];
    const context = canvas.getContext('2d');

    let image = new Image();
    image.src = 'https://port-0-cloudack-6g2llfe1pmto.sel3.cloudtype.app/image';
    image.onload = async () => {
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
    }
  }
}
</script>