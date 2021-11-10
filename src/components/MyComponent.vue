<template>
  <div class="our-component">
    <h1>I'm a Component</h1>
    <ChildComponent />
  </div>
</template>

<script>
import ChildComponent from "@/components/ChildComponent";

export default {
  name: "MyComponent",
  components: {
    ChildComponent
  },
};
</script>

<style lang="scss" scoped>
.our-component {
  text-align: center;
}
</style>