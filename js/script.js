"use script" //严格模式

// 获取元素
const divDom = svanrj.$('table-data-wrap');
//创建dom对象
const tableDom = svanrj.createEl('table');
// 设置属性
svanrj.setAttr(tableDom, {
  'width': '100%',
  'border': '0',
  'cellpadding': '0',
  'cellSpacing': '0',
  'id': 'table-data-wrap',
})
//拼接头部内容
let theadHtml = '<thead><tr>';
tableTheadData.forEach(item => {
  let width = item.width ? ` width="${item.width}"` : '';
  theadHtml += `<th${width}>${item.lable}</th>`
});
theadHtml += '</tr></thead>';
// 拼接表格
let tbodyHtml = '<tbody>';
tbodyHtml += createTbodyData() + '</tbody>';
//合并内容
tableDom.innerHTML = theadHtml + tbodyHtml;
// 将内容添加到界面
divDom.append(tableDom);

//通过类名获取dom元素
const addInfoButton = svanrj.getClassName('.add-info-button');
//通过id获取元素
const infoDialog = svanrj.$('info-dialog');
//添加按钮点击效果
svanrj.addEvent(addInfoButton, 'click', function () {
  infoDialog.classList.add('dialog-show');
});
// 删除注册点击事件
// svanrj.removeEvent(addInfoButton, 'click', show)
// 注册方式添加点击事件
// svanrj.addEvent(addInfoButton, 'click', show);
// 添加点击事件
// addInfoButton.onclick = function () {}