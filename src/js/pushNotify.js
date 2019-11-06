const push = PushNotification.init({
	android: {
	},
    browser: {
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
    },
	ios: {
		alert: "true",
		badge: "true",
		sound: "true"
	},
	windows: {}
});

push.on('registration', (data) => {
	// data.registrationId
  console.log("push.on registration");
});

push.on('notification', (data) => {
	// data.message,
	// data.title,
	// data.count,
	// data.sound,
	// data.image,
	// data.additionalData
  console.log("push.on notification");
});

push.on('error', (e) => {
	// e.message
  console.log("push.on error");
});

export default push;
