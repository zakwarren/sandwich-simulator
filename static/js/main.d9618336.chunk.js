(this["webpackJsonpsandwich-simulator"]=this["webpackJsonpsandwich-simulator"]||[]).push([[0],[,function(e,t,n){"use strict";n.d(t,"p",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"n",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return u})),n.d(t,"m",(function(){return l})),n.d(t,"j",(function(){return s})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return p})),n.d(t,"g",(function(){return h})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return f})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return v})),n.d(t,"o",(function(){return b}));var r="SET_INGREDIENTS",a="ADD_INGREDIENT",o="REMOVE_INGREDIENT",i="FETCH_INGREDIENTS_FAILED",c="PURCHASE_INIT",u="PURCHASE_START",l="PURCHASE_SUCCESS",s="PURCHASE_FAIL",d="FETCH_ORDERS_START",p="FETCH_ORDERS_SUCCESS",h="FETCH_ORDERS_FAIL",m="AUTH_START",f="AUTH_SUCCESS",g="AUTH_FAIL",v="AUTH_LOGOUT",b="SET_AUTH_REDIRECT_PATH"},,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"i",(function(){return f})),n.d(t,"e",(function(){return g})),n.d(t,"h",(function(){return E})),n.d(t,"g",(function(){return b})),n.d(t,"d",(function(){return _})),n.d(t,"b",(function(){return S})),n.d(t,"f",(function(){return w})),n.d(t,"j",(function(){return j})),n.d(t,"c",(function(){return I}));var r=n(1),a=n(5),o=n(4),i=n(15),c=n.n(i),u=n(27),l=n(3),s=function e(){var t=this;Object(l.a)(this,e),this.baseUrl="https://sandwich-simulator-f4119.firebaseio.com",this.get=function(){var e=Object(u.a)(c.a.mark((function e(n){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t.baseUrl+n);case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",{message:"error",data:e.t0});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),this.post=function(){var e=Object(u.a)(c.a.mark((function e(n,r){var a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t.baseUrl+n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 3:return a=e.sent,e.next=6,a.json();case 6:return o=e.sent,e.abrupt("return",o);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",{message:"error",data:e.t0});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}()},d=function(e){Object(a.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).baseUrl="https://identitytoolkit.googleapis.com/v1/accounts",e.signUp=function(){var t=Object(u.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.post(":signUp?key=AIzaSyA-zMoFkqus_c8AWDCGmgiZa389lzbx9KU",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.signIn=function(){var t=Object(u.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.post(":signInWithPassword?key=AIzaSyA-zMoFkqus_c8AWDCGmgiZa389lzbx9KU",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return n}(s),p=new s,h=new d,m=function(e){return{type:r.a,ingredientName:e}},f=function(e){return{type:r.n,ingredientName:e}},g=function(){return function(e){p.get("/ingredient-details.json").then((function(t){if(t.message&&"error"===t.message)throw new Error(t.data);var n;e((n=t,{type:r.p,ingredients:n,error:null}))})).catch((function(t){e(function(e){return{type:r.f,error:e}}(t))}))}},v=n(12),b=function(){return{type:r.k}},E=function(e,t){return function(n){n({type:r.l}),p.post("/orders.json?auth="+t,e).then((function(t){if(t.message&&"error"===t.message)throw new Error(t.data);n(function(e,t){return{type:r.m,orderId:e,orderData:t}}(t.id,e))})).catch((function(e){n(function(e){return{type:r.j,error:e}}(e))}))}},_=function(e,t){return function(n){n({type:r.h});var a="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';p.get("/orders.json"+a).then((function(e){if(e.message&&"error"===e.message)throw new Error(e.data);var t,a=[];for(var o in e)a.push(Object(v.a)(Object(v.a)({},e[o]),{},{id:o}));n((t=a,{type:r.i,orders:t}))})).catch((function(e){n(function(e){return{type:r.g,error:e}}(e))}))}},y=function(e,t){return{type:r.e,idToken:e,userId:t}},w=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},C=function(e){return function(t){setTimeout((function(){t(w())}),1e3*e)}},S=function(e,t,n){return function(a){a({type:r.d});var o={email:e,password:t,returnSecureToken:!0},i=h.signUp;n||(i=h.signIn),i(o).then((function(e){var t=new Date((new Date).getTime()+1e3*e.expiresIn);localStorage.setItem("token",e.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.localId),a(y(e.idToken,e.localId)),a(C(e.expiresIn))})).catch((function(e){a(function(e){return{type:r.b,error:e}}(e.response.error))}))}},j=function(e){return{type:r.o,path:e}},I=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(w());else{var r=localStorage.getItem("userId");e(y(t,r)),e(C((n.getTime()-(new Date).getTime())/1e3))}}else e(w())}}},,,,,function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(12),a=n(33),o=function(e){if(e){var t,n={},r=Object(a.a)(e);try{for(r.s();!(t=r.n()).done;){var o=t.value;n[o.type]=o.amount}}catch(i){r.e(i)}finally{r.f()}return n}},i=function(e,t){return Object(r.a)(Object(r.a)({},e),t)},c=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},,,,,,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(43),i=n.n(o);t.a=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked},e.children)}},function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__2108_",Open:"SideDrawer_Open__U2mty",Closed:"SideDrawer_Closed__1kU7Y",Logo:"SideDrawer_Logo__1c8Hu"}},function(e,t,n){e.exports={Input:"Input_Input__WCo61",Label:"Input_Label__8gcUZ",InputElement:"Input_InputElement__2ptBR",Invalid:"Input_Invalid__bjp8-",ValidationError:"Input_ValidationError__3AYNJ"}},,,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__2Hvtx",Label:"BuildControl_Label__2k9vz",Less:"BuildControl_Less__1FRs_",More:"BuildControl_More__16Vc4"}},,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(62),i=n.n(o);t.a=function(){return a.a.createElement("div",{className:i.a.Loader},"Loading...")}},,,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(58),i=n.n(o);t.a=function(e){return e.show?a.a.createElement("div",{className:i.a.Backdrop,onClick:e.clicked}):null}},,,function(e,t,n){"use strict";var r=n(3),a=n(6),o=n(5),i=n(4),c=n(0),u=n.n(c),l=n(61),s=n.n(l),d=n(32),p=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(d.a,{show:this.props.show,clicked:this.props.modalClosed}),u.a.createElement("div",{className:s.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),n}(c.Component);t.a=p},function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__3KFa1",Logo:"Toolbar_Logo__-oxLA",DesktopOnly:"Toolbar_DesktopOnly__1SUqI"}},,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2GH9a",active:"NavigationItem_active__253TC"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1-jiy",OrderButton:"BuildControls_OrderButton__2DLX8",enable:"BuildControls_enable__2lLCN"}},function(e,t,n){e.exports={Button:"Button_Button__2RSgR",Success:"Button_Success__3BXkx",Danger:"Button_Danger__1ppee"}},function(e,t,n){e.exports={Auth:"Auth_Auth__3UhUn",ErrorMessage:"Auth_ErrorMessage__1IAJ6"}},function(e,t,n){"use strict";var r=n(3),a=n(6),o=n(5),i=n(4),c=n(0),u=n.n(c),l=n(35);t.a=function(e){return function(t){Object(o.a)(c,t);var n=Object(i.a)(c);function c(){var e;Object(r.a)(this,c);for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).state={hasError:!1},e.errorConfirmedHandler=function(){e.setState({hasError:!1})},e}return Object(a.a)(c,[{key:"componentDidMount",value:function(){this.props.error||this.setState({hasError:!0})}},{key:"render",value:function(){var t=null;return this.props.error&&(t=u.a.createElement(l.a,{show:this.state.hasError,modalClosed:this.errorConfirmedHandler},this.props.error.toString())),u.a.createElement(u.a.Fragment,null,t,u.a.createElement(e,this.props))}}]),c}(c.Component)}},,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(22),i=n.n(o);t.a=function(e){var t=null,n=[i.a.InputElement],r=null;switch(e.touched&&e.shouldValidate&&e.invalid&&(n.push(i.a.Invalid),r=a.a.createElement("p",{className:i.a.ValidationError},e.errorMessage)),e.elementType){case"input":t=a.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=a.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=a.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=a.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return a.a.createElement("div",{className:i.a.Input},a.a.createElement("label",{className:i.a.Label},e.label),t,r)}},function(e,t,n){"use strict";var r=n(25),a=n(0),o=n.n(a),i=n(59),c=n.n(i),u=n(60),l=n.n(u),s=function(e){return o.a.createElement("div",{className:l.a[e.type]})};t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return o.a.createElement(s,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=o.a.createElement("p",null,"Please start adding ingredients!")),o.a.createElement("div",{className:c.a.Sandwich},o.a.createElement(s,{type:"BreadTop"}),t,o.a.createElement(s,{type:"BreadBottom"}))}},,,function(e,t,n){e.exports={Content:"Layout_Content__3mANH"}},function(e,t,n){e.exports=n.p+"static/media/logo.2bbe275a.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__WASKU"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__12fVw"}},,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__3KHz-"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__37y8V"}},function(e,t,n){e.exports={Sandwich:"Sandwich_Sandwich__3JK6B"}},function(e,t,n){e.exports={BreadBottom:"Ingredient_BreadBottom__2jSXL",BreadTop:"Ingredient_BreadTop__m4xT0",Meat:"Ingredient_Meat__3oDxd",Cheese:"Ingredient_Cheese__3M8xC",Bacon:"Ingredient_Bacon__22brV",Lettuce:"Ingredient_Lettuce__UL8vC",Tomato:"Ingredient_Tomato__3Itbg"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1XS3E"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__2GJRX",load6:"Spinner_load6__8dbzY",round:"Spinner_round__hAUD1"}},function(e,t,n){e.exports=n(75)},,,,,,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(29),i=n.n(o),c=n(17),u=n(10),l=n(18),s=n(51),d=(n(72),n(3)),p=n(6),h=n(5),m=n(4),f=n(16),g=n(52),v=n.n(g),b=n(36),E=n.n(b),_=n(53),y=n.n(_),w=n(54),C=n.n(w),S=function(){return a.a.createElement("div",{className:C.a.Logo},a.a.createElement("img",{src:y.a,alt:"Logo"}))},j=n(55),I=n.n(j),k=n(39),O=n.n(k),A=function(e){return a.a.createElement("li",{className:O.a.NavigationItem},a.a.createElement(c.b,{to:e.link,exact:e.exact,activeClassName:O.a.active},e.children))},T=function(e){return a.a.createElement("ul",{className:I.a.NavigationItems},a.a.createElement(A,{link:"/",exact:!0},"Burger Builder"),e.isAuth?a.a.createElement(A,{link:"/orders"},"Orders"):null,e.isAuth?a.a.createElement(A,{link:"/logout"},"Log out"):a.a.createElement(A,{link:"/auth"},"Log in"))},N=n(57),D=n.n(N),x=function(e){return a.a.createElement("div",{className:D.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},L=function(e){return a.a.createElement("header",{className:E.a.Toolbar},a.a.createElement(x,{clicked:e.drawerToggleClicked}),a.a.createElement("div",{className:E.a.Logo},a.a.createElement(S,null)),a.a.createElement("nav",{className:E.a.DesktopOnly},a.a.createElement(T,{isAuth:e.isAuth})))},B=n(21),H=n.n(B),R=n(32),U=function(e){var t=[H.a.SideDrawer,H.a.Closed];return e.open&&(t=[H.a.SideDrawer,H.a.Open]),a.a.createElement(a.a.Fragment,null,a.a.createElement(R.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement("div",{className:H.a.Logo},a.a.createElement(S,null)),a.a.createElement("nav",null,a.a.createElement(T,{isAuth:e.isAuth}))))},P=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={showSideDrawer:!1},e.sideDrawerCloseHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(p.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(L,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),a.a.createElement(U,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerCloseHandler}),a.a.createElement("main",{className:v.a.Content},this.props.children))}}]),n}(r.Component),M=Object(u.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(P),F=n(12),z=n(33),V=n(49),G=n(42),q=n.n(G),J=n(26),W=n.n(J),Y=function(e){return a.a.createElement("div",{className:W.a.BuildControl},a.a.createElement("div",{className:W.a.Label},e.label),a.a.createElement("button",{className:W.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:W.a.More,onClick:e.added},"More"))},K=function(e){return a.a.createElement("div",{className:q.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,e.price.toFixed(2))),e.controls.map((function(t){return a.a.createElement(Y,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),a.a.createElement("button",{className:q.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},e.isAuth?"Order Now":"Log in to Order"))},X=n(35),$=n(20),Z=function(e){var t=e.ingredients.map((function(e){return a.a.createElement("li",{key:e.type},a.a.createElement("span",{style:{textTransform:"capitalize"}},e.label),": ",e.amount)}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"Behold the glory of this dry, dejected sandwich with your choice of ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: ",e.price.toFixed(2))),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement($.a,{btnType:"Danger",clicked:e.purchaseCancelled},"Cancel"),a.a.createElement($.a,{btnType:"Success",clicked:e.purchaseContinued},"Continue"))},Q=n(28),ee=n(45),te=n(8),ne=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={purchasing:!1},e.getIngredientCounts=function(){if(e.props.ings){var t,n={},r=Object(z.a)(e.props.ings);try{for(r.s();!(t=r.n()).done;){var a=t.value;n[a.type]=a.amount}}catch(o){r.e(o)}finally{r.f()}return n}},e.checkNoIngredients=function(){return Object.values(e.props.ings).every((function(e){return 0===e}))},e.purchaseHandler=function(){e.props.isAuthenticated?e.setState({purchasing:!0}):(e.props.onSetAuthRedirectPath("/checkout"),e.props.history.push("/auth"))},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.props.onInitPurchase(),e.props.history.push("/checkout")},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"render",value:function(){var e=this.getIngredientCounts(),t=Object(F.a)({},e);for(var n in t)t[n]=t[n]<=0;var r=null,o=this.props.error?a.a.createElement("p",null,"ingredients can't be loaded!"):a.a.createElement(Q.a,null);return e&&(o=a.a.createElement(a.a.Fragment,null,a.a.createElement(V.a,{ingredients:e}),a.a.createElement(K,{controls:this.props.ings,ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:t,purchasable:!this.checkNoIngredients(),price:this.props.price,ordered:this.purchaseHandler,isAuth:this.props.isAuthenticated})),r=a.a.createElement(Z,{ingredients:this.props.ings,price:this.props.price,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),a.a.createElement(a.a.Fragment,null,a.a.createElement(X.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},r),o)}}]),n}(r.Component),re=Object(u.b)((function(e){return{ings:e.sandwichSimulator.ingredients,price:e.sandwichSimulator.totalPrice,error:e.sandwichSimulator.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e(te.a(t))},onIngredientRemoved:function(t){return e(te.i(t))},onInitIngredients:function(){return e(te.e())},onInitPurchase:function(){return e(te.g())},onSetAuthRedirectPath:function(t){return e(te.j(t))}}}))(Object(ee.a)(ne)),ae=n(31),oe=n(44),ie=n.n(oe),ce=n(48),ue=n(13),le=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your Email"},value:"",validation:{message:"Please enter a valid email",required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{message:"Please enter a valid password",required:!0,minLength:8},valid:!1,touched:!1}},formIsValid:!0,isSignUp:!1},e.inputChangedHandler=function(t,n){var r=Object(ue.c)(e.state.controls,Object(ae.a)({},n,Object(ue.c)(e.state.controls[n],{value:t.target.value,valid:Object(ue.a)(t.target.value,e.state.controls[n].validation),touched:!0}))),a=!0;for(var o in r)a=r[o].valid&&a;e.setState({controls:r,formIsValid:a})},e.submitHandler=function(t){t.preventDefault(),e.props.onAuth(e.state.controls.email.value,e.state.controls.password.value,e.state.isSignUp)},e.switchAuthModeHandler=function(){e.setState((function(e){return{isSignUp:!e.isSignUp}}))},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.buildingSandwich||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var r=t.map((function(t){return a.a.createElement(ce.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,touched:t.config.touched,shouldValidate:t.config.validation,invalid:!t.config.valid,errorMessage:t.config.validation?t.config.validation.message:null,changed:function(n){return e.inputChangedHandler(n,t.id)}})}));this.props.loading&&(r=a.a.createElement(Q.a,null));var o=null;this.props.error&&(o=a.a.createElement("p",{className:ie.a.ErrorMessage},this.props.error.message));var i=null;return this.props.isAuthenticated&&(i=a.a.createElement(f.a,{to:this.props.authRedirectPath})),a.a.createElement("div",{className:ie.a.Auth},i,o,a.a.createElement("form",{onSubmit:this.submitHandler},r,a.a.createElement($.a,{btnType:"Success",clicked:this.submitHandler},"Submit")),a.a.createElement($.a,{btnType:"Danger",clicked:this.switchAuthModeHandler},"Switch to ",this.state.isSignUp?"sign in":"sign up"))}}]),n}(r.Component),se=Object(u.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingSandwich:e.sandwichSimulator.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,n,r){return e(te.b(t,n,r))},onSetAuthRedirectPath:function(){return e(te.j("/"))}}}))(le),de=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(f.a,{to:"/"})}}]),n}(r.Component),pe=Object(u.b)(null,(function(e){return{onLogout:function(){return e(te.f())}}}))(de),he=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,81))})),me=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,80))})),fe=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignIn()}},{key:"render",value:function(){var e=a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(f.d,null,a.a.createElement(f.b,{path:"/auth",component:se}),a.a.createElement(f.b,{path:"/",exact:!0,component:re}),a.a.createElement(f.a,{to:"/"})));return this.props.isAuthenticated&&(e=a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(f.d,null,a.a.createElement(f.b,{path:"/checkout",render:function(e){return a.a.createElement(me,e)}}),a.a.createElement(f.b,{path:"/orders",render:function(){return a.a.createElement(he,null)}}),a.a.createElement(f.b,{path:"/logout",component:pe}),a.a.createElement(f.b,{path:"/auth",component:se}),a.a.createElement(f.b,{path:"/",exact:!0,component:re}),a.a.createElement(f.a,{to:"/"})))),a.a.createElement("div",null,a.a.createElement(M,null,e))}}]),n}(r.Component),ge=Object(f.g)(Object(u.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignIn:function(){return e(te.c())}}}))(fe));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ve=n(25),be=n(1),Ee=function(e,t){return Object(F.a)(Object(F.a)({},e),t)},_e={ingredients:null,totalPrice:4,error:null,building:!1},ye=function(e,t){var n=e.ingredients.find((function(e){return e.type===t.ingredientName})),r=Ee(n,{amount:n.amount+1}),a={ingredients:Object(ve.a)(e.ingredients).map((function(e){return e.type===t.ingredientName?r:e})),totalPrice:e.totalPrice+r.price,building:!0};return Ee(e,a)},we=function(e,t){var n=e.ingredients.find((function(e){return e.type===t.ingredientName})),r=Ee(n,{amount:n.amount-1}),a={ingredients:Object(ve.a)(e.ingredients).map((function(e){return e.type===t.ingredientName?r:e})),totalPrice:e.totalPrice-r.price,building:!0};return Ee(e,a)},Ce=function(e,t){return Ee(e,{ingredients:t.ingredients,totalPrice:_e.totalPrice,error:t.error,building:!1})},Se=function(e,t){return Ee(e,{error:t.error})},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be.a:return ye(e,t);case be.n:return we(e,t);case be.p:return Ce(e,t);case be.f:return Se(e,t);default:return e}},Ie={orders:[],loading:!1,purchased:!1,error:null},ke=function(e,t){var n=Ee(t.orderData,{id:t.orderId});return Ee(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)})},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be.k:return Ee(e,{purchased:!1,error:null});case be.l:return Ee(e,{loading:!0,error:null});case be.m:return ke(e,t);case be.j:return Ee(e,{loading:!1,error:t.error});case be.h:return Ee(e,{loading:!0,error:null});case be.i:return Ee(e,{orders:t.orders,loading:!1});case be.g:return Ee(e,{loading:!1,error:t.error});default:return e}},Ae={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},Te=function(e,t){return Object(ue.c)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},Ne=function(e,t){return Object(ue.c)(e,{error:t.error,loading:!1})},De=function(e){return Object(ue.c)(e,{token:null,userId:null})},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be.d:return Object(ue.c)(e,{error:null,loading:!0});case be.e:return Te(e,t);case be.b:return Ne(e,t);case be.c:return De(e);case be.o:return Object(ue.c)(e,{authRedirectPath:t.path});default:return e}},Le=l.d,Be=Object(l.c)({sandwichSimulator:je,order:Oe,auth:xe}),He=Object(l.e)(Be,Le(Object(l.a)(s.a))),Re=a.a.createElement(u.a,{store:He},a.a.createElement(c.a,{basename:"/sandwich-simulator/"},a.a.createElement(ge,null)));i.a.render(Re,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[63,1,2]]]);
//# sourceMappingURL=main.d9618336.chunk.js.map