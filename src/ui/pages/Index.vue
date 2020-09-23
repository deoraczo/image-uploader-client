<template>
    <component :is="status" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Upload from '@/ui/components/Upload.vue';
import { Getter } from 'vuex-class';

@Component({
    components: {
        Upload
    }
})
export default class Index extends Vue {
    @Getter('uploader/getStatus')
    status!: string;
}

</script>

<style lang="scss" scoped>

</style>