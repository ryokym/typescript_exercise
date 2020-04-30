<!--
  変数の型
-->
<template>
  <div>
    <p>TypeVariable</p>
    {{ person }}
    <br />
    {{ fruits }}
    <br />
    {{ anyFruits }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// 列挙型 内部的にはオブジェクトが作成される
enum CoffeSize {
  SHORT = "SHORT",
  TALL = "TALL",
  GRANDE = "GRANDE",
  VENTI = "VENTI"
}

// Typeエイリアス
type ClothSize = "small" | "medium" | "large";

@Component
export default class TypeVariable extends Vue {
  // 型注釈(推論できるときはした方が良い)
  // hasValue: boolean = false;
  // エディタの型推論によって注釈が省略される
  hasValue = false;

  // オブジェクトの型注釈 & 初期化 (:objectとは書かない)
  person: {
    name: string;
    age: number;
  } = {
    name: "ryota",
    age: 33
  };

  // 配列の初期化
  fruits: string[] = ["Apple", "Banana", "Orange"];

  // 何でもOK
  anyFruits: any[] = ["Apple", "Banana", "Orange", 1];

  // タプル ※型推論せず、全て注釈して定義する(加工はできてしまうが、出力時にエラーを吐いてくれる)
  book: [string, number, boolean] = [CoffeSize.SHORT, 100, true];

  // 何でもOK, 普通のjavascriptの変数と同じ
  anithing: any = 100;

  // どっちか
  unionCase: string | number = "5";

  // リテラル型 (appleという型になる。クラス外でconstで定義すると型推論されてこれになる)
  apple: "apple" = "apple";

  // リテラル型を利用して特定の代入のみを許す
  // 定義後、clothSizeには例えば"small"の文字列の再代入といったことはできない。リテラル型だから
  clothSize: "small" | "medium" | "large" | ["small", "medium"] = [
    "small",
    "medium"
  ];

  // Typeエイリアスを注釈に使う
  newCloseSize: ClothSize = "large";

  // unknown型。再代入はどんな型でもできるが、使う際には型チェックされる
  unknwonInput: unknown = "text";

  // あとnull型とundefined型。null型にundefinedを、あるいはundefinedにnullを代入することは可能
}
</script>
