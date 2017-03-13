<template>
  <div>
    Basic template.
    <component :is="header"></component>
    <component :is="body"></component>
    <component :is="footer"></component>
  </div>
</template>
<script>
  export default {
    props: ['header', 'body', 'footer']
  }
</script>