<template>
  <div>
    <p>Interface</p>
    <p>{{ greeting("こんにちは") }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

interface Person {
  name: string;
  age: number;
  greeting(message: string): string;
}

type otherProfile =
  | {
      pet: string;
      address: string;
    }
  | string;

@Component
class Primary extends Vue implements Person {
  name = "koyama";
  // 注意点、staticなプロパティにはInterfaceの型注釈が適用できない。そのためtypeエイリアスを使用する
  // static age = 33;
  age = 33;
  static otherProfile: otherProfile = {
    pet: "cat",
    address: "nagano"
  };
  // あるいはstringでもOKなので以下でもいける
  // static otherProfile: otherProfile = "sample";

  greeting(message: string): string {
    return `${this.name}さん${this.age}、${message}`;
  }

  debug(filename: string): string {
    return filename;
  }
}

// 以下のように代入時に型注釈を与えると、primary.debugは使えない(なぜならPersonという型にdebugが無いから)
// const primary: Person = new Primary();
// 以下のように型注釈を与えなければ、拡張したメソッドを利用できる
const primary = new Primary();
// ※注意、コンポーネントが描画されるまで以下が動作しないかと思いきや、view描画時点で以下は出力される
// つまり@Componentデコレータを使って定義されたclassはあくまでvueの機能を使って描画に関わる部分のみ担っていて、普通にclassとしては読み込まれる
console.log(primary.debug("Primary"));

export default Primary;
</script>
