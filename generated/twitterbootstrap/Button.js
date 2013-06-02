/** Compiled by the Randori compiler v0.2.4 on Sun Jun 02 08:26:34 CEST 2013 */

if (typeof twitterbootstrap == "undefined")
	var twitterbootstrap = {};

twitterbootstrap.Button = function(container, label, type, size, enabled, block) {
	this.domNode = null;
	this.buttonClicked = null;
	if (arguments.length < 6) {
		if (arguments.length < 5) {
			if (arguments.length < 4) {
				if (arguments.length < 3) {
					type = "default";
				}
				size = "default";
			}
			enabled = true;
		}
		block = false;
	}
	this.buttonClicked = new randori.signal.SimpleSignal();
	this.domNode = container;
	this.domNode.empty();
	this.domNode.addClass("btn");
	!enabled && this.disableButton(this);
	block && container.addClass("btn-block");
	this.domNode.addClass("btn-" + type);
	this.domNode.append(" " + label);
};

twitterbootstrap.Button.STYLE_DEFAULT ="default";

twitterbootstrap.Button.STYLE_PRIMARY ="primary";

twitterbootstrap.Button.STYLE_INFO ="info";

twitterbootstrap.Button.STYLE_SUCCES ="succes";

twitterbootstrap.Button.STYLE_WARNING ="warning";

twitterbootstrap.Button.STYLE_DANGER ="danger";

twitterbootstrap.Button.STYLE_INVERSE ="inverse";

twitterbootstrap.Button.STYLE_LINK ="link";

twitterbootstrap.Button.SIZE_DEFAULT ="default";

twitterbootstrap.Button.SIZE_LARGE ="large";

twitterbootstrap.Button.SIZE_SMALL ="small";

twitterbootstrap.Button.SIZE_MINI ="mini";

twitterbootstrap.Button.prototype.disableButton = function(button) {
	button.domNode.addClass("disabled");
	button.domNode.prop("disabled", "disabled");
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
			p.push({n:'container', t:'randori.jquery.JQuery'});
			p.push({n:'label', t:'String'});
			p.push({n:'type', t:'String'});
			p.push({n:'size', t:'String'});
			p.push({n:'enabled', t:'Object'});
			p.push({n:'block', t:'Boolean'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

