<template>
    <div>
        <ul v-if="messagesCount">
            <Message v-for="(item, index) in $store.state.messages" :message="item" :key="index" />
        </ul>
        <span>Total messages: {{messagesCount}}</span>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { IMessagesList } from '@/interfaces/messages.ts';
    import Message from '@/components/Message.vue';
    import {mapGetters} from 'vuex';

    @Component({
        components: { Message },
        computed: mapGetters(['messagesCount'])
    })
    export default class MessagesList extends Vue {
    }

</script>

<style scoped>

</style>