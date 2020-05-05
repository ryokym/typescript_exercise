<template>
  <div>
    <p>{{ getCurrentComponentName }}</p>
    <p></p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

// keyof演算子。Tに型注釈されたオブジェクトのkeyの値のみ、第２引数に指定できる
function copy<T extends { name: string; age: number }, U extends keyof T>(
  value: T,
  key: U
): T[U] {
  const result: T[U] = value[key];
  return result;
}

console.log(copy({ name: "koyamar", age: 20 }, "age"));

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
