<template>
  <div>{{ getCurrentComponentName }}</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

// OperationChaining もしデータが無かった場合にundefinedを返すようにする
// すべて見たい場合、すべてに?をつける
interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first?: string;
      last?: string;
    };
  };
}

const donwnloadedData: DownloadedData = {
  id: 1,
  user: {
    name: {}
  }
};

// 復習 !をつけないとエラーになる (non-null-asertion)
// ただし、typescript的にはOKでも実際のjsコードは動かない。"TypeError: Cannot read property 'name' of undefined"
// console.log(donwnloadedData.user!.name);

// 以下のようにすることで、もしuserのnameのfirstのデータがあれば返す、なければ undefinedを返すというふうに書ける
// 最後のfirstには?要らない。もしnameがあれば？ までで良いらしい
console.log(donwnloadedData.user?.name?.first);

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
