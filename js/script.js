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
let tbodyHtml = '<tbody>';
let trHtml = '';
for (let i = 0; i < tableTbodyData.length; i++) {
  data = tableTbodyData[i];
  trHtml += '<tr>'
  trHtml += `<td>
              <div class="face">
                  <span class="gender icon-${data.face.gender}"></span>
                  <img src=${data.face.img} alt="">
              </div>
            </td>`
  trHtml += `<td>
              <div class="people-name">
                  <h4 class="name">${data.name.name}</h4>
                  <span class="nickname option-05 fs-12">昵称：${data.name.ninkname}</span>
              </div>
            </td>`
  trHtml += `<td>
              <div class="gender-wrap">
              <span class="gender icon-boy ${data.face.gender==="boy"?'' : 'option-05'}"></span>
                <span class="gender icon-girl ${data.face.gender==="gril"?'' : 'option-05'}"></span>
              </div>
          </td>`
  trHtml += `<td>
              <div class="age text-center">
                <p>${data.age.age}</p>
                <span class="option-05 fs-12">（单身狗）</span>
              </div>
          </td>`
  trHtml += `<td>
              <div class="phone">
              ${data.phone.code}<span class="option-05">（中国）</span><br />
              ${data.phone.number}
            </div>
          </td>`
  trHtml += `<td>
              <div>
              <img src=${data.country.National_flag} alt="${data.country.name}">
              <p class="country-name" style="color:${data.country.color};">${data.country.name}</p>
            </div>
          </td>`
  let likeHtml = '<td><div class="likes">';
  data.like.forEach(item => {
    likeHtml += `<span style="background-color:${item.color};">${item.tag}</span>`
  });
  likeHtml += '</div> </td>'
  trHtml += likeHtml;
  trHtml += `<td>
              <div class="grade">
              <span class="role-name">${data.grade.name}</span>
              <div class="grade-wrap icon-grade">
                  <div class="grade-high icon-grade" style="width: ${data.grade.level*16.66666}%;"></div>
              </div>
          </td>`
  trHtml += ` <td>
                <div class="operation">
                    <a href="javascript: void(0);" class="operation-btn">设置</a>
                    <ul class="links">
                        <a href="javascript: void(0);">编辑</a>
                        <a href="javascript: void(0);">删除</a>
                        <a href="javascript: void(0);">锁定</a>
                        <a href="javascript: void(0);">收起</a>
                    </ul>
                </div>
              </td>`
  trHtml += '</tr>'
}
tbodyHtml += trHtml + '</tbody>';
theadHtml += '</tr></thead>';
tableDom.innerHTML = theadHtml + tbodyHtml;
divDom.append(tableDom);