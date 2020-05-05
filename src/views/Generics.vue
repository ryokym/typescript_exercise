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
import Arguments from "@/components/Generics/Arguments.vue";
import Extends from "@/components/Generics/Extends.vue";
import Keyof from "@/components/Generics/Keyof.vue";
import UseClass from "@/components/Generics/UseClass.vue";
import UseInterface from "@/components/Generics/UseInterface.vue";
import DefaultTypeParam from "@/components/Generics/DefaultTypeParam.vue";
import MappedTypes from "@/components/Generics/MappedTypes.vue";
import ConditionalTypes from "@/components/Generics/ConditionalTypes.vue";
import BuiltinTypes from "@/components/Generics/BuiltinTypes.vue";

@Component({
  components: {
    Arguments,
    Extends,
    Keyof,
    UseClass,
    UseInterface,
    DefaultTypeParam,
    MappedTypes,
    ConditionalTypes,
    BuiltinTypes
  }
})
export default class Type extends Vue {
  currentcomponent = "";
  componentName = "";
  lessons = [
    "Arguments",
    "Extends",
    "Keyof",
    "UseClass",
    "UseInterface",
    "DefaultTypeParam",
    "MappedTypes",
    "ConditionalTypes",
    "BuiltinTypes"
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
