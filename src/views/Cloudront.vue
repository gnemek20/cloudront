<template>
  <div>
    <h1>안녕하세요!</h1>
    <p>{{ text }}</p>
    <canvas ref="canvas"></canvas>
    <div>
      <input type="file" ref="files" multiple />
      <button type="submit" @click="submit">submit</button>
    </div>
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
    await this.$get('/dummy').then((res) => {
      if (res.status === 200) {
        this.text = res.data;
      }
      else {
        this.text = 'axios 에러';
      }
    })

    const canvas = this.$refs['canvas'];
    const context = canvas.getContext('2d');

    let image = new Image();
    image.src = 'https://port-0-cloudack-6g2llfe1pmto.sel3.cloudtype.app/image';
    // image.src = 'https://drive.google.com/uc?export=view&id=175P1UgZsSjX931DQWOIvbj_EJ413JzC4';
    image.onload = async () => {
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
    }
  },
  methods: {
    async submit() {
      const formData = new FormData();
      const input = this.$refs['files'];
      const files = input.files;
      
      for (let i = 0; i < files.length; i++) {
        formData.append('image', files[i]);
      }

      await this.$post('/upload', formData).then((res) => {
        if (res.status === 200) {
          console.log('success');
        }
        else {
          console.log('failed');
        }
      })
    }
  }
}
</script>