<!-- 
  シングルトンパターン
-->

<template>
  <div>
    <p>{{ profile }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

class Singleton {
  private static instance: Singleton;
  private constructor(private name: string, private age: number) {}

  getProfile(): string {
    return `${this.name}は${this.age}歳`;
  }

  static getInstance(): Singleton {
    if (Singleton.instance) {
      return Singleton.instance;
    } else {
      Singleton.instance = new Singleton("koyama", 33);
      return Singleton.instance;
    }
  }
}

@Component
class SingletonVue extends Vue {
  instance: Singleton = Singleton.getInstance();
  get profile(): string {
    return this.instance.getProfile();
  }
}

export default SingletonVue;
</script>
