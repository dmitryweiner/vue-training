<template>
    <div>
        <ul v-if="messagesCount">
            <Message v-for="(item, index) in messages" :message="item" :key="index" />
        </ul>
        <span>Total messages: {{messagesCount}}</span>
    </div>
</template>

<script lang="ts">
    import { mapGetters } from 'vuex';
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { IMessagesList } from '@/interfaces/messages.ts';
    import Message from '@/components/Message.vue';

    @Component({
        computed: {
            ...mapGetters([
                'messagesCount'
            ])
        },
        components: { Message }
    })
    export default class MessagesList extends Vue {
        @Prop() messages: IMessagesList;
    }

</script>

<style scoped>

</style>