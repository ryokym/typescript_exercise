<template>
  <div>
    <p>{{ getCurrentComponentName }}</p>
    <p>{{ showResult("結果", false) }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
class RestTuple extends Vue {
  @Prop({ default: "" })
  componentName!: string;

  get getCurrentComponentName(): string {
    return this.componentName;
  }

  // 第３引数のnumberがセットされていない場合、...numberには行き着かない。
  showResult(...args: [string, boolean, number?, ...number[]]): string {
    const [str, bool, num, ...nums] = args;
    return bool ? `${str}True` : "Falseでした";
  }
}

export default RestTuple;
</script>
