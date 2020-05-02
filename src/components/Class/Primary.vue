<template>
  <div>
    <p>class</p>
    {{ hello() }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// クラス構文
class Person {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }
  greeting() {
    alert(`こんにちは${this.name}`);
  }
  greetingEx(this: { name: string }) {
    alert(`こんにちは${this.name}`);
  }
  // 以下のようにすることでオブジェクトAからgreetingTypeメソッドを使用する際、オブジェクトAにはname, greeting, greetingExメソッドも持たなければならない制約を設けることができる。
  greetingType(this: Person) {
    alert(`こんにちは${this.name}`);
  }
}

@Component
export default class Primary extends Vue {
  hello(): void {
    const person = new Person("ryota");
    person.greeting();

    const anotherHello = {
      // name: "koyama",
      anotherGreeting: person.greeting,
      // ↑この時greeting関数の中のthisは name: "koyama" を参照するが、greeting関数にはthisのコンテキストを明示していないため、
      // typescript的にはエラーを吐かないが、nameが定義されていない場合当然ながらundefindとなる。
      anotherGreetingEx: person.greetingEx,
      anotherGreetingType: person.greetingType
    };

    anotherHello.anotherGreeting();
    /* ↑は引数の型注釈にthisを使用していない。 */
    // ↓は引数にthisを明示しているためTS上でエラーが確認できる。
    // anotherHello.anotherGreetingEx();
    // ↓anotherHelloのnameプロパティを有効にしても、Personクラスの他のプロパティが足りてないのでErrorが出る
    // anotherHello.anotherGreetingType();
  }
}
</script>
