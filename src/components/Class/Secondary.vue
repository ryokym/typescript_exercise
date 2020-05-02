<!--
  やや実践的なClass構文
-->

<template>
  <div>
    <p>{{ display }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

class Person {
  // イミュータブルなプロパティにしたい場合はreadonlyを付ける。(コンストラクタの中では変更できてしまうが...)
  public readonly id = 1;
  // コンストラクタの省略形。nameはGetterとし、外部からの変更を抑止する。
  // readonly修飾子を付与することで、インスタンス化の時以外に再定義されていないことを保証する
  // 当然 protected もある
  constructor(private readonly name: string, private readonly age: number) {}
  // 引数はPersonクラスのオブジェクトであることを保証し、初期化の際に定義されているnameを返却する
  show(this: Person): string {
    return this.name;
  }
}

@Component
class Secondary extends Vue {
  public display = "";
  hello(obj: Person) {
    this.display = obj.show();
  }
  created() {
    // 初期化イベントでPersonクラスのインスタンスを生成後、自クラスのhelloメソッドを呼び出す
    const person = new Person("koyama", 33);
    // 以下のようにageプロパティの値を変更しようとしても、privateなのでエラーが返る
    // person.age = 100;
    setTimeout(() => {
      this.hello(person);
    }, 1500);
  }
}
export default Secondary;
</script>
