(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports={"main-content":"NavigationBar_main-content__2Vs93",isMobile:"NavigationBar_isMobile__2PVJF",navigationBar:"NavigationBar_navigationBar__39FL6",logoContainer:"NavigationBar_logoContainer__120sk",dropdownOverlay:"NavigationBar_dropdownOverlay__vUhB8",active:"NavigationBar_active__BNqGQ",menuToggle:"NavigationBar_menuToggle__3Xrlc",dropdownContainer:"NavigationBar_dropdownContainer__17O2n",dropdown:"NavigationBar_dropdown__EfQKd",primaryList:"NavigationBar_primaryList__286sH",secondaryList:"NavigationBar_secondaryList__13NeQ",isDesktop:"NavigationBar_isDesktop__HrZvw",desktopBackground:"NavigationBar_desktopBackground__2ZG9V",topNavigation:"NavigationBar_topNavigation__3RzUr",mainNavigation:"NavigationBar_mainNavigation__3uSwR"}},104:function(t,e,n){t.exports={"main-content":"Button_main-content__3ge1L",button:"Button_button__3Cl9U",regular:"Button_regular__14wSn",small:"Button_small__1LOZs",default:"Button_default__259Jc",primary:"Button_primary__3hby5",success:"Button_success__34pkW",warning:"Button_warning__3HL1v"}},105:function(t,e,n){t.exports={"main-content":"LoadingAnimation_main-content__24U7a",loadingAnimation:"LoadingAnimation_loadingAnimation__2dyJL",fixed:"LoadingAnimation_fixed__24Hde"}},140:function(t,e,n){t.exports={headerContainer:"Header_headerContainer__186mu",header:"Header_header__B5tdw"}},194:function(t,e,n){"use strict";n.r(e);var i=n(11),a=n(12),r=n(14),o=n(13),s=n(15),c=n(1),l=n.n(c),p=n(104),u=n.n(p),_=function(t){function e(){return Object(i.a)(this,e),Object(r.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){var t=" "+u.a[this.props.color],e=" "+u.a[this.props.size],n=u.a.button+t+e;return l.a.createElement("button",{className:n},this.props.content)}}]),e}(l.a.Component);_.defaultProps={content:"button",color:"default",size:"regular"},e.default=_},195:function(t,e,n){"use strict";n.r(e);var i=n(11),a=n(12),r=n(14),o=n(13),s=n(15),c=n(1),l=n.n(c),p=n(43),u=n.n(p),_=function(t){function e(){return Object(i.a)(this,e),Object(r.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(a.a)(e,[{key:"renderTitle",value:function(){var t=u.a.title+" "+u.a[this.props.titleSize];return this.props.title?l.a.createElement("h2",{className:t},this.props.title):void 0}},{key:"render",value:function(){var t=" "+u.a[this.props.color],e=this.props.href?" "+u.a.link:"",n=u.a.contentBox+t+e;return this.props.href?l.a.createElement("a",{href:this.props.href,className:n},this.renderTitle(),l.a.createElement("div",{className:u.a.content},this.props.content)):l.a.createElement("div",{className:n},this.renderTitle(),l.a.createElement("div",{className:u.a.content},this.props.content))}}]),e}(l.a.Component);_.defaultProps={title:null,titleSize:"regular",href:null,content:"",color:"default"},e.default=_},196:function(t,e,n){"use strict";n.r(e);var i=n(11),a=n(12),r=n(14),o=n(13),s=n(15),c=n(1),l=n.n(c),p=n(140),u=n.n(p),_=function(t){function e(){return Object(i.a)(this,e),Object(r.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){var t=l.a.createElement("h"+this.props.size,{className:u.a.header},this.props.content);return l.a.createElement("div",{className:u.a.headerContainer}," ",t," ")}}]),e}(l.a.Component);_.defaultProps={content:"",size:1},e.default=_},197:function(t,e,n){"use strict";n.r(e);var i=n(11),a=n(12),r=n(14),o=n(13),s=n(15),c=n(1),l=n.n(c),p=n(223),u=n.n(p),_=function(t){function e(){return Object(i.a)(this,e),Object(r.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){return l.a.createElement("li",null,this.props.listItem)}}]),e}(l.a.Component),d=function(t){function e(){return Object(i.a)(this,e),Object(r.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(a.a)(e,[{key:"renderList",value:function(){var t=this.props.listItems.map((function(t,e){return l.a.createElement(_,{listItem:t,key:e})})),e=this.props.ordered?"ol":"ul";return l.a.createElement(e,{className:u.a.list},t)}},{key:"render",value:function(){return l.a.createElement("div",null,this.renderList())}}]),e}(l.a.Component);d.defaultProps={listItems:[],ordered:!1},e.default=d},198:function(t,e,n){"use strict";n.r(e);var i=n(11),a=n(12),r=n(14),o=n(13),s=n(15),c=n(1),l=n.n(c),p=n(105),u=n.n(p),_=function(t){function e(){return Object(i.a)(this,e),Object(r.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){return l.a.createElement("div",{className:this.props.fixed?u.a.loadingAnimation+" "+u.a.fixed:u.a.loadingAnimation},this.props.message)}}]),e}(l.a.Component);_.defaultProps={fixed:!1,active:!0,message:""},e.default=_},199:function(t,e,n){"use strict";n.r(e);var i=n(11),a=n(12),r=n(14),o=n(13),s=n(15),c=n(1),l=n.n(c),p=n(10),u=n.n(p),_=function(t){function e(){return Object(i.a)(this,e),Object(r.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){return"string"==typeof this.props.listItem?l.a.createElement("li",null,l.a.createElement("span",null,this.props.listItem)):"object"==typeof this.props.listItem?l.a.createElement("li",null,l.a.createElement("a",{href:this.props.listItem.href},this.props.listItem.name)):null}}]),e}(l.a.Component),d=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(r.a)(this,Object(o.a)(e).call(this,t))).state={active:!1},n}return Object(s.a)(e,t),Object(a.a)(e,[{key:"handleClickOutside",value:function(){this.setState({active:!1})}},{key:"toggleList",value:function(){this.setState((function(t){return{active:!t.active}}))}},{key:"renderPrimaryList",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.primaryListItems,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=e.map((function(e,i){var a=n+"-"+i;return void 0!==e.listItems?l.a.createElement("li",{key:a},l.a.createElement("span",null,e.name),t.renderPrimaryList(e.listItems,n+1)):l.a.createElement(_,{listItem:e,key:a})}));return l.a.createElement("ul",{className:u.a.primaryList},i)}},{key:"renderSecondaryList",value:function(){var t=this.props.secondaryListItems.map((function(t,e){return l.a.createElement(_,{listItem:t,key:e})}));return l.a.createElement("ul",{className:u.a.secondaryList},t)}},{key:"render",value:function(){var t=this;return l.a.createElement("header",null,l.a.createElement("div",{className:u.a.isMobile},l.a.createElement("div",{className:u.a.navigationBar},l.a.createElement("div",{className:u.a.logoContainer},l.a.createElement("img",{alt:"DIBK logo",src:n(832)})),l.a.createElement("button",{className:this.state.active?u.a.menuToggle+" active":u.a.menuToggle,onClick:function(){return t.toggleList()}})),l.a.createElement("div",{className:this.state.active?u.a.dropdownContainer+" active":u.a.dropdownContainer},l.a.createElement("div",{className:u.a.dropdown},this.renderPrimaryList(),this.renderSecondaryList())),l.a.createElement("div",{className:this.state.active?u.a.dropdownOverlay+" active":u.a.dropdownOverlay})),l.a.createElement("div",{className:u.a.isDesktop},l.a.createElement("div",{className:u.a.desktopBackground}),l.a.createElement("div",{className:u.a.topNavigation},this.renderSecondaryList()),l.a.createElement("div",{className:u.a.mainNavigation},l.a.createElement("div",{className:u.a.logoContainer},l.a.createElement("img",{alt:"DIBK logo",src:n(833)})),this.renderPrimaryList())))}}]),e}(l.a.Component);d.defaultProps={primaryListItems:[],secondaryListItems:[]},e.default=d},200:function(t,e,n){"use strict";n.r(e),n.d(e,"Select",(function(){return d})),n.d(e,"Option",(function(){return _}));var i=n(11),a=n(12),r=n(14),o=n(13),s=n(15),c=n(1),l=n.n(c),p=n(224),u=n.n(p),_=function(t){function e(){return Object(i.a)(this,e),Object(r.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){return"string"==typeof this.props.option?l.a.createElement("option",{value:this.props.option},this.props.option):"object"==typeof this.props.option?l.a.createElement("option",{value:this.props.option.value},this.props.option.key):null}}]),e}(l.a.Component),d=function(t){function e(){return Object(i.a)(this,e),Object(r.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(a.a)(e,[{key:"renderList",value:function(){var t=this.props.options.map((function(t,e){return l.a.createElement(_,{option:t,key:e})}));return l.a.createElement("select",null,t)}},{key:"render",value:function(){return l.a.createElement("div",{className:u.a.selectContainer},this.renderList())}}]),e}(l.a.Component);d.defaultProps={options:[],multiple:!1},e.default=d},223:function(t,e,n){t.exports={list:"List_list__2VwTv"}},224:function(t,e,n){t.exports={"main-content":"Select_main-content__6nhqN",selectContainer:"Select_selectContainer__2Gc71"}},225:function(t,e,n){n(226),t.exports=n(838)},226:function(t,e,n){"use strict";n.r(e);var i=n(201);n.n(i).a.load({google:{families:["Changa:200,300,400","Open Sans:300,400,700","sans-serif"]}})},402:function(t,e,n){var i={"./Binary_Property/ASCII.js":403,"./Binary_Property/ASCII_Hex_Digit.js":404,"./Binary_Property/Alphabetic.js":405,"./Binary_Property/Any.js":406,"./Binary_Property/Assigned.js":407,"./Binary_Property/Bidi_Control.js":408,"./Binary_Property/Bidi_Mirrored.js":409,"./Binary_Property/Case_Ignorable.js":410,"./Binary_Property/Cased.js":411,"./Binary_Property/Changes_When_Casefolded.js":412,"./Binary_Property/Changes_When_Casemapped.js":413,"./Binary_Property/Changes_When_Lowercased.js":414,"./Binary_Property/Changes_When_NFKC_Casefolded.js":415,"./Binary_Property/Changes_When_Titlecased.js":416,"./Binary_Property/Changes_When_Uppercased.js":417,"./Binary_Property/Dash.js":418,"./Binary_Property/Default_Ignorable_Code_Point.js":419,"./Binary_Property/Deprecated.js":420,"./Binary_Property/Diacritic.js":421,"./Binary_Property/Emoji.js":422,"./Binary_Property/Emoji_Component.js":423,"./Binary_Property/Emoji_Modifier.js":424,"./Binary_Property/Emoji_Modifier_Base.js":425,"./Binary_Property/Emoji_Presentation.js":426,"./Binary_Property/Extended_Pictographic.js":427,"./Binary_Property/Extender.js":428,"./Binary_Property/Grapheme_Base.js":429,"./Binary_Property/Grapheme_Extend.js":430,"./Binary_Property/Hex_Digit.js":431,"./Binary_Property/IDS_Binary_Operator.js":432,"./Binary_Property/IDS_Trinary_Operator.js":433,"./Binary_Property/ID_Continue.js":434,"./Binary_Property/ID_Start.js":435,"./Binary_Property/Ideographic.js":436,"./Binary_Property/Join_Control.js":437,"./Binary_Property/Logical_Order_Exception.js":438,"./Binary_Property/Lowercase.js":439,"./Binary_Property/Math.js":440,"./Binary_Property/Noncharacter_Code_Point.js":441,"./Binary_Property/Pattern_Syntax.js":442,"./Binary_Property/Pattern_White_Space.js":443,"./Binary_Property/Quotation_Mark.js":444,"./Binary_Property/Radical.js":445,"./Binary_Property/Regional_Indicator.js":446,"./Binary_Property/Sentence_Terminal.js":447,"./Binary_Property/Soft_Dotted.js":448,"./Binary_Property/Terminal_Punctuation.js":449,"./Binary_Property/Unified_Ideograph.js":450,"./Binary_Property/Uppercase.js":451,"./Binary_Property/Variation_Selector.js":452,"./Binary_Property/White_Space.js":453,"./Binary_Property/XID_Continue.js":454,"./Binary_Property/XID_Start.js":455,"./General_Category/Cased_Letter.js":456,"./General_Category/Close_Punctuation.js":457,"./General_Category/Connector_Punctuation.js":458,"./General_Category/Control.js":459,"./General_Category/Currency_Symbol.js":460,"./General_Category/Dash_Punctuation.js":461,"./General_Category/Decimal_Number.js":462,"./General_Category/Enclosing_Mark.js":463,"./General_Category/Final_Punctuation.js":464,"./General_Category/Format.js":465,"./General_Category/Initial_Punctuation.js":466,"./General_Category/Letter.js":467,"./General_Category/Letter_Number.js":468,"./General_Category/Line_Separator.js":469,"./General_Category/Lowercase_Letter.js":470,"./General_Category/Mark.js":471,"./General_Category/Math_Symbol.js":472,"./General_Category/Modifier_Letter.js":473,"./General_Category/Modifier_Symbol.js":474,"./General_Category/Nonspacing_Mark.js":475,"./General_Category/Number.js":476,"./General_Category/Open_Punctuation.js":477,"./General_Category/Other.js":478,"./General_Category/Other_Letter.js":479,"./General_Category/Other_Number.js":480,"./General_Category/Other_Punctuation.js":481,"./General_Category/Other_Symbol.js":482,"./General_Category/Paragraph_Separator.js":483,"./General_Category/Private_Use.js":484,"./General_Category/Punctuation.js":485,"./General_Category/Separator.js":486,"./General_Category/Space_Separator.js":487,"./General_Category/Spacing_Mark.js":488,"./General_Category/Surrogate.js":489,"./General_Category/Symbol.js":490,"./General_Category/Titlecase_Letter.js":491,"./General_Category/Unassigned.js":492,"./General_Category/Uppercase_Letter.js":493,"./Script/Adlam.js":494,"./Script/Ahom.js":495,"./Script/Anatolian_Hieroglyphs.js":496,"./Script/Arabic.js":497,"./Script/Armenian.js":498,"./Script/Avestan.js":499,"./Script/Balinese.js":500,"./Script/Bamum.js":501,"./Script/Bassa_Vah.js":502,"./Script/Batak.js":503,"./Script/Bengali.js":504,"./Script/Bhaiksuki.js":505,"./Script/Bopomofo.js":506,"./Script/Brahmi.js":507,"./Script/Braille.js":508,"./Script/Buginese.js":509,"./Script/Buhid.js":510,"./Script/Canadian_Aboriginal.js":511,"./Script/Carian.js":512,"./Script/Caucasian_Albanian.js":513,"./Script/Chakma.js":514,"./Script/Cham.js":515,"./Script/Cherokee.js":516,"./Script/Common.js":517,"./Script/Coptic.js":518,"./Script/Cuneiform.js":519,"./Script/Cypriot.js":520,"./Script/Cyrillic.js":521,"./Script/Deseret.js":522,"./Script/Devanagari.js":523,"./Script/Dogra.js":524,"./Script/Duployan.js":525,"./Script/Egyptian_Hieroglyphs.js":526,"./Script/Elbasan.js":527,"./Script/Elymaic.js":528,"./Script/Ethiopic.js":529,"./Script/Georgian.js":530,"./Script/Glagolitic.js":531,"./Script/Gothic.js":532,"./Script/Grantha.js":533,"./Script/Greek.js":534,"./Script/Gujarati.js":535,"./Script/Gunjala_Gondi.js":536,"./Script/Gurmukhi.js":537,"./Script/Han.js":538,"./Script/Hangul.js":539,"./Script/Hanifi_Rohingya.js":540,"./Script/Hanunoo.js":541,"./Script/Hatran.js":542,"./Script/Hebrew.js":543,"./Script/Hiragana.js":544,"./Script/Imperial_Aramaic.js":545,"./Script/Inherited.js":546,"./Script/Inscriptional_Pahlavi.js":547,"./Script/Inscriptional_Parthian.js":548,"./Script/Javanese.js":549,"./Script/Kaithi.js":550,"./Script/Kannada.js":551,"./Script/Katakana.js":552,"./Script/Kayah_Li.js":553,"./Script/Kharoshthi.js":554,"./Script/Khmer.js":555,"./Script/Khojki.js":556,"./Script/Khudawadi.js":557,"./Script/Lao.js":558,"./Script/Latin.js":559,"./Script/Lepcha.js":560,"./Script/Limbu.js":561,"./Script/Linear_A.js":562,"./Script/Linear_B.js":563,"./Script/Lisu.js":564,"./Script/Lycian.js":565,"./Script/Lydian.js":566,"./Script/Mahajani.js":567,"./Script/Makasar.js":568,"./Script/Malayalam.js":569,"./Script/Mandaic.js":570,"./Script/Manichaean.js":571,"./Script/Marchen.js":572,"./Script/Masaram_Gondi.js":573,"./Script/Medefaidrin.js":574,"./Script/Meetei_Mayek.js":575,"./Script/Mende_Kikakui.js":576,"./Script/Meroitic_Cursive.js":577,"./Script/Meroitic_Hieroglyphs.js":578,"./Script/Miao.js":579,"./Script/Modi.js":580,"./Script/Mongolian.js":581,"./Script/Mro.js":582,"./Script/Multani.js":583,"./Script/Myanmar.js":584,"./Script/Nabataean.js":585,"./Script/Nandinagari.js":586,"./Script/New_Tai_Lue.js":587,"./Script/Newa.js":588,"./Script/Nko.js":589,"./Script/Nushu.js":590,"./Script/Nyiakeng_Puachue_Hmong.js":591,"./Script/Ogham.js":592,"./Script/Ol_Chiki.js":593,"./Script/Old_Hungarian.js":594,"./Script/Old_Italic.js":595,"./Script/Old_North_Arabian.js":596,"./Script/Old_Permic.js":597,"./Script/Old_Persian.js":598,"./Script/Old_Sogdian.js":599,"./Script/Old_South_Arabian.js":600,"./Script/Old_Turkic.js":601,"./Script/Oriya.js":602,"./Script/Osage.js":603,"./Script/Osmanya.js":604,"./Script/Pahawh_Hmong.js":605,"./Script/Palmyrene.js":606,"./Script/Pau_Cin_Hau.js":607,"./Script/Phags_Pa.js":608,"./Script/Phoenician.js":609,"./Script/Psalter_Pahlavi.js":610,"./Script/Rejang.js":611,"./Script/Runic.js":612,"./Script/Samaritan.js":613,"./Script/Saurashtra.js":614,"./Script/Sharada.js":615,"./Script/Shavian.js":616,"./Script/Siddham.js":617,"./Script/SignWriting.js":618,"./Script/Sinhala.js":619,"./Script/Sogdian.js":620,"./Script/Sora_Sompeng.js":621,"./Script/Soyombo.js":622,"./Script/Sundanese.js":623,"./Script/Syloti_Nagri.js":624,"./Script/Syriac.js":625,"./Script/Tagalog.js":626,"./Script/Tagbanwa.js":627,"./Script/Tai_Le.js":628,"./Script/Tai_Tham.js":629,"./Script/Tai_Viet.js":630,"./Script/Takri.js":631,"./Script/Tamil.js":632,"./Script/Tangut.js":633,"./Script/Telugu.js":634,"./Script/Thaana.js":635,"./Script/Thai.js":636,"./Script/Tibetan.js":637,"./Script/Tifinagh.js":638,"./Script/Tirhuta.js":639,"./Script/Ugaritic.js":640,"./Script/Vai.js":641,"./Script/Wancho.js":642,"./Script/Warang_Citi.js":643,"./Script/Yi.js":644,"./Script/Zanabazar_Square.js":645,"./Script_Extensions/Adlam.js":646,"./Script_Extensions/Ahom.js":647,"./Script_Extensions/Anatolian_Hieroglyphs.js":648,"./Script_Extensions/Arabic.js":649,"./Script_Extensions/Armenian.js":650,"./Script_Extensions/Avestan.js":651,"./Script_Extensions/Balinese.js":652,"./Script_Extensions/Bamum.js":653,"./Script_Extensions/Bassa_Vah.js":654,"./Script_Extensions/Batak.js":655,"./Script_Extensions/Bengali.js":656,"./Script_Extensions/Bhaiksuki.js":657,"./Script_Extensions/Bopomofo.js":658,"./Script_Extensions/Brahmi.js":659,"./Script_Extensions/Braille.js":660,"./Script_Extensions/Buginese.js":661,"./Script_Extensions/Buhid.js":662,"./Script_Extensions/Canadian_Aboriginal.js":663,"./Script_Extensions/Carian.js":664,"./Script_Extensions/Caucasian_Albanian.js":665,"./Script_Extensions/Chakma.js":666,"./Script_Extensions/Cham.js":667,"./Script_Extensions/Cherokee.js":668,"./Script_Extensions/Common.js":669,"./Script_Extensions/Coptic.js":670,"./Script_Extensions/Cuneiform.js":671,"./Script_Extensions/Cypriot.js":672,"./Script_Extensions/Cyrillic.js":673,"./Script_Extensions/Deseret.js":674,"./Script_Extensions/Devanagari.js":675,"./Script_Extensions/Dogra.js":676,"./Script_Extensions/Duployan.js":677,"./Script_Extensions/Egyptian_Hieroglyphs.js":678,"./Script_Extensions/Elbasan.js":679,"./Script_Extensions/Elymaic.js":680,"./Script_Extensions/Ethiopic.js":681,"./Script_Extensions/Georgian.js":682,"./Script_Extensions/Glagolitic.js":683,"./Script_Extensions/Gothic.js":684,"./Script_Extensions/Grantha.js":685,"./Script_Extensions/Greek.js":686,"./Script_Extensions/Gujarati.js":687,"./Script_Extensions/Gunjala_Gondi.js":688,"./Script_Extensions/Gurmukhi.js":689,"./Script_Extensions/Han.js":690,"./Script_Extensions/Hangul.js":691,"./Script_Extensions/Hanifi_Rohingya.js":692,"./Script_Extensions/Hanunoo.js":693,"./Script_Extensions/Hatran.js":694,"./Script_Extensions/Hebrew.js":695,"./Script_Extensions/Hiragana.js":696,"./Script_Extensions/Imperial_Aramaic.js":697,"./Script_Extensions/Inherited.js":698,"./Script_Extensions/Inscriptional_Pahlavi.js":699,"./Script_Extensions/Inscriptional_Parthian.js":700,"./Script_Extensions/Javanese.js":701,"./Script_Extensions/Kaithi.js":702,"./Script_Extensions/Kannada.js":703,"./Script_Extensions/Katakana.js":704,"./Script_Extensions/Kayah_Li.js":705,"./Script_Extensions/Kharoshthi.js":706,"./Script_Extensions/Khmer.js":707,"./Script_Extensions/Khojki.js":708,"./Script_Extensions/Khudawadi.js":709,"./Script_Extensions/Lao.js":710,"./Script_Extensions/Latin.js":711,"./Script_Extensions/Lepcha.js":712,"./Script_Extensions/Limbu.js":713,"./Script_Extensions/Linear_A.js":714,"./Script_Extensions/Linear_B.js":715,"./Script_Extensions/Lisu.js":716,"./Script_Extensions/Lycian.js":717,"./Script_Extensions/Lydian.js":718,"./Script_Extensions/Mahajani.js":719,"./Script_Extensions/Makasar.js":720,"./Script_Extensions/Malayalam.js":721,"./Script_Extensions/Mandaic.js":722,"./Script_Extensions/Manichaean.js":723,"./Script_Extensions/Marchen.js":724,"./Script_Extensions/Masaram_Gondi.js":725,"./Script_Extensions/Medefaidrin.js":726,"./Script_Extensions/Meetei_Mayek.js":727,"./Script_Extensions/Mende_Kikakui.js":728,"./Script_Extensions/Meroitic_Cursive.js":729,"./Script_Extensions/Meroitic_Hieroglyphs.js":730,"./Script_Extensions/Miao.js":731,"./Script_Extensions/Modi.js":732,"./Script_Extensions/Mongolian.js":733,"./Script_Extensions/Mro.js":734,"./Script_Extensions/Multani.js":735,"./Script_Extensions/Myanmar.js":736,"./Script_Extensions/Nabataean.js":737,"./Script_Extensions/Nandinagari.js":738,"./Script_Extensions/New_Tai_Lue.js":739,"./Script_Extensions/Newa.js":740,"./Script_Extensions/Nko.js":741,"./Script_Extensions/Nushu.js":742,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":743,"./Script_Extensions/Ogham.js":744,"./Script_Extensions/Ol_Chiki.js":745,"./Script_Extensions/Old_Hungarian.js":746,"./Script_Extensions/Old_Italic.js":747,"./Script_Extensions/Old_North_Arabian.js":748,"./Script_Extensions/Old_Permic.js":749,"./Script_Extensions/Old_Persian.js":750,"./Script_Extensions/Old_Sogdian.js":751,"./Script_Extensions/Old_South_Arabian.js":752,"./Script_Extensions/Old_Turkic.js":753,"./Script_Extensions/Oriya.js":754,"./Script_Extensions/Osage.js":755,"./Script_Extensions/Osmanya.js":756,"./Script_Extensions/Pahawh_Hmong.js":757,"./Script_Extensions/Palmyrene.js":758,"./Script_Extensions/Pau_Cin_Hau.js":759,"./Script_Extensions/Phags_Pa.js":760,"./Script_Extensions/Phoenician.js":761,"./Script_Extensions/Psalter_Pahlavi.js":762,"./Script_Extensions/Rejang.js":763,"./Script_Extensions/Runic.js":764,"./Script_Extensions/Samaritan.js":765,"./Script_Extensions/Saurashtra.js":766,"./Script_Extensions/Sharada.js":767,"./Script_Extensions/Shavian.js":768,"./Script_Extensions/Siddham.js":769,"./Script_Extensions/SignWriting.js":770,"./Script_Extensions/Sinhala.js":771,"./Script_Extensions/Sogdian.js":772,"./Script_Extensions/Sora_Sompeng.js":773,"./Script_Extensions/Soyombo.js":774,"./Script_Extensions/Sundanese.js":775,"./Script_Extensions/Syloti_Nagri.js":776,"./Script_Extensions/Syriac.js":777,"./Script_Extensions/Tagalog.js":778,"./Script_Extensions/Tagbanwa.js":779,"./Script_Extensions/Tai_Le.js":780,"./Script_Extensions/Tai_Tham.js":781,"./Script_Extensions/Tai_Viet.js":782,"./Script_Extensions/Takri.js":783,"./Script_Extensions/Tamil.js":784,"./Script_Extensions/Tangut.js":785,"./Script_Extensions/Telugu.js":786,"./Script_Extensions/Thaana.js":787,"./Script_Extensions/Thai.js":788,"./Script_Extensions/Tibetan.js":789,"./Script_Extensions/Tifinagh.js":790,"./Script_Extensions/Tirhuta.js":791,"./Script_Extensions/Ugaritic.js":792,"./Script_Extensions/Vai.js":793,"./Script_Extensions/Wancho.js":794,"./Script_Extensions/Warang_Citi.js":795,"./Script_Extensions/Yi.js":796,"./Script_Extensions/Zanabazar_Square.js":797,"./index.js":798,"./unicode-version.js":799};function a(t){var e=r(t);return n(e)}function r(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=r,t.exports=a,a.id=402},43:function(t,e,n){t.exports={"main-content":"ContentBox_main-content__2ojF7",contentBox:"ContentBox_contentBox__2yQOR",link:"ContentBox_link__3GLn-",default:"ContentBox_default__2Vi5Y",content:"ContentBox_content__2-7Qm",primary:"ContentBox_primary__pV8o0",success:"ContentBox_success__1tJLl",warning:"ContentBox_warning__lqVjV",cyan:"ContentBox_cyan__15gke",lightCyan:"ContentBox_lightCyan__ltuNS",orange:"ContentBox_orange__3Cm9e",lightOrange:"ContentBox_lightOrange__OBYLf",lime:"ContentBox_lime__2tERw",lightLime:"ContentBox_lightLime__UuL3A",title:"ContentBox_title__IITk5",regular:"ContentBox_regular__1zen-",large:"ContentBox_large__3Dk56"}},821:function(t,e,n){var i={react:n(1)},a=n(40).default.bind(null,i);n(41).default.bind(null,"const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);",a),t.exports=[{type:"markdown",content:"Shared components for DIBK applications"}]},822:function(t,e,n){t.exports={description:"",displayName:"Button",methods:[],props:[{type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'primary'",computed:!1},{value:"'success'",computed:!1},{value:"'warning'",computed:!1}]},required:!1,description:"",defaultValue:{value:"'default'",computed:!1},tags:{},name:"color"},{type:{name:"string"},required:!1,description:"Text content inside button",defaultValue:{value:"'button'",computed:!1},tags:{},name:"content"},{type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'regular'",computed:!1}]},required:!1,description:"",defaultValue:{value:"'regular'",computed:!1},tags:{},name:"size"}],doclets:{},examples:n(823)}},823:function(t,e,n){var i={react:n(1),"./Button.js":n(194)},a=n(40).default.bind(null,i),r=n(41).default.bind(null,"const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst Button$0 = require('./Button.js');\nconst Button = Button$0['Button'] || (Button$0.default || Button$0);",a);t.exports=[{type:"markdown",content:"Regular buttons example:"},{type:"code",content:'<Button content="Click me" color="default" />\n<Button content="Click me" color="primary" />\n<Button content="Click me" color="success" />\n<Button content="Click me" color="warning" />',settings:{},evalInContext:r},{type:"markdown",content:"Small buttons example:"},{type:"code",content:'<Button content="Click me" color="default" size="small" />\n<Button content="Click me" color="primary" size="small" />\n<Button content="Click me" color="success" size="small" />\n<Button content="Click me" color="warning" size="small" />',settings:{},evalInContext:r}]},824:function(t,e,n){t.exports={description:"",displayName:"ContentBox",methods:[],props:[{type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'primary'",computed:!1},{value:"'success'",computed:!1},{value:"'warning'",computed:!1},{value:"'cyan'",computed:!1},{value:"'lightCyan'",computed:!1},{value:"'orange'",computed:!1},{value:"'lightOrange'",computed:!1},{value:"'lime'",computed:!1},{value:"'lightLime'",computed:!1}]},required:!1,description:"",defaultValue:{value:"'default'",computed:!1},tags:{},name:"color"},{type:{name:"string"},required:!1,description:"Text content inside box",defaultValue:{value:"''",computed:!1},tags:{},name:"content"},{defaultValue:{value:"null",computed:!1},required:!1,description:"",tags:{},name:"href"},{type:{name:"string"},required:!1,description:"Content title inside box",defaultValue:{value:"null",computed:!1},tags:{},name:"title"},{type:{name:"enum",value:[{value:"'regular'",computed:!1},{value:"'large'",computed:!1}]},required:!1,description:"",defaultValue:{value:"'regular'",computed:!1},tags:{},name:"titleSize"}],doclets:{},examples:n(825)}},825:function(t,e,n){var i={react:n(1),"./ContentBox.js":n(195)},a=n(40).default.bind(null,i),r=n(41).default.bind(null,"const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst ContentBox$0 = require('./ContentBox.js');\nconst ContentBox = ContentBox$0['ContentBox'] || (ContentBox$0.default || ContentBox$0);",a);t.exports=[{type:"markdown",content:"ContentBoxes without title example:"},{type:"code",content:'<ContentBox content="Box with default color" color="default" />\n<ContentBox content="Box with primary color" color="primary" />\n<ContentBox content="Box with success color" color="success" />\n<ContentBox content="Box with warning color" color="warning" />\n<ContentBox content="Box with cyan color" color="cyan" />\n<ContentBox content="Box with light cyan color" color="lightCyan" />\n<ContentBox content="Box with orange color" color="orange" />\n<ContentBox content="Box with light orange color" color="lightOrange" />\n<ContentBox content="Box with lime color" color="lime" />\n<ContentBox content="Box with light lime color" color="lightLime" />',settings:{},evalInContext:r},{type:"markdown",content:"ContentBoxes with title and href example:"},{type:"code",content:'<ContentBox content="Box with default color" href="#" color="default" title="Box title" />\n<ContentBox content="Box with primary color" href="#" color="primary" title="Box title" />\n<ContentBox content="Box with success color" href="#" color="success" title="Box title" />\n<ContentBox content="Box with warning color" href="#" color="warning" title="Box title" />\n<ContentBox content="Box with cyan color" href="#" color="cyan" title="Box title" />\n<ContentBox content="Box with light cyan color" href="#" color="lightCyan" title="Box title" />\n<ContentBox content="Box with orange color" href="#" color="orange" title="Box title" />\n<ContentBox content="Box with light orange color" href="#" color="lightOrange" title="Box title" />\n<ContentBox content="Box with lime color" href="#" color="lime" title="Box title" />\n<ContentBox content="Box with light lime color" href="#" color="lightLime" title="Box title" />',settings:{},evalInContext:r},{type:"markdown",content:"ContentBoxes with large title:"},{type:"code",content:'<ContentBox content="Box with default color" color="default" title="Box title" titleSize="large" />\n<ContentBox content="Box with primary color" color="primary" title="Box title" titleSize="large" />\n<ContentBox content="Box with success color" color="success" title="Box title" titleSize="large" />\n<ContentBox content="Box with warning color" color="warning" title="Box title" titleSize="large" />\n<ContentBox content="Box with cyan color" color="cyan" title="Box title" titleSize="large" />\n<ContentBox content="Box with light cyan color" color="lightCyan" title="Box title" titleSize="large" />\n<ContentBox content="Box with orange color" color="orange" title="Box title" titleSize="large" />\n<ContentBox content="Box with light orange color" color="lightOrange" title="Box title" titleSize="large" />\n<ContentBox content="Box with lime color" color="lime" title="Box title" titleSize="large" />\n<ContentBox content="Box with light lime color" color="lightLime" title="Box title" titleSize="large" />',settings:{},evalInContext:r}]},826:function(t,e,n){t.exports={description:"",displayName:"Header",methods:[],props:[{type:{name:"string"},required:!1,description:"Text content inside button",defaultValue:{value:"''",computed:!1},tags:{},name:"content"},{type:{name:"enum",value:[{value:"1",computed:!1},{value:"2",computed:!1},{value:"3",computed:!1},{value:"4",computed:!1},{value:"5",computed:!1}]},required:!1,description:"",defaultValue:{value:"1",computed:!1},tags:{},name:"size"}],doclets:{},examples:n(827)}},827:function(t,e,n){var i={react:n(1),"./Header.js":n(196)},a=n(40).default.bind(null,i),r=n(41).default.bind(null,"const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst Header$0 = require('./Header.js');\nconst Header = Header$0['Header'] || (Header$0.default || Header$0);",a);t.exports=[{type:"markdown",content:"Title examples:"},{type:"code",content:'<Header content="Title with size 1 (default)"/>\n<Header content="Title with size 2" size={2}/>\n<Header content="Title with size 3" size={3}/>\n<Header content="Title with size 4" size={4}/>\n<Header content="Title with size 5" size={5}/>',settings:{},evalInContext:r}]},828:function(t,e,n){t.exports={description:"",displayName:"List",methods:[],props:[{type:{name:"arrayOf",value:{name:"string"}},required:!1,description:"",defaultValue:{value:"[]",computed:!1},tags:{},name:"listItems"},{type:{name:"bool"},required:!1,description:"",defaultValue:{value:"false",computed:!1},tags:{},name:"ordered"}],doclets:{},examples:n(829)}},829:function(t,e,n){var i={react:n(1),"./List.js":n(197)},a=n(40).default.bind(null,i),r=n(41).default.bind(null,"const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst List$0 = require('./List.js');\nconst List = List$0['List'] || (List$0.default || List$0);",a);t.exports=[{type:"markdown",content:"Unordered List example:"},{type:"code",content:"<List listItems={['item 1', 'item 2', 'item 3']} />",settings:{},evalInContext:r},{type:"markdown",content:"Ordered List example:"},{type:"code",content:"<List listItems={['item 1', 'item 2', 'item 3']} ordered={true} />",settings:{},evalInContext:r}]},830:function(t,e,n){t.exports={description:"",displayName:"LoadingAnimation",methods:[],props:[{type:{name:"bool"},required:!1,description:"",defaultValue:{value:"true",computed:!1},tags:{},name:"active"},{type:{name:"bool"},required:!1,description:"",defaultValue:{value:"false",computed:!1},tags:{},name:"fixed"},{type:{name:"string"},required:!1,description:"Text content inside button",defaultValue:{value:"''",computed:!1},tags:{},name:"message"}],doclets:{},examples:n(831)}},831:function(t,e,n){var i={react:n(1),"./LoadingAnimation.js":n(198)},a=n(40).default.bind(null,i),r=n(41).default.bind(null,"const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst LoadingAnimation$0 = require('./LoadingAnimation.js');\nconst LoadingAnimation = LoadingAnimation$0['LoadingAnimation'] || (LoadingAnimation$0.default || LoadingAnimation$0);",a);t.exports=[{type:"markdown",content:"LoadingAnimation example:"},{type:"code",content:'<LoadingAnimation message="Loading..." />',settings:{},evalInContext:r}]},832:function(t,e,n){t.exports=n.p+"static/media/dibk-logo-mobile.3d8cd6bf.svg"},833:function(t,e,n){t.exports=n.p+"static/media/dibk-logo.2516cf41.svg"},834:function(t,e,n){t.exports={description:"",displayName:"NavigationBar",methods:[],props:[{type:{name:"array"},required:!1,description:"Main links in navigation bar",defaultValue:{value:"[]",computed:!1},tags:{},name:"primaryListItems"},{type:{name:"array"},required:!1,description:"Secondary links in navigation bar",defaultValue:{value:"[]",computed:!1},tags:{},name:"secondaryListItems"}],doclets:{},examples:n(835)}},835:function(t,e,n){var i={react:n(1),"./NavigationBar.js":n(199)},a=n(40).default.bind(null,i),r=n(41).default.bind(null,"const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst NavigationBar$0 = require('./NavigationBar.js');\nconst NavigationBar = NavigationBar$0['NavigationBar'] || (NavigationBar$0.default || NavigationBar$0);",a);t.exports=[{type:"markdown",content:"NavigationBar example:"},{type:"code",content:"<NavigationBar primaryListItems={[{name: 'Primary item 1', listItems:['Sub item 1', 'Sub item 2']}, 'Primary item 2', {name: 'Primary item 3', href: '#'}]} secondaryListItems={['Secondary item 1', 'Secondary item 2']} />",settings:{},evalInContext:r}]},836:function(t,e,n){t.exports={description:"",displayName:"Select",methods:[],props:[{type:{name:"bool"},required:!1,description:"",defaultValue:{value:"false",computed:!1},tags:{},name:"multiple"},{type:{name:"arrayOf",value:{name:"union",value:[{name:"string"},{name:"shape",value:{key:{name:"string",required:!1},value:{name:"string",required:!1}}}]}},required:!1,description:"",defaultValue:{value:"[]",computed:!1},tags:{},name:"options"}],doclets:{},examples:n(837)}},837:function(t,e,n){var i={react:n(1),"./Select.js":n(200)},a=n(40).default.bind(null,i),r=n(41).default.bind(null,"const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst Select$0 = require('./Select.js');\nconst Select = Select$0['Select'] || (Select$0.default || Select$0);",a);t.exports=[{type:"markdown",content:"Select example:"},{type:"code",content:"<Select options={['option 1', 'option 2', {key: 'option 3', value: 'value 3'}]} />",settings:{},evalInContext:r}]}},[[225,1,2]]]);