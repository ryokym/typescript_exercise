<template>
  <div>
    <p>{{ getCurrentComponentName }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

const ary: number[] = [10, 20];
// タプル型として定義する
const ary2 = [10, 20] as const;
const person: {
  name: string;
  age: number;
} = {
  name: "ryota",
  age: 33
};
// タプル型として定義する
const person2 = {
  name: "ryota",
  age: 33
} as const;

console.log(person2.age);
// 以下のような変更はできない
// person2.age = 34;

// person2の型情報をコピーする
type personType = typeof person2;

@Component
class ConstAsertion extends Vue {
  @Prop({ default: "" })
  componentName!: string;

  get getCurrentComponentName(): string {
    return this.componentName;
  }
}

export default ConstAsertion;
</script>
