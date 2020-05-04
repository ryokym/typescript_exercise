<template>
  <div>{{ getCurrentComponentName }}</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

interface DownloadedData {
  id: number;
  user: {
    name?: {
      first?: string;
      last?: string;
    };
  };
}

// interfaceからオブジェクトを掘ってタイプエイリアスを作る
type id = DownloadedData["id"];

const data: id = 1;
console.log(data);

@Component
class Intersection extends Vue {
  @Prop({ default: "" })
  componentName!: string;

  get getCurrentComponentName() {
    return this.componentName;
  }
}

export default Intersection;
</script>
