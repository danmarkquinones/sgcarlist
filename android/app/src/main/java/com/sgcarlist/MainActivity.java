package com.sgcarlist;

import com.facebook.react.ReactActivity;
import android.os.Bundle;

import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "sgcarlist";
  }

  // @Override
  // protected void onCreate(Bundle savedInstanceState) {
  //   super.onCreate(null);
  // }

  @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
  }
  
}
