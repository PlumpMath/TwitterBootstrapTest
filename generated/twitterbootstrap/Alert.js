/** Compiled by the Randori compiler v0.2.4 on Sun Jun 02 10:01:37 CEST 2013 */

if (typeof twitterbootstrap == "undefined")
	var twitterbootstrap = {};

twitterbootstrap.Alert = function(container, message, type, title, hasDismissButton, multiline) {
	this.domNode = null;
	this.closedByUser = null;
	if (arguments.length < 6) {
		if (arguments.length < 5) {
			if (arguments.length < 4) {
				if (arguments.length < 3) {
					type = "warning";
				}
				title = "";
			}
			hasDismissButton = true;
		}
		multiline = false;
	}
	this.closedByUser = new randori.signal.SimpleSignal();
	this.domNode = jQuery("<div><\/div>");
	this.domNode.addClass("alert");
	this.domNode.addClass("alert-" + type);
	multiline && this.domNode.addClass("alert-block");
	hasDismissButton && this.domNode.append(this.createDismissButton());
	this.domNode.append(this.createTitle(title || type + "!"));
	multiline && this.domNode.append("<br \/>");
	this.domNode.append(" " + message);
	container.append(this.domNode);
};

twitterbootstrap.Alert.TYPE_WARNING ="warning";

twitterbootstrap.Alert.TYPE_ERROR ="error";

twitterbootstrap.Alert.TYPE_SUCCESS ="success";

twitterbootstrap.Alert.TYPE_INFO ="info";

twitterbootstrap.Alert.prototype.dismissHandler = function(e) {
	this.closedByUser.dispatch(e, this);
};

twitterbootstrap.Alert.prototype.createDismissButton = function() {
	var buttonNode = jQuery("<button><\/button>");
	buttonNode.addClass("close");
	buttonNode.html("&times;");
	buttonNode.attr("data-dismiss", "alert");
	buttonNode.prop("type", "button");
	buttonNode.click($createStaticDelegate(this, this.dismissHandler));
	return buttonNode;
};

twitterbootstrap.Alert.prototype.createTitle = function(title) {
	var titleNode = jQuery("<strong><\/strong>");
	titleNode.html(title);
	return titleNode;
};

twitterbootstrap.Alert.className = "twitterbootstrap.Alert";

twitterbootstrap.Alert.getClassDependencies = function(t) {
	var p;
	p = [];
	p.push('randori.signal.SimpleSignal');
	return p;
};

twitterbootstrap.Alert.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'container', t:'randori.jquery.JQuery'});
			p.push({n:'message', t:'String'});
			p.push({n:'type', t:'String'});
			p.push({n:'title', t:'String'});
			p.push({n:'hasDismissButton', t:'Boolean'});
			p.push({n:'multiline', t:'Boolean'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

