$wnd.gwtmaterialdemo.runAsyncCallback18("function $clinit_ViewWithUiHandlers(){\n  $clinit_ViewWithUiHandlers = emptyMethod;\n  $ensureNamesAreInitialized(Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit);\n}\n\ndefineClass(660, 55, $intern_40);\nvar Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit = createForClass('com.gwtplatform.mvp.client', 'ViewWithUiHandlers', 660);\nfunction $getFragment_gwt_material_design_demo_client_resources(this$static){\n  !this$static.fieldFragment_gwt$material$design$demo$client$resources && (this$static.fieldFragment_gwt$material$design$demo$client$resources = new com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_39);\n  return this$static.fieldFragment_gwt$material$design$demo$client$resources;\n}\n\nfunction GettingStartedPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n  dynamicCast(this.view, 1323);\n}\n\ndefineClass(523, 51, $intern_39, GettingStartedPresenter);\n_.onReveal = function onReveal_23(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Getting Started', 'Learn how to easily start using GWT Material Design in your app.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_gettingstarted_GettingStartedPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted', 'GettingStartedPresenter', 523);\nfunction GettingStartedView(){\n  $clinit_ViewWithUiHandlers();\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialPanel1_3(new GettingStartedView_BinderImpl$Widgets));\n}\n\ndefineClass(661, 660, {11:1, 1323:1}, GettingStartedView);\nvar Lgwt_material_design_demo_client_application_gettingstarted_GettingStartedView_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted', 'GettingStartedView', 661);\nfunction GettingStartedView_BinderImpl(){\n}\n\ndefineClass(860, 1, {}, GettingStartedView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_gettingstarted_GettingStartedView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted', 'GettingStartedView_BinderImpl', 860);\nfunction $build_f_MaterialPanel1_3(this$static){\n  var f_MaterialPanel1, f_MaterialPanel2, f_MaterialPanel5, f_MaterialPanel7, f_MaterialPanel10, f_MaterialPanel13, f_MaterialPanel18, f_MaterialTitle3, btnMaven, f_Pre4, sb, f_MaterialTitle6, btnDownloadGWTMaterial, f_MaterialTitle8, f_Pre9, sb_0, f_MaterialTitle11, f_Pre12, sb_1, f_MaterialTitle14, f_Pre15, sb_2, f_MaterialTitle16, f_Pre17, sb_3, f_MaterialRow19, f_MaterialColumn20, f_MaterialTitle21, f_MaterialImage22, btnDemoStarter, btnSourceStarter;\n  f_MaterialPanel1 = new MaterialPanel;\n  $add_13(f_MaterialPanel1, (f_MaterialPanel2 = new MaterialPanel , $add_13(f_MaterialPanel2, (f_MaterialTitle3 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle3.header), 'Maven Repository') , $setText_4(f_MaterialTitle3.paragraph, 'We release a maven repository in order to improve the productivity of GWT Material.') , f_MaterialTitle3)) , $add_13(f_MaterialPanel2, (btnMaven = new MaterialLink , $setIconPosition(btnMaven, ($clinit_IconPosition() , LEFT_4)) , btnMaven.span_0.setText('http://mvnrepository.com/artifact/com.github.gwtmaterialdesign/gwt-material.') , $add_13(btnMaven, btnMaven.span_0) , $setTextColor(btnMaven.colorsMixin, 'blue') , $setIconType(btnMaven, ($clinit_IconType() , LINK_1)) , $addDomHandler(btnMaven, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1)) , btnMaven)) , $add_13(f_MaterialPanel2, (f_Pre4 = new Pre , $setHTML(f_Pre4, (sb = new StringBuilder , sb.string += '&lt;dependency&gt;<br> &lt;groupId&gt;com.github.gwtmaterialdesign&lt;/groupId&gt;<br> &lt;artifactId&gt;gwt-material&lt;/artifactId&gt;<br> &lt;version&gt;1.4.0&lt;/version&gt;<br> &lt;/dependency&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , f_Pre4)) , f_MaterialPanel2));\n  $add_13(f_MaterialPanel1, (f_MaterialPanel5 = new MaterialPanel , $add_13(f_MaterialPanel5, (f_MaterialTitle6 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle6.header), 'Download the JAR (Alternative)') , $setText_4(f_MaterialTitle6.paragraph, 'If you are not using maven you can download the latest Jar Release easily and add it in your classpath.') , f_MaterialTitle6)) , $add_13(f_MaterialPanel5, (btnDownloadGWTMaterial = new MaterialButton , $setIconPosition(btnDownloadGWTMaterial, RIGHT_5) , btnDownloadGWTMaterial.span_0.setText('Download 1.4.0') , $add_13(btnDownloadGWTMaterial, btnDownloadGWTMaterial.span_0) , $setBackgroundColor(btnDownloadGWTMaterial.colorsMixin, 'blue') , $setWaves(btnDownloadGWTMaterial, ($clinit_WavesType() , LIGHT)) , $setIconType(btnDownloadGWTMaterial, FILE_DOWNLOAD) , $addDomHandler(btnDownloadGWTMaterial, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, (null , TYPE_1)) , btnDownloadGWTMaterial)) , f_MaterialPanel5));\n  $add_13(f_MaterialPanel1, (f_MaterialPanel7 = new MaterialPanel , $add_13(f_MaterialPanel7, (f_MaterialTitle8 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle8.header), 'Configuring your module') , $setText_4(f_MaterialTitle8.paragraph, 'You will have to configure your App.gwt.xml file to inherit the Gwt Material Widget widget library. You can do it like this:') , f_MaterialTitle8)) , $add_13(f_MaterialPanel7, (f_Pre9 = new Pre , $setHTML(f_Pre9, (sb_0 = new StringBuilder , sb_0.string += '&lt;inherits name=\"gwt.material.design.GwtMaterialDesign\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , f_Pre9)) , $setScrollspy(f_MaterialPanel7.scrollspyMixin, 'Configuring Your Module') , f_MaterialPanel7));\n  $add_13(f_MaterialPanel1, (f_MaterialPanel10 = new MaterialPanel , $add_13(f_MaterialPanel10, (f_MaterialTitle11 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle11.header), 'Responsive Design') , $setText_4(f_MaterialTitle11.paragraph, 'Add meta tag for responsive design on Mobile devices in your gwt-app.html') , f_MaterialTitle11)) , $add_13(f_MaterialPanel10, (f_Pre12 = new Pre , $setHTML(f_Pre12, (sb_1 = new StringBuilder , sb_1.string += '&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html) , f_Pre12)) , f_MaterialPanel10));\n  $add_13(f_MaterialPanel1, (f_MaterialPanel13 = new MaterialPanel , $add_13(f_MaterialPanel13, (f_MaterialTitle14 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle14.header), 'UiBinder usage') , $setText_4(f_MaterialTitle14.paragraph, \"Assuming that you're using UIBinder, add the following namespace to the <ui:UIBinder> element:\") , f_MaterialTitle14)) , $add_13(f_MaterialPanel13, (f_Pre15 = new Pre , $setHTML(f_Pre15, (sb_2 = new StringBuilder , sb_2.string += 'xmlns:m=\"urn:import:gwt.material.design.client.ui\"' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html) , f_Pre15)) , $add_13(f_MaterialPanel13, (f_MaterialTitle16 = new MaterialTitle , $setText_4(f_MaterialTitle16.paragraph, 'Then you can easily use the m namespace in your widget design, like MaterialButton:') , f_MaterialTitle16)) , $add_13(f_MaterialPanel13, (f_Pre17 = new Pre , $setHTML(f_Pre17, (sb_3 = new StringBuilder , sb_3.string += '&lt;m:MaterialButton text=\"Button\" waves=\"DEFAULT\" backgroundColor=\"white\" textColor=\"black\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html) , f_Pre17)) , f_MaterialPanel13));\n  $add_13(f_MaterialPanel1, (f_MaterialPanel18 = new MaterialPanel , $add_13(f_MaterialPanel18, (f_MaterialRow19 = new MaterialRow , $add_13(f_MaterialRow19, (f_MaterialColumn20 = new MaterialColumn , $add_13(f_MaterialColumn20, (f_MaterialTitle21 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle21.header), 'Starter Template') , $setText_4(f_MaterialTitle21.paragraph, 'You can copy and paste the UI Binder Code of this starter template into your app to know how GWT Material works with basic Nav Bar, Side Bar, Fixed Footer, and Container works.') , f_MaterialTitle21)) , $add_13(f_MaterialColumn20, (f_MaterialImage22 = new MaterialImage , $setResource(f_MaterialImage22, (new MaterialResources_default_InlineClientBundleGenerator_0 , $clinit_MaterialResources_default_InlineClientBundleGenerator$starterInitializer() , $clinit_MaterialResources_default_InlineClientBundleGenerator_0() , starter)) , $setType_4(f_MaterialImage22, ($clinit_ImageType() , MATERIALBOXED)) , f_MaterialImage22)) , $add_13(f_MaterialColumn20, (btnDemoStarter = new MaterialButton , $setIconPosition(btnDemoStarter, RIGHT_5) , btnDemoStarter.span_0.setText('Demo') , $add_13(btnDemoStarter, btnDemoStarter.span_0) , $setIconType(btnDemoStarter, SEARCH_0) , $addDomHandler(btnDemoStarter, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_1)) , btnDemoStarter)) , $add_13(f_MaterialColumn20, (btnSourceStarter = new MaterialButton , $setIconPosition(btnSourceStarter, RIGHT_5) , btnSourceStarter.span_0.setText('Source') , $add_13(btnSourceStarter, btnSourceStarter.span_0) , $setIconType(btnSourceStarter, FILE_DOWNLOAD) , $addDomHandler(btnSourceStarter, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, (null , TYPE_1)) , btnSourceStarter)) , $setGrid(f_MaterialColumn20.gridMixin, 's12 m6 l6') , f_MaterialColumn20)) , f_MaterialRow19)) , f_MaterialPanel18));\n  return f_MaterialPanel1;\n}\n\nfunction GettingStartedView_BinderImpl$Widgets(){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new GettingStartedView_BinderImpl$Widgets$1;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new GettingStartedView_BinderImpl$Widgets$2;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new GettingStartedView_BinderImpl$Widgets$3;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new GettingStartedView_BinderImpl$Widgets$4;\n}\n\ndefineClass(861, 1, {}, GettingStartedView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_gettingstarted_GettingStartedView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted', 'GettingStartedView_BinderImpl/Widgets', 861);\nfunction GettingStartedView_BinderImpl$Widgets$1(){\n}\n\ndefineClass(862, 1, $intern_55, GettingStartedView_BinderImpl$Widgets$1);\n_.onClick = function onClick_62(event_0){\n  open_0('http://mvnrepository.com/artifact/com.github.gwtmaterialdesign/gwt-material', '_blank', '');\n}\n;\nvar Lgwt_material_design_demo_client_application_gettingstarted_GettingStartedView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted', 'GettingStartedView_BinderImpl/Widgets/1', 862);\nfunction GettingStartedView_BinderImpl$Widgets$2(){\n}\n\ndefineClass(863, 1, $intern_55, GettingStartedView_BinderImpl$Widgets$2);\n_.onClick = function onClick_63(event_0){\n  open_0('http://gwt-material-starter.appspot.com', '_blank', '');\n}\n;\nvar Lgwt_material_design_demo_client_application_gettingstarted_GettingStartedView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted', 'GettingStartedView_BinderImpl/Widgets/2', 863);\nfunction GettingStartedView_BinderImpl$Widgets$3(){\n}\n\ndefineClass(864, 1, $intern_55, GettingStartedView_BinderImpl$Widgets$3);\n_.onClick = function onClick_64(event_0){\n  open_0('https://github.com/kevzlou7979/GWTMaterialDesign/blob/master/gwt.material.starter/src/gwt/material/starter/client/panel/HomePanel.ui.xml', '_blank', '');\n}\n;\nvar Lgwt_material_design_demo_client_application_gettingstarted_GettingStartedView_1BinderImpl$Widgets$3_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted', 'GettingStartedView_BinderImpl/Widgets/3', 864);\nfunction GettingStartedView_BinderImpl$Widgets$4(){\n}\n\ndefineClass(865, 1, $intern_55, GettingStartedView_BinderImpl$Widgets$4);\n_.onClick = function onClick_65(event_0){\n  open_0('http://gwt-material.appspot.com/bin/gwt-material-1.3.3.jar', '_blank', '');\n}\n;\nvar Lgwt_material_design_demo_client_application_gettingstarted_GettingStartedView_1BinderImpl$Widgets$4_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted', 'GettingStartedView_BinderImpl/Widgets/4', 865);\nfunction $get_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedPresenter$_annotation$$none$$) {\n    result = new GettingStartedPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedView$_annotation$$none$$) {\n    result = new GettingStartedView((new GettingStartedView_BinderImpl , $get_Key$type$gwt$material$design$demo$client$resources$MaterialConstants$_annotation$$none$$($getFragment_gwt_material_design_demo_client_resources(this$static.injector))));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedView$_annotation$$none$$;\n}\n\ndefineClass(476, 1, $intern_53);\n_.onSuccess_0 = function onSuccess_17(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\nfunction MaterialConstants_(){\n}\n\ndefineClass(866, 1, {}, MaterialConstants_);\nvar Lgwt_material_design_demo_client_resources_MaterialConstants_1_2_classLit = createForClass('gwt.material.design.demo.client.resources', 'MaterialConstants_', 866);\nvar starter;\nfunction $clinit_MaterialResources_default_InlineClientBundleGenerator$starterInitializer(){\n  $clinit_MaterialResources_default_InlineClientBundleGenerator$starterInitializer = emptyMethod;\n  $clinit_MaterialResources_default_InlineClientBundleGenerator_0();\n  starter = new ImageResourcePrototype('starter', ($clinit_UriUtils() , new SafeUriString(externalImage11)), 1599, 789);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$resources$MaterialConstants$_annotation$$none$$(){\n  var created;\n  created = new MaterialConstants_;\n  return created;\n}\n\nfunction com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_39(){\n}\n\ndefineClass(537, 1, {}, com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_39);\nvar Lgwt_material_design_demo_client_resources_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2_classLit = createForClass('gwt.material.design.demo.client.resources', 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment', 537);\n$entry(onLoad_0)(18);\n\n//# sourceURL=gwtmaterialdemo-18.js\n")
