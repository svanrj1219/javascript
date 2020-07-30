/*
 * @Author: svanrj
 * @Date: 2020-07-30 11:58:02
 * @LastEditTime: 2020-07-30 12:13:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www.svanrj.tope:\html\javascript\js\svanrj.js
 */
(function () {
  "use script" //严格模式
  if (!window.svanrj) {
    window.svanrj = {};
  }
  /**
   * @description:获取id Dom元素
   * @param {string} id
   * @return: Dom
   */
  function $(id) {
    if (typeof id != 'string') {
      throw new Error('参数类型必须为string');
    }
    const dom = document.getElementById(id);
    if (!dom) {
      throw new Error('Dom对象不存在');
    }
    return dom;
  }
  window.svanrj.$ = $;
  /**
   * @description:创建Dom对象 
   * @param {string} node 
   * @return: Dom元素
   */
  function createEl(node) {
    return document.createElement(node);
  }
  window.svanrj.createEl = createEl;
  /**
   * @description:设置节点属性 
   * @param {Dom,json} node,styles 
   * @return: 
   */
  function setAttr(node, styles) {
    for (const key in styles) {
      node.setAttribute(key, styles[key]);
    }
  }
  window.svanrj.setAttr = setAttr;
  /**
   * @description:获取节点属性 
   * @param {Dom,string}node style 
   * @return: 属性值
   */
  function getAttr(node, style) {
    return node.getAttribute(style);
  }
  window.svanrj.getAttr = getAttr;
})()
// window表示作用于全局