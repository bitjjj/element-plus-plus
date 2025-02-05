<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EppAlias',
  render() {
    return this.$slots.default?.(this.$attrs);
  },
});
</script>
