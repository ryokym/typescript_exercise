<template>
  <div>
    <p>{{ getCurrentComponentName }}</p>
    <p></p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

// Tはtypeの略、第２引数にはUを使われることが多い
function copy<T>(value: T): T {
  return value;
}
// ジェネリクスを使わない通常の型注釈
function copy2(value: string): string {
  return value;
}
// 使う時にはジェネリクスの引数の型を指定する
console.log(copy<string>("sample"));
// 通常
console.log(copy2("sample"));

// ジェネリクスを使うと型推論してくれる
console.log(copy({ name: "ryota" }).name);

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
