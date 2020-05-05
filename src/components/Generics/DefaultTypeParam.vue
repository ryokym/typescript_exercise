<template>
  <div>
    <p>{{ getCurrentComponentName }}</p>
    <p></p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

// ジェネリクスに初期値を与える anyでもできる
interface ResponseData<T = string | number> {
  msg: T;
  status: number;
}
// 初期値がない場合は下記はエラーとなる
type tmp = ResponseData;

const data: ResponseData<string> = {
  msg: "sample",
  status: 1
};

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
