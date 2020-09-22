<template>
    <div>
        <Upload />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Upload from '@/ui/components/Upload.vue';

@Component({
    components: {
        Upload
    }
})
export default class Index extends Vue {

}

</script>

<style lang="scss" scoped>

</style>