<template>
    <div class="card">
        <div class="card_header">

        </div>
        <div class="card_body">

        </div>
        <div class="card_footer">

        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Upload extends Vue {

   private mounted(): void {
       console.log(`This component mounted`);
   }
}
</script>

<style lang="scss" scoped>

</style>