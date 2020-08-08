/*
 * @Author: svanrj
 * @Date: 2020-07-30 11:58:02
 * @LastEditTime: 2020-08-07 18:32:56
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
  /**
   * @description:获取class 
   * @param {string}className 
   * @return: 
   */
  function getClassName(className) {
    return document.querySelector(className);
  }
  window.svanrj.getClassName = getClassName;
  /**
   * @description:获取父级下内容 (第一级)
   * @param {string}className 
   * @return:dom 
   */
  function getChild(className) {
    return className.children;
  }
  window.svanrj.getChild = getChild;
  /**
   * @description:获取tag内容 
   * @param {Dom string}className 
   * @return:dom 
   */
  function getTagName(parentNode, tagName) {
    return parentNode.getElementsByTagName(tagName);
  }
  window.svanrj.getTagName = getTagName;
  /**
   * @description:EventListener添加事件
   * @param {Dom Type Function}nodeDom, eventType, handlerFunction
   * @return: 
   */
  function addEvent(nodeDom, eventType, handlerFunction) {
    // 兼容性处理
    if (window.addEventListener) {
      nodeDom.addEventListener(eventType, handlerFunction);
    } else {
      nodeDom.attachEvent(`on${eventType}`, handlerFunction);
    }
  }
  window.svanrj.addEvent = addEvent;
  /**
   * @description:EventListener删除事件
   * @param {Dom Type Function}nodeDom, eventType, handlerFunction
   * @return: 
   */
  function removeEvent(nodeDom, eventType, handlerFunction) {
    if (window.removeEventListener) {
      nodeDom.removeEventListener(eventType, handlerFunction);
    } else {
      nodeDom.detachEvent(`on${eventType}`, handlerFunction);
    }
  }
  window.svanrj.removeEvent = removeEvent;
  /**
   * @description:为父级末尾添加元素
   * @param {parentNode nodedom}nodeDom, eventType, handlerFunction
   * @return: 
   */
  function addChild(parentNode, nodeDom) {
    parentNode.appendChild(nodeDom);
  }
  window.svanrj.addChild = addChild;
})()
// window表示作用于全局