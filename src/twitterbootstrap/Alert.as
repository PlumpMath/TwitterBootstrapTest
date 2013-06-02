package twitterbootstrap {
import randori.jquery.Event;
import randori.jquery.JQuery;
import randori.jquery.JQueryStatic;
import randori.signal.SimpleSignal;

[JavaScript(export="true", name="Alert")]
public class Alert {

    public static const TYPE_WARNING:String = "warning";
    public static const TYPE_ERROR:String = "error";
    public static const TYPE_SUCCESS:String = "success";
    public static const TYPE_INFO:String = "info";

    public var domNode:JQuery;

    [inject] public var closedByUser:SimpleSignal; //Signal will be dispatched before the alert is actually removed

    /**
     * Wrap any text, title and an optional dismiss button for a basic warning alert message.
     * @param message message of the alert
     * @param type type of the alert
     * @param title title of the alert, by default the type of the alert will be displayed
     * @param hasDismissButton determines if dissmissbutton is displayed
     * @param multiline if true, the padding on the top and bottom of the alert will be increased and a <br> will be inserted between title and message
     */
    public function Alert( message:String, type:String="warning", title:String="", hasDismissButton:Boolean=true, multiline:Boolean=false ){
        closedByUser = new SimpleSignal();
        this.domNode = JQueryStatic.J("<div></div>");
        this.domNode.addClass("alert");
        this.domNode.addClass( "alert-" + type ); //alert-warning is not an existing css-class, but hey, let's go crazy and omit yet another conditional
        multiline && this.domNode.addClass( "alert-block" );
        hasDismissButton && this.domNode.append( this.createDismissButton() );
        this.domNode.append( this.createTitle( title || type + "!" ) );
        multiline && this.domNode.append( "<br />" );
        this.domNode.append( " " + message );
    }

    private function dismissHandler( e:Event ):void{
        closedByUser.dispatch( e, this );
    }

    private function createDismissButton():JQuery {
        var buttonNode:JQuery = JQueryStatic.J( "<button></button>" );
        buttonNode.addClass( "close" );
        buttonNode.html( "&times;" );
        buttonNode.attr2( "data-dismiss", "alert" );
        buttonNode.prop2( "type", "button" );
        buttonNode.click1( dismissHandler );
        return buttonNode;
    }

    private function createTitle( title:String ):JQuery {
        var titleNode:JQuery = JQueryStatic.J( "<strong></strong>" );
        titleNode.html( title );
        return titleNode;
    }
}
}