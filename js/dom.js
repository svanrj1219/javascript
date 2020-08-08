"use script"
/*
 * @Author: your name
 * @Date: 2020-08-08 17:09:06
 * @LastEditTime: 2020-08-08 17:11:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \www.svanrj.tope:\html\javascript\js\dom.js
 */

// 获取元素
const divDom = svanrj.$('table-data-wrap');
//创建dom对象
const tableDom = svanrj.createEl('table');
//通过类名获取dom元素
const addInfoButton = svanrj.getClassName('.add-info-button');
const faceView = svanrj.getClassName('.face-view');
const faceViewList = svanrj.getClassName('.face-view-list');
// 通过标签获取元素
const faceDelButton = svanrj.getTagName(faceView, 'a')[0];
//通过id获取元素
const infoDialog = svanrj.$('info-dialog');