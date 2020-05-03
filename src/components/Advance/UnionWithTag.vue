<template>
  <div>{{ getCurrentComponentName }}</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

class Dog {
  // リテラル型をタグ用に定義する
  kind: "Dog" = "Dog";
  speak() {
    console.log("Bowwow");
  }
}

class Bird {
  // リテラル型をタグ用に定義する
  kind: "Bird" = "Bird";
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

  havepet(pet: Pet) {
    // タグを使って条件分岐を行う
    switch (pet.kind) {
      case "Dog":
        console.log("Dog");
        break;
      case "Bird":
        console.log("Bird");
        break;
    }
  }
}

export default Intersection;
</script>
