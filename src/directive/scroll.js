
import Vue from 'vue';

scroll.install = function(Vue){
    Vue.directive('scroll', {
        bind: (el, binding, vnode) => {
        // 是否执行回调事件
        let eventAction = true
        // 距离底部剩余距离开始触发回调
        let distance = 100 // (unit: px)
        // 监听滚动事件
        el.onscroll = (e) => {
            // 获取当前节点可滚动的距离   节点滚动条总高度 - 节点本身高度
            let scrollHeight = e.target.scrollHeight - e.target.clientHeight
            // 获取节点剩余可滚动的高度   可滚动距离  -  已经滚动的距离
            let residualHeight = scrollHeight - e.target.scrollTop
            // console.info(scrollHeight,e.target.offsetTop);
            //  滚动到指定区域执行回调事件
            if ((typeof binding.value === 'function') && residualHeight <= distance && eventAction) {
            // 执行事件回调函数
                binding.value();
                eventAction = false
            }  else if (residualHeight > distance) {
                eventAction = true
            }
        } 
        }
    })
}
  export default scroll;