const $cmp = compatibility()
const CheckinURL = 'https://api.techmall.chamshare.cn/daysign/sign'
const accessTokeName = 'changtaikey'

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
    // response.statusCode, response.headers, response.body
    console.log(response.body);
    $notify("Title", "Subtitle", response.body); // Success!
    $done();
}, reason => {
    // reason.error
    $notify("Title", "Subtitle", reason.error); // Error!
    $done();
});
