package twitterbootstrap {
import randori.jquery.JQuery;
import randori.signal.SimpleSignal;

[JavaScript(export="true", name="Button")]
public class Button {

    public static const TYPE_DEFAULT:String = "default";
    public static const TYPE_PRIMARY:String = "primary";
    public static const TYPE_INFO:String = "info";
    public static const TYPE_SUCCES:String = "succes";
    public static const TYPE_WARNING:String = "warning";
    public static const TYPE_DANGER:String = "danger";
    public static const TYPE_INVERSE:String = "inverse";
    public static const TYPE_LINK:String = "link";

    public static const SIZE_DEFAULT:String = "default";
    public static const SIZE_LARGE:String = "large";
    public static const SIZE_SMALL:String = "small";
    public static const SIZE_MINI:String = "mini";

    private var domNode:JQuery;

    [inject] public var buttonClicked:SimpleSignal;

    /**
     *
     * @param container should be <button>,<input> or <a>
     * @param label
     * @param type
     * @param size
     * @param enabled
     * @param block set true for block level buttons—those that span the full width of a parent
     */
    public function Button( container:JQuery, label:String, type:String="default", size:String="default", enabled=true, block:Boolean=false ) {
        buttonClicked = new SimpleSignal();
        this.domNode = container;
        this.domNode.empty();
        this.domNode.addClass("btn");
        !enabled && disableButton( this );
        block && container.addClass("btn-block");
        this.domNode.addClass( "btn-" + type ); //btn-default is not an existing css-class in bootstrap, but it might as well be
        this.domNode.append( " " + label )
    }

    public function disableButton( button:Button ):void{
        button.domNode.addClass( "disabled" );
        button.domNode.prop2( "disabled", "disabled");
    }
}
}