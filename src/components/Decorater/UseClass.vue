<template>
  <div>
    <p>{{ getCurrentComponentName }}</p>
    <p></p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

// デコレーターの引数にクラスの型を取りたい、が、汎用性を持たせたい。クラス → 実際はconstructor関数を指す。関数なのでFunction型を取る
function Logging(constructor: Function) {
  console.log("loggingStart!");
}

@Component
// 関数の定義時に実行される
@Logging
class Intersection extends Vue {
  @Prop({ default: "" })
  componentName!: string;

  get getCurrentComponentName(): string {
    return this.componentName;
  }
}

export default Intersection;
</script>
