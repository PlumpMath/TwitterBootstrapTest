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

    private var domNode:JQuery;
    private var _enabled:Boolean = true;
    private var _label:String = "";

    [inject] public var buttonClicked:SimpleSignal;

    /**
     *
     * @param container parentcontainer
     * @param label
     * @param type
     * @param size
     * @param enabled
     * @param block set true for block level buttons—those that span the full width of a parent
     */
    public function Button( container:JQuery, label:String, type:String="default", size:String="default", enabled=true, block:Boolean=false ) {
        buttonClicked = new SimpleSignal();
        this.domNode = JQueryStatic.J("<button></button>");
        this.label = label;
        this.domNode.addClass("btn");
        this.domNode.addClass( "btn-" + type ); //btn-default is not an existing css-class in bootstrap, but it might as well be
        this.domNode.addClass( "btn-" + size );
        this.enabled = enabled;
        block && container.addClass("btn-block");
        this.domNode.click1( clickHandler );
        container.append( this.domNode );
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
        this.domNode.html( " " + value );
    }

    public function get label():String {
        return this._label;
    }
}
}