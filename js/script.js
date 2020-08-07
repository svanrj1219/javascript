"use script" //严格模式

// 获取元素
const divDom = svanrj.$('table-data-wrap');
//创建dom对象
const tableDom = svanrj.createEl('table');
//通过类名获取dom元素
const addInfoButton = svanrj.getClassName('.add-info-button');
const faceView = svanrj.getClassName('.face-view');
const faceViewList = svanrj.getClassName('.face-view-list');
//通过id获取元素
const infoDialog = svanrj.$('info-dialog');
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

function handlerFaceListCallback(data) {
  console.log(data.data)
  liHtml = '';
  for (let key of data.data) {
    liHtml += `<li><img src="${key}"alt=""></li>`
  }
  faceViewList.innerHTML = liHtml;
}
svanrj.addEvent(faceViewList, 'click', function (e) {
  //获取点击内容标签名称
  nodeName = e.target.nodeName.toLowerCase();
  //创建img对象
  const createImg = svanrj.createEl('img');
  //获取img对象
  const getImg = svanrj.getTagName(faceView, 'img');
  let imgSrc = '';
  //添加数据
  if (nodeName === 'li') {
    const img = svanrj.getChild(e.target)[0];
    imgSrc = img.src;
  }
  if (nodeName === 'img') {
    imgSrc = e.target.src;
  }
  //判断img标签是否存在，
  //如果已存在直接修改src内容
  if (getImg.length != 0) {
    getImg[0].src = imgSrc;
  } else {
    //不存在就创建img标签并添加src属性
    svanrj.addChild(faceView, createImg)
    getImg[0].src = imgSrc;
  }
})
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