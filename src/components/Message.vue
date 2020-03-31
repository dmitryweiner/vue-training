<template>
    <li >
        <strong>{{ message.nick }}:</strong> {{ message.message }}
    </li>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import {IMessage } from '@/interfaces/messages.ts';

    @Component
    export default class Message extends Vue {
        @Prop() message: IMessage;
    }

</script>