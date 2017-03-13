<template>
  <div>
    <tplBasic :header="orgHeader" :footer="orgFooter" :body="orgBody"></tplBasic>
  </div>
</template>

<script>
import tplBasic from '../templates/Basic';
import orgHeader from '../organisms/Header';
import orgBody from '../organisms/Body';
import orgFooter from '../organisms/Footer';

export default {
  data() {
    return {
      orgHeader,
      orgBody,
      orgFooter
    }
  },
  components: {
    tplBasic
  }
}
</script>