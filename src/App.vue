<template>
  <div class="app">
    <post-list></post-list>
  </div>
</template>

<script>
import PostList from './PostList.vue';

export default {
  name: 'app',
  components: {
    PostList,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  font-size: 15px;
  line-height: 1.5;
  color: #333;
}

ul {
  padding-left: 20px;
}

ul li span {
  color: #999;
  margin-right: 10px;
}

@keyframes App-logo-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

</style>
