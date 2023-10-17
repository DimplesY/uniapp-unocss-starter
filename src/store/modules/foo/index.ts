export const STORE_KEY = 'foo'

export const useFooStore = defineStore(STORE_KEY, () => {
  const foo = ref(0)

  function increment() {
    foo.value++
  }

  function decrement() {
    foo.value--
  }

  return {
    foo,
    increment,
    decrement,
  }
})

export default useFooStore
