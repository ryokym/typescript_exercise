<template>
  <p>TypeFunction</p>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

const anotherAdd = (num: number, num2: number): number => {
  return num * num2;
};

// 一行関数の場合
const multiThree = (num: number): number => num * 3;
// 上と同じ 最初のアローは戻り値を示している
const oneRowFuncAnother: (num: number) => number = (num) => num * 3;

@Component
export default class TypeFunction extends Vue {
  count = 3;
  add(num: number, num2: number): number {
    return num + num2;
  }

  // 何も返さない(undefindが返る時もあり得るが)
  voidfunc(): void {
    return;
  }

  // 関数anotherAddを注釈付きでプロパティotherAddに代入する。戻り値はアローで書く
  otherAdd: (n1: number, n2: number) => number = anotherAdd;
  // 無名関数もできる。プロパティotherAdd2に無名関数を代入(無名関数の方の戻り値の型注釈は省略できる)
  otherAdd2: (n1: number, n2: number) => number = function(
    num: number,
    num2: number
  ) {
    return num * num2;
  };

  // コールバック第1引数にnumber型の引数を持ち、且つ第２引数にはnumber型の引数とnumber型の戻り値を持つ関数を取る。最終的にnumberを返す
  // コールバック関数の戻り値をvoidなどにすると、この関数内でコールバック関数は使えなくなる(何も返らないから)
  doubleAndHandle(num: number, callback: (cbnum: number) => number): number {
    if (num > 10) {
      return callback(2);
    } else {
      return 1;
    }
  }

  // never型 決してなにも返さない ver3から
  error(message: string): never {
    throw new Error(message);
    // 例えば無限ループ等
    // while(true) {

    // }
  }
}
</script>
