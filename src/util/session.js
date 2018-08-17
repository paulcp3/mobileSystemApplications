import Vue from 'vue'

export default {
    _installed:false,
    install(Vue, options){
        if(!this._installed){
            this._installed = true
            Vue.set(Vue.prototype,'$session', this)
        }
    },
    set(key,value){
        Vue.set(this, key, value)
    },
    get(key){
        return this[key]
    },
    remove(key){
        Vue.delete(this, key)
    }
}