<template>
  <div>
    <h1>Image Upload</h1>
    <form @submit.prevent="uploadImage">
      <input ref="fileInput" type="file" accept="image/*" />
      <v-btn type="submit" color="primary">Upload</v-btn>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    async uploadImage() {
      const fileInput = this.$refs.fileInput;
      const file = fileInput.files[0];

      if (file) {
        const formData = new FormData();
        formData.append('image', file);

        try {
          await this.$axios.post('preuvedon/', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          alert('Image uploaded successfully');
        } catch (error) {
          console.error(error);
          alert('Error uploading image');
        }
      } else {
        alert('Please select an image');
      }
    }
  }
};
</script>