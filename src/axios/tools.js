import axios from 'axios';

/**
 * 公用get请求
 * @param url       接口地址
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */
export const get = ({url,params={},restParams={}, msg = '系统发生了重大错误 请联系Larry', headers}) =>
    axios.get(_urlMixPram(restParams,url), {params},headers).then(res => res.data).catch(err => {
       console.log(err);
    });
//function
function _urlMixPram(parm,url){
    let _url=url;
    for(let i in parm){
        _url=_url.replace('{'+i+'}',parm[i]);
    }
    return _url;
}
/**
 * 公用post请求
 * @param url       接口地址
 * @param data      接口参数
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */
export const post = ({url, data, msg = '接口异常', headers}) =>
    axios.post(url, data, headers).then(res => res.data).catch(err => {
        console.log(err);
    });

/**
 * 公用文件导出form请求
 * @param url       接口地址
 * @param data      接口参数
 */

export const postExport = ({url, data}) =>{
    return new Promise((resolve,reject)=>{
        const iframe = document.createElement("iframe");
        iframe.setAttribute('id','iframe_display');
        iframe.setAttribute('name','iframe_display');
        iframe.setAttribute('style','display:none');
        document.querySelector('.container').appendChild(iframe);
        const form = document.createElement("form");
        form.setAttribute('id','form1123');
        form.setAttribute('target','iframe_display');
        form.setAttribute('method','post');
        form.setAttribute('action',markUrl(url,data));
        document.querySelector('.container').appendChild(form);
        form.submit();
        form.remove();
        const parent = document.querySelector('.container');
        const iframe1 = document.getElementById("iframe_display");
        setTimeout(()=>{
            resolve({code:200})
            removeElement(iframe1)
        },2000)
    })

}
function removeElement(_element){
    var _parentElement = _element.parentNode;
    if(_parentElement){
        _parentElement.removeChild(_element);
    }
}
function markUrl(link,data){
    if (typeof data != "undefined" && data != "") {
        var paramArr = [];
        for (var attr in  data) {
            paramArr.push(attr + '=' +  data[attr]);
        }
        link += '?' + paramArr.join('&');
    }
    return link;
}