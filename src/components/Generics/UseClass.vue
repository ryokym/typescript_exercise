<template>
  <div>
    <p>{{ getCurrentComponentName }}</p>
    <p v-html="fruits"></p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

// stringかnumberかbooleanいずれかのみを突っ込んで使用するクラス
class LightDatabase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T): void {
    this.data.push(item);
  }
  remove(item: T): void {
    this.data.splice(this.data.indexOf(item), 1);
  }
  get(): T[] {
    return this.data;
  }
}

@Component
class Intersection extends Vue {
  @Prop({ default: "" })
  componentName!: string;

  StringLightDatabase: LightDatabase<string> = new LightDatabase<string>();
  fruits = "";

  get getCurrentComponentName(): string {
    return this.componentName;
  }

  addStrings(items: string[]): void {
    for (const item of items) {
      this.StringLightDatabase.add(item);
    }
  }

  toHtml(): void {
    const strings: string[] = this.StringLightDatabase.get();
    const result: string = strings.join("<br/>");
    this.fruits = result;
  }

  mounted() {
    this.addStrings(["apple", "banana", "orange"]);
    this.toHtml();
  }
}

export default Intersection;
</script>
