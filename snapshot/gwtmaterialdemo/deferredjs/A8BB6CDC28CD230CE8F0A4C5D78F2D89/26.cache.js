$wnd.gwtmaterialdemo.runAsyncCallback26("function TemplatesPresenter(eventBus, view, proxy){\n  $clinit_TemplatesPresenter();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(542, 51, $intern_39, TemplatesPresenter);\n_.onReveal = function onReveal_32(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Templates', 'Inspiring templates before starting designing / developing your GWT Apps with Material Design look and feel.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_templates_TemplatesPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.templates', 'TemplatesPresenter', 542);\nfunction TemplatesView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialRow1_0(new TemplatesView_BinderImpl$Widgets));\n}\n\ndefineClass(686, 55, $intern_40, TemplatesView);\nvar Lgwt_material_design_demo_client_application_templates_TemplatesView_2_classLit = createForClass('gwt.material.design.demo.client.application.templates', 'TemplatesView', 686);\nfunction TemplatesView_BinderImpl(){\n}\n\ndefineClass(898, 1, {}, TemplatesView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_templates_TemplatesView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.templates', 'TemplatesView_BinderImpl', 898);\nfunction $build_f_MaterialRow1_0(){\n  var f_MaterialRow1, f_MaterialColumn2, f_MaterialCard3, f_MaterialCardImage4, f_MaterialCardAction7, f_MaterialColumn9, f_MaterialCard10, f_MaterialCardImage11, f_MaterialCardAction14, f_MaterialColumn16, f_MaterialCard17, f_MaterialCardImage18, f_MaterialCardAction21, f_MaterialColumn23, f_MaterialCard24, f_MaterialCardImage25, f_MaterialCardAction28, f_MaterialImage5, f_MaterialCardTitle6, f_MaterialLink8, f_MaterialImage12, f_MaterialCardTitle13, f_MaterialLink15, f_MaterialImage19, f_MaterialCardTitle20, f_MaterialLink22, f_MaterialImage26, f_MaterialCardTitle27, f_MaterialLink29;\n  f_MaterialRow1 = new MaterialRow;\n  $add_13(f_MaterialRow1, (f_MaterialColumn2 = new MaterialColumn , $add_13(f_MaterialColumn2, (f_MaterialCard3 = new MaterialCard , $add_13(f_MaterialCard3, (f_MaterialCardImage4 = new MaterialCardImage , $add_15(f_MaterialCardImage4, (f_MaterialImage5 = new MaterialImage , $setResource(f_MaterialImage5, ($clinit_MaterialResources_default_InlineClientBundleGenerator$template_starterInitializer() , $clinit_MaterialResources_default_InlineClientBundleGenerator_0() , template_starter)) , f_MaterialImage5)) , $add_15(f_MaterialCardImage4, (f_MaterialCardTitle6 = new MaterialCardTitle , f_MaterialCardTitle6.span_0.setText('Starter Template') , $add_13(f_MaterialCardTitle6, f_MaterialCardTitle6.span_0) , f_MaterialCardTitle6)) , $setWaves(f_MaterialCardImage4, ($clinit_WavesType() , LIGHT)) , f_MaterialCardImage4)) , $add_13(f_MaterialCard3, (f_MaterialCardAction7 = new MaterialCardAction , $add_13(f_MaterialCardAction7, (f_MaterialLink8 = new MaterialLink , f_MaterialLink8.span_0.setText('Demo') , $add_13(f_MaterialLink8, f_MaterialLink8.span_0) , $setAttribute(($clinit_DOM() , f_MaterialLink8.element), 'target', '_blank') , $setAttribute(f_MaterialLink8.element, 'href', 'http://gwt-material-starter.appspot.com/') , f_MaterialLink8)) , f_MaterialCardAction7)) , $setBackgroundColor(f_MaterialCard3.colorsMixin, 'white') , f_MaterialCard3)) , $setGrid(f_MaterialColumn2.gridMixin, 'l3') , f_MaterialColumn2));\n  $add_13(f_MaterialRow1, (f_MaterialColumn9 = new MaterialColumn , $add_13(f_MaterialColumn9, (f_MaterialCard10 = new MaterialCard , $add_13(f_MaterialCard10, (f_MaterialCardImage11 = new MaterialCardImage , $add_15(f_MaterialCardImage11, (f_MaterialImage12 = new MaterialImage , $setResource(f_MaterialImage12, ($clinit_MaterialResources_default_InlineClientBundleGenerator$template_wrenxInitializer() , template_wrenx)) , f_MaterialImage12)) , $add_15(f_MaterialCardImage11, (f_MaterialCardTitle13 = new MaterialCardTitle , f_MaterialCardTitle13.span_0.setText('Map Template') , $add_13(f_MaterialCardTitle13, f_MaterialCardTitle13.span_0) , f_MaterialCardTitle13)) , $setWaves(f_MaterialCardImage11, LIGHT) , f_MaterialCardImage11)) , $add_13(f_MaterialCard10, (f_MaterialCardAction14 = new MaterialCardAction , $add_13(f_MaterialCardAction14, (f_MaterialLink15 = new MaterialLink , f_MaterialLink15.span_0.setText('Demo') , $add_13(f_MaterialLink15, f_MaterialLink15.span_0) , $setAttribute(f_MaterialLink15.element, 'target', '_blank') , $setAttribute(f_MaterialLink15.element, 'href', 'http://wrenx2015.appspot.com/') , f_MaterialLink15)) , f_MaterialCardAction14)) , $setBackgroundColor(f_MaterialCard10.colorsMixin, 'white') , f_MaterialCard10)) , $setGrid(f_MaterialColumn9.gridMixin, 'l3') , f_MaterialColumn9));\n  $add_13(f_MaterialRow1, (f_MaterialColumn16 = new MaterialColumn , $add_13(f_MaterialColumn16, (f_MaterialCard17 = new MaterialCard , $add_13(f_MaterialCard17, (f_MaterialCardImage18 = new MaterialCardImage , $add_15(f_MaterialCardImage18, (f_MaterialImage19 = new MaterialImage , $setResource(f_MaterialImage19, ($clinit_MaterialResources_default_InlineClientBundleGenerator$template_parallaxInitializer() , template_parallax)) , f_MaterialImage19)) , $add_15(f_MaterialCardImage18, (f_MaterialCardTitle20 = new MaterialCardTitle , f_MaterialCardTitle20.span_0.setText('Parallax Template') , $add_13(f_MaterialCardTitle20, f_MaterialCardTitle20.span_0) , f_MaterialCardTitle20)) , $setWaves(f_MaterialCardImage18, LIGHT) , f_MaterialCardImage18)) , $add_13(f_MaterialCard17, (f_MaterialCardAction21 = new MaterialCardAction , $add_13(f_MaterialCardAction21, (f_MaterialLink22 = new MaterialLink , f_MaterialLink22.span_0.setText('Demo') , $add_13(f_MaterialLink22, f_MaterialLink22.span_0) , $setAttribute(f_MaterialLink22.element, 'target', '_blank') , $setAttribute(f_MaterialLink22.element, 'href', 'http://gwt-material-starter.appspot.com/') , f_MaterialLink22)) , f_MaterialCardAction21)) , $setBackgroundColor(f_MaterialCard17.colorsMixin, 'white') , f_MaterialCard17)) , $setGrid(f_MaterialColumn16.gridMixin, 'l3') , f_MaterialColumn16));\n  $add_13(f_MaterialRow1, (f_MaterialColumn23 = new MaterialColumn , $add_13(f_MaterialColumn23, (f_MaterialCard24 = new MaterialCard , $add_13(f_MaterialCard24, (f_MaterialCardImage25 = new MaterialCardImage , $add_15(f_MaterialCardImage25, (f_MaterialImage26 = new MaterialImage , $setResource(f_MaterialImage26, ($clinit_MaterialResources_default_InlineClientBundleGenerator$template_loginInitializer() , template_login)) , f_MaterialImage26)) , $add_15(f_MaterialCardImage25, (f_MaterialCardTitle27 = new MaterialCardTitle , f_MaterialCardTitle27.span_0.setText('Login Template') , $add_13(f_MaterialCardTitle27, f_MaterialCardTitle27.span_0) , f_MaterialCardTitle27)) , $setWaves(f_MaterialCardImage25, LIGHT) , f_MaterialCardImage25)) , $add_13(f_MaterialCard24, (f_MaterialCardAction28 = new MaterialCardAction , $add_13(f_MaterialCardAction28, (f_MaterialLink29 = new MaterialLink , f_MaterialLink29.span_0.setText('Demo') , $add_13(f_MaterialLink29, f_MaterialLink29.span_0) , $setAttribute(f_MaterialLink29.element, 'target', '_blank') , $setAttribute(f_MaterialLink29.element, 'href', 'http://gwt-material-starter.appspot.com/') , f_MaterialLink29)) , f_MaterialCardAction28)) , $setBackgroundColor(f_MaterialCard24.colorsMixin, 'white') , f_MaterialCard24)) , $setGrid(f_MaterialColumn23.gridMixin, 'l3') , f_MaterialColumn23));\n  return f_MaterialRow1;\n}\n\nfunction TemplatesView_BinderImpl$Widgets(){\n  $clinit_MaterialResources_default_InlineClientBundleGenerator_0();\n}\n\ndefineClass(899, 1, {}, TemplatesView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_templates_TemplatesView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.templates', 'TemplatesView_BinderImpl/Widgets', 899);\nfunction $get_Key$type$gwt$material$design$demo$client$application$templates$TemplatesPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$templates$TemplatesPresenter$_annotation$$none$$) {\n    result = new TemplatesPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$templates$TemplatesView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$templates$TemplatesPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$templates$TemplatesPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$templates$TemplatesPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$templates$TemplatesView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$templates$TemplatesView$_annotation$$none$$) {\n    result = new TemplatesView(new TemplatesView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$templates$TemplatesView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$templates$TemplatesView$_annotation$$none$$;\n}\n\ndefineClass(501, 1, $intern_54);\n_.onSuccess_0 = function onSuccess_25(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$templates$TemplatesPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\nvar template_login, template_parallax, template_starter, template_wrenx;\nfunction $clinit_MaterialResources_default_InlineClientBundleGenerator$template_loginInitializer(){\n  $clinit_MaterialResources_default_InlineClientBundleGenerator$template_loginInitializer = emptyMethod;\n  $clinit_MaterialResources_default_InlineClientBundleGenerator_0();\n  template_login = new ImageResourcePrototype('template_login', ($clinit_UriUtils() , new SafeUriString(externalImage12)), 720, 720);\n}\n\nfunction $clinit_MaterialResources_default_InlineClientBundleGenerator$template_parallaxInitializer(){\n  $clinit_MaterialResources_default_InlineClientBundleGenerator$template_parallaxInitializer = emptyMethod;\n  $clinit_MaterialResources_default_InlineClientBundleGenerator_0();\n  template_parallax = new ImageResourcePrototype('template_parallax', ($clinit_UriUtils() , new SafeUriString(externalImage13)), 413, 648);\n}\n\nfunction $clinit_MaterialResources_default_InlineClientBundleGenerator$template_starterInitializer(){\n  $clinit_MaterialResources_default_InlineClientBundleGenerator$template_starterInitializer = emptyMethod;\n  $clinit_MaterialResources_default_InlineClientBundleGenerator_0();\n  template_starter = new ImageResourcePrototype('template_starter', ($clinit_UriUtils() , new SafeUriString(externalImage14)), 427, 693);\n}\n\nfunction $clinit_MaterialResources_default_InlineClientBundleGenerator$template_wrenxInitializer(){\n  $clinit_MaterialResources_default_InlineClientBundleGenerator$template_wrenxInitializer = emptyMethod;\n  $clinit_MaterialResources_default_InlineClientBundleGenerator_0();\n  template_wrenx = new ImageResourcePrototype('template_wrenx', ($clinit_UriUtils() , new SafeUriString(externalImage15)), 469, 681);\n}\n\n$entry(onLoad_0)(26);\n\n//# sourceURL=gwtmaterialdemo-26.js\n")
