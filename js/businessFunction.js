"use script"
/*
 * @Author: your name
 * @Date: 2020-08-08 17:13:00
 * @LastEditTime: 2020-08-08 17:45:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www.svanrj.tope:\html\javascript\js\businessFunction.js
 */

/**
 * @description: api调用回调函数
 * @param {type} 
 * @return: 
 */
function handlerFaceListCallback(data) {
  liHtml = '';
  for (let key of data.data) {
    liHtml += `<li><img src="${key}"alt=""></li>`
  }
  faceViewList.innerHTML = liHtml;
}

/**
 * @description: 操作头像相关
 * @param {type} 
 * @return: 
 */
function faceUpdate(params) {
  if (params.type === 'add') {
    //判断img标签是否存在，
    //如果已存在直接修改src内容
    if (params.getImg.length != 0) {
      params.getImg[0].src = params.imgSrc;
    } else {
      //不存在就创建img标签并添加src属性
      params.createImg.src = params.imgSrc;
      svanrj.addChild(faceView, params.createImg)
    }
  } else if (params.type === 'del') {
    faceView.removeChild(params.getImg);
  }
}