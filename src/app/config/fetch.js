import {
	baseUrl
} from './env'
export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
	type = type.toUpperCase()
  url = baseUrl + url
  let sendData = '' //数据拼接字符串
  Object.keys(data).forEach(key => {
    sendData += key + '=' + data[key] + '&'
  })
  if (sendData !== '') {
    sendData = sendData.substr(0, sendData.lastIndexOf('&'));
  }
	if (type == 'GET') {
    url = url + '?' + sendData
	}
  return new Promise((resolve, reject) => {
    let requestObj;
    if (window.XMLHttpRequest) {
      requestObj = new XMLHttpRequest();
    } else {
      requestObj = new ActiveXObject
    }
    requestObj.open(type, url, true);
    requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    requestObj.send(sendData);
    requestObj.onreadystatechange = () => {
      if (requestObj.readyState == 4) {
        if (requestObj.status == 200) {
          let obj = requestObj.response
          if (typeof obj !== 'object') {
            obj = JSON.parse(obj)
          }
          resolve(obj)
        } else {
          reject(requestObj)
        }
      }
    }
  })
}
