<script setup>
defineProps(['modelValue', 'placeholder'])
defineEmits(['update:modelValue'])
</script>

<template>
    <input type="text" :placeholder="placeholder" class="bg-white border text-black text-[1.6rem] px-8 py-2 rounded-full w-full mr-4 sm:mb-0 mb-4"  :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)" />
</template>