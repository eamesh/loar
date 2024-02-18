import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IUserInfo } from '../typings'

const initState = { nickname: '', avatar: '' }

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref<IUserInfo>({ ...initState })

    const setUserInfo = (val: IUserInfo) => {
      userInfo.value = val
    }

    const clearUserInfo = () => {
      userInfo.value = {}
    }
    const reset = () => {
      userInfo.value = { ...initState }
    }

    return {
      userInfo,
      setUserInfo,
      clearUserInfo,
      reset,
    }
  },
  {
    persist: true,
  },
)
