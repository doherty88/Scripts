/*
Quantumult X:
[task_local]
1 0 * * * https://github.com/doherty88/Scripts/raw/main/quanx/changtai.js, tag=长泰广场

[rewrite_local]
^https:\/\/api\.techmall\.chamshare\.cn\/daysign\/read url script-request-header https://github.com/doherty88/Scripts/raw/main/quanx/changtai.js

[mitm]
hostname = api.techmall.chamshare.cn

*/
const $cmp = compatibility()
const accessTokeName = 'changtaikey'
const appName = "长泰广场"
const CheckinURL = 'https://api.techmall.chamshare.cn/daysign/sign'

function getQueryString(url, item) {
    var sValue = url.match(new RegExp("[\?\&]" + item + "=([^\&]*)(\&?)", "i"));
    return sValue ? sValue[1] : sValue;
}

if ($cmp.isRequest) {
    GetToken()
    $cmp.done()
} else {
    Checkin()
    $cmp.done()
}

function GetToken() {
    if ($request && $request.method == "GET") {
        var TokenValue = getQueryString($request.url, 'access_token')
        if ($cmp.read(accessTokeName) != (undefined || null)) {
            if ($cmp.read(accessTokeName) != TokenValue) {
                var token = $cmp.write(TokenValue, accessTokeName)
                if (!token) {
                    $cmp.notify("更新" + accessTokeName + " Token 失败‼️", "", "")
                } else {
                    $cmp.notify("更新" + accessTokeName + " Token 成功 🎉", "", "")
                }
            }
        } else {
            var token = $cmp.write(TokenValue, accessTokeName);
            if (!token) {
                $cmp.notify("首次写入" + accessTokeName + " Token 失败‼️", "", "")
            } else {
                $cmp.notify("首次写入" + accessTokeName + " Token 成功 🎉", "", "")
            }
        }
    } else {
        $cmp.notify("写入" + accessTokeName + "Token 失败‼️", "", "配置错误, 无法读取请求头, ")
    }
}

function Checkin() {
    var opts = {
        headers: {
            'Content-Type': 'application/json',
            'Host' : "api.techmall.chamshare.cn"
        },
        method: 'PUT',
        url: CheckinURL,
        body: '{"access_token":"' + $cmp.read(accessTokeName) + '"}'
    }

    $task.fetch(opts).then(
        (resp) => {
            const result = JSON.parse(resp.body)
            if (!error) {
                if (result.code == 0) {
                    $cmp.notify(appName, "", "签到成功！🎉")
                } else if (result.code == 1001) {
                    $cmp.notify(appName, "",  "重复签到！😊")
                } else if (result.code == 2) {
                    $cmp.notify(appName, "", "Token 失效❗ 请重新获取。️")
                } else {
                    console.log("Changtai failed response : \n" + data)
                    $cmp.notify(appName, "签到失败‼️ 详情请见日志。", data)
                }
            } else {
                $cmp.notify(appName,  "签到接口请求失败，详情请见日志。", error)
            }
            // const { statusCode: status, statusCode, headers, body } = resp
            // callback(null, { status, statusCode, headers, body }, body)
        },
        (err) => callback(err)
    ) 

}

function compatibility(){const e="undefined"!=typeof $request,t="undefined"!=typeof $httpClient,r="undefined"!=typeof $task,n="undefined"!=typeof $app&&"undefined"!=typeof $http,o="function"==typeof require&&!n,s=(()=>{if(o){const e=require("request");return{request:e}}return null})(),i=(e,s,i)=>{r&&$notify(e,s,i),t&&$notification.post(e,s,i),o&&a(e+s+i),n&&$push.schedule({title:e,body:s?s+"\n"+i:i})},u=(e,n)=>r?$prefs.setValueForKey(e,n):t?$persistentStore.write(e,n):void 0,d=e=>r?$prefs.valueForKey(e):t?$persistentStore.read(e):void 0,l=e=>(e&&(e.status?e.statusCode=e.status:e.statusCode&&(e.status=e.statusCode)),e),f=(e,i)=>{r&&("string"==typeof e&&(e={url:e}),e.method="GET",$task.fetch(e).then(e=>{i(null,l(e),e.body)},e=>i(e.error,null,null))),t&&$httpClient.get(e,(e,t,r)=>{i(e,l(t),r)}),o&&s.request(e,(e,t,r)=>{i(e,l(t),r)}),n&&("string"==typeof e&&(e={url:e}),e.header=e.headers,e.handler=function(e){let t=e.error;t&&(t=JSON.stringify(e.error));let r=e.data;"object"==typeof r&&(r=JSON.stringify(e.data)),i(t,l(e.response),r)},$http.get(e))},p=(e,i)=>{r&&("string"==typeof e&&(e={url:e}),e.method="POST",$task.fetch(e).then(e=>{i(null,l(e),e.body)},e=>i(e.error,null,null))),t&&$httpClient.post(e,(e,t,r)=>{i(e,l(t),r)}),o&&s.request.post(e,(e,t,r)=>{i(e,l(t),r)}),n&&("string"==typeof e&&(e={url:e}),e.header=e.headers,e.handler=function(e){let t=e.error;t&&(t=JSON.stringify(e.error));let r=e.data;"object"==typeof r&&(r=JSON.stringify(e.data)),i(t,l(e.response),r)},$http.post(e))},a=e=>console.log(e),y=(t={})=>{e?$done(t):$done()};return{isQuanX:r,isSurge:t,isJSBox:n,isRequest:e,notify:i,write:u,read:d,get:f,post:p,log:a,done:y}}
