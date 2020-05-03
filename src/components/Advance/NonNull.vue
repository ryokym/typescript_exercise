<template>
  <div>
    <p>{{ getCurrentComponentName }}</p>
    <input id="input" ref="inputtext" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
class Intersection extends Vue {
  @Prop({ default: "" })
  componentName!: string;

  get getCurrentComponentName() {
    return this.componentName;
  }

  mounted() {
    // non-null-asertion
    const inputText = this.$refs.inputtext!;
    if (inputText instanceof HTMLInputElement) {
      inputText.value = "foo";
    }
    // 以下は一行書き
    // (this.$refs.inputtext as HTMLInputElement).value = "bar";
  }
}

export default Intersection;
</script>
