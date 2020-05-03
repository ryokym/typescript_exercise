<template>
  <div>
    <p>Function</p>
    <p>{{ func(1, 2) }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// 通常の関数の型注釈
type addFunc = (num1: number, num2: number) => number;
interface AddFunc {
  (num1: number, num2: number): number;
}

interface Person {
  name: string;
  age: number;
}

@Component
class Function extends Vue implements Person {
  name = "koyama";
  age = 33;
  // 通常の関数typeエイリアスを使って関数funcをクラス内に定義する
  func: addFunc = (num1, num2) => {
    return num1 + num2;
  };
  // interfaceを使った関数への型注釈。onマウスしても "interface AddFunc" と出るだけなので、ドキュメントとしてはあまりよろしくない。
  func2: AddFunc = (num1, num2) => {
    return num1 + num2;
  };
}
export default Function;
</script>
