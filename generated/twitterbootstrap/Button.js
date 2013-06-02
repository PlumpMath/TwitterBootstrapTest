/** Compiled by the Randori compiler v0.2.4 on Sun Jun 02 12:50:22 CEST 2013 */

if (typeof twitterbootstrap == "undefined")
	var twitterbootstrap = {};

twitterbootstrap.Button = function(label, type, size, enabled, icon, icon_right, block) {
	this._icon = null;
	this._label = "";
	this._enabled = true;
	this._icon_right = false;
	this.domNode = null;
	this.buttonClicked = null;
	if (arguments.length < 7) {
		if (arguments.length < 6) {
			if (arguments.length < 5) {
				if (arguments.length < 4) {
					if (arguments.length < 3) {
						if (arguments.length < 2) {
							type = "default";
						}
						size = "default";
					}
					enabled = true;
				}
				icon = null;
			}
			icon_right = false;
		}
		block = false;
	}
	this.buttonClicked = new randori.signal.SimpleSignal();
	this.domNode = jQuery("<button><\/button>");
	this._icon = icon;
	this._icon_right = icon_right;
	this.set_label(label);
	this.domNode.addClass("btn");
	this.domNode.addClass("btn-" + type);
	this.domNode.addClass("btn-" + size);
	this.set_enabled(enabled);
	block && this.domNode.addClass("btn-block");
	this.domNode.click($createStaticDelegate(this, this.clickHandler));
};

twitterbootstrap.Button.TYPE_DEFAULT ="default";

twitterbootstrap.Button.TYPE_PRIMARY ="primary";

twitterbootstrap.Button.TYPE_INFO ="info";

twitterbootstrap.Button.TYPE_SUCCESS ="success";

twitterbootstrap.Button.TYPE_WARNING ="warning";

twitterbootstrap.Button.TYPE_DANGER ="danger";

twitterbootstrap.Button.TYPE_INVERSE ="inverse";

twitterbootstrap.Button.TYPE_LINK ="link";

twitterbootstrap.Button.SIZE_DEFAULT ="default";

twitterbootstrap.Button.SIZE_LARGE ="large";

twitterbootstrap.Button.SIZE_SMALL ="small";

twitterbootstrap.Button.SIZE_MINI ="mini";

twitterbootstrap.Button.prototype.clickHandler = function(e) {
	this.buttonClicked.dispatch(e, this);
};

twitterbootstrap.Button.prototype.get_enabled = function() {
	return this._enabled;
};

twitterbootstrap.Button.prototype.set_enabled = function(value) {
	this._enabled = value;
	this._enabled ? this.enable() : this.disable();
};

twitterbootstrap.Button.prototype.disable = function() {
	this.domNode.addClass("disabled");
	this.domNode.prop("disabled", "disabled");
};

twitterbootstrap.Button.prototype.enable = function() {
	this.domNode.removeClass("disabled");
	this.domNode.removeProp("disabled");
};

twitterbootstrap.Button.prototype.set_label = function(value) {
	this._label = value;
	if (this._icon && this._icon_right) {
		this.domNode.html(value + " " + this._icon.toHtmlString());
	} else if (this._icon && !this._icon_right) {
		this.domNode.html(this._icon.toHtmlString() + " " + value);
	} else {
		this.domNode.html(value);
	}
};

twitterbootstrap.Button.prototype.get_label = function() {
	return this._label;
};

twitterbootstrap.Button.className = "twitterbootstrap.Button";

twitterbootstrap.Button.getClassDependencies = function(t) {
	var p;
	p = [];
	p.push('randori.signal.SimpleSignal');
	return p;
};

twitterbootstrap.Button.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'label', t:'String'});
			p.push({n:'type', t:'String'});
			p.push({n:'size', t:'String'});
			p.push({n:'enabled', t:'Object'});
			p.push({n:'icon', t:'twitterbootstrap.Icon'});
			p.push({n:'icon_right', t:'Boolean'});
			p.push({n:'block', t:'Boolean'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

