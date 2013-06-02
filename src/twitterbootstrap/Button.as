package twitterbootstrap {
import randori.jquery.Event;
import randori.jquery.JQuery;
import randori.jquery.JQueryStatic;
import randori.signal.SimpleSignal;

[JavaScript(export="true", name="Button")]
public class Button {

    public static const TYPE_DEFAULT:String = "default";
    public static const TYPE_PRIMARY:String = "primary";
    public static const TYPE_INFO:String = "info";
    public static const TYPE_SUCCESS:String = "success";
    public static const TYPE_WARNING:String = "warning";
    public static const TYPE_DANGER:String = "danger";
    public static const TYPE_INVERSE:String = "inverse";
    public static const TYPE_LINK:String = "link";

    public static const SIZE_DEFAULT:String = "default";
    public static const SIZE_LARGE:String = "large";
    public static const SIZE_SMALL:String = "small";
    public static const SIZE_MINI:String = "mini";

    public var domNode:JQuery;
    private var _enabled:Boolean = true;
    private var _label:String = "";
    private var _icon:Icon = null;
    private var _icon_right:Boolean = false;

    [inject] public var buttonClicked:SimpleSignal;

    /**
     *
     * @param label
     * @param type
     * @param size
     * @param enabled
     * @param icon
     * @param icon_right icon is placed on the right side of the label
     * @param block set true for block level buttons—those that span the full width of a parent
     */
    public function Button( label:String, type:String="default", size:String="default", enabled=true, icon:Icon = null, icon_right:Boolean = false, block:Boolean=false ) {
        buttonClicked = new SimpleSignal();
        this.domNode = JQueryStatic.J("<button></button>");
        this._icon = icon;
        this._icon_right = icon_right;
        this.label = label;
        this.domNode.addClass("btn");
        this.domNode.addClass( "btn-" + type ); //btn-default is not an existing css-class in bootstrap, but it might as well be
        this.domNode.addClass( "btn-" + size );
        this.enabled = enabled;
        block && this.domNode.addClass("btn-block");
        this.domNode.click1( clickHandler );
    }

    private function clickHandler( e:Event ):void{
        buttonClicked.dispatch( e, this );
    }

    public function get enabled():Boolean {
        return _enabled;
    }

    public function set enabled(value:Boolean):void {
        _enabled = value;
        _enabled ? enable() : disable();

    }

    private function disable():void{
        this.domNode.addClass( "disabled" );
        this.domNode.prop2( "disabled", "disabled");
    }

    private function enable():void{
        this.domNode.removeClass( "disabled" );
        this.domNode.removeProp( "disabled" );
    }

    public function set label(value:String):void {
        _label = value;

        if(_icon && _icon_right){
            this.domNode.html2( value + " " + _icon.toHtmlString() );
        }else if(_icon && !_icon_right){
            this.domNode.html2( _icon.toHtmlString() + " " +value );
        }else{
            this.domNode.html2( value );
        }
    }

    public function get label():String {
        return this._label;
    }
}
}