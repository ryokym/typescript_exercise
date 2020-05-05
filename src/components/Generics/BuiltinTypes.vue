<template>
  <div>
    <p>{{ getCurrentComponentName }}</p>
    <p></p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

interface DownloadedData {
  id: number;
  user: {
    name: {
      first: string;
      last: string;
    };
  };
}

// オプショナルプロパティ化する
type pertialType = Partial<DownloadedData>;
// リードオンリー化する
type readonlyType = Readonly<DownloadedData>;

// Arrayはもともと<T>で型引数を取る
const ary: Array<string> = ["1", "2"];

// 例えばpromiseの戻り値に型注釈を与えて、responseのデータに対して型アサーションを効かせる
const fetchData: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("hello");
  }, 1000);
});
fetchData.then((data) => {
  data.toUpperCase();
});

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
