<script setup lang="ts">
import { useFooStore } from '@/store'

const fooStore = useFooStore()
const { foo } = storeToRefs(fooStore)
</script>

<template>
  <view class="flex flex-col gap-10rpx min-h-100vh justify-center items-center">
    <image class="h-200rpx w-200rpx" src="/static/logo.png" />
    <div class="text-50rpx" @click="fooStore.increment">
      {{ foo }}
    </div>
  </view>
</template>

<style lang="scss" scoped></style>
