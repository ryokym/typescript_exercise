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
    // console.log(this.$refs);
    // 以下のように書いた場合 .value でエラーになる。 変数inputTextがHTMLInputElementであることをtypescriptが判断できないため、valueプロパティの存在を認識しない。
    // const inputText = this.$refs.inputtext;
    // inputText.value = "hogehoge";

    // 以下のように書く必要がある
    const inputText = this.$refs.inputtext as HTMLInputElement;
    inputText.value = "foo";
    // 以下は一行書き
    (this.$refs.inputtext as HTMLInputElement).value = "bar";
  }
}

export default Intersection;
</script>
