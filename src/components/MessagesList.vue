<template>
    <div>
        <ul v-if="messages.length">
            <Message v-for="(item, index) in messages" :message="item" :key="index" />
        </ul>
        <span>Total messages: {{messages.length}}</span>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { IMessagesList } from '@/interfaces/messages.ts';
    import Message from '@/components/Message.vue';

    @Component({
        components: { Message }
    })
    export default class MessagesList extends Vue {
        @Prop() messages: IMessagesList;
    }

</script>

<style scoped>

</style>