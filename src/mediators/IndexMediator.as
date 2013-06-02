package mediators {
import randori.behaviors.AbstractMediator;
import randori.jquery.Event;
import randori.jquery.JQuery;
import randori.webkit.page.Window;

import twitterbootstrap.Alert;
import twitterbootstrap.Button;
import twitterbootstrap.Icon;

public class IndexMediator extends AbstractMediator {

    [View] public var div_alertButtons:JQuery;
    [View] public var div_alerts:JQuery;
    [View] public var div_toggleButtons:JQuery;
    [View] public var div_icons:JQuery;

    public var btnEnable:Button,btnDisabled:Button;

    override protected function onRegister():void {
        var icon_fire:Icon = new Icon( Icon.ICON_FIRE );
        var icon_calendar:Icon = new Icon( Icon.ICON_CALENDAR, true );

        var btnDefault:Button = new Button( "default", Button.TYPE_DEFAULT, Button.SIZE_DEFAULT, true, icon_fire );
        var btnSuccess:Button = new Button( "success", Button.TYPE_SUCCESS, Button.SIZE_DEFAULT, true, icon_calendar, true );
        var btnInfo:Button = new Button( "info", Button.TYPE_INFO );
        var btnError:Button = new Button( "error", Button.TYPE_DANGER, Button.SIZE_DEFAULT );

        btnDefault.buttonClicked.add( btnClickHandler );
        btnSuccess.buttonClicked.add( btnClickHandler );
        btnInfo.buttonClicked.add( btnClickHandler );
        btnError.buttonClicked.add( btnClickHandler );

        div_alertButtons.append(
            btnDefault.domNode,
            btnSuccess.domNode,
            btnInfo.domNode,
            btnError.domNode
        );

        btnEnable = new Button( "enable" );
        btnDisabled = new Button( "disabled", Button.TYPE_INVERSE, Button.SIZE_DEFAULT, false );
        div_toggleButtons.append(btnEnable.domNode, btnDisabled.domNode);
        btnEnable.buttonClicked.add( btnEnableClickHandler );
    }

    private function btnClickHandler( e:Event, target:Button ):void{
        var alert:Alert;
        if( target.label == "default" ){
            alert = new Alert( "this is a warning", Alert.TYPE_WARNING, "custom title" );

        }else if( target.label == "error" ){
            alert = new Alert(  "this is an error-alert, with default title", Alert.TYPE_ERROR );

        }else if( target.label == "info" ){
            alert = new Alert( "this is an info-alert, with empty title", Alert.TYPE_INFO, "" );

        }else if( target.label == "success" ){
            alert = new Alert( "this is an succes-alert, with long text:<br /> " +
                    "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.",
                    Alert.TYPE_SUCCESS, "Well done", true, true );

        }

        if(alert) alert.closedByUser.add( alertClosedHandler );
        div_alerts.append( alert.domNode );
    }

    private function alertClosedHandler( e:Event, target:Alert ):void{
        Window.console.log( "alert closed" + target );
    }

    private function btnEnableClickHandler( e:Event, target:Button ):void{
        if(btnDisabled.enabled){
            btnDisabled.enabled = false;
            btnDisabled.label = "disabled";
            btnEnable.label = "enable";
        }else{
            btnDisabled.enabled = true;
            btnDisabled.label = "enabled";
            btnEnable.label = "disable";
        }

    }

    override protected function onDeregister():void {
    }

}
}