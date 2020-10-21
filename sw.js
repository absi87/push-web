self.addEventListener('push', function () {
    self.registration.sendNotification('test message', {});
});
