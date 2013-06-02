/** Compiled by the Randori compiler v0.2.4 on Sun Jun 02 12:50:22 CEST 2013 */

if (typeof mediators == "undefined")
	var mediators = {};

mediators.IndexMediator = function() {
	this.div_alerts = null;
	this.div_icons = null;
	this.btnDisabled = null;
	this.btnEnable = null;
	this.div_toggleButtons = null;
	this.div_alertButtons = null;
	randori.behaviors.AbstractMediator.call(this);
	
};

mediators.IndexMediator.prototype.onRegister = function() {
	var icon_fire = new twitterbootstrap.Icon(twitterbootstrap.Icon.ICON_FIRE);
	var icon_calendar = new twitterbootstrap.Icon(twitterbootstrap.Icon.ICON_CALENDAR, true);
	var btnDefault = new twitterbootstrap.Button("default", twitterbootstrap.Button.TYPE_DEFAULT, twitterbootstrap.Button.SIZE_DEFAULT, true, icon_fire);
	var btnSuccess = new twitterbootstrap.Button("success", twitterbootstrap.Button.TYPE_SUCCESS, twitterbootstrap.Button.SIZE_DEFAULT, true, icon_calendar, true);
	var btnInfo = new twitterbootstrap.Button("info", twitterbootstrap.Button.TYPE_INFO);
	var btnError = new twitterbootstrap.Button("error", twitterbootstrap.Button.TYPE_DANGER, twitterbootstrap.Button.SIZE_DEFAULT);
	btnDefault.buttonClicked.add($createStaticDelegate(this, this.btnClickHandler));
	btnSuccess.buttonClicked.add($createStaticDelegate(this, this.btnClickHandler));
	btnInfo.buttonClicked.add($createStaticDelegate(this, this.btnClickHandler));
	btnError.buttonClicked.add($createStaticDelegate(this, this.btnClickHandler));
	this.div_alertButtons.append(btnDefault.domNode, btnSuccess.domNode, btnInfo.domNode, btnError.domNode);
	this.btnEnable = new twitterbootstrap.Button("enable");
	this.btnDisabled = new twitterbootstrap.Button("disabled", twitterbootstrap.Button.TYPE_INVERSE, twitterbootstrap.Button.SIZE_DEFAULT, false);
	this.div_toggleButtons.append(this.btnEnable.domNode, this.btnDisabled.domNode);
	this.btnEnable.buttonClicked.add($createStaticDelegate(this, this.btnEnableClickHandler));
};

mediators.IndexMediator.prototype.btnClickHandler = function(e, target) {
	var alert;
	if (target.get_label() == "default") {
		alert = new twitterbootstrap.Alert("this is a warning", twitterbootstrap.Alert.TYPE_WARNING, "custom title");
	} else if (target.get_label() == "error") {
		alert = new twitterbootstrap.Alert("this is an error-alert, with default title", twitterbootstrap.Alert.TYPE_ERROR);
	} else if (target.get_label() == "info") {
		alert = new twitterbootstrap.Alert("this is an info-alert, with empty title", twitterbootstrap.Alert.TYPE_INFO, "");
	} else if (target.get_label() == "success") {
		alert = new twitterbootstrap.Alert("this is an succes-alert, with long text:<br \/> " + "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.", twitterbootstrap.Alert.TYPE_SUCCESS, "Well done", true, true);
	}
	if (alert)
		alert.closedByUser.add($createStaticDelegate(this, this.alertClosedHandler));
	this.div_alerts.append(alert.domNode);
};

mediators.IndexMediator.prototype.alertClosedHandler = function(e, target) {
	console.log("alert closed" + target);
};

mediators.IndexMediator.prototype.btnEnableClickHandler = function(e, target) {
	if (this.btnDisabled.get_enabled()) {
		this.btnDisabled.set_enabled(false);
		this.btnDisabled.set_label("disabled");
		this.btnEnable.set_label("enable");
	} else {
		this.btnDisabled.set_enabled(true);
		this.btnDisabled.set_label("enabled");
		this.btnEnable.set_label("disable");
	}
};

mediators.IndexMediator.prototype.onDeregister = function() {
};

$inherit(mediators.IndexMediator, randori.behaviors.AbstractMediator);

mediators.IndexMediator.className = "mediators.IndexMediator";

mediators.IndexMediator.getClassDependencies = function(t) {
	var p;
	p = [];
	p.push('twitterbootstrap.Icon');
	p.push('twitterbootstrap.Alert');
	p.push('twitterbootstrap.Button');
	return p;
};

mediators.IndexMediator.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = randori.behaviors.AbstractMediator.injectionPoints(t);
			break;
		case 2:
			p = randori.behaviors.AbstractMediator.injectionPoints(t);
			break;
		case 3:
			p = randori.behaviors.AbstractMediator.injectionPoints(t);
			p.push({n:'div_alertButtons'});
			p.push({n:'div_alerts'});
			p.push({n:'div_toggleButtons'});
			p.push({n:'div_icons'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

