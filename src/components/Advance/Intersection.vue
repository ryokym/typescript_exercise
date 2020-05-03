<template>
  <div>
    <p>{{ getCurrentComponentName }}</p>
    <p>{{ profile }}</p>
  </div>
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
interface EngineerBlogger extends Engineer, Blogger {}
// type EngineerBlogger = Engineer & Blogger;

@Component
class Intersection extends Vue implements EngineerBlogger {
  @Prop({ default: "" })
  componentName!: string;

  name = "koyama";
  role = "Frontend";
  follower = 10000;

  get getCurrentComponentName(): string {
    return this.componentName;
  }

  get profile(): string {
    return `${this.name} : ${this.role} ${this.follower}`;
  }
}

export default Intersection;
</script>
