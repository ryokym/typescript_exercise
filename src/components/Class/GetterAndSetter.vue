<template>
  <div>
    <p>GetterAndSetter</p>
    <!-- personクラスのnameをリアクティブに表示 -->
    <p>{{ person.name }}</p>
    <button @click="changeName">変更</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

class Person {
  constructor(public _name: string, private age: number) {}
  // 型注釈
  get name(): string {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
}
@Component
class GetterAndSetter extends Vue {
  // リアクティブなdataにperonクラスのインスタンスを持たせる
  person: Person = new Person("ryota", 33);
  showName(obj: Person) {
    this.person.name = obj.name;
  }
  // ボタンクリックでdataのpersonインスタンスのnameプロパティを変更する
  changeName() {
    this.person.name = "koyama";
    this.showName(this.person);
  }
  created() {
    this.showName(this.person);
  }
}
export default GetterAndSetter;
</script>
