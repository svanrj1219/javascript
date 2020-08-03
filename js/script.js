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
let theadHtml = '<thead><tr>';
tableTheadData.forEach(item => {
  let width = item.width ? ` width="${item.width}"` : '';
  theadHtml += `<th${width}>${item.lable}</th>`
});
//拼接头部内容
theadHtml += '</tr></thead>';
let tbodyHtml = '<tbody>';
// 拼接表格
tbodyHtml += createTbodyData() + '</tbody>';
//合并内容
tableDom.innerHTML = theadHtml + tbodyHtml;
// 将内容添加到界面
divDom.append(tableDom);