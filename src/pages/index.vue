<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
const { count } = storeToRefs(counterStore)
</script>

<template>
  <view class="flex flex-col gap-10rpx min-h-100vh justify-center items-center">
    <image class="h-200rpx w-200rpx" src="/static/logo.png" />
    <div class="text-50rpx" @click="counterStore.increment">
      {{ count }}
    </div>
  </view>
</template>

<style lang="scss" scoped></style>
