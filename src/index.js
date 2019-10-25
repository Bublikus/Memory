import Storages from 'js-storage'

const handler = {
  get(target, prop, receiver) {
    console.log('get', target, prop, receiver)
    return Reflect.get(...arguments)
  },
  set(target, prop, val, receiver) {
    console.log('set', target, prop, val, receiver)
    return Reflect.set(...arguments)
  },
}

export const Memory = new Proxy(Storages, handler)

console.log(Storages.sessionStorage.isEmpty('foo'))
console.log(Memory.sessionStorage.isEmpty('foo'))

