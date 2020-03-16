<template>
    <div>
        <ul v-if="messagesCount">
            <li v-for="(item, index) in messages" :key="index">
                <strong>{{ item.nick }}:</strong> {{ item.message }}
            </li>
        </ul>
        <span>Total messages: {{messagesCount}}</span>
    </div>
</template>

<script lang="ts">
    import { mapGetters } from 'vuex';
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { IMessagesList } from '@/interfaces/messages.ts';

    @Component({
        computed: {
            ...mapGetters([
                'messagesCount'
            ])
        }
    })
    export default class MessagesList extends Vue {
        @Prop() messages: IMessagesList = [];
    }

</script>

<style scoped>

</style>