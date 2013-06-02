package mediators {
import randori.behaviors.AbstractMediator;
import randori.jquery.Event;
import randori.jquery.JQuery;
import randori.webkit.page.Window;

import twitterbootstrap.Alert;
import twitterbootstrap.Button;

public class IndexMediator extends AbstractMediator {

    [View] public var alert:JQuery;
    [View] public var alert_succes:JQuery;
    [View] public var alert_info:JQuery;
    [View] public var alert_error:JQuery;

    [View] public var button:JQuery;
    [View] public var button2:JQuery;

    override protected function onRegister():void {
        var alertTest:Alert = new Alert( alert, "this is a warning", Alert.TYPE_WARNING, "custom title" );
        var alertTest2:Alert = new Alert( alert_error, "this is an error-alert, with default title", Alert.TYPE_ERROR );
        var alertTest3:Alert = new Alert( alert_info, "this is an info-alert, with empty title", Alert.TYPE_INFO, "" );
        var alertTest4:Alert = new Alert( alert_succes, "this is an succes-alert, with long text:<br /> " +
                "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.",
                Alert.TYPE_SUCCES, "Well done", true, true );

        alertTest.closedByUser.add( alertClosedHandler );
        alertTest2.closedByUser.add( alertClosedHandler );
        alertTest3.closedByUser.add( alertClosedHandler );
        alertTest4.closedByUser.add( alertClosedHandler );

        var btn:Button = new Button( button, "test");
        var btn2:Button = new Button( button2, "test", Button.TYPE_INVERSE, Button.SIZE_MINI, false);
    }

    private function alertClosedHandler( e:Event, target:Alert ):void{
        Window.console.log( "alert closed" + target );
    }

    override protected function onDeregister():void {

    }

}
}