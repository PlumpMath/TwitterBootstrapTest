/** Compiled by the Randori compiler v0.2.4 on Sun Jun 02 08:29:49 CEST 2013 */

if (typeof mediators == "undefined")
	var mediators = {};

mediators.IndexMediator = function() {
	this.alert_succes = null;
	this.button = null;
	this.button2 = null;
	this.alert = null;
	this.alert_info = null;
	this.alert_error = null;
	randori.behaviors.AbstractMediator.call(this);
	
};

mediators.IndexMediator.prototype.onRegister = function() {
	var alertTest = new twitterbootstrap.Alert(this.alert, "this is a warning", twitterbootstrap.Alert.TYPE_WARNING, "custom title");
	var alertTest2 = new twitterbootstrap.Alert(this.alert_error, "this is an error-alert, with default title", twitterbootstrap.Alert.TYPE_ERROR);
	var alertTest3 = new twitterbootstrap.Alert(this.alert_info, "this is an info-alert, with empty title", twitterbootstrap.Alert.TYPE_INFO, "");
	var alertTest4 = new twitterbootstrap.Alert(this.alert_succes, "this is an succes-alert, with long text:<br \/> " + "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.", twitterbootstrap.Alert.TYPE_SUCCES, "Well done", true, true);
	alertTest.closedByUser.add($createStaticDelegate(this, this.alertClosedHandler));
	alertTest2.closedByUser.add($createStaticDelegate(this, this.alertClosedHandler));
	alertTest3.closedByUser.add($createStaticDelegate(this, this.alertClosedHandler));
	alertTest4.closedByUser.add($createStaticDelegate(this, this.alertClosedHandler));
	var btn = new twitterbootstrap.Button(this.button, "test");
	var btn2 = new twitterbootstrap.Button(this.button2, "test", twitterbootstrap.Button.TYPE_INVERSE, twitterbootstrap.Button.SIZE_MINI, false);
};

mediators.IndexMediator.prototype.alertClosedHandler = function(e, target) {
	console.log("alert closed" + target);
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
			p.push({n:'alert_succes'});
			p.push({n:'alert_info'});
			p.push({n:'alert_error'});
			p.push({n:'button'});
			p.push({n:'button2'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

