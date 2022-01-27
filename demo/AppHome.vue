import AppChild from './AppChild.vue';
<template>
  <div>
    <AppChild class="AppChild" />
  </div>
</template>

<script>
import AppChild from './AppChild.vue';
// import h from './helper';

export default {
  name: 'Home',
  components: { AppChild },
};
</script>
