"use script" //严格模式

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
//点击添加头像获取头像数据
svanrj.addEvent(faceView, 'click', function () {
  handlerFaceList();
})
//点击更新头像
svanrj.addEvent(faceViewList, 'click', function (e) {
  // 兼容处理
  const ev = e || window.event;
  //获取点击内容标签名称
  nodeName = ev.target.nodeName.toLowerCase();
  //创建img对象
  const createImg = svanrj.createEl('img');
  //获取img对象
  const getImg = svanrj.getTagName(faceView, 'img');
  let imgSrc = '';
  //添加数据
  if (nodeName === 'li') {
    const img = svanrj.getChild(ev.target)[0];
    imgSrc = img.src;
  }
  if (nodeName === 'img') {
    imgSrc = ev.target.src;
  }
  faceUpdate({
    getImg,
    createImg,
    imgSrc,
    type: 'add'
  })
})
// 点击删除头像
svanrj.addEvent(faceDelButton, 'click', function (e) {
  const ev = e || window.event;
  const getImg = svanrj.getTagName(faceView, 'img')[0];
  faceUpdate({
    getImg,
    type: 'del'
  })
  阻止事件冒泡
  if (ev.stopPropagation) {
    ev.stopPropagation();
  } else {
    ev.cancelBubble = true;
  }
})

//添加信息点击
svanrj.addEvent(addInfoButton, 'click', function () {
  infoDialog.classList.add('dialog-show');
});

// 删除注册点击事件
// svanrj.removeEvent(addInfoButton, 'click', show)
// 注册方式添加点击事件
// svanrj.addEvent(addInfoButton, 'click', show);
// 添加点击事件
// addInfoButton.onclick = function () {}