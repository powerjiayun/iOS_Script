$persistentStore.write(null, '01_join_testflight_request_id')
let url = $request.url
let key = url.replace(/(.*accounts\/)(.*)(\/apps)/, '$2')
let session_id = $request.headers['x-session-id']
let session_digest = $request.headers['x-session-digest']
let request_id = $request.headers['x-request-id']
$persistentStore.write(key, '01_join_testflight_key')
$persistentStore.write(session_id, '01_join_testflight_session_id')
$persistentStore.write(session_digest, '01_join_testflight_session_digest')
$persistentStore.write(request_id, '01_join_testflight_request_id')
$persistentStore.write(request_id, '01_join_testflight_request_id')
ids = $persistentStore.read('01_join_testflight_app_ids')
if (ids == null || typeof (ids) == 'undefined' || ids == '') {
    // Quantumult X TestFlight  VCIvwk2g
    let quantumultTestId = 'VCIvwk2g'
    $persistentStore.write(quantumultTestId, '01_join_testflight_app_ids')
}
if ($persistentStore.read('01_join_testflight_request_id') !== null) {
    $notification.post('01_join_testflight', '信息获取成功', '{}')
} else {
    // $notification.post('信息获取失败', '请打开MITM H2开关并添加testflight.apple.com', '')
    console.log('01_join_testflight信息获取失败', '请打开MITM H2开关并添加testflight.apple.com')
}
$done({})