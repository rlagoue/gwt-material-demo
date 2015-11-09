$wnd.gwtmaterialdemo.runAsyncCallback19("function MaterialWeather(){\n  MaterialPanel.call(this);\n}\n\nfunction showWeather(location_1, div, color_0){\n  $wnd.jQuery.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + location_1, function(data_0){\n    var items = [];\n    var location_0 = data_0.sys.country + ', ' + data_0.name;\n    var icon = 'http://gwt-material.appspot.com/bin/weather/' + data_0.weather[0].icon + '.png';\n    var temp = Math.round((data_0.main.temp - 273.15) * 10) / 10;\n    var main = data_0.weather[0].main;\n    var desc = data_0.weather[0].description;\n    var humidity = data_0.main.humidity;\n    var pressure = data_0.main.pressure;\n    var d = new Date;\n    var weekday = new Array(7);\n    weekday[0] = 'Sunday';\n    weekday[1] = 'Monday';\n    weekday[2] = 'Tuesday';\n    weekday[3] = 'Wednesday';\n    weekday[4] = 'Thursday';\n    weekday[5] = 'Friday';\n    weekday[6] = 'Saturday';\n    var today = weekday[d.getDay()];\n    items.push(\"<div id='weatherPanel' class='center-align card white-text \" + color_0 + \"'> <div class='row'> <ul id='weatherPanel' > <div class='col s12 m12 l6'> <li style='opacity: 0;'> <h5 >\" + main + \"<\\/h5> <p style='margin-top: -5px; font-weight: 100;text-transform: capitalize;'>\" + desc + \"<\\/p> <\\/li> <li style='opacity: 0;'> <div class='row'> <div class='col s12 m4 l4'> <img src='\" + icon + \"' style='margin-top: 20px;'> <\\/div> <div class='col s12 m8 l8'> <h2 style='font-weight: 100;'>\" + temp + \"<\\/h2> <\\/div> <\\/div> <\\/li> <\\/div> <div class='col s12 m12 l6'> <li style='opacity: 0;'> <h5>\" + location_0 + \"<\\/h5> <p style='margin-top: -5px; font-weight: 100;'>\" + today + \"<\\/p> <\\/li> <div class='left-align'> <li style='opacity: 0;'> <span><i class='mdi-communication-invert-colors-on'> <\\/i> \" + humidity + \"%<\\/span><br> <\\/li> <li style='opacity: 0;'> <span><i class='mdi-device-wifi-tethering'> <\\/i>3.9  mph<\\/span><br> <\\/li> <li style='opacity: 0;'> <span><i class='mdi-av-timer'><\\/i>\" + pressure + '  hPa<\\/span> <\\/li> <\\/div> <\\/div> <\\/ul> <\\/div> <\\/div>');\n    $wnd.document.getElementById('weatherContainer').innerHTML = '';\n    $wnd.jQuery('<ul/>', {'class':'my-new-list', html:items.join('')}).appendTo('.' + div);\n    $wnd.Materialize.showStaggeredList('#weatherPanel');\n  }\n  );\n}\n\ndefineClass(1155, 7, $intern_46, MaterialWeather);\n_.onLoad = function onLoad_21(){\n  setStyleName(($clinit_DOM() , this.element), 'weatherContainer', true);\n  $setId(this.element, 'weatherContainer');\n  showWeather(this.location_0, 'weatherContainer', this.color_0);\n}\n;\nvar Lgwt_material_design_client_ui_MaterialWeather_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialWeather', 1155);\nfunction ShowcasePresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(524, 51, $intern_39, ShowcasePresenter);\nvar Lgwt_material_design_demo_client_application_showcase_ShowcasePresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.showcase', 'ShowcasePresenter', 524);\nfunction ShowcaseView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_16(new ShowcaseView_BinderImpl$Widgets));\n}\n\ndefineClass(662, 55, $intern_40, ShowcaseView);\nvar Lgwt_material_design_demo_client_application_showcase_ShowcaseView_2_classLit = createForClass('gwt.material.design.demo.client.application.showcase', 'ShowcaseView', 662);\nfunction ShowcaseView_BinderImpl(){\n}\n\ndefineClass(865, 1, {}, ShowcaseView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_showcase_ShowcaseView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.showcase', 'ShowcaseView_BinderImpl', 865);\nfunction $build_f_HTMLPanel1_16(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, btnSplashScreen, f_MaterialTitle3, f_MaterialRow4, f_MaterialTitle7, btnParallax, btnParallaxSource, f_MaterialTitle8, f_MaterialButton9, btnLoginSource, f_MaterialTitle10, btnPhoneGap, btnPhonegapSource, f_MaterialColumn5, f_MaterialWeather6;\n  f_HTMLPanel1 = new HTMLPanel($html1_18(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6, this$static.domId7, this$static.domId8, this$static.domId9, this$static.domId10, this$static.domId11, this$static.domId12).html);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  $get_0(this$static.domId6Element);\n  $get_0(this$static.domId7Element);\n  $get_0(this$static.domId8Element);\n  $get_0(this$static.domId9Element);\n  $get_0(this$static.domId10Element);\n  $get_0(this$static.domId11Element);\n  $get_0(this$static.domId12Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'SplashScreen') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (btnSplashScreen = new MaterialButton , btnSplashScreen.span_0.setText('Demo') , $add_13(btnSplashScreen, btnSplashScreen.span_0) , $setBackgroundColor(btnSplashScreen.colorsMixin, 'blue') , $setWaves(btnSplashScreen, ($clinit_WavesType() , LIGHT)) , btnSplashScreen), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle3 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle3.header), 'Weather') , $setText_4(f_MaterialTitle3.paragraph, \"Custom Material Weather made with OpenWeatherMap API with JSON technology no more server side to setup.'\") , f_MaterialTitle3), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow4 = new MaterialRow , $add_13(f_MaterialRow4, (f_MaterialColumn5 = new MaterialColumn , $add_13(f_MaterialColumn5, (f_MaterialWeather6 = new MaterialWeather , f_MaterialWeather6.color_0 = 'blue' , f_MaterialWeather6.location_0 = 'Makati, Philippines' , f_MaterialWeather6)) , $setGrid(f_MaterialColumn5.gridMixin, 's12 m6 l6') , f_MaterialColumn5)) , f_MaterialRow4), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle7 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle7.header), 'Parallax') , $setText_4(f_MaterialTitle7.paragraph, \"Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling. Check out the demo to get a better idea of it.'\") , f_MaterialTitle7), $get_0(this$static.domId4Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (btnParallax = new MaterialButton , btnParallax.span_0.setText('Open Demo') , $add_13(btnParallax, btnParallax.span_0) , $setBackgroundColor(btnParallax.colorsMixin, 'blue') , $setWaves(btnParallax, LIGHT) , $setAttribute(btnParallax.element, 'href', '#parallax_demo') , btnParallax), $get_0(this$static.domId5Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (btnParallaxSource = new MaterialButton , btnParallaxSource.span_0.setText('Source') , $add_13(btnParallaxSource, btnParallaxSource.span_0) , $setBackgroundColor(btnParallaxSource.colorsMixin, 'blue') , $setWaves(btnParallaxSource, LIGHT) , btnParallaxSource), $get_0(this$static.domId6Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle8 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle8.header), 'Login UI') , $setText_4(f_MaterialTitle8.paragraph, \"Here is an example of GWT Material Design UI with card base interface'\") , f_MaterialTitle8), $get_0(this$static.domId7Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialButton9 = new MaterialButton , f_MaterialButton9.span_0.setText('Open Demo') , $add_13(f_MaterialButton9, f_MaterialButton9.span_0) , $setBackgroundColor(f_MaterialButton9.colorsMixin, 'blue') , $setWaves(f_MaterialButton9, LIGHT) , $setAttribute(f_MaterialButton9.element, 'href', '#login_demo') , f_MaterialButton9), $get_0(this$static.domId8Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (btnLoginSource = new MaterialButton , btnLoginSource.span_0.setText('Source') , $add_13(btnLoginSource, btnLoginSource.span_0) , $setBackgroundColor(btnLoginSource.colorsMixin, 'blue') , $setWaves(btnLoginSource, LIGHT) , btnLoginSource), $get_0(this$static.domId9Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle10 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle10.header), 'GWT Material Phonegap') , $setText_4(f_MaterialTitle10.paragraph, 'Phonegap Integration with GWT Material Wrapper is now available. Feel free to download the Android Release and give us feedback.') , f_MaterialTitle10), $get_0(this$static.domId10Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (btnPhoneGap = new MaterialButton , btnPhoneGap.span_0.setText('Download APK File') , $add_13(btnPhoneGap, btnPhoneGap.span_0) , $setBackgroundColor(btnPhoneGap.colorsMixin, 'blue') , $setWaves(btnPhoneGap, LIGHT) , btnPhoneGap), $get_0(this$static.domId11Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (btnPhonegapSource = new MaterialButton , btnPhonegapSource.span_0.setText('Source') , $add_13(btnPhonegapSource, btnPhonegapSource.span_0) , $setBackgroundColor(btnPhonegapSource.colorsMixin, 'blue') , $setWaves(btnPhonegapSource, LIGHT) , btnPhonegapSource), $get_0(this$static.domId12Element));\n  return f_HTMLPanel1;\n}\n\nfunction ShowcaseView_BinderImpl$Widgets(){\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId6 = $createUniqueId($doc);\n  this.domId7 = $createUniqueId($doc);\n  this.domId8 = $createUniqueId($doc);\n  this.domId9 = $createUniqueId($doc);\n  this.domId10 = $createUniqueId($doc);\n  this.domId11 = $createUniqueId($doc);\n  this.domId12 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n  this.domId6Element = new LazyDomElement(this.domId6);\n  this.domId7Element = new LazyDomElement(this.domId7);\n  this.domId8Element = new LazyDomElement(this.domId8);\n  this.domId9Element = new LazyDomElement(this.domId9);\n  this.domId10Element = new LazyDomElement(this.domId10);\n  this.domId11Element = new LazyDomElement(this.domId11);\n  this.domId12Element = new LazyDomElement(this.domId12);\n}\n\ndefineClass(866, 1, {}, ShowcaseView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_showcase_ShowcaseView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.showcase', 'ShowcaseView_BinderImpl/Widgets', 866);\nfunction $html1_18(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += '\\'><\\/span> <pre>\\n      MaterialSplashScreen splash = new MaterialSplashScreen();\\n      splash.setSplashTime(1000);\\n      splash.setMain(new MaterialDemo());\\n      splash.setLogo(MaterialResources.INSTANCE.ic_splash());\\n      splash.setAppName(\"gwt-material\");\\n      splash.setAppDescription(\"Material Design Look and Feel for GWT Apps\");\\n      splash.setColor(\"blue\");\\n      splash.setTextColor(\"white\");\\n      splash.show();\\n    <\\/pre> <span id=\\'';\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += '\\'><\\/span> <pre>\\n      &lt;m:MaterialRow&gt;\\n      &lt;m:MaterialColumn grid=\"s12 m6 l6\"&gt;\\n      &lt;m:MaterialWeather location=\"Makati, Philippines\" backgroundColor=\"blue\"/&gt;\\n      &lt;/m:MaterialColumn&gt;\\n      &lt;/m:MaterialRow&gt;\\n    <\\/pre> <span id=\\'';\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg6));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg7));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg8));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg9));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg10));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg11));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg12));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$showcase$ShowcasePresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$showcase$ShowcasePresenter$_annotation$$none$$) {\n    result = new ShowcasePresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$showcase$ShowcaseView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$showcase$ShowcasePresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$showcase$ShowcasePresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$showcase$ShowcasePresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$showcase$ShowcaseView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$showcase$ShowcaseView$_annotation$$none$$) {\n    result = new ShowcaseView(new ShowcaseView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$showcase$ShowcaseView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$showcase$ShowcaseView$_annotation$$none$$;\n}\n\ndefineClass(478, 1, $intern_53);\n_.onSuccess_0 = function onSuccess_18(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$showcase$ShowcasePresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(19);\n\n//# sourceURL=gwtmaterialdemo-19.js\n")
