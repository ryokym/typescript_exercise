<template>
  <div>
    <p>{{ getCurrentComponentName }}</p>
    <p></p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

// mappedTypes一行で簡潔に書ける。
type mappedTypes = {
  [P in "apple" | "banana" | "orange"]: string;
};
// 上記と同じ これが上記なら一行で書けるっていうこと
type objectTypes = {
  apple: string;
  banana: string;
  orange: string;
};

// 全部readonlyにする
type mappedTypes2 = {
  readonly [P in "apple" | "banana" | "orange"]: string;
};

// 全部オプショナル化する
type mappedTypes3 = {
  [P in "apple" | "banana" | "orange"]?: string;
};

// ちなみにreadonlyや?の前に-を付けるとすべて外すという意味になる

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
