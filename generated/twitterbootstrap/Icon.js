/** Compiled by the Randori compiler v0.2.4 on Sun Jun 02 12:47:00 CEST 2013 */

if (typeof twitterbootstrap == "undefined")
	var twitterbootstrap = {};

twitterbootstrap.Icon = function(name, whiteIcon) {
	this.domNode = null;
	if (arguments.length < 2) {
		whiteIcon = false;
	}
	this.domNode = jQuery("<i><\/i>");
	this.domNode.addClass(name);
	whiteIcon && this.domNode.addClass("icon-white");
};

twitterbootstrap.Icon.ICON_GLASS ="icon-glass";

twitterbootstrap.Icon.ICON_MUSIC ="icon-music";

twitterbootstrap.Icon.ICON_SEARCH ="icon-search";

twitterbootstrap.Icon.ICON_ENVELOPE ="icon-envelope";

twitterbootstrap.Icon.ICON_HEART ="icon-heart";

twitterbootstrap.Icon.ICON_STAR ="icon-star";

twitterbootstrap.Icon.ICON_STAR_EMPTY ="icon-star-empty";

twitterbootstrap.Icon.ICON_USER ="icon-user";

twitterbootstrap.Icon.ICON_FILM ="icon-film";

twitterbootstrap.Icon.ICON_TH_LARGE ="icon-th-large";

twitterbootstrap.Icon.ICON_TH ="icon-th";

twitterbootstrap.Icon.ICON_TH_LIST ="icon-th-list";

twitterbootstrap.Icon.ICON_OK ="icon-ok";

twitterbootstrap.Icon.ICON_REMOVE ="icon-remove";

twitterbootstrap.Icon.ICON_ZOOM_IN ="icon-zoom-in";

twitterbootstrap.Icon.ICON_ZOOM_OUT ="icon-zou-out";

twitterbootstrap.Icon.ICON_OFF ="icon-off";

twitterbootstrap.Icon.ICON_SIGNAL ="icon-signal";

twitterbootstrap.Icon.ICON_COG ="icon-cog";

twitterbootstrap.Icon.ICON_TRASH ="icon-trash";

twitterbootstrap.Icon.ICON_HOME ="icon-home";

twitterbootstrap.Icon.ICON_FILE ="icon-file";

twitterbootstrap.Icon.ICON_TIME ="icon-time";

twitterbootstrap.Icon.ICON_ROAD ="icon-road";

twitterbootstrap.Icon.ICON_DOWNLOAD_ALT ="icon-download-alt";

twitterbootstrap.Icon.ICON_DOWNLOAD ="icon-download";

twitterbootstrap.Icon.ICON_UPLOAD ="icon-upload";

twitterbootstrap.Icon.ICON_INBOX ="icon-inbox";

twitterbootstrap.Icon.ICON_PLAY_CIRCLE ="icon-play-circle";

twitterbootstrap.Icon.ICON_REPEAT ="icon-repeat";

twitterbootstrap.Icon.ICON_REFRESH ="icon-refresh";

twitterbootstrap.Icon.ICON_LIST_ALT ="icon-list-all";

twitterbootstrap.Icon.ICON_LOCK ="icon-lock";

twitterbootstrap.Icon.ICON_FLAG ="icon-flag";

twitterbootstrap.Icon.ICON_HEADPHONES ="icon-headphones";

twitterbootstrap.Icon.ICON_VOLUME_OFF ="icon-volume-off";

twitterbootstrap.Icon.ICON_VOLUME_DOWN ="icon-volume-down";

twitterbootstrap.Icon.ICON_VOLUME_UP ="icon-volume-up";

twitterbootstrap.Icon.ICON_QRCODE ="icon-qrcode";

twitterbootstrap.Icon.ICON_BARCODE ="icon-barcode";

twitterbootstrap.Icon.ICON_TAG ="icon-tag";

twitterbootstrap.Icon.ICON_TAGS ="icon-tags";

twitterbootstrap.Icon.ICON_BOOK ="icon-book";

twitterbootstrap.Icon.ICON_BOOKMARK ="icon-bookmark";

twitterbootstrap.Icon.ICON_PRINT ="icon-print";

twitterbootstrap.Icon.ICON_CAMERA ="icon-camera";

twitterbootstrap.Icon.ICON_FONT ="icon-font";

twitterbootstrap.Icon.ICON_BOLD ="icon-bold";

twitterbootstrap.Icon.ICON_ITALIC ="icon-italic";

twitterbootstrap.Icon.ICON_TEXT_HEIGHT ="icon-text-height";

twitterbootstrap.Icon.ICON_TEXT_WIDTH ="icon-text-width";

twitterbootstrap.Icon.ICON_ALIGN_LEFT ="icon-aling-left";

twitterbootstrap.Icon.ICON_ALIGN_CENTER ="icon-align-center";

twitterbootstrap.Icon.ICON_ALIGN_RIGHT ="icon-align-right";

twitterbootstrap.Icon.ICON_ALIGN_JUSTIFY ="icon-align-justify";

twitterbootstrap.Icon.ICON_LIST ="icon-list";

twitterbootstrap.Icon.ICON_INDENT_LEFT ="icon-indent-left";

twitterbootstrap.Icon.ICON_INDENT_RIGHT ="icon-indent-right";

twitterbootstrap.Icon.ICON_FACETIME_VIDEO ="icon-facetime-video";

twitterbootstrap.Icon.ICON_PICTURE ="icon-picture";

twitterbootstrap.Icon.ICON_PENCIL ="icon-pencil";

twitterbootstrap.Icon.ICON_MAP_MARKER ="icon-map-marker";

twitterbootstrap.Icon.ICON_ADJUST ="icon-adjust";

twitterbootstrap.Icon.ICON_TINT ="icon-tint";

twitterbootstrap.Icon.ICON_EDIT ="icon-edit";

twitterbootstrap.Icon.ICON_SHARE ="icon-share";

twitterbootstrap.Icon.ICON_CHECK ="icon-check";

twitterbootstrap.Icon.ICON_MOVE ="icon-move";

twitterbootstrap.Icon.ICON_STEP_BACKWARD ="icon-step-backward";

twitterbootstrap.Icon.ICON_FAST_BACKWARD ="icon-fast-backward";

twitterbootstrap.Icon.ICON_BACKWARD ="icon-backward";

twitterbootstrap.Icon.ICON_PLAY ="icon-play";

twitterbootstrap.Icon.ICON_PAUSE ="icon-pause";

twitterbootstrap.Icon.ICON_STOP ="icon-stop";

twitterbootstrap.Icon.ICON_FORWARD ="icon-forward";

twitterbootstrap.Icon.ICON_FAST_FORWARD ="icon-fast-forward";

twitterbootstrap.Icon.ICON_STEP_FORWARD ="icon-step-forward";

twitterbootstrap.Icon.ICON_EJECT ="icon-eject";

twitterbootstrap.Icon.ICON_CHEVRON_LEFT ="icon-chevron-left";

twitterbootstrap.Icon.ICON_CHEVRON_RIGHT ="icon-chevron-right";

twitterbootstrap.Icon.ICON_PLUS_SIGN ="icon-plus-sign";

twitterbootstrap.Icon.ICON_MINUS_SIGN ="icon-minus-sign";

twitterbootstrap.Icon.ICON_REMOVE_SIGN ="icon-remove-sign";

twitterbootstrap.Icon.ICON_OK_SIGN ="icon-ok-sign";

twitterbootstrap.Icon.ICON_QUESTION_SIGN ="icon-question-sign";

twitterbootstrap.Icon.ICON_INFO_SIGN ="icon-info-sign";

twitterbootstrap.Icon.ICON_SCREENSHOT ="icon-screenshot";

twitterbootstrap.Icon.ICON_REMOVE_CIRCLE ="icon-remove-circle";

twitterbootstrap.Icon.ICON_OK_CIRCLE ="icon-ok-circle";

twitterbootstrap.Icon.ICON_BAN_CIRCLE ="icon-ban-circle";

twitterbootstrap.Icon.ICON_ARROW_LEFT ="icon-arrow-left";

twitterbootstrap.Icon.ICON_ARROW_RIGHT ="icon-arrow-right";

twitterbootstrap.Icon.ICON_ARROW_UP ="icon-arrow-up";

twitterbootstrap.Icon.ICON_ARROW_DOWN ="icon-arrow-down";

twitterbootstrap.Icon.ICON_SHARE_ALT ="icon-share-alt";

twitterbootstrap.Icon.ICON_RESIZE_FULL ="icon-resize-full";

twitterbootstrap.Icon.ICON_RESIZE_SMALL ="icon-resize-small";

twitterbootstrap.Icon.ICON_PLUS ="icon-plus";

twitterbootstrap.Icon.ICON_MINUS ="icon-minus";

twitterbootstrap.Icon.ICON_ASTERISK ="icon-asterisk";

twitterbootstrap.Icon.ICON_EXCLAMATION_SIGN ="icon-exclamation-sign";

twitterbootstrap.Icon.ICON_GIFT ="icon-gift";

twitterbootstrap.Icon.ICON_LEAF ="icon-leaf";

twitterbootstrap.Icon.ICON_FIRE ="icon-fire";

twitterbootstrap.Icon.ICON_EYE_OPEN ="icon-eye-open";

twitterbootstrap.Icon.ICON_EYE_CLOSE ="icon-eye-close";

twitterbootstrap.Icon.ICON_WARNING_SIGN ="icon-warning-sign";

twitterbootstrap.Icon.ICON_PLANE ="icon-plane";

twitterbootstrap.Icon.ICON_CALENDAR ="icon-calendar";

twitterbootstrap.Icon.ICON_RANDOM ="icon-random";

twitterbootstrap.Icon.ICON_COMMENT ="icon-comment";

twitterbootstrap.Icon.ICON_MAGNET ="icon-magnet";

twitterbootstrap.Icon.ICON_CHEVRON_UP ="icon-chevron-up";

twitterbootstrap.Icon.ICON_CHEVRON_DOWN ="icon-chevron-down";

twitterbootstrap.Icon.ICON_RETWEET ="icon-retweet";

twitterbootstrap.Icon.ICON_SHOPPING_CART ="icon-shopping-cart";

twitterbootstrap.Icon.ICON_FOLDER_CLOSE ="icon-folder-close";

twitterbootstrap.Icon.ICON_FOLDER_OPEN ="icon-folder-open";

twitterbootstrap.Icon.ICON_RESIZE_VERTICAL ="icon-resize-vertical";

twitterbootstrap.Icon.ICON_RESIZE_HORIZONTAL ="icon-resize-horizontal";

twitterbootstrap.Icon.ICON_HDD ="icon-hdd";

twitterbootstrap.Icon.ICON_BULLHORN ="icon-bullhorn";

twitterbootstrap.Icon.ICON_BELL ="icon-bell";

twitterbootstrap.Icon.ICON_CERTIFICATE ="icon-certificate";

twitterbootstrap.Icon.ICON_THUMBS_UP ="icon-thumbs-up";

twitterbootstrap.Icon.ICON_THUMBS_DOWN ="icon-thumbs-down";

twitterbootstrap.Icon.ICON_HAND_RIGHT ="icon-hand-right";

twitterbootstrap.Icon.ICON_HAND_LEFT ="icon-hands-left";

twitterbootstrap.Icon.ICON_HAND_UP ="icon-hands-up";

twitterbootstrap.Icon.ICON_HAND_DOWN ="icon-hands-down";

twitterbootstrap.Icon.ICON_CIRCLE_ARROW_RIGHT ="icon-circle-arrow-right";

twitterbootstrap.Icon.ICON_CIRCLE_ARROW_LEFT ="icon-circle-arrow-left";

twitterbootstrap.Icon.ICON_CIRCLE_ARROW_UP ="icon-circle-arrow-up";

twitterbootstrap.Icon.ICON_CIRCLE_ARROW_DOWN ="icon-circle-arrow-down";

twitterbootstrap.Icon.ICON_GLOBE ="icon-globe";

twitterbootstrap.Icon.ICON_WRENCH ="icon-wrecnh";

twitterbootstrap.Icon.ICON_TASKS ="icon-tasks";

twitterbootstrap.Icon.ICON_FILTER ="icon-filter";

twitterbootstrap.Icon.ICON_BRIEFCASE ="icon-briefcase";

twitterbootstrap.Icon.ICON_FULLSCREEN ="icon-fullscreen";

twitterbootstrap.Icon.prototype.toHtmlString = function() {
	return "<i class=\'" + this.domNode.prop("class") + "\'><\/i>";
};

twitterbootstrap.Icon.className = "twitterbootstrap.Icon";

twitterbootstrap.Icon.getClassDependencies = function(t) {
	var p;
	return [];
};

twitterbootstrap.Icon.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'name', t:'String'});
			p.push({n:'whiteIcon', t:'Boolean'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

