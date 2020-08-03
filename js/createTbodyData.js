/*
 *主体数据
 */
function createTbodyData() {
  let trHtml = '';
  for (let i = 0; i < tableTbodyData.length; i++) {
    data = tableTbodyData[i];
    trHtml += '<tr>'
    //头像
    trHtml += createFace(data.face);
    //姓名
    trHtml += createName(data.name);
    //性别
    trHtml += createGender(data.face);
    // 年龄
    trHtml += createAge(data.age);
    //电话
    trHtml += createPhone(data.phone);
    //国家
    trHtml += createCountry(data.country);
    // 爱好
    trHtml += createLike(data.like);
    //级别
    trHtml += createGrade(data.grade)
    // 编辑
    trHtml += createOperation();
    trHtml += '</tr>'
  }
  return trHtml;
}
// 生成头像
function createFace(data) {
  let html = `<td>
                <div class="face">
                    <span class="gender icon-${data.gender}"></span>
                    <img src=${data.img} alt="">
                </div>
              </td>`
  return html;
}
//生成姓名
function createName(data) {
  let html = `<td>
                <div class="people-name">
                    <h4 class="name">${data.name}</h4>
                    <span class="nickname option-05 fs-12">昵称：${data.ninkname}</span>
                </div>
              </td>`
  return html;
}
//生成性别
function createGender(data) {
  let html = `<td>
              <div class="gender-wrap">
              <span class="gender icon-boy ${data.gender==="boy"?'' : 'option-05'}"></span>
                <span class="gender icon-girl ${data.gender==="gril"?'' : 'option-05'}"></span>
              </div>
            </td>`
  return html;
}
//生成年龄
function createAge(data) {
  let html = `<td>
              <div class="age text-center">
                <p>${data.age}</p>
                <span class="option-05 fs-12">（单身狗）</span>
              </div>
            </td>`
  return html;
}
// 生成电话
function createPhone(data) {
  let html = `<td>
                <div class="phone">
                ${data.code}<span class="option-05">（中国）</span><br />
                ${data.number}
              </div>
              </td>`
  return html;
}
//生成国籍
function createCountry(data) {
  let html = `<td>
                <div>
                <img src=${data.National_flag} alt="${data.name}">
                <p class="country-name" style="color:${data.color};">${data.name}</p>
              </div>
              </td>`
  return html;
}
//生成爱好
function createLike(data) {
  let likeHtml = '<td><div class="likes">';
  data.forEach(item => {
    likeHtml += `<span style="background-color:${item.color};">${item.tag}</span>`
  });
  likeHtml += '</div> </td>'
  return likeHtml;
}
// 生成级别
function createGrade(date) {
  let html = `<td>
              <div class="grade">
              <span class="role-name">${data.grade.name}</span>
              <div class="grade-wrap icon-grade">
                  <div class="grade-high icon-grade" style="width: ${data.grade.level*16.66666}%;"></div>
              </div>
            </td>`
  return html;
}
// 生成编辑
function createOperation() {
  let html = ` <td>
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
  return html;
}