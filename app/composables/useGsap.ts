import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";

export const useGsap = () => {
  let ctx: gsap.Context;

  onMounted(() => {
    ctx = gsap.context(() => {});
  });

  onUnmounted(() => {
    if (ctx) ctx.revert();
  });

  return {
    add: (fn: () => void) => {
      if (ctx) ctx.add(fn);
    },
  };
};
