<template>
  <div>{{ getCurrentComponentName }}</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

// 関数のオーバーロード 戻り値がstring | numberになってしまうことを防ぐ。(変数testがnumber あるいは string 型になってることを確認)
function toUppercase(x: string): string;
function toUppercase(x: number): number;
function toUppercase(x: string | number): string | number {
  if (typeof x === "string") {
    return x.toUpperCase();
  } else {
    return x.toString();
  }
}

const test = toUppercase(1);

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
