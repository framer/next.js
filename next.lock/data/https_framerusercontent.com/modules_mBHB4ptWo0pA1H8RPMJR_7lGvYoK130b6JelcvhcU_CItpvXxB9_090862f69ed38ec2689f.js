// Generated by Framer (b814472)
import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import{addFonts,addPropertyControls,ControlType,cx,getFonts,getPropertyControls,Text,useActiveVariantCallback,useVariantState,withCSS}from"framer";import{LayoutGroup,motion}from"framer-motion";import*as React from"react";import Loader from"https://framerusercontent.com/modules/aiHCwseGhectqmVWl2CV/eJHH6eXE2e08jQkFta49/QGK0rhsMW.js";import{Icon as Feather}from"https://framerusercontent.com/modules/f0DboytQenYh21kfme7W/r7hqiY8LhfU2WmlUxgp2/Feather.js";const LoaderFonts=getFonts(Loader);const FeatherFonts=getFonts(Feather);const FeatherControls=getPropertyControls(Feather);const enabledGestures={nUHDNZVod:{hover:true,pressed:true},Zg5cW6AAB:{hover:true,pressed:true}};const cycleOrder=["nUHDNZVod","Zg5cW6AAB","VfRn_ovyB","IsP7cVTBa"];const variantClassNames={IsP7cVTBa:"framer-v-11oyqan",nUHDNZVod:"framer-v-kik4g5",VfRn_ovyB:"framer-v-10rihml",Zg5cW6AAB:"framer-v-iyndvp"};function addPropertyOverrides(overrides,...variants){const nextOverrides={};variants===null||variants===void 0?void 0:variants.forEach(variant=>variant&&Object.assign(nextOverrides,overrides[variant]));return nextOverrides;}const humanReadableVariantMap={"Loading Alternate":"IsP7cVTBa",Alternate:"Zg5cW6AAB",Loading:"VfRn_ovyB",Primary:"nUHDNZVod"};const transitions={default:{damping:60,delay:0,duration:.3,ease:[.44,0,.56,1],mass:1,stiffness:500,type:"spring"}};const BASE62="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function useRandomID(){const ref=React.useRef(null);if(ref.current===null){ref.current=Array(5).fill(0).map(()=>BASE62[Math.floor(Math.random()*BASE62.length)]).join("");}return ref.current;}const Component=/*#__PURE__*/ React.forwardRef(function({id,style:externalStyle={},className,width,height,layoutId,variant:outerVariant="nUHDNZVod",label:L6_4cFcKR="Button",icon:JXvRUpVIA=true,label1:l2LfTxlJd=true,icon1:nsv31mFvy="send",color:V6iBwS84l="rgb(0, 102, 255)",tap:nNSoprySQ,...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{baseVariant,classNames,gestureVariant,setGestureState,setVariant,transition,variants}=useVariantState({cycleOrder,defaultVariant:"nUHDNZVod",enabledGestures,transitions,variant,variantClassNames});const layoutDependency=variants.join("-")+restProps.layoutDependency;const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onTap101p7qu=activeVariantCallback(async(...args)=>{if(nNSoprySQ){const res=await nNSoprySQ(...args);if(res===false)return false;}});const isDisplayed1=()=>{if(["VfRn_ovyB","IsP7cVTBa"].includes(baseVariant))return true;return false;};const isDisplayed2=()=>{if(["VfRn_ovyB","IsP7cVTBa"].includes(baseVariant))return false;return JXvRUpVIA;};const isDisplayed3=()=>{if(["VfRn_ovyB","IsP7cVTBa"].includes(baseVariant))return false;return l2LfTxlJd;};const defaultLayoutId=useRandomID();const{pointerEvents,...style}=externalStyle;return /*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{"data-framer-generated":true,initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-TBySx",classNames),style:{display:"contents",pointerEvents:pointerEvents!==null&&pointerEvents!==void 0?pointerEvents:"auto"},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,className:cx("framer-kik4g5",className),"data-framer-name":"Primary","data-highlight":true,layoutDependency:layoutDependency,layoutId:"nUHDNZVod",onTap:onTap101p7qu,ref:ref,style:{"--border-bottom-width":"0px","--border-color":"rgba(0, 0, 0, 0)","--border-left-width":"0px","--border-right-width":"0px","--border-style":"solid","--border-top-width":"0px",backgroundColor:V6iBwS84l,borderBottomLeftRadius:12,borderBottomRightRadius:12,borderTopLeftRadius:12,borderTopRightRadius:12,boxShadow:"inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1)",filter:"brightness(1)",WebkitFilter:"brightness(1)",...style},transition:transition,variants:{"nUHDNZVod-hover":{boxShadow:"inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15)",filter:"brightness(0.98)",WebkitFilter:"brightness(0.98)"},"nUHDNZVod-pressed":{boxShadow:"inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15)",filter:"brightness(0.9)",WebkitFilter:"brightness(0.9)"},"Zg5cW6AAB-hover":{filter:"brightness(0.98)",WebkitFilter:"brightness(0.98)"},"Zg5cW6AAB-pressed":{filter:"brightness(0.9)",WebkitFilter:"brightness(0.9)"},IsP7cVTBa:{"--border-bottom-width":"1px","--border-color":'var(--token-10380ec7-bd68-4bee-90a7-693eab34b4fa, rgb(199, 199, 199)) /* {"name":"Grey"} */',"--border-left-width":"1px","--border-right-width":"1px","--border-style":"solid","--border-top-width":"1px",backgroundColor:"rgb(255, 255, 255)"},Zg5cW6AAB:{"--border-bottom-width":"1px","--border-color":'var(--token-10380ec7-bd68-4bee-90a7-693eab34b4fa, rgb(199, 199, 199)) /* {"name":"Grey"} */',"--border-left-width":"1px","--border-right-width":"1px","--border-style":"solid","--border-top-width":"1px",backgroundColor:"rgb(255, 255, 255)"}},...addPropertyOverrides({"nUHDNZVod-hover":{"data-framer-name":undefined},"nUHDNZVod-pressed":{"data-framer-name":undefined},"Zg5cW6AAB-hover":{"data-framer-name":undefined},"Zg5cW6AAB-pressed":{"data-framer-name":undefined},IsP7cVTBa:{"data-border":true,"data-framer-name":"Loading Alternate"},VfRn_ovyB:{"data-framer-name":"Loading"},Zg5cW6AAB:{"data-border":true,"data-framer-name":"Alternate"}},baseVariant,gestureVariant),children:[isDisplayed1()&&/*#__PURE__*/ _jsx(motion.div,{className:"framer-19ssp7q-container",layoutDependency:layoutDependency,layoutId:"VbpeQvhHd-container",transition:transition,children:/*#__PURE__*/ _jsx(Loader,{color:"rgb(255, 170, 0)",height:"100%",id:"VbpeQvhHd",layoutId:"VbpeQvhHd",style:{height:"100%",width:"100%"},variant:"jk1QYo5Lp",width:"100%",...addPropertyOverrides({IsP7cVTBa:{color:"rgb(0, 0, 0)"},VfRn_ovyB:{color:"rgb(255, 255, 255)"}},baseVariant,gestureVariant)})}),isDisplayed2()&&/*#__PURE__*/ _jsx(motion.div,{className:"framer-zk0hsr-container",layoutDependency:layoutDependency,layoutId:"x97T68ThV-container",transition:transition,children:/*#__PURE__*/ _jsx(Feather,{color:"rgb(255, 255, 255)",height:"100%",iconSearch:"Home",iconSelection:nsv31mFvy,id:"x97T68ThV",layoutId:"x97T68ThV",mirrored:false,selectByList:true,width:"100%",...addPropertyOverrides({Zg5cW6AAB:{color:"rgb(0, 0, 0)"}},baseVariant,gestureVariant)})}),isDisplayed3()&&/*#__PURE__*/ _jsx(Text,{__fromCanvasComponent:true,className:"framer-13m5e2z",fonts:["GF;Inter-700"],layoutDependency:layoutDependency,layoutId:"iCuxb1Fqk",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Button</span><br></span></span>",style:{"--framer-font-family":'"Inter", sans-serif',"--framer-font-size":"14px","--framer-font-style":"normal","--framer-font-weight":700,"--framer-letter-spacing":"0px","--framer-line-height":"1em","--framer-link-text-decoration":"underline","--framer-text-alignment":"start","--framer-text-color":"rgb(255, 255, 255)","--framer-text-decoration":"none","--framer-text-transform":"none"},text:L6_4cFcKR,transition:transition,verticalAlignment:"top",withExternalLayout:true,...addPropertyOverrides({"nUHDNZVod-hover":{rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='--framer-line-height: 1em; direction: ltr; font-size: 0'><span style='--framer-font-family: &quot;Inter&quot;, sans-serif; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-weight: 700; --framer-letter-spacing: 0px; --framer-text-color: hsl(0, 0%, 100%)'>Button</span><br></span></span>"},"nUHDNZVod-pressed":{rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='--framer-line-height: 1em; direction: ltr; font-size: 0'><span style='--framer-font-family: &quot;Inter&quot;, sans-serif; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-weight: 700; --framer-letter-spacing: 0px; --framer-text-color: hsl(0, 0%, 100%)'>Button</span><br></span></span>"},Zg5cW6AAB:{rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='--framer-line-height: 1em; direction: ltr; font-size: 0'><span style='--framer-font-family: &quot;Inter&quot;, sans-serif; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-weight: 700; --framer-letter-spacing: 0px; --framer-text-color: hsl(0, 0%, 0%)'>Button</span><br></span></span>"}},baseVariant,gestureVariant)})]})})});});const css=['.framer-TBySx [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}',"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-TBySx * { box-sizing: border-box; }",".framer-TBySx .framer-kik4g5 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 36px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 97px; will-change: transform; }",".framer-TBySx .framer-1ym985j-container { flex: none; height: 40px; position: relative; width: 40px; }",".framer-TBySx .framer-19ssp7q-container { flex: none; height: 10px; position: relative; width: 26px; }",".framer-TBySx .framer-zk0hsr-container { flex: none; height: 14px; position: relative; width: 14px; }",".framer-TBySx .framer-13m5e2z { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }",".framer-TBySx .framer-v-kik4g5 .framer-kik4g5, .framer-TBySx .framer-v-iyndvp .framer-kik4g5 { cursor: pointer; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-TBySx .framer-kik4g5 { gap: 0px; } .framer-TBySx .framer-kik4g5 > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-TBySx .framer-kik4g5 > :first-child { margin-left: 0px; } .framer-TBySx .framer-kik4g5 > :last-child { margin-right: 0px; } }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 36
 * @framerIntrinsicWidth 97
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"Zg5cW6AAB":{"layout":["fixed","fixed"]},"VfRn_ovyB":{"layout":["fixed","fixed"]},"IsP7cVTBa":{"layout":["fixed","fixed"]},"lQVQbbJKF":{"layout":["fixed","fixed"]},"c5kbvgWZX":{"layout":["fixed","fixed"]},"jIq0nD0kI":{"layout":["fixed","fixed"]},"UpZ926KVT":{"layout":["fixed","fixed"]}}}
 * @framerVariables {"L6_4cFcKR":"label","JXvRUpVIA":"icon","l2LfTxlJd":"label1","nsv31mFvy":"icon1","V6iBwS84l":"color","nNSoprySQ":"tap"}
 */ const FramerCItpvXxB9=withCSS(Component,css);export default FramerCItpvXxB9;FramerCItpvXxB9.displayName="Button2";FramerCItpvXxB9.defaultProps={height:36,width:97};addPropertyControls(FramerCItpvXxB9,{variant:{options:["nUHDNZVod","Zg5cW6AAB","VfRn_ovyB","IsP7cVTBa"],optionTitles:["Primary","Alternate","Loading","Loading Alternate"],title:"Variant",type:ControlType.Enum},L6_4cFcKR:{defaultValue:"Button",title:"Label",type:ControlType.String},JXvRUpVIA:{defaultValue:true,title:"Icon",type:ControlType.Boolean},l2LfTxlJd:{defaultValue:true,title:"Label",type:ControlType.Boolean},nsv31mFvy:(FeatherControls===null||FeatherControls===void 0?void 0:FeatherControls["iconSelection"])&&{...FeatherControls["iconSelection"],defaultValue:"send",hidden:undefined,title:"Icon"},V6iBwS84l:{defaultValue:"rgb(0, 102, 255)",title:"Color",type:ControlType.Color},nNSoprySQ:{title:"Tap",type:ControlType.EventHandler}});addFonts(FramerCItpvXxB9,[{family:"Inter",moduleAsset:{localModuleIdentifier:"local-module:canvasComponent/CItpvXxB9:default",url:"https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZhrib2Bg-4.ttf"},style:"normal",url:"https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZhrib2Bg-4.ttf",weight:"700"},...LoaderFonts,...FeatherFonts]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramerCItpvXxB9","slots":[],"annotations":{"framerIntrinsicHeight":"36","framerCanvasComponentVariantDetails":"{\"propertyName\":\"variant\",\"data\":{\"default\":{\"layout\":[\"fixed\",\"fixed\"]},\"Zg5cW6AAB\":{\"layout\":[\"fixed\",\"fixed\"]},\"VfRn_ovyB\":{\"layout\":[\"fixed\",\"fixed\"]},\"IsP7cVTBa\":{\"layout\":[\"fixed\",\"fixed\"]},\"lQVQbbJKF\":{\"layout\":[\"fixed\",\"fixed\"]},\"c5kbvgWZX\":{\"layout\":[\"fixed\",\"fixed\"]},\"jIq0nD0kI\":{\"layout\":[\"fixed\",\"fixed\"]},\"UpZ926KVT\":{\"layout\":[\"fixed\",\"fixed\"]}}}","framerVariables":"{\"L6_4cFcKR\":\"label\",\"JXvRUpVIA\":\"icon\",\"l2LfTxlJd\":\"label1\",\"nsv31mFvy\":\"icon1\",\"V6iBwS84l\":\"color\",\"nNSoprySQ\":\"tap\"}","framerContractVersion":"1","framerIntrinsicWidth":"97"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./CItpvXxB9.map