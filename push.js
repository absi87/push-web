var push = require('web-push');

var vapIDkeys = {
    publicKey: 'BPAfilz98xizcpam7L8a0qKuDsc12RYyzaMP9gDd_wFUqi5CNPxct4FspSKMsBg962Ar1sfxNSpe9SxNvbKA-Z4',
    privateKey: '3IMZ6utabAMgQ-gpzr_jMzHm_nJMxKcDLNI_Xz0W4Fg'
}

push.setVapidDetails('mailto:absi87@hotmail.com', vapIDkeys.publicKey, vapIDkeys.privateKey);

let sub;
push.sendNotification(sub, 'Test message');