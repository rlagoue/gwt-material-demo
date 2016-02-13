$wnd.gwtmaterialdemo.runAsyncCallback25("function apply_3(source, offset){\n  $wnd.jQuery(document).ready(function(){\n    $wnd.jQuery(source).pushpin({top:offset});\n  }\n  );\n}\n\nfunction apply_4(widget, offset){\n  apply_3(($clinit_DOM() , widget.element), offset);\n}\n\nfunction PushPinPresenter(eventBus, view, proxy){\n  $clinit_PushPinPresenter();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(648, 56, $intern_54, PushPinPresenter);\n_.onReveal = function onReveal_35(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Push Pin', 'Pushpin is our fixed positioning plugin. You can check out our live examples: the fixed Table of Contents on the right.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_pushpin_PushPinPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pushpin', 'PushPinPresenter', 648);\nfunction PushPinView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_21(new PushPinView_BinderImpl$Widgets(this)));\n}\n\ndefineClass(855, 59, $intern_55, PushPinView);\n_.onAttach = function onAttach_11(){\n  apply_4(this.target_0, $getOffsetHeight(this.source) + 600);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_pushpin_PushPinView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pushpin', 'PushPinView', 855);\nfunction PushPinView_BinderImpl(){\n}\n\ndefineClass(1172, 1, {}, PushPinView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_components_pushpin_PushPinView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pushpin', 'PushPinView_BinderImpl', 1172);\nfunction $build_f_HTMLPanel1_21(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, f_MaterialRow3, f_PrettyPre4, source, target, sb;\n  f_HTMLPanel1 = new HTMLPanel($html2_3(this$static.domId0, this$static.domId1, this$static.domId2).html);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Usage') , $setText_9(f_MaterialTitle2.paragraph, 'You just need to set the reference between your source and target offset element. To do this you will need to call MaterialPushPin.apply(Widget source, Widget target) inside onAttach method.') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow3 = new MaterialRow , $add_13(f_MaterialRow3, (source = new MaterialPanel , source.setHeight_0('64px') , $setBackgroundColor_0((!source.colorsMixin_0 && (source.colorsMixin_0 = new ColorsMixin(source)) , source.colorsMixin_0), 'blue lighten-1') , $setShadow((!source.shadowMixin && (source.shadowMixin = new ShadowMixin(source)) , source.shadowMixin), 1) , $setGrid((!source.gridMixin_0 && (source.gridMixin_0 = new GridMixin(source)) , source.gridMixin_0), 's12 m12 l12') , this$static.owner.source = source , source)) , $add_13(f_MaterialRow3, (target = new MaterialPanel , target.element.style['marginBottom'] = ($clinit_Style$Unit() , '20.0px') , target.setHeight_0('200px') , $setBackgroundColor_0((!target.colorsMixin_0 && (target.colorsMixin_0 = new ColorsMixin(target)) , target.colorsMixin_0), 'blue lighten-4') , $setGrid((!target.gridMixin_0 && (target.gridMixin_0 = new GridMixin(target)) , target.gridMixin_0), 's6 m6 l6') , this$static.owner.target_0 = target , target)) , f_MaterialRow3), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre4 = new PrettyPre , $setHTML(f_PrettyPre4, (sb = new StringBuilder , sb.string += '\\u2003@UiField<br> MaterialPanel source, target;<br><br> @Override<br> protected void onAttach() {<br> \\u2003super.onAttach();<br> \\u2003MaterialPushpin.apply(target, source.getOffsetHeight() + 600);<br> }' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , setStyleName(f_PrettyPre4.element, 'language-java', true) , setStyleName(f_PrettyPre4.element, 'z-depth-1', true) , f_PrettyPre4), $get_0(this$static.domId2Element));\n  return f_HTMLPanel1;\n}\n\nfunction PushPinView_BinderImpl$Widgets(owner){\n  this.owner = owner;\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n}\n\ndefineClass(1173, 1, {}, PushPinView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_pushpin_PushPinView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pushpin', 'PushPinView_BinderImpl/Widgets', 1173);\nfunction $html2_3(arg0, arg1, arg2){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$pushpin$PushPinPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pushpin$PushPinPresenter$_annotation$$none$$) {\n    result = new PushPinPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$components$pushpin$PushPinView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$components$pushpin$PushPinPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pushpin$PushPinPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pushpin$PushPinPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$pushpin$PushPinView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pushpin$PushPinView$_annotation$$none$$) {\n    result = new PushPinView(new PushPinView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pushpin$PushPinView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pushpin$PushPinView$_annotation$$none$$;\n}\n\ndefineClass(579, 1, $intern_79);\n_.onSuccess_0 = function onSuccess_24(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$pushpin$PushPinPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(25);\n\n//# sourceURL=gwtmaterialdemo-25.js\n")