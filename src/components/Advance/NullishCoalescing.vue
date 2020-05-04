<template>
  <div>{{ getCurrentComponentName }}</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

// userまでは必須。プロパティname以降はあってもなくても良い
interface DownloadedData {
  id: number;
  user: {
    name?: {
      first?: string;
      last?: string;
    };
  };
}

const donwnloadedData: DownloadedData = {
  id: 1,
  user: {}
};

// Object is possibly 'undefined' に対しては!をつける (non-null-asertion)
// ただしそれだとconsole.log(data)した際に、実際の中身はundefinedなのでエラーになる
// なのでもしnameがあればfirstプロパティにアクセスする、の意で ? を付ける (OperationChaining)
// 更に、undefinedだった場合に別の値を入れるよう指定する。つまりNullishCoalescing(ヌルッシュコアレッシング)を使う
const data = donwnloadedData.user.name?.first ?? "no-user";
console.log(data);

// 予備知識として || を使用した場合には, 0, falseなども対象としてしまう。 ?? はnullとundefinedのみを対象とする

@Component
class Intersection extends Vue {
  @Prop({ default: "" })
  componentName!: string;

  get getCurrentComponentName() {
    return this.componentName;
  }
}

export default Intersection;
</script>
