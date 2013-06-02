/** Compiled by the Randori compiler v0.2.4 on Sun Jun 02 09:35:07 CEST 2013 */

if (typeof mediators == "undefined")
	var mediators = {};

mediators.IndexMediator = function() {
	this.button_enable = null;
	this.alert = null;
	this.button_default = null;
	this.alert_success = null;
	this.alert_info = null;
	this.button_info = null;
	this.button_disabled = null;
	this.alert_error = null;
	this.btnDisabled = null;
	this.button_success = null;
	this.btnEnable = null;
	this.button_error = null;
	randori.behaviors.AbstractMediator.call(this);
	
};

mediators.IndexMediator.prototype.onRegister = function() {
	var btnDefault = new twitterbootstrap.Button(this.button_default, "default", twitterbootstrap.Button.TYPE_DEFAULT);
	var btnSuccess = new twitterbootstrap.Button(this.button_success, "success", twitterbootstrap.Button.TYPE_SUCCESS);
	var btnInfo = new twitterbootstrap.Button(this.button_info, "info", twitterbootstrap.Button.TYPE_INFO);
	var btnError = new twitterbootstrap.Button(this.button_error, "error", twitterbootstrap.Button.TYPE_DANGER, twitterbootstrap.Button.SIZE_LARGE);
	btnDefault.buttonClicked.add($createStaticDelegate(this, this.btnClickHandler));
	btnSuccess.buttonClicked.add($createStaticDelegate(this, this.btnClickHandler));
	btnInfo.buttonClicked.add($createStaticDelegate(this, this.btnClickHandler));
	btnError.buttonClicked.add($createStaticDelegate(this, this.btnClickHandler));
	this.btnEnable = new twitterbootstrap.Button(this.button_enable, "enable");
	this.btnDisabled = new twitterbootstrap.Button(this.button_disabled, "disabled", twitterbootstrap.Button.TYPE_INVERSE, twitterbootstrap.Button.SIZE_MINI, false);
	this.btnEnable.buttonClicked.add($createStaticDelegate(this, this.btnEnableClickHandler));
};

mediators.IndexMediator.prototype.btnClickHandler = function(e, target) {
	if (target.get_label() == "default")
		var alertTest = new twitterbootstrap.Alert(this.alert, "this is a warning", twitterbootstrap.Alert.TYPE_WARNING, "custom title");
	else if (target.get_label() == "error")
		var alertTest2 = new twitterbootstrap.Alert(this.alert_error, "this is an error-alert, with default title", twitterbootstrap.Alert.TYPE_ERROR);
	else if (target.get_label() == "info")
		var alertTest3 = new twitterbootstrap.Alert(this.alert_info, "this is an info-alert, with empty title", twitterbootstrap.Alert.TYPE_INFO, ""); else if (target.get_label() == "success") {
		var alertTest4 = new twitterbootstrap.Alert(this.alert_success, "this is an succes-alert, with long text:<br \/> " + "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.", twitterbootstrap.Alert.TYPE_SUCCESS, "Well done", true, true);
		alertTest4.closedByUser.add($createStaticDelegate(this, this.alertClosedHandler));
	}
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
			p.push({n:'alert'});
			p.push({n:'alert_success'});
			p.push({n:'alert_info'});
			p.push({n:'alert_error'});
			p.push({n:'button_default'});
			p.push({n:'button_success'});
			p.push({n:'button_info'});
			p.push({n:'button_error'});
			p.push({n:'button_enable'});
			p.push({n:'button_disabled'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

