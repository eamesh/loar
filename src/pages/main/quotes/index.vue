<script setup lang="ts"></script>

<template>
  <AppLogos />
  <InputEntry />
  <uni-badge
    text="asd"
    type="default"
    size="normal"
  />
  <uni-dateformat
    :threshold="[0, 0]"
    format="yyyy/MM/dd hh:mm:ss"
  />
  <uni-countdown :day="1" :hour="1" :minute="12" :second="40" />
  123
  {{ $t('app.name') }}
</template>

<style></style>

<route ang="json">
{

}
</route>
