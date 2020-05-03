<template>
  <div>
    <p>{{ getCurrentComponentName }}</p>
    <p v-html="showProfile"></p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

interface DesignerProfile {
  // indexシグネチャー
  // このInterfaceはstring以外受け付けないが、stringのプロパティならいくらでも追加できる
  [index: string]: string;
}

@Component
class Intersection extends Vue {
  @Prop({ default: "" })
  componentName!: string;

  // indexシグネチャーを持つ型を注釈として明記する
  designer: DesignerProfile = {
    name: "jon",
    age: "20",
    address: "nagano"
  };

  get getCurrentComponentName() {
    return this.componentName;
  }

  get showProfile(): string {
    const profile: string[] = Object.entries(this.designer).map(
      ([key, value]) => {
        return `${key}: ${value}`;
      }
    );
    const result: string = profile.join("<br/>");
    return result;
  }
}

export default Intersection;
</script>
