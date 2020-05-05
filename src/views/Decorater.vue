<template>
  <div>
    <span
      class="lessons"
      v-for="(lesson, index) in lessons"
      :key="lesson"
      @click="changeComponent(index)"
    >
      <span class="lessons-lesson">{{ lesson }}</span>
      <span class="lessons-separate">|</span>
    </span>
    <component
      :is="currentcomponent"
      :component-name="getComponentName"
    ></component>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import UseClass from "@/components/Decorater/UseClass.vue";
import Factory from "@/components/Decorater/Factory.vue";
import CreateFramework from "@/components/Decorater/CreateFramework.vue";
import MultiUse from "@/components/Decorater/MultiUse.vue";
import UseReturnParam from "@/components/Decorater/UseReturnParam.vue";
import ProtoType from "@/components/Decorater/ProtoType.vue";
import PropertyDecorater from "@/components/Decorater/PropertyDecorater.vue";
import Accesser from "@/components/Decorater/Accesser.vue";
import MethodDecorater from "@/components/Decorater/MethodDecorater.vue";
import ParameterDecorater from "@/components/Decorater/ParameterDecorater.vue";

@Component({
  components: {
    UseClass,
    Factory,
    CreateFramework,
    MultiUse,
    UseReturnParam,
    ProtoType,
    PropertyDecorater,
    Accesser,
    MethodDecorater,
    ParameterDecorater
  }
})
export default class Type extends Vue {
  currentcomponent = "";
  componentName = "";
  lessons = [
    "UseClass",
    "Factory",
    "CreateFramework",
    "MultiUse",
    "UseReturnParam",
    "ProtoType",
    "PropertyDecorater",
    "Accesser",
    "MethodDecorater",
    "ParameterDecorater"
  ];
  changeComponent(lessonNumber: number) {
    this.currentcomponent = this.lessons[lessonNumber];
    this.componentName = this.lessons[lessonNumber];
  }
  get getComponentName() {
    return this.componentName;
  }
}
</script>

<style>
.lessons-lesson {
  font-weight: bold;
  color: #506780;
  cursor: pointer;
  text-decoration: underline;
}

.lessons-separate {
  padding: 0 1rem;
}

.lessons:last-of-type .lessons-separate {
  display: none;
}
</style>
