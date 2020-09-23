<template>
    <component :is="status" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Upload from '@/ui/components/Upload.vue';
import Uploading from '@/ui/components/Uploading.vue';
import Uploaded from '@/ui/components/Uploaded.vue';
import { Getter } from 'vuex-class';

@Component({
    components: {
        Upload,
        Uploading,
        Uploaded
    }
})
export default class Index extends Vue {
    @Getter('uploader/getStatus')
    status!: string;
}

</script>

<style lang="scss" scoped>

</style>