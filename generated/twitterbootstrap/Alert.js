/** Compiled by the Randori compiler v0.2.4 on Sun Jun 02 07:55:27 CEST 2013 */

if (typeof twitterbootstrap == "undefined")
	var twitterbootstrap = {};

twitterbootstrap.Alert = function(div, message, type, title, hasDismissButton, multiline) {
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
	div.empty();
	div.addClass("alert");
	div.addClass("alert-" + type);
	multiline && div.addClass("alert-block");
	hasDismissButton && div.append(this.createDismissButton());
	div.append(this.createTitle(title || type + "!"));
	multiline && div.append("<br \/>");
	div.append(" " + message);
};

twitterbootstrap.Alert.TYPE_WARNING ="warning";

twitterbootstrap.Alert.TYPE_ERROR ="error";

twitterbootstrap.Alert.TYPE_SUCCES ="succes";

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
			p.push({n:'div', t:'randori.jquery.JQuery'});
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

