<template>
  <div>
    <p>Function</p>
    <p>{{ func(1, 2) }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// 通常の関数の型注釈
type addFunc = (num1?: number, num2?: number) => number;
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
  // ただしthisが文脈に従って変化することに注意。以下はエディタ上のlintでエラーが出る
  // デフォルト引数。注意が必要なのは、interfaceの引数定義時に?をつけること
  func: addFunc = (num1 = 1, num2 = 2) => {
    console.log(this.name);
    return num1 + num2;
  };
  func1(num1 = 1, num2 = 2) {
    return num1 * num2;
  }

  // interfaceを使った関数への型注釈。onマウスしても "interface AddFunc" と出るだけなので、ドキュメントとしてはあまりよろしくない。
  func2: AddFunc = (num1, num2) => {
    return num1 + num2;
  };

  // 参考
  funcStandart(this: { age: number }) {
    console.log(this.age);
  }
  // funcAllow = (this: { age: number }) => {
  //   console.log(this.age);
  // };
}
const instance = new Function();
// 引数にundefinedを指定すると、デフォルトのパラメータになる(書かなくても良い)
console.log(instance.func1(undefined));
console.log(instance.func(undefined));

export default Function;
</script>
