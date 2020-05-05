<template>
  <div>
    <p>{{ getCurrentComponentName }}</p>
    <p v-html="fruits"></p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

interface Add {
  (item: string): void;
}
interface Database<T extends string | number | boolean> {
  data: T[];
  add(item: T): void;
}

// Tに代入される
class StringDatabase implements Database<string> {
  data = ["sapmle"];
  add(item: string) {
    this.data.push(item);
  }
}

@Component
class Intersection extends Vue {
  @Prop({ default: "" })
  componentName!: string;
}

export default Intersection;
</script>
