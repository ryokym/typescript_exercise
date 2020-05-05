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
import Intersection from "@/components/Advance/Intersection.vue";
import Typeguard from "@/components/Advance/Typeguard.vue";
import UnionWithTag from "@/components/Advance/UnionWithTag.vue";
import TypeAsertion from "@/components/Advance/TypeAsertion.vue";
import NonNull from "@/components/Advance/NonNull.vue";
import IndexSignature from "@/components/Advance/IndexSignature.vue";
import FunctionOverload from "@/components/Advance/FunctionOverload.vue";
import OperationChaining from "@/components/Advance/OperationChaining.vue";
import NullishCoalescing from "@/components/Advance/NullishCoalescing.vue";
import Lookup from "@/components/Advance/Lookup.vue";
import RestTuple from "@/components/Advance/RestTuple.vue";
import ConstAsertion from "@/components/Advance/ConstAsertion.vue";

@Component({
  components: {
    Intersection,
    Typeguard,
    UnionWithTag,
    TypeAsertion,
    NonNull,
    IndexSignature,
    FunctionOverload,
    OperationChaining,
    NullishCoalescing,
    Lookup,
    RestTuple,
    ConstAsertion
  }
})
export default class Type extends Vue {
  currentcomponent = "";
  componentName = "";
  lessons = [
    "Intersection",
    "Typeguard",
    "UnionWithTag",
    "TypeAsertion",
    "NonNull",
    "IndexSignature",
    "FunctionOverload",
    "OperationChaining",
    "NullishCoalescing",
    "Lookup",
    "RestTuple",
    "ConstAsertion"
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
