<template>
  <div>{{ getCurrentComponentName }}</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

interface Engineer {
  name: string;
  role: string;
}
interface Blogger {
  name: string;
  follower: number;
}
type NomadWorker = Engineer | Blogger;

class Dog {
  speak() {
    console.log("Bowwow");
  }
}

class Bird {
  speak() {
    console.log("Tweet");
  }
  fly() {
    console.log("flutter");
  }
}

type Pet = Dog | Bird;

@Component
class Intersection extends Vue {
  @Prop({ default: "" })
  componentName!: string;

  get getCurrentComponentName(): string {
    return this.componentName;
  }

  // 普通にtypeofで型を絞り込む
  toUpperCase(x: string | number) {
    if (typeof x === "string") {
      return x.toUpperCase();
    }
  }
  describeProfile(nomadWorker: NomadWorker) {
    // or演算子でEngineerかBloggerなので重複したプロパティであるnameしか指定できない
    console.log(nomadWorker.name);
    // 以下のように書くことで、不確実なプロパティの存在を絞り込むことができる
    if ("role" in nomadWorker) {
      console.log(nomadWorker.role);
    }
  }
  havepet(pet: Pet) {
    // or演算子でDogかBirdなので重複したプロパティであるspeakしか指定できない
    console.log(pet.speak);
    // 以下のように書くことで、不確実なクラスタイプを特定できる
    if (pet instanceof Bird) {
      pet.fly();
    }
  }
}

export default Intersection;
</script>
