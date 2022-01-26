<template>
  <div>
    <AppChild class="AppChild" />
  </div>
</template>

<script>
// import h from './helper';
import AppChild from './AppChild';

// const a = 'A';

export default {
  name: 'AppHome',
  components: { AppChild },
  props: {
    // o: {
    //   type: Object,
    //   default: () => ({}),
    // },
  },
  data () {
    return {
      // b: 'B',
    };
  },
};
</script>
