// Generated by Framer (b814472)
import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import{addFonts,addPropertyControls,ControlType,cx,getFonts,RichText,useActiveVariantCallback,useVariantState,withCSS}from"framer";import{LayoutGroup,motion}from"framer-motion";import*as React from"react";import{Input}from"https://framerusercontent.com/modules/4TG0CA0xFC8r92HZNVLs/dWwo8c8bfYCS7GA1IwGy/Input.js";import{Icon as Hero}from"https://framerusercontent.com/modules/hKjtTuWGYB451ckw6eTN/KMS3TGJgYkHtsY7rff7q/Hero.js";import Button from"https://framerusercontent.com/modules/bHcZld0rqI8izl7FOSrU/6GX2ig6bRxpVNfCIhSaD/H_WRFgFyO.js";import Pagination from"https://framerusercontent.com/modules/gL1WLOPe95ngCNmfFmQZ/dRWrSiFgbfBmmIYRaKtZ/u71tyutKR.js";const HeroFonts=getFonts(Hero);const InputFonts=getFonts(Input);const PaginationFonts=getFonts(Pagination);const ButtonFonts=getFonts(Button);const cycleOrder=["wnkVn_SSr","FDilibEk5","lUoiJO5h9"];const variantClassNames={FDilibEk5:"framer-v-1a3wnt7",lUoiJO5h9:"framer-v-gfjdhr",wnkVn_SSr:"framer-v-1bjecuj"};function addPropertyOverrides(overrides,...variants){const nextOverrides={};variants===null||variants===void 0?void 0:variants.forEach(variant=>variant&&Object.assign(nextOverrides,overrides[variant]));return nextOverrides;}const humanReadableVariantMap={Auth:"FDilibEk5",Confirm:"wnkVn_SSr",finish:"lUoiJO5h9"};const transitions={default:{damping:60,delay:0,duration:0,ease:[.44,0,.56,1],mass:1,stiffness:500,type:"tween"},FDilibEk5:{damping:60,delay:0,duration:0,ease:[0,-1.05,1,1],mass:.1,stiffness:500,type:"tween"},lUoiJO5h9:{damping:60,delay:0,duration:0,ease:[.44,0,.56,1],mass:1,stiffness:500,type:"tween"}};const BASE62="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function useRandomID(){const ref=React.useRef(null);if(ref.current===null){ref.current=Array(5).fill(0).map(()=>BASE62[Math.floor(Math.random()*BASE62.length)]).join("");}return ref.current;}const Component=/*#__PURE__*/ React.forwardRef(function({id,style:externalStyle={},className,width,height,layoutId,variant:outerVariant="wnkVn_SSr",companyName:vJmzENXeS="회사 이름",fiatPrice:YheXsCjUn="0,000",goodsName:CQxnlgJ1x="구찌 시계",tokenName:xu6yr6phl="TTN Token",tokenAmount:JhZ1g6Kfj="16,123",walletAddress:vsVYFQfIq="0x1234...1234",close:D4Bbq9LTQ,clickNumber:K6A82hHOf,password:usu8viGAS="",clearAll:Ym1TgsBLK,clear:bHvPOaKav,Rasep6g7n,SuoUW98Ny,...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{baseVariant,classNames,gestureVariant,setGestureState,setVariant,transition,variants}=useVariantState({cycleOrder,defaultVariant:"wnkVn_SSr",transitions,variant,variantClassNames});const layoutDependency=variants.join("-")+restProps.layoutDependency;const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onClick1x5r0kn=activeVariantCallback(async(...args)=>{if(D4Bbq9LTQ){const res=await D4Bbq9LTQ(...args);if(res===false)return false;}});const onFocus1t2jijp=activeVariantCallback(async(...args)=>{setVariant("QbDLODQng");});const tap620qen=activeVariantCallback(async(...args)=>{if(K6A82hHOf){const res=await K6A82hHOf(...args);if(res===false)return false;}});const tap1dz6psp=activeVariantCallback(async(...args)=>{if(Ym1TgsBLK){const res=await Ym1TgsBLK(...args);if(res===false)return false;}});const tap1vjpkab=activeVariantCallback(async(...args)=>{if(bHvPOaKav){const res=await bHvPOaKav(...args);if(res===false)return false;}});const tapdq3lzd=activeVariantCallback(async(...args)=>{setVariant("FDilibEk5");});const tap1bvfp2k=activeVariantCallback(async(...args)=>{setVariant("lUoiJO5h9");});const tap1p41bgo=activeVariantCallback(async(...args)=>{setVariant("wnkVn_SSr");});const isDisplayed1=()=>{if(baseVariant==="FDilibEk5")return false;return true;};const isDisplayed2=()=>{if(baseVariant==="FDilibEk5")return true;return false;};const isDisplayed3=()=>{if(baseVariant==="FDilibEk5")return true;return false;};const isDisplayed4=()=>{if(baseVariant==="FDilibEk5")return false;return true;};const isDisplayed5=()=>{if(baseVariant==="FDilibEk5")return true;return false;};const isDisplayed6=()=>{if(baseVariant==="FDilibEk5")return false;return true;};const defaultLayoutId=useRandomID();const{pointerEvents,...style}=externalStyle;return /*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{"data-framer-generated":true,initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-wcniy",classNames),style:{display:"contents",pointerEvents:pointerEvents!==null&&pointerEvents!==void 0?pointerEvents:undefined},children:/*#__PURE__*/ _jsx(motion.div,{...restProps,className:cx("framer-1bjecuj",className),"data-framer-name":"Confirm",layoutDependency:layoutDependency,layoutId:"wnkVn_SSr",ref:ref,style:{backgroundColor:"rgb(255, 255, 255)",...style},transition:transition,...addPropertyOverrides({FDilibEk5:{"data-framer-name":"Auth"},lUoiJO5h9:{"data-framer-name":"finish"}},baseVariant,gestureVariant),children:/*#__PURE__*/ _jsxs(motion.div,{className:"framer-nut3dq","data-framer-name":"Container",layoutDependency:layoutDependency,layoutId:"hBXjl7rfb",transition:transition,children:[/*#__PURE__*/ _jsxs(motion.div,{className:"framer-92nf5","data-framer-name":"Top",layoutDependency:layoutDependency,layoutId:"gUi9hke25",transition:transition,children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-1q8rs5c","data-framer-name":"Topbar",layoutDependency:layoutDependency,layoutId:"FzAieb7Zc",transition:transition,children:/*#__PURE__*/ _jsx(motion.div,{className:"framer-b7ruc5-container",layoutDependency:layoutDependency,layoutId:"zERyF7YhM-container",transition:transition,children:/*#__PURE__*/ _jsx(Hero,{color:"rgb(0, 98, 82)",height:"100%",iconSearch:"Home",iconSelection:"X",id:"zERyF7YhM",layoutId:"zERyF7YhM",mirrored:false,onClick:onClick1x5r0kn,selectByList:true,style:{height:"100%",width:"100%"},width:"100%"})})}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-1y25jo8","data-framer-name":"Infomation",layoutDependency:layoutDependency,layoutId:"dmXv2U2Xz",transition:transition,children:[isDisplayed1()&&/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"R0Y7Tm90byBTYW5zIEtSLTcwMA==","--framer-font-family":'"Noto Sans KR", sans-serif',"--framer-font-size":"24px","--framer-font-weight":"700"},children:"더콕"})}),className:"framer-jy5is3",fonts:["GF;Noto Sans KR-700"],layoutDependency:layoutDependency,layoutId:"Ka2fsMMtC",style:{"--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px"},text:vJmzENXeS,transition:transition,verticalAlignment:"top",withExternalLayout:true}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-54oj4",layoutDependency:layoutDependency,layoutId:"HYWRa_kdh",transition:transition,children:[/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"R0Y7Tm90byBTYW5zIEtSLTcwMA==","--framer-font-family":'"Noto Sans KR", sans-serif',"--framer-font-size":"24px","--framer-font-weight":"700"},children:"0,000"})}),className:"framer-hmp05d",fonts:["GF;Noto Sans KR-700"],layoutDependency:layoutDependency,layoutId:"EXR6syly3",style:{"--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px"},text:YheXsCjUn,transition:transition,verticalAlignment:"top",withExternalLayout:true}),/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"R0Y7Tm90byBTYW5zIEtSLTcwMA==","--framer-font-family":'"Noto Sans KR", sans-serif',"--framer-font-size":"24px","--framer-font-weight":"700"},children:"원을 결제합니다"})}),className:"framer-1ghj1dc",fonts:["GF;Noto Sans KR-700"],layoutDependency:layoutDependency,layoutId:"sFxpCg8pP",style:{"--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px"},transition:transition,verticalAlignment:"top",withExternalLayout:true})]}),isDisplayed2()&&/*#__PURE__*/ _jsx(motion.div,{className:"framer-121b5wk",layoutDependency:layoutDependency,layoutId:"m7b24wZ5m",transition:transition,children:isDisplayed3()&&/*#__PURE__*/ _jsx(motion.div,{className:"framer-122ktjc-container",layoutDependency:layoutDependency,layoutId:"OfKN_pesV-container",transition:transition,children:/*#__PURE__*/ _jsx(Input,{backgroundColor:"rgb(245, 245, 245)",border:"rgba(0, 0, 0, 0)",borderRadius:8,borderWidth:1,bottomLeftRadius:0,bottomRightRadius:0,caretColor:"rgb(51, 51, 51)",disabled:false,enableLimit:true,focusColor:Rasep6g7n,focused:false,font:false,fontFamily:"",fontSize:16,fontWeight:400,height:"100%",id:"OfKN_pesV",isMixedBorderRadius:false,isRTL:false,keyboard:"",layoutId:"OfKN_pesV",maxLength:SuoUW98Ny,multiLine:false,onFocus:onFocus1t2jijp,padding:15,paddingBottom:12,paddingLeft:12,paddingPerSide:false,paddingRight:12,paddingTop:12,password:true,placeholder:"PIN 코드를 입력해주세요",placeholderColor:"rgb(170, 170, 170)",textAlign:"center",textColor:"rgb(51, 51, 51)",topLeftRadius:0,topRightRadius:0,truncate:true,value:usu8viGAS,width:"100%"})})}),isDisplayed4()&&/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"R0Y7Tm90byBTYW5zIEtSLXJlZ3VsYXI=","--framer-font-family":'"Noto Sans KR", sans-serif',"--framer-text-color":"var(--extracted-r6o4lv)"},children:"구찌 시계"})}),className:"framer-1hfaul7",fonts:["GF;Noto Sans KR-regular"],layoutDependency:layoutDependency,layoutId:"VgE3HSp_8",style:{"--extracted-r6o4lv":"rgb(119, 119, 119)","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px"},text:CQxnlgJ1x,transition:transition,verticalAlignment:"top",withExternalLayout:true})]})]}),isDisplayed5()&&/*#__PURE__*/ _jsxs(motion.div,{className:"framer-o7qbdo","data-framer-name":"NumberPad",layoutDependency:layoutDependency,layoutId:"ErAyNykBc",transition:transition,children:[/*#__PURE__*/ _jsxs(motion.div,{className:"framer-1a25lss",layoutDependency:layoutDependency,layoutId:"ghCnu2e7W",transition:transition,children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-1mj0jkj-container",layoutDependency:layoutDependency,layoutId:"JQpxzUYUK-container",transition:transition,children:/*#__PURE__*/ _jsx(Pagination,{height:"100%",id:"JQpxzUYUK",layoutId:"JQpxzUYUK",page:"1",style:{height:"100%",width:"100%"},tap:tap620qen,width:"100%"})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-1ev52ry-container",layoutDependency:layoutDependency,layoutId:"tr824Z_0Z-container",transition:transition,children:/*#__PURE__*/ _jsx(Pagination,{height:"100%",id:"tr824Z_0Z",layoutId:"tr824Z_0Z",page:"2",style:{height:"100%",width:"100%"},tap:tap620qen,width:"100%"})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-w5sru4-container",layoutDependency:layoutDependency,layoutId:"OOnhUoJM_-container",transition:transition,children:/*#__PURE__*/ _jsx(Pagination,{height:"100%",id:"OOnhUoJM_",layoutId:"OOnhUoJM_",page:"3",style:{height:"100%",width:"100%"},tap:tap620qen,width:"100%"})})]}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-5alujo",layoutDependency:layoutDependency,layoutId:"NUx2TQMKe",transition:transition,children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-fun6km-container",layoutDependency:layoutDependency,layoutId:"kuvUx2q0L-container",transition:transition,children:/*#__PURE__*/ _jsx(Pagination,{height:"100%",id:"kuvUx2q0L",layoutId:"kuvUx2q0L",page:"4",style:{height:"100%",width:"100%"},tap:tap620qen,width:"100%"})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-12gq169-container",layoutDependency:layoutDependency,layoutId:"DvRy5CxCn-container",transition:transition,children:/*#__PURE__*/ _jsx(Pagination,{height:"100%",id:"DvRy5CxCn",layoutId:"DvRy5CxCn",page:"5",style:{height:"100%",width:"100%"},tap:tap620qen,width:"100%"})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-1l6noed-container",layoutDependency:layoutDependency,layoutId:"WCQK0Q7ql-container",transition:transition,children:/*#__PURE__*/ _jsx(Pagination,{height:"100%",id:"WCQK0Q7ql",layoutId:"WCQK0Q7ql",page:"6",style:{height:"100%",width:"100%"},tap:tap620qen,width:"100%"})})]}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-ixe7g6",layoutDependency:layoutDependency,layoutId:"HlGytvXSA",transition:transition,children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-my71d6-container",layoutDependency:layoutDependency,layoutId:"cwjMnlvg_-container",transition:transition,children:/*#__PURE__*/ _jsx(Pagination,{height:"100%",id:"cwjMnlvg_",layoutId:"cwjMnlvg_",page:"7",style:{height:"100%",width:"100%"},tap:tap620qen,width:"100%"})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-fjbski-container",layoutDependency:layoutDependency,layoutId:"H8AD0cdR6-container",transition:transition,children:/*#__PURE__*/ _jsx(Pagination,{height:"100%",id:"H8AD0cdR6",layoutId:"H8AD0cdR6",page:"8",style:{height:"100%",width:"100%"},tap:tap620qen,width:"100%"})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-11sbo8v-container",layoutDependency:layoutDependency,layoutId:"FBqeDoODQ-container",transition:transition,children:/*#__PURE__*/ _jsx(Pagination,{height:"100%",id:"FBqeDoODQ",layoutId:"FBqeDoODQ",page:"9",style:{height:"100%",width:"100%"},tap:tap620qen,width:"100%"})})]}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-ssu59i",layoutDependency:layoutDependency,layoutId:"tMLBBuIg0",transition:transition,children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-sr2gk6-container",layoutDependency:layoutDependency,layoutId:"LpcdoMGV0-container",transition:transition,children:/*#__PURE__*/ _jsx(Pagination,{height:"100%",id:"LpcdoMGV0",layoutId:"LpcdoMGV0",page:"AC",style:{height:"100%",width:"100%"},tap:tap1dz6psp,width:"100%"})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-cekodo-container",layoutDependency:layoutDependency,layoutId:"Rb9Vj54Jd-container",transition:transition,children:/*#__PURE__*/ _jsx(Pagination,{height:"100%",id:"Rb9Vj54Jd",layoutId:"Rb9Vj54Jd",page:"0",style:{height:"100%",width:"100%"},tap:tap620qen,width:"100%"})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-ivlwzs-container",layoutDependency:layoutDependency,layoutId:"BTZrPJiMK-container",transition:transition,children:/*#__PURE__*/ _jsx(Pagination,{height:"100%",id:"BTZrPJiMK",layoutId:"BTZrPJiMK",page:"C",style:{height:"100%",width:"100%"},tap:tap1vjpkab,width:"100%"})})]})]}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-ehmmg0","data-framer-name":"Bottom",layoutDependency:layoutDependency,layoutId:"WA2j3BivD",transition:transition,children:[isDisplayed6()&&/*#__PURE__*/ _jsxs(motion.div,{className:"framer-1x2b4dx","data-framer-name":"PaymentInfo",layoutDependency:layoutDependency,layoutId:"UhS_BcamG",transition:transition,children:[/*#__PURE__*/ _jsxs(motion.div,{className:"framer-emp4os","data-framer-name":"TokenInfo",layoutDependency:layoutDependency,layoutId:"aEUlcFCnS",transition:transition,children:[/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"R0Y7Tm90byBTYW5zIEtSLTUwMA==","--framer-font-family":'"Noto Sans KR", sans-serif',"--framer-font-size":"18px","--framer-font-weight":"500"},children:"TTN Token"})}),className:"framer-czfqqk",fonts:["GF;Noto Sans KR-500"],layoutDependency:layoutDependency,layoutId:"VhuixJa5R",style:{"--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px"},text:xu6yr6phl,transition:transition,verticalAlignment:"top",withExternalLayout:true}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-1q9fije",layoutDependency:layoutDependency,layoutId:"cZfUDLVUU",transition:transition,children:[/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"R0Y7Tm90byBTYW5zIEtSLXJlZ3VsYXI=","--framer-font-family":'"Noto Sans KR", sans-serif',"--framer-font-size":"18px","--framer-text-color":"var(--extracted-r6o4lv)"},children:"16,123"})}),className:"framer-7l41ay",fonts:["GF;Noto Sans KR-regular"],layoutDependency:layoutDependency,layoutId:"REH_7S_US",style:{"--extracted-r6o4lv":"rgb(119, 119, 119)","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px"},text:JhZ1g6Kfj,transition:transition,verticalAlignment:"top",withExternalLayout:true}),/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"R0Y7Tm90byBTYW5zIEtSLXJlZ3VsYXI=","--framer-font-family":'"Noto Sans KR", sans-serif',"--framer-font-size":"18px","--framer-text-color":"var(--extracted-r6o4lv)"},children:"TTN"})}),className:"framer-q30t78",fonts:["GF;Noto Sans KR-regular"],layoutDependency:layoutDependency,layoutId:"TaJV0M1c3",style:{"--extracted-r6o4lv":"rgb(119, 119, 119)","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px"},transition:transition,verticalAlignment:"top",withExternalLayout:true})]})]}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-uy0ezg",layoutDependency:layoutDependency,layoutId:"QZBM0D3jY",style:{backgroundColor:"rgb(221, 221, 221)"},transition:transition}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-1pr4iot","data-framer-name":"PayerInfo",layoutDependency:layoutDependency,layoutId:"KRb0LcaFv",transition:transition,children:[/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"R0Y7Tm90byBTYW5zIEtSLTUwMA==","--framer-font-family":'"Noto Sans KR", sans-serif',"--framer-font-size":"18px","--framer-font-weight":"500"},children:"결제 지갑 주소"})}),className:"framer-14ld55n",fonts:["GF;Noto Sans KR-500"],layoutDependency:layoutDependency,layoutId:"rjdbuWS4x",style:{"--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px"},transition:transition,verticalAlignment:"top",withExternalLayout:true,...addPropertyOverrides({lUoiJO5h9:{children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"R0Y7Tm90byBTYW5zIEtSLXJlZ3VsYXI=","--framer-font-family":'"Noto Sans KR", sans-serif',"--framer-font-size":"20px"},children:"TXID"})}),fonts:["GF;Noto Sans KR-regular"]}},baseVariant,gestureVariant)}),/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"R0Y7Tm90byBTYW5zIEtSLXJlZ3VsYXI=","--framer-font-family":'"Noto Sans KR", sans-serif',"--framer-font-size":"18px","--framer-text-color":"var(--extracted-r6o4lv)"},children:"0x4b86…DF9d"})}),className:"framer-u1y8v2",fonts:["GF;Noto Sans KR-regular"],layoutDependency:layoutDependency,layoutId:"oHkJBS2X6",style:{"--extracted-r6o4lv":"rgb(119, 119, 119)","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px"},text:vsVYFQfIq,transition:transition,verticalAlignment:"top",withExternalLayout:true,...addPropertyOverrides({lUoiJO5h9:{children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"R0Y7Tm90byBTYW5zIEtSLXJlZ3VsYXI=","--framer-font-family":'"Noto Sans KR", sans-serif',"--framer-font-size":"18px","--framer-text-color":"var(--extracted-r6o4lv)"},children:"0x73bd3f….7ee02"})})}},baseVariant,gestureVariant)})]}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-106fn10",layoutDependency:layoutDependency,layoutId:"COnIEE2h5",style:{backgroundColor:"rgb(221, 221, 221)"},transition:transition})]}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-o7uqyn-container",layoutDependency:layoutDependency,layoutId:"YtGN7WvUu-container",transition:transition,children:/*#__PURE__*/ _jsx(Button,{color:"rgb(0, 98, 82)",height:"100%",icon:false,icon1:"plus",id:"YtGN7WvUu",label:"결제하기",label1:true,layoutId:"YtGN7WvUu",style:{height:"100%",width:"100%"},tap:tapdq3lzd,variant:"jeQ3CNQ_a",width:"100%",...addPropertyOverrides({FDilibEk5:{tap:tap1bvfp2k},lUoiJO5h9:{label:"확인",tap:tap1p41bgo}},baseVariant,gestureVariant)})})]})]})})})});});const css=['.framer-wcniy [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}',"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-wcniy * { box-sizing: border-box; }",".framer-wcniy .framer-1bjecuj { height: 680px; overflow: hidden; position: relative; width: 360px; }",".framer-wcniy .framer-nut3dq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 90%; justify-content: space-between; left: calc(50.00000000000002% - min(600px, 90%) / 2); max-width: 600px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: calc(50.00000000000002% - 90% / 2); width: 90%; }",".framer-wcniy .framer-92nf5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 167px; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",".framer-wcniy .framer-1q8rs5c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 60px; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",".framer-wcniy .framer-b7ruc5-container { cursor: pointer; flex: none; height: 60px; position: relative; width: 60px; }",".framer-wcniy .framer-1y25jo8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 102px; justify-content: center; overflow: visible; padding: 15px 15px 15px 15px; position: relative; width: 100%; }",".framer-wcniy .framer-jy5is3, .framer-wcniy .framer-hmp05d, .framer-wcniy .framer-1ghj1dc, .framer-wcniy .framer-1hfaul7, .framer-wcniy .framer-czfqqk, .framer-wcniy .framer-7l41ay, .framer-wcniy .framer-q30t78, .framer-wcniy .framer-14ld55n, .framer-wcniy .framer-u1y8v2 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",".framer-wcniy .framer-54oj4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 275px; }",".framer-wcniy .framer-121b5wk { flex: none; height: 51px; overflow: visible; position: relative; width: 100%; }",".framer-wcniy .framer-122ktjc-container { flex: none; height: 50px; left: calc(50.00000000000002% - 260px / 2); position: absolute; top: calc(49.01960784313727% - 50px / 2); width: 260px; }",".framer-wcniy .framer-o7qbdo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 352px; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 300px; }",".framer-wcniy .framer-1a25lss, .framer-wcniy .framer-5alujo, .framer-wcniy .framer-ixe7g6, .framer-wcniy .framer-ssu59i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",".framer-wcniy .framer-1mj0jkj-container, .framer-wcniy .framer-1ev52ry-container, .framer-wcniy .framer-w5sru4-container, .framer-wcniy .framer-fun6km-container, .framer-wcniy .framer-12gq169-container, .framer-wcniy .framer-1l6noed-container, .framer-wcniy .framer-my71d6-container, .framer-wcniy .framer-fjbski-container, .framer-wcniy .framer-11sbo8v-container, .framer-wcniy .framer-sr2gk6-container, .framer-wcniy .framer-cekodo-container, .framer-wcniy .framer-ivlwzs-container { flex: none; height: 80px; position: relative; width: 80px; }",".framer-wcniy .framer-ehmmg0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 177px; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",".framer-wcniy .framer-1x2b4dx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 60px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",".framer-wcniy .framer-emp4os, .framer-wcniy .framer-1pr4iot { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",".framer-wcniy .framer-1q9fije { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 22px; justify-content: flex-end; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 208px; }",".framer-wcniy .framer-uy0ezg, .framer-wcniy .framer-106fn10 { flex: none; height: 1px; overflow: visible; position: relative; width: 100%; }",".framer-wcniy .framer-o7uqyn-container { flex: none; height: 60px; position: relative; width: 100%; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-wcniy .framer-1q8rs5c, .framer-wcniy .framer-1y25jo8, .framer-wcniy .framer-54oj4, .framer-wcniy .framer-1a25lss, .framer-wcniy .framer-5alujo, .framer-wcniy .framer-ixe7g6, .framer-wcniy .framer-ssu59i, .framer-wcniy .framer-1x2b4dx, .framer-wcniy .framer-1q9fije { gap: 0px; } .framer-wcniy .framer-1q8rs5c > *, .framer-wcniy .framer-1a25lss > *, .framer-wcniy .framer-5alujo > *, .framer-wcniy .framer-ixe7g6 > *, .framer-wcniy .framer-ssu59i > *, .framer-wcniy .framer-1q9fije > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-wcniy .framer-1q8rs5c > :first-child, .framer-wcniy .framer-54oj4 > :first-child, .framer-wcniy .framer-1a25lss > :first-child, .framer-wcniy .framer-5alujo > :first-child, .framer-wcniy .framer-ixe7g6 > :first-child, .framer-wcniy .framer-ssu59i > :first-child, .framer-wcniy .framer-1q9fije > :first-child { margin-left: 0px; } .framer-wcniy .framer-1q8rs5c > :last-child, .framer-wcniy .framer-54oj4 > :last-child, .framer-wcniy .framer-1a25lss > :last-child, .framer-wcniy .framer-5alujo > :last-child, .framer-wcniy .framer-ixe7g6 > :last-child, .framer-wcniy .framer-ssu59i > :last-child, .framer-wcniy .framer-1q9fije > :last-child { margin-right: 0px; } .framer-wcniy .framer-1y25jo8 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-wcniy .framer-1y25jo8 > :first-child, .framer-wcniy .framer-1x2b4dx > :first-child { margin-top: 0px; } .framer-wcniy .framer-1y25jo8 > :last-child, .framer-wcniy .framer-1x2b4dx > :last-child { margin-bottom: 0px; } .framer-wcniy .framer-54oj4 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-wcniy .framer-1x2b4dx > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }",".framer-wcniy.framer-v-1a3wnt7 .framer-92nf5 { height: 135px; }",".framer-wcniy.framer-v-1a3wnt7 .framer-1y25jo8 { height: 97px; }",".framer-wcniy.framer-v-1a3wnt7 .framer-54oj4 { height: 34px; justify-content: center; width: 100%; }",".framer-wcniy.framer-v-1a3wnt7 .framer-1a25lss { order: 0; }",".framer-wcniy.framer-v-1a3wnt7 .framer-5alujo { order: 1; }",".framer-wcniy.framer-v-1a3wnt7 .framer-ixe7g6 { order: 2; }",".framer-wcniy.framer-v-1a3wnt7 .framer-ssu59i { order: 3; }",".framer-wcniy.framer-v-1a3wnt7 .framer-ehmmg0 { gap: 0px; height: min-content; justify-content: center; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-wcniy.framer-v-1a3wnt7 .framer-ehmmg0 { gap: 0px; } .framer-wcniy.framer-v-1a3wnt7 .framer-ehmmg0 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-wcniy.framer-v-1a3wnt7 .framer-ehmmg0 > :first-child { margin-top: 0px; } .framer-wcniy.framer-v-1a3wnt7 .framer-ehmmg0 > :last-child { margin-bottom: 0px; } }",".framer-wcniy.framer-v-gfjdhr .framer-92nf5 { height: 270px; }",".framer-wcniy.framer-v-gfjdhr .framer-1y25jo8 { align-content: center; align-items: center; }",".framer-wcniy.framer-v-gfjdhr .framer-54oj4 { justify-content: center; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 680
 * @framerIntrinsicWidth 360
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"FDilibEk5":{"layout":["fixed","fixed"]},"lUoiJO5h9":{"layout":["fixed","fixed"]}}}
 * @framerVariables {"vJmzENXeS":"companyName","YheXsCjUn":"fiatPrice","CQxnlgJ1x":"goodsName","xu6yr6phl":"tokenName","JhZ1g6Kfj":"tokenAmount","vsVYFQfIq":"walletAddress","D4Bbq9LTQ":"close","K6A82hHOf":"clickNumber","usu8viGAS":"password","Ym1TgsBLK":"clearAll","bHvPOaKav":"clear"}
 */ const Framerpb2C0luVL=withCSS(Component,css);export default Framerpb2C0luVL;Framerpb2C0luVL.displayName="NamuPay";Framerpb2C0luVL.defaultProps={height:680,width:360};addPropertyControls(Framerpb2C0luVL,{variant:{options:["wnkVn_SSr","FDilibEk5","lUoiJO5h9"],optionTitles:["Confirm","Auth","finish"],title:"Variant",type:ControlType.Enum},vJmzENXeS:{defaultValue:"회사 이름",displayTextArea:false,placeholder:"회사 이름",title:"Company Name",type:ControlType.String},YheXsCjUn:{defaultValue:"0,000",displayTextArea:false,placeholder:"0,000",title:"Fiat Price",type:ControlType.String},CQxnlgJ1x:{defaultValue:"구찌 시계",displayTextArea:false,placeholder:"상품명",title:"Goods Name",type:ControlType.String},xu6yr6phl:{defaultValue:"TTN Token",displayTextArea:false,placeholder:"토큰명",title:"Token Name",type:ControlType.String},JhZ1g6Kfj:{defaultValue:"16,123",displayTextArea:false,placeholder:"0,000",title:"Token Amount",type:ControlType.String},vsVYFQfIq:{defaultValue:"0x1234...1234",displayTextArea:false,placeholder:"0x1234...1234",title:"Wallet Address",type:ControlType.String},D4Bbq9LTQ:{title:"Close",type:ControlType.EventHandler},K6A82hHOf:{title:"Click Number",type:ControlType.EventHandler},usu8viGAS:{defaultValue:"",title:"Password",type:ControlType.String},Ym1TgsBLK:{title:"Clear All",type:ControlType.EventHandler},bHvPOaKav:{title:"Clear",type:ControlType.EventHandler}});addFonts(Framerpb2C0luVL,[{family:"Noto Sans KR",moduleAsset:{localModuleIdentifier:"local-module:canvasComponent/pb2C0luVL:default",url:"https://fonts.gstatic.com/s/notosanskr/v27/Pby7FmXiEBPT4ITbgNA5CgmOalvI7rgQsWYrzw.otf"},style:"normal",url:"https://fonts.gstatic.com/s/notosanskr/v27/Pby7FmXiEBPT4ITbgNA5CgmOalvI7rgQsWYrzw.otf",weight:"700"},{family:"Noto Sans KR",moduleAsset:{localModuleIdentifier:"local-module:canvasComponent/pb2C0luVL:default",url:"https://fonts.gstatic.com/s/notosanskr/v27/PbykFmXiEBPT4ITbgNA5Cgm20HTs4JMMuA.otf"},style:"normal",url:"https://fonts.gstatic.com/s/notosanskr/v27/PbykFmXiEBPT4ITbgNA5Cgm20HTs4JMMuA.otf",weight:"400"},{family:"Noto Sans KR",moduleAsset:{localModuleIdentifier:"local-module:canvasComponent/pb2C0luVL:default",url:"https://fonts.gstatic.com/s/notosanskr/v27/Pby7FmXiEBPT4ITbgNA5CgmOIl3I7rgQsWYrzw.otf"},style:"normal",url:"https://fonts.gstatic.com/s/notosanskr/v27/Pby7FmXiEBPT4ITbgNA5CgmOIl3I7rgQsWYrzw.otf",weight:"500"},...HeroFonts,...InputFonts,...PaginationFonts,...ButtonFonts]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"Framerpb2C0luVL","slots":[],"annotations":{"framerContractVersion":"1","framerIntrinsicWidth":"360","framerVariables":"{\"vJmzENXeS\":\"companyName\",\"YheXsCjUn\":\"fiatPrice\",\"CQxnlgJ1x\":\"goodsName\",\"xu6yr6phl\":\"tokenName\",\"JhZ1g6Kfj\":\"tokenAmount\",\"vsVYFQfIq\":\"walletAddress\",\"D4Bbq9LTQ\":\"close\",\"K6A82hHOf\":\"clickNumber\",\"usu8viGAS\":\"password\",\"Ym1TgsBLK\":\"clearAll\",\"bHvPOaKav\":\"clear\"}","framerIntrinsicHeight":"680","framerCanvasComponentVariantDetails":"{\"propertyName\":\"variant\",\"data\":{\"default\":{\"layout\":[\"fixed\",\"fixed\"]},\"FDilibEk5\":{\"layout\":[\"fixed\",\"fixed\"]},\"lUoiJO5h9\":{\"layout\":[\"fixed\",\"fixed\"]}}}"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./pb2C0luVL.map