<script setup>
defineProps(['modelValue', 'placeholder'])
defineEmits(['update:modelValue'])
</script>

<template>
    <input type="text" :placeholder="placeholder" class="border p-2 rounded w-full mb-4" :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)" />
</template>