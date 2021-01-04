const $cmp = compatibility()
const CheckinURL = 'https://api.techmall.chamshare.cn/daysign/sign'
const accessTokeName = 'changtaikey'
const appName = "长泰广场"

const url = CheckinURL;
const method = "PUT";
const headers = {
            'Content-Type': 'application/json',
            'Host' : "api.techmall.chamshare.cn"
        };
const data = {"access_token": $cmp.read(accessTokeName)};

const myRequest = {
    url: url,
    method: method, // Optional, default GET.
    headers: headers, // Optional.
    body: JSON.stringify(data) // Optional.
};

$task.fetch(myRequest).then(response => {
            const result = JSON.parse(response.body)
            if (result.code == 0) {
                        $cmp.notify(appName, "", "签到成功！🎉")
            } else if (result.code == 1101) {
                        $cmp.notify(appName, "",  "重复签到！😊")
            } else if (result.code == 2) {
                        $cmp.notify(appName, "", "Token 失效❗ 请重新获取。️")
            } else {
                        console.log("Changtai failed response : \n" + result.msg)
                        $cmp.notify(appName, "签到失败‼️ 详情请见日志。", result.msg);
            }
            $done();
}, reason => {
            $cmp.notify(appName, "请求失败‼️ 详情请见日志。", reason.error);
            $done();
});


function compatibility(){const e="undefined"!=typeof $request,t="undefined"!=typeof $httpClient,r="undefined"!=typeof $task,n="undefined"!=typeof $app&&"undefined"!=typeof $http,o="function"==typeof require&&!n,s=(()=>{if(o){const e=require("request");return{request:e}}return null})(),i=(e,s,i)=>{r&&$notify(e,s,i),t&&$notification.post(e,s,i),o&&a(e+s+i),n&&$push.schedule({title:e,body:s?s+"\n"+i:i})},u=(e,n)=>r?$prefs.setValueForKey(e,n):t?$persistentStore.write(e,n):void 0,d=e=>r?$prefs.valueForKey(e):t?$persistentStore.read(e):void 0,l=e=>(e&&(e.status?e.statusCode=e.status:e.statusCode&&(e.status=e.statusCode)),e),f=(e,i)=>{r&&("string"==typeof e&&(e={url:e}),e.method="GET",$task.fetch(e).then(e=>{i(null,l(e),e.body)},e=>i(e.error,null,null))),t&&$httpClient.get(e,(e,t,r)=>{i(e,l(t),r)}),o&&s.request(e,(e,t,r)=>{i(e,l(t),r)}),n&&("string"==typeof e&&(e={url:e}),e.header=e.headers,e.handler=function(e){let t=e.error;t&&(t=JSON.stringify(e.error));let r=e.data;"object"==typeof r&&(r=JSON.stringify(e.data)),i(t,l(e.response),r)},$http.get(e))},p=(e,i)=>{r&&("string"==typeof e&&(e={url:e}),e.method="POST",$task.fetch(e).then(e=>{i(null,l(e),e.body)},e=>i(e.error,null,null))),t&&$httpClient.post(e,(e,t,r)=>{i(e,l(t),r)}),o&&s.request.post(e,(e,t,r)=>{i(e,l(t),r)}),n&&("string"==typeof e&&(e={url:e}),e.header=e.headers,e.handler=function(e){let t=e.error;t&&(t=JSON.stringify(e.error));let r=e.data;"object"==typeof r&&(r=JSON.stringify(e.data)),i(t,l(e.response),r)},$http.post(e))},a=e=>console.log(e),y=(t={})=>{e?$done(t):$done()};return{isQuanX:r,isSurge:t,isJSBox:n,isRequest:e,notify:i,write:u,read:d,get:f,post:p,log:a,done:y}}

