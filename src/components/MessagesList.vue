<template>
    <div>
        <ul v-if="$store.state.messages.length">
            <Message v-for="(item, index) in $store.state.messages" :message="item" :key="index" />
        </ul>
        <span>Total messages: {{$store.state.messages.length}}</span>
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
    }

</script>

<style scoped>

</style>