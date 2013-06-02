package twitterbootstrap {
import randori.jquery.Event;
import randori.jquery.JQuery;
import randori.jquery.JQueryStatic;
import randori.signal.SimpleSignal;

[JavaScript(export="true", name="Alert")]
public class Alert {

    public static const TYPE_WARNING:String = "warning";
    public static const TYPE_ERROR:String = "error";
    public static const TYPE_SUCCES:String = "succes";
    public static const TYPE_INFO:String = "info";

    [inject] public var closedByUser:SimpleSignal; //Signal will be dispatched before the alert is actually removed

    /**
     * Wrap any text, title and an optional dismiss button for a basic warning alert message.
     * @param div container the alert will be append to ( all childs will be removed )
     * @param message message of the alert
     * @param type type of the alert
     * @param title title of the alert, by default the type of the alert will be displayed
     * @param hasDismissButton determines if dissmissbutton is displayed
     * @param multiline if true, the padding on the top and bottom of the alert will be increased and a <br> will be inserted between title and message
     */
    public function Alert( div:JQuery, message:String, type:String="warning", title:String="", hasDismissButton:Boolean=true, multiline:Boolean=false ){
        closedByUser = new SimpleSignal();
        div.empty();
        div.addClass("alert");
        div.addClass( "alert-" + type ); //alert-warning is not an existing css-class, but hey, let's go crazy and omit yet another conditional
        multiline && div.addClass( "alert-block" );
        hasDismissButton && div.append( this.createDismissButton() );
        div.append( this.createTitle( title || type + "!" ) );
        multiline && div.append( "<br />" );
        div.append( " " + message );
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