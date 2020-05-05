<template>
  <div>
    <p>{{ getCurrentComponentName }}</p>
    <p></p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
// タイプエイリアスを作成
type name = {
  name: string;
};
// type nameを継承した型引数
function copy<T extends name>(value: T): T {
  return value;
}
console.log(copy({ name: "r_koyama" }));

@Component
class Intersection extends Vue {
  @Prop({ default: "" })
  componentName!: string;

  get getCurrentComponentName(): string {
    return this.componentName;
  }
}

export default Intersection;
</script>
