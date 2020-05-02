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
import Primary from "@/components/Class/Primary.vue";
import Secondary from "@/components/Class/Secondary.vue";

@Component({
  components: {
    Primary,
    Secondary
  }
})
export default class Type extends Vue {
  currentcomponent = "";
  lessons = ["Primary", "Secondary"];
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
