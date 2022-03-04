// Vue插件一定要暴露一个对象
let myPlugins = {};

myPlugins.install = function (Vue, options) {
  // 1. 添加全局方法或 property
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  /* Vue.directive('my-directive', {
    bind(el, binding, vnode, oldVnode) {
      // 逻辑...
    }
  }) */
  Vue.directive(options.name, (element, params) => {
    element.innerHTML = params.value.toUpperCase();
  })

  // 3. 注入组件选项
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }
  // 5. Vue.filter
  // 6. Vue.component
};


export default myPlugins;