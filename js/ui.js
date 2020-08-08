/*
 * @Author: your name
 * @Date: 2020-08-08 18:35:12
 * @LastEditTime: 2020-08-08 22:07:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www.svanrj.tope:\html\javascript\js\ui.js
 */
(function () {
  "use script"
  if (!window.UI) {
    window.UI = {};
  }

  // 消息提醒默认配置
  const messageConfig = {
    duration: 2000,
    type: 'warning',
    html: true

  }

  function $message(params) {
    const body = svanrj.getTagName(document, 'body')[0];
    const messageDom = svanrj.createEl('div')
    svanrj.setAttr(messageDom, {
      id: 'alert-ui',
    })
    for (let key in params) {
      messageConfig[key] = params[key];
    }
    if (messageConfig.html) {
      messageDom.innerHTML = messageConfig.message;
    } else {
      messageDom.innerText = messageConfig.message;
    }
    UI.theme(messageDom, messageConfig.type)
    body.appendChild(messageDom);
    UI.show(messageDom);
  }
  window.UI.$message = $message;

  //处理主题
  function theme(node, type) {
    if (!type) {
      return false;
    }
    node.classList.add(`message-theme-${type}`);
  }
  window.UI.theme = theme;


  // 消息显示
  function show(node) {
    node.timeShow = setTimeout(function () {
      node.classList.add('show');
      clearTimeout(node.timeShow);
      UI.hide(node);
    }, 10)
  }
  window.UI.show = show;
  // 消息隐藏
  function hide(node) {
    node.timeHide = setTimeout(function () {
      node.classList.remove('show');
      clearTimeout(node.timeHide);
      UI.remove(node);
    }, messageConfig.duration)
  }
  window.UI.hide = hide;
  // 消息删除
  function remove(node) {
    const body = svanrj.getTagName(document, 'body')[0];
    node.timeRemove = setTimeout(function () {
      clearTimeout(node.timeRemove);
      body.removeChild(node);
      node.classList.remove('show');
    }, 1000)
  }
  window.UI.remove = remove;
})()