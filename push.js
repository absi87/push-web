var push = require('web-push');

var vapIDkeys = {
    publicKey: 'BPAfilz98xizcpam7L8a0qKuDsc12RYyzaMP9gDd_wFUqi5CNPxct4FspSKMsBg962Ar1sfxNSpe9SxNvbKA-Z4',
    privateKey: '3IMZ6utabAMgQ-gpzr_jMzHm_nJMxKcDLNI_Xz0W4Fg'
}

push.setVapidDetails('mailto:absi87@hotmail.com', vapIDkeys.publicKey, vapIDkeys.privateKey);

let sub = { "endpoint": "https://db5p.notify.windows.com/w/?token=BQYAAABDvDNhqqhlfvnZHq3sLLr0IVKDz57uIE6fV31IWGnlYknkQx1f3vJtk0GZ3sBUPmvWjY8tpIfNPLzefC9U6Kexf6LX8PEW%2f6co28s9E1DhFnnjqvLcPLHRtc5q2p5sEa1x186FCohwp8X7g%2fkm0GpOdZwLVdcNep0pKPNPAe0%2buiBRC6sRMaro0%2f9ggtL5WU40pbRV4ZvA%2f8nADv0UKJfTFEf22I4YaCX%2bzfyViY2ngsGJ9ChC77JJ746IrgOpGaMapLFiLuyWpD3Xn9%2fGJTrmtvi16Y0oL%2bp37rhXvWJeMEdUauF5fvnugyOx9Vjx9zzFeVKfohY5xXb00Nd9dlLyJolAGpVo4p1wpgHtBqsB7g%3d%3d", "expirationTime": null, "keys": { "p256dh": "BAfMeN0CH8Ry1kYcXD9YjPKgbgUDrvlqco3Bt1kHe3K8DSmM7wDvZA8PGNkHttwOy6R9SX3AMMxkPR8wJB2yueo", "auth": "fyLC8r4eTpVKg1ls_1oj_g" } };
push.sendNotification(sub, 'Test message');