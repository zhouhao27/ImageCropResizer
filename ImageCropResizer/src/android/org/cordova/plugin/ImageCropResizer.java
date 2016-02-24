package org.cordova.plugin;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONException;
import android.content.Context;
import android.widget.Toast;

public class ImageCropResizer extends CordovaPlugin {
	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		if ("cropResize".equals(action)) {
      echo("cropResize called", callbackContext);
			return true;
		}

		return false;
	}

	private void echo(String msg, CallbackContext callbackContext) {
		if (msg == null || msg.length() == 0) {
      Toast.makeText(webView.getContext(), "Empty message", Toast.LENGTH_LONG).show();
			callbackContext.error("Empty message!");
		} else {
			Toast.makeText(webView.getContext(), msg, Toast.LENGTH_LONG).show();
			callbackContext.success(msg);
		}
	}
}
