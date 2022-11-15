// Generated by Framer (6774e0b)
import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import{addFonts,addPropertyControls,ControlType,cx,getFonts,Image,Link,RichText,useActiveVariantCallback,useVariantState,withCSS}from"framer";import{LayoutGroup,motion}from"framer-motion";import*as React from"react";import Slideshow from"https://framerusercontent.com/modules/zvkTOpMSuRzRhLzZZIwG/NkuDQ5CVcgcRFhOG6sck/SlideShow.js";import*as sharedStyle from"https://framerusercontent.com/modules/6UmpDvdMreOOKgoaIHX1/E9X8Gf0Bpy2RVaIEyhz5/ro7OPezbn.js";const SlideshowFonts=getFonts(Slideshow);const cycleOrder=["I_JZ9jjvv"];const variantClassNames={I_JZ9jjvv:"framer-v-1m16pje"};function addPropertyOverrides(overrides,...variants){const nextOverrides={};variants===null||variants===void 0?void 0:variants.forEach(variant=>variant&&Object.assign(nextOverrides,overrides[variant]));return nextOverrides;}const humanReadableVariantMap={};const transitions={default:{damping:60,delay:0,duration:.3,ease:[.44,0,.56,1],mass:1,stiffness:500,type:"spring"}};const BASE62="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function useRandomID(){const ref=React.useRef(null);if(ref.current===null){ref.current=Array(5).fill(0).map(()=>BASE62[Math.floor(Math.random()*BASE62.length)]).join("");}return ref.current;}const Component=/*#__PURE__*/ React.forwardRef(function({id,style:externalStyle={},className,width,height,layoutId,variant:outerVariant="I_JZ9jjvv",openShop:wzDF25f0q,...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{baseVariant,classNames,gestureVariant,setGestureState,setVariant,transition,variants}=useVariantState({cycleOrder,defaultVariant:"I_JZ9jjvv",transitions,variant,variantClassNames});const layoutDependency=variants.join("-")+restProps.layoutDependency;const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onTap1srqhz1=activeVariantCallback(async(...args)=>{if(wzDF25f0q){const res=await wzDF25f0q(...args);if(res===false)return false;}});const defaultLayoutId=useRandomID();const{pointerEvents,...style}=externalStyle;return /*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{"data-framer-generated":true,initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-QsVAq",sharedStyle.className,classNames),style:{display:"contents",pointerEvents:pointerEvents!==null&&pointerEvents!==void 0?pointerEvents:undefined},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,className:cx("framer-1m16pje",className),"data-framer-name":"Variant 1",layoutDependency:layoutDependency,layoutId:"I_JZ9jjvv",ref:ref,style:{backgroundColor:"rgb(255, 255, 255)",...style},transition:transition,children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-bk4e77","data-border":true,"data-framer-name":"Top Bar",layoutDependency:layoutDependency,layoutId:"NhmaoqF2e",style:{"--border-bottom-width":"1px","--border-color":"rgba(0, 0, 0, 0.08)","--border-left-width":"0px","--border-right-width":"0px","--border-style":"solid","--border-top-width":"0px",backgroundColor:"rgb(255, 255, 255)"},transition:transition,children:/*#__PURE__*/ _jsxs(motion.div,{className:"framer-1jzw233","data-border":true,layoutDependency:layoutDependency,layoutId:"UWIS27AmP",style:{"--border-bottom-width":"1px","--border-color":"rgba(0, 0, 0, 0.08)","--border-left-width":"0px","--border-right-width":"0px","--border-style":"solid","--border-top-width":"0px",backgroundColor:"rgb(255, 255, 255)"},transition:transition,children:[/*#__PURE__*/ _jsx(Link,{href:"https://www.namu-labs.dev/",children:/*#__PURE__*/ _jsx(Image,{as:"a",background:{alt:"",fit:"fill",intrinsicHeight:51,intrinsicWidth:250,pixelHeight:102,pixelWidth:500,src:new URL("assets/EuWEfIL55KsTs6L8PGymj04Jgk.png",import.meta.url).href},className:"framer-y2l2ly framer-hhr8ws","data-framer-name":"image",layoutDependency:layoutDependency,layoutId:"SsYDD4sev",transition:transition})}),/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,__link:"https://linktr.ee/humblefirm?utm_source=linktree_profile_share&ltsid=c9e2c2ec-1d13-4796-b0f1-0aff3cd67dbc",children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"R0Y7TWFucm9wZS02MDA=","--framer-font-family":'"Manrope", serif',"--framer-font-weight":"600","--framer-letter-spacing":"0.2px","--framer-line-height":"1.6em","--framer-text-alignment":"left","--framer-text-color":"var(--extracted-r6o4lv)"},children:/*#__PURE__*/ _jsx(Link,{href:"https://linktr.ee/humblefirm?utm_source=linktree_profile_share&ltsid=c9e2c2ec-1d13-4796-b0f1-0aff3cd67dbc",openInNewTab:false,smoothScroll:false,children:/*#__PURE__*/ _jsx(motion.a,{className:"framer-styles-preset-1wicq5s","data-styles-preset":"ro7OPezbn",href:"https://linktr.ee/humblefirm?utm_source=linktree_profile_share&ltsid=c9e2c2ec-1d13-4796-b0f1-0aff3cd67dbc",rel:"noreferrer noopener",children:"Contact"})})})}),className:"framer-19o3xje",fonts:["GF;Manrope-600"],layoutDependency:layoutDependency,layoutId:"cQz2dy7BM",style:{"--extracted-r6o4lv":"rgb(102, 102, 102)","--framer-paragraph-spacing":"0px"},transition:transition,verticalAlignment:"top",withExternalLayout:true})]})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-1tk1etp",layoutDependency:layoutDependency,layoutId:"xty3wwB2P",transition:transition,children:/*#__PURE__*/ _jsx(motion.div,{className:"framer-b9t2cv-container","data-framer-name":"slides",layoutDependency:layoutDependency,layoutId:"Bi36UZkSC-container",name:"slides",transition:transition,children:/*#__PURE__*/ _jsx(Slideshow,{alignment:"center",arrowOptions:{arrowFill:"rgba(0, 0, 0, 0.2)",arrowPadding:20,arrowRadius:40,arrowSize:40,showMouseControls:true},autoPlayControl:true,borderRadius:0,direction:"left",effectsOptions:{effectsHover:true,effectsOpacity:1,effectsPerspective:1200,effectsRotate:0,effectsScale:1},fadeOptions:{fadeAlpha:0,fadeContent:false,fadeInset:0,fadeWidth:25,overflow:false},gap:10,height:"100%",id:"Bi36UZkSC",intervalControl:2.5,itemAmount:1,layoutId:"Bi36UZkSC",name:"slides",padding:0,paddingBottom:0,paddingLeft:0,paddingPerSide:false,paddingRight:0,paddingTop:0,progressOptions:{dotsActiveOpacity:1,dotsBackground:"rgba(0, 0, 0, 0.2)",dotsBlur:4,dotsFill:"rgb(255, 255, 255)",dotsGap:10,dotsInset:10,dotSize:10,dotsOpacity:.5,dotsPadding:10,dotsRadius:50,showProgressDots:false},slots:[/*#__PURE__*/ _jsxs(motion.div,{className:"framer-rbxx6z","data-framer-name":"NAMUPAY",layoutDependency:layoutDependency,layoutId:"FSYXCzuGn",style:{backgroundColor:"rgb(255, 255, 255)"},transition:transition,children:[/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"R0Y7TWFucm9wZS01MDA=","--framer-font-family":'"Manrope", serif',"--framer-font-size":"20px","--framer-font-weight":"500","--framer-letter-spacing":"0.2px","--framer-line-height":"1.6em","--framer-text-alignment":"left","--framer-text-color":"var(--extracted-r6o4lv)"},children:"Experience the NAMUPAY"})}),className:"framer-1wydhwx",fonts:["GF;Manrope-500"],layoutDependency:layoutDependency,layoutId:"Gbkxu63K8",style:{"--extracted-r6o4lv":"rgb(0, 101, 82)","--framer-paragraph-spacing":"0px"},transformTemplate:(_,t)=>`translateX(-50%) ${t}`,transition:transition,verticalAlignment:"top",withExternalLayout:true}),/*#__PURE__*/ _jsx(motion.button,{className:"framer-1owdpf8","data-highlight":true,"data-reset":"button",layoutDependency:layoutDependency,layoutId:"q9QolXfuP",onTap:onTap1srqhz1,style:{backgroundColor:"rgb(0, 100, 80)",borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10},transformTemplate:(_,t)=>`translateX(-50%) ${t}`,transition:transition,children:/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"R0Y7RE0gU2Fucy01MDA=","--framer-font-family":'"DM Sans", sans-serif',"--framer-font-size":"20px","--framer-font-weight":"500","--framer-text-color":"var(--extracted-r6o4lv)"},children:"Buy Product"})}),className:"framer-1e0wt4t",fonts:["GF;DM Sans-500"],layoutDependency:layoutDependency,layoutId:"r7fsj7O_8",style:{"--extracted-r6o4lv":"rgb(255, 255, 255)","--framer-paragraph-spacing":"0px"},transition:transition,verticalAlignment:"top",withExternalLayout:true})})]}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-ygjequ","data-framer-name":"회사소개서",layoutDependency:layoutDependency,layoutId:"O2nrgvdRg",style:{backgroundColor:"rgb(255, 255, 255)"},transition:transition,children:/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"R0Y7TWFucm9wZS01MDA=","--framer-font-family":'"Manrope", serif',"--framer-font-size":"20px","--framer-font-weight":"500","--framer-letter-spacing":"0.2px","--framer-line-height":"1.6em","--framer-text-alignment":"left","--framer-text-color":"var(--extracted-r6o4lv)"},children:"About NAMULABS"})}),className:"framer-15yu55x",fonts:["GF;Manrope-500"],layoutDependency:layoutDependency,layoutId:"TB34UpQ4K",style:{"--extracted-r6o4lv":"rgb(0, 100, 80)","--framer-paragraph-spacing":"0px"},transformTemplate:(_,t)=>`translateX(-50%) ${t}`,transition:transition,verticalAlignment:"top",withExternalLayout:true})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-15gy72b","data-framer-name":"P2E사업제안서",layoutDependency:layoutDependency,layoutId:"M77Y94w2g",style:{backgroundColor:"rgb(255, 255, 255)"},transition:transition,children:/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"R0Y7TWFucm9wZS01MDA=","--framer-font-family":'"Manrope", serif',"--framer-font-size":"20px","--framer-font-weight":"500","--framer-letter-spacing":"0.2px","--framer-line-height":"1.6em","--framer-text-alignment":"left","--framer-text-color":"var(--extracted-r6o4lv)"},children:"Make Games to P2E"})}),className:"framer-1fs8muy",fonts:["GF;Manrope-500"],layoutDependency:layoutDependency,layoutId:"gFKgxPWJ1",style:{"--extracted-r6o4lv":"rgb(0, 100, 80)","--framer-paragraph-spacing":"0px"},transformTemplate:(_,t)=>`translateX(-50%) ${t}`,transition:transition,verticalAlignment:"top",withExternalLayout:true})})],startFrom:0,style:{height:"100%",width:"100%"},transitionControl:{damping:40,stiffness:200,type:"spring"},width:"100%"})})})]})})});});const css=['.framer-QsVAq [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-QsVAq * { box-sizing: border-box; }",".framer-QsVAq .framer-hhr8ws { display: block; }",".framer-QsVAq .framer-1m16pje { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 0px 0px 0px 0px; position: relative; width: 410px; }",".framer-QsVAq .framer-bk4e77 { flex: none; height: 80px; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: 0px; width: 100%; z-index: 1; }",".framer-QsVAq .framer-1jzw233 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; justify-content: space-between; left: 0px; overflow: visible; padding: 30px 30px 30px 30px; position: absolute; top: 0px; width: 100%; }",".framer-QsVAq .framer-y2l2ly { aspect-ratio: 4.901960784313726 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 38px); overflow: visible; position: relative; text-decoration: none; width: 186px; }",".framer-QsVAq .framer-19o3xje { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",".framer-QsVAq .framer-1tk1etp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 800px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",".framer-QsVAq .framer-b9t2cv-container { bottom: 100px; flex: none; height: 452px; left: calc(50.00000000000002% - 338px / 2); position: absolute; width: 338px; z-index: 1; }",".framer-QsVAq .framer-rbxx6z, .framer-QsVAq .framer-ygjequ, .framer-QsVAq .framer-15gy72b { height: 452px; overflow: hidden; position: relative; width: 338px; }",".framer-QsVAq .framer-1wydhwx, .framer-QsVAq .framer-15yu55x, .framer-QsVAq .framer-1fs8muy { flex: none; height: auto; left: 50%; position: absolute; top: 50px; white-space: pre; width: auto; }",".framer-QsVAq .framer-1owdpf8 { align-content: center; align-items: center; bottom: 75px; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; left: 50%; padding: 10px 20px 10px 20px; position: absolute; width: min-content; }",".framer-QsVAq .framer-1e0wt4t { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-QsVAq .framer-1m16pje, .framer-QsVAq .framer-1tk1etp, .framer-QsVAq .framer-1owdpf8 { gap: 0px; } .framer-QsVAq .framer-1m16pje > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-QsVAq .framer-1m16pje > :first-child, .framer-QsVAq .framer-1tk1etp > :first-child { margin-top: 0px; } .framer-QsVAq .framer-1m16pje > :last-child, .framer-QsVAq .framer-1tk1etp > :last-child { margin-bottom: 0px; } .framer-QsVAq .framer-1tk1etp > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-QsVAq .framer-1owdpf8 > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-QsVAq .framer-1owdpf8 > :first-child { margin-left: 0px; } .framer-QsVAq .framer-1owdpf8 > :last-child { margin-right: 0px; } }",...sharedStyle.css];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 800
 * @framerIntrinsicWidth 410
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]}}}
 * @framerVariables {"wzDF25f0q":"openShop"}
 */ const FramerMB6tc8_nm=withCSS(Component,css);export default FramerMB6tc8_nm;FramerMB6tc8_nm.displayName="inGame";FramerMB6tc8_nm.defaultProps={height:800,width:410};addPropertyControls(FramerMB6tc8_nm,{wzDF25f0q:{title:"Open Shop",type:ControlType.EventHandler}});addFonts(FramerMB6tc8_nm,[{family:"Manrope",moduleAsset:{localModuleIdentifier:"local-module:canvasComponent/MB6tc8_nm:default",url:"https://fonts.gstatic.com/s/manrope/v13/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4jE-_F87jxeN7B.ttf"},style:"normal",url:"https://fonts.gstatic.com/s/manrope/v13/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4jE-_F87jxeN7B.ttf",weight:"600"},{family:"Manrope",moduleAsset:{localModuleIdentifier:"local-module:canvasComponent/MB6tc8_nm:default",url:"https://fonts.gstatic.com/s/manrope/v13/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk7PFO_F87jxeN7B.ttf"},style:"normal",url:"https://fonts.gstatic.com/s/manrope/v13/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk7PFO_F87jxeN7B.ttf",weight:"500"},{family:"DM Sans",moduleAsset:{localModuleIdentifier:"local-module:canvasComponent/MB6tc8_nm:default",url:"https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriAWCrOB-sClQX6Cg.ttf"},style:"normal",url:"https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriAWCrOB-sClQX6Cg.ttf",weight:"500"},...SlideshowFonts,...sharedStyle.fonts]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramerMB6tc8_nm","slots":[],"annotations":{"framerIntrinsicWidth":"410","framerVariables":"{\"wzDF25f0q\":\"openShop\"}","framerCanvasComponentVariantDetails":"{\"propertyName\":\"variant\",\"data\":{\"default\":{\"layout\":[\"fixed\",\"auto\"]}}}","framerContractVersion":"1","framerIntrinsicHeight":"800"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./MB6tc8_nm.map