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
    <component :is="currentcomponent"></component>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TypeVariable from "@/components/Type/TypeVariable.vue";
import TypeFunction from "@/components/Type/TypeFunction.vue";

@Component({
  components: {
    TypeVariable,
    TypeFunction
  }
})
export default class Type extends Vue {
  currentcomponent = "";
  lessons = ["TypeVariable", "TypeFunction"];
  changeComponent(lessonNumber: number) {
    this.currentcomponent = this.lessons[lessonNumber];
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
