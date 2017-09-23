/*vue component*/
var templates = {
	popBox: 
		'<div class="pop-warning flex" ref="popBox">\
			<div class="pop-warning-inner ">\
				<ul>\
					<li v-for="item in list">{{item}}</li>\
				</ul>\
			</div>\
		</div>',
	popConfirmBox:
		'<div class="pop-warning pop-confirm flex">\
			<div class="pop-warning-inner ">\
				<div class="top">提示</div>\
				<div class="title">{{msg}}</div>\
				<div class="flex flex-hv-center">\
					<div class="flex-item text-center" v-on:click="close">取消</div>\
					<div class="flex-item text-center" v-on:click="confirm">确定</div>\
				</div>\
			</div>\
		</div>',
	topbar: 
		'<div class="topbar flex flex-hv-center">\
			<div class="btn btn-service">\
				<i class="icon icon-service"></i>\
			</div>\
			<div class="search-bar flex-item">\
				<input type="text" placeholder="请输入关键字搜索" class="search-input" />\
			</div>\
			<div class="btn btn-search">\
				<i class="icon icon-search"></i>\
			</div>\
		</div>',
	footbar: 
		'<div class="footbar">\
				<ul class="flex flex-hv-center">\
					<li class="flex-item" v-bind:class="{active: propsData.activeIndex === 0}">\
						<a href="index.html">\
							<i class="icon icon-home"></i>\
							<span>首页</span>\
						</a>\
					</li>\
					<li class="flex-item">\
						<a class="btn btn-mm">\
							<i class="icon icon-mm"></i>\
							<span>买卖</span>\
						</a>\
					</li>\
					<li class="flex-item" v-bind:class="{active: propsData.activeIndex === 2}">\
						<a href="member.html">\
							<i class="icon icon-member"></i>\
							<span>个人中心</span>\
						</a>\
					</li>\
				</ul>\
			</div>',
	swiperBox:
		'<div class="swiper-container" v-if="propsData.items && propsData.items.length>0">\
			<div class="swiper-wrapper">\
				<div class="swiper-slide" v-for="(el, key) in propsData.items">\
					<div class="flex flex-hv-center">\
						<div class="wrap-img">\
							<img v-on:error="imgError" v-on:load="imgLoad" v-bind:src="el.imgSrc || \'static/images/cos_1.png\'" />\
						</div>\
					</div>\
				</div>\
			</div>\
			<div ref="pagination" class="swiper-pagination"></div>\
		</div>',
	tabBox: 
		'<section class="tab-section">\
			<nav class="tab-nav">\
				<ul class="flex">\
					<li class="flex-item text-center" v-bind:class="itemClass(key)" v-for="(el, key) in propsData.items" @click="hanleTab(key)">\
						<div class="flex-hv-center">\
							<div class="item-inner">\
								<span>{{el.text}}</span>\
								<i :class="\'icon-\'+el.icon" v-if="el.icon">{{el.icon}}</i>\
							</div>\
						</div>\
						<div class="line" v-if="el.icon"></div>\
					</li>\
				</ul>\
			</nav>\
			<div class="tab-content flex">\
				<div class="item" v-for="(el, key) in propsData.items" v-bind:class="itemClass(key)">\
					<component :props-data="el" v-bind:is="item" v-for="(item, index) in el.comp" :key="index"></component>\
				</div>\
			</div>\
		</section>',
	scrollViewBox:
		'<section ref="scrollview" class="scroll-view" v-on:touchmove="handleMove" v-on:scroll="handleMove">\
			<Child :props-data="propsData" :scroll-data="scrolling"></Child>\
			<div ref="loadingtool" v-if="scrolling.status!==null && scrolling.status!==3" class="loading-tool">{{scrolling.msg}}</div>\
		</section>',
	errorViewBox:
		'<section class="error-view flex flex-hv-center" v-if="propsData.status != 0">{{propsData.msg}}</section>',
	newsListBox:
		'<section class="wrap-list-quotes">\
			<Errorview :props-data="error"></Errorview>\
			<ul class="list-new">\
				<li v-on:click="handleClickEl(el,$event)" v-for="(el, key) in propsData.items">\
					<div class="tit flex">\
						<div class="text-overflow"><span v-if="el.type">[{{el.type}}]</span>{{el.title}}</div>\
					</div>\
					<div class="descrip flex" v-if="el.description">\
						<div class="text-overflow-2">{{el.description}}</div>\
					</div>\
					<div class="info flex">\
						<div class="flex-2 flex">\
							<span class="label">来源:</span>\
							<span class="text flex-item text-overflow">{{el.source}}</span>\
						</div>\
						<div class="flex-2 flex">\
							<span class="text flex-item text-overflow">{{el.pubDateStr}}</span>\
						</div>\
						<div class="flex">\
							<div class="flex">\
								<i class="icon icon-thumbs"></i>\
								<span class="text">{{el.numThumbs}}</span>\
							</div>\
						</div>\
					</div>\
				</li>\
			</ul>\
			<div v-if="propsData.moreLink" v-on:click="handleMore(propsData)" class="more-link-bar border-t flex-hv-center pd-a-culm">\
				<a class="more-link">查看更多</a>\
			</div>\
		</section>',
	quotesListBox:
		'<section class="wrap-list-quotes">\
			<Errorview :props-data="error"></Errorview>\
			<ul class="list-new list-quotes">\
				<li v-on:click="handleClickEl(el,$event)" v-for="(el, key) in propsData.items">\
					<div class="tit text-overflow">{{el.title}}</div>\
					<div class="info flex">\
						<div class="flex-2 flex">\
							<span class="label">来源:</span>\
							<span class="text flex-item text-overflow">{{el.source}}</span>\
						</div>\
						<div class="flex-2 flex">\
							<span class="text flex-item text-overflow">{{el.pubDateStr}}</span>\
						</div>\
						<div class="flex">\
							<div class="flex">\
								<i class="icon icon-thumbs"></i>\
								<span class="text">{{el.numThumbs}}</span>\
							</div>\
						</div>\
					</div>\
				</li>\
			</ul>\
			<div v-if="propsData.moreLink" v-on:click="handleMore(propsData)" class="more-link-bar border-t flex-hv-center pd-a-culm">\
				<a class="more-link">查看更多</a>\
			</div>\
		</section>',
	quoteslinksBox:
		'<div class="bg-white-box mg-b-culm">\
			<div class="quicklink">\
				<h2 class="flex flex-hv-center green mg-b-culm">\
					<div class="flex flex-v-center">\
						<i class="icon icon-line"></i>\
						<span class="text">相关最新报价</span>\
						<i class="icon icon-line"></i>\
					</div>\
				</h2>\
				<div class="nav-quotes flex">\
					<div class="nav-item" v-for="(el, key) in items">\
						<div class="nav-item-inner" v-on:click="handleClickEl(el,$event)">\
							<span>{{el.name}}</span>\
						</div>\
					</div>\
				</div>\
			</div>\
		</div>',
	proBox:
		'<section class="wrap-list-prd">\
			<Errorview :props-data="error"></Errorview>\
			<ul class="list-prd flex-v" v-if="propsData.items && propsData.items.length>0">\
				<li v-for="(el, key) in propsData.items" v-on:click="handleClickEl(el,$event)" :class="{even:key%2===0,odd:key%2===1}">\
					<div class="li-inner">\
						<figure class="flex">\
							<div class="wrap-img flex-hv-center"><img v-on:error="imgError" v-on:load="imgLoad" v-bind:src="el.imgSrc || \'static/images/cos_3.png\'" /></div>\
							<figcaption class="des-prd flex-1 flex flex-v flex-h-between">\
								<div class="flex title-des">\
									<div class="flex-1 text-overflow-2">{{el.title}}</div>\
								</div>\
								<div class="flex font-m">\
									<div class="label">月供:</div>\
									<div class="value text-overflow">{{el.supplyMonth}}{{el.unit}}</div>\
								</div>\
								<div class="flex">\
									<div class="flex-1 value price text-overflow color-red"><i v-if="el.price != \'面议\' && el.price != null" class="icon icon-rmb">￥</i><span>{{el.price || \'面议\'}}</span></div>\
									<div class="flex-1 mg-l-line text-right">\
										<div class="value area text-overflow">{{el.area || el.areaName}}</div>\
									</div>\
								</div>\
							</figcaption>\
						</figure>\
					</div>\
				</li>\
			</ul>\
		</section>',
	ztbBox:
		'<section class="wrap-list-prd">\
			<Errorview :props-data="error"></Errorview>\
			<ul class="list-prd flex-v" v-if="propsData.items && propsData.items.length>0">\
				<li v-for="(el, key) in propsData.items" v-on:click="handleClickEl(el,$event)" :class="{even:key%2===0,odd:key%2===1}">\
					<div class="li-inner">\
						<figure class="flex">\
							<div class="wrap-img flex-hv-center"><img v-on:error="imgError" v-on:load="imgLoad" v-bind:src="el.imgSrc || \'static/images/cos_3.png\'" /></div>\
							<figcaption class="des-prd flex-1 flex flex-v flex-h-between">\
								<div class="title-des flex">\
									<div class="flex-1 text-overflow">{{el.title}}</div>\
								</div>\
								<div class="flex font-m">\
									<div class="label">起拍价:</div>\
									<div class="value text-overflow flex-1 color-red"><i v-if="el.price != \'面议\' && el.price != 0" class="icon icon-rmb">￥</i><span>{{el.price || \'无\'}}</span></div>\
								</div>\
								<div class="flex font-m">\
									<div class="label">数量:</div>\
									<div class="value text-overflow flex-1">{{el.amount}} {{el.unit}}</div>\
								</div>\
								<div class="flex start-time" v-if="el.startTime">\
									<div class="value">{{el.startTime}} 开始</span></div>\
								</div>\
								<div class="flex end-time" v-if="el.endTime">\
									<div class="value">进行中</span></div>\
								</div>\
								<div class="flex ztb-status" v-bind:class="\'color-\'+el.status" v-if="el.status === 4 || el.status === 5">\
									<div class="value">{{tenderStatusStr[el.status]}}</span></div>\
								</div>\
							</figcaption>\
						</figure>\
					</div>\
				</li>\
			</ul>\
		</section>',
	supplyBox:
		'<section class="wrap-list-prd">\
			<Errorview :props-data="error"></Errorview>\
			<ul class="list-prd flex-v" v-if="propsData.items && propsData.items.length>0">\
				<li v-for="(el, key) in propsData.items" v-on:click="handleClickEl(el,$event)" :class="{even:key%2===0,odd:key%2===1}">\
					<div class="li-inner">\
						<figure class="flex" v-if="propsData.dataParam.typeId !== \'2\'">\
							<div class="wrap-img flex-hv-center"><img v-on:error="imgError" v-on:load="imgLoad" v-bind:src="el.imgSrc || \'static/images/cos_3.png\'" /></div>\
							<figcaption class="des-prd flex-1 flex flex-v flex-h-between">\
								<div class="title-des flex">\
									<div class="flex-1 text-overflow">{{el.title}}</div>\
								</div>\
								<div class="flex supply font-m" v-if="el.companyName">\
									<div class="label">供应:</div>\
									<div class="value text-overflow flex-1"><span class="color-red">{{el.qty || \'-\'}} </span><span>{{el.unit || \'吨\'}}</span></div>\
								</div>\
								<div class="flex demand font-m" v-if="el.buyer">\
									<div class="label">求购:</div>\
									<div class="value text-overflow flex-1"><span class="color-red">{{el.qty || \'-\'}} </span><span>{{el.unit || \'吨\'}}</span></div>\
								</div>\
								<div class="flex font-m" v-if="el.date">\
									<div class="value date">{{el.date}}</div>\
								</div>\
								<div class="flex">\
									<div class="flex-1 value price text-overflow color-red"><i v-if="el.price != \'面议\' && el.price != null" class="icon icon-rmb">￥</i><span>{{el.price || \'面议\'}}</span></div>\
									<div class="flex-1 mg-l-line text-right">\
										<div class="value area text-overflow">{{el.area || el.areaName}}</div>\
									</div>\
								</div>\
							</figcaption>\
						</figure>\
						<figure class="flex figure-com" v-if="propsData.dataParam.typeId === \'2\'">\
							<figcaption class="des-prd flex-1">\
								<div class="title-des flex">\
									<div class="flex-1 text-overflow">{{el.title}}</div>\
								</div>\
								<div class="flex">\
									<div class="label">主营行业：</div>\
									<div class="value text-overflow flex-1">{{el.productCategorys}}</div>\
								</div>\
								<div class="flex">\
									<div class="label">公司地址：</div>\
									<div class="value text-overflow flex-1">{{el.address}}</div>\
								</div>\
							</figcaption>\
						</figure>\
					</div>\
				</li>\
			</ul>\
		</section>',
	contractBox:
		'<section class="wrap-list-prd">\
			<Errorview :props-data="error"></Errorview>\
			<ul class="list-prd flex-v" v-if="propsData.items && propsData.items.length>0">\
				<li v-for="(el, key) in propsData.items" v-on:click="handleClickEl(el,$event)" :class="{even:key%2===0,odd:key%2===1}">\
					<div class="li-inner">\
						<figure class="flex">\
							<div class="wrap-img flex-hv-center"><img v-on:error="imgError" v-on:load="imgLoad" v-bind:src="el.imgSrc || \'static/images/cos_3.png\'" /></div>\
							<figcaption class="des-prd flex-1 flex flex-v flex-h-between">\
								<div class="title-des flex">\
									<div class="flex-1 text-overflow-2">{{el.title}}</div>\
								</div>\
								<div class="flex font-m" v-if="el.contractNo">\
									<div class="label">合同总数量:</div>\
									<div class="value text-overflow flex-1">{{el.quantity+el.unit}}</div>\
								</div>\
								<div class="flex font-m" v-if="el.companyName">\
									<div class="label">可使用数量:</div>\
									<div class="value text-overflow flex-1">{{el.canUseCount+el.unit}}</span></div>\
								</div>\
								<div class="flex">\
									<div class="value text-overflow color-red price font-strong"><i v-if="el.price != \'面议\' && el.price != null" class="icon icon-rmb">￥</i><span>{{el.contractPrice}}</span></div>\
									<del class="delete-value">挂牌价￥{{el.price}}</del>\
								</div>\
							</figcaption>\
						</figure>\
					</div>\
				</li>\
			</ul>\
		</section>',
	companyBox:
		'<section class="wrap-list-company">\
			<Errorview :props-data="error"></Errorview>\
			<ul class="list-culm-2 flex">\
				<li v-for="(el, key) in propsData.items" v-on:click="handleClickEl(el,$event)" :class="{even:key%2===0,odd:key%2===1}">\
					<div class="li-inner">\
						<figure>\
							<div class="wrap-img flex-hv-center"><img v-on:error="imgError" v-on:load="imgLoad" v-bind:src="el.imgSrc || el.imgPath || \'static/images/cos_2.png\'" /></div>\
							<figcaption class="des-prd">\
								<div class="title-des">\
									<div class="text-overflow">{{el.title}}</div>\
								</div>\
							</figcaption>\
						</figure>\
					</div>\
				</li>\
			</ul>\
		</section>',
	companyListBox:
		'<section class="wrap-list-prd">\
			<Errorview :props-data="error"></Errorview>\
			<ul class="list-prd list-company flex-v" v-if="propsData.items && propsData.items.length>0">\
				<li v-for="(el, key) in propsData.items" v-on:click="handleClickEl(el,$event)" :class="{even:key%2===0,odd:key%2===1}">\
					<div class="li-inner">\
						<figure class="flex">\
							<figcaption class="des-prd flex-1 flex flex-v flex-h-between">\
								<div class="title-des flex">\
									<div class="flex-1 text-overflow">{{el.title}}</div>\
								</div>\
								<div class="flex">\
									<div class="label">主营行业：</div>\
									<div class="value text-overflow flex-1"><span>{{el.productCategorys}}</span></div>\
								</div>\
								<div class="flex">\
									<div class="label">公司地址：</div>\
									<div class="value text-overflow flex-1">{{el.areaName}}</div>\
								</div>\
							</figcaption>\
						</figure>\
					</div>\
				</li>\
			</ul>\
		</section>',
	siblingsBox:
		'<ul class="list-line list-culm-1" v-if="propsData.data">\
			<li class="flex-h-between" :linkid="propsData.data.prev.articleId" v-if="propsData.data.prev.articleId" v-on:click="handleClickEl(propsData.data.prev)">\
				<div class="text-overflow">上一篇：{{propsData.data.prev.title}}</div>\
				<i class="icon icon-arr-right">></i>\
			</li>\
			<li class="flex-h-between" :linkid="propsData.data.next.articleId" v-if="propsData.data.next.articleId" v-on:click="handleClickEl(propsData.data.next)">\
				<div class="text-overflow">下一篇：{{propsData.data.next.title}}</div>\
				<i class="icon icon-arr-right">></i>\
			</li>\
		</ul>',
	productsTab:
		'<nav class="products-tab">\
				<ul class="flex flex-hv-center">\
					<li class="flex-item" v-for="(el, key) in items" v-bind:class="{active: key === propsData.activeIndex}" v-on:click="handleLink(el.link)">\
						<a>{{el.name}}</a>\
					</li>\
				</ul>\
			</nav>',
	quotesTable:
		'<div class="table-quotes pd-a-culm">\
			<div class="flex flex-h-between border-b pd-b-line">\
				<span>今日汨罗最新铜价</span>\
				<span>单位：元 / 吨</span>\
			</div>\
			<ul class="list-culm-2 flex border-b">\
				<li class="flex-h-between"><span>光亮铜</span><span class="color-red">40600</span></li>\
				<li class="flex-h-between"><span>无神光亮铜</span><span class="color-red">40600</span></li>\
				<li class="flex-h-between"><span>镀铅铜光亮铜</span><span class="color-red">40600</span></li>\
				<li class="flex-h-between"><span>覆铜板光亮铜</span><span class="color-red">40600</span></li>\
				<li class="flex-h-between"><span>期限变压器铜</span><span class="color-red">40600</span></li>\
				<li class="flex-h-between"><span>变压器铜</span><span class="color-red">40600</span></li>\
			</ul>\
		</div>',
	articleDetailBox:
		'<div class="information_detail">\
			<Errorview :props-data="error"></Errorview>\
			<div v-if="propsData.data">\
				<h1 class="title mg-b-line">{{propsData.data.title}}</h1>\
				<div class="info mg-b-culm cf">\
					<div class="left">\
						<span>来源:</span>\
						<span>{{propsData.data.source}}</span>\
					</div>\
					<div class="left">\
						<span>发布时间:</span>\
						<span>{{propsData.data.pubDateStr}}</span>\
					</div>\
				</div>\
				<div class="content-detail mg-b-culm" v-html="propsData.data.content"></div>\
				<div class="pd-line text-center bar-cir">\
					<button v-on:click.stop="handleThumb(propsData.data.pid)" class="icon cir icon-zan" v-bind:class="{disable: propsData.thumbPosting}">赞一个</button>\
					<div class="text">{{propsData.data.numThumbs}}个赞</div>\
				</div>\
			</div>\
		</div>',
	articleBox:
		'<article>\
			<div v-for="(el,key) in propsData.items">\
				<h2 class="icon-tit" v-bind:class="\'icon-tit-type-\'+key+1">{{el.title}}</h2>\
				<p>{{el.text}}</p>\
			</div>\
		</article>'
}

var popWarning = Vue.extend({
	template: templates.popBox,
	data: function(){
		return {
			wrap: document.body,
			times: 1000,
			list: new Array()
		}
	},
	watch: {
		list: {
			handler: 'listWatch',
			deep: true
		}
	},
	methods: {
		listWatch: function(newVal,oldVal){
			//console.log(newVal,oldVal);
			// if(newVal.length>0){
			// 	this.pop();
			// }
		},
		pop: function(callback,times){
			var self = this;
			var times = times ? times : self.times;
			this.wrap.appendChild(this.$el);
			setTimeout(function(){
				self.close();
				callback && callback();
			},times);
		},
		close: function(){
			this.list = [];
			//console.log(this.wrap,this.$el)
			this.wrap.removeChild(this.$el);
		}
	}
});
var popWn = new popWarning().$mount();

var popConfirm = Vue.extend({
	template: templates.popConfirmBox,
	data: function(){
		return {
			wrap: document.body,
			msg: null,
			show: false,
			callback: null
		}
	},
	methods: {
		alert: function(msg){
			if(this.show === false){
				this.wrap.appendChild(this.$el);
				this.msg = msg;
				this.show = true;
			}
		},
		confirm: function(){
			this.callback && this.callback();
			this.close();
		},
		close: function(){
			this.$el.remove();
			this.msg = null;
			this.show = false;
			this.callback = null;
		}
	}
});
var popCf = new popConfirm().$mount();

var errorViewModel = Vue.extend({
	template: templates.errorViewBox,
	props: ['propsData']
})
function respcodeEvent(rep){
	if(rep.data.code==='101'){
		_basic.reLogin();
	}
}

var basicMixins = {
	data: function(){
		return {
			error: {
				status: 0,
				msg: '',
				msgArr: ['没有相关信息']
			},
			defaultParam: {

			},
			defaultPic: 'static/images/cos_3.png'
		}
	},
	components: {
		Errorview: errorViewModel
	},
	props: ['propsData'],
	created: function(){
		if(this.propsData.error){
			_.assign(this.error,this.propsData.error);
		}
	},
	watch: {
		'error.status': function(a,b){
			if(a!==0){
				this.error.msg = this.error.msgArr[a-1];
			}
		}
	},
	methods: {
		loadData: function(){
			var self = this;
			var item = this.propsData;
			if(item.dataUrl && _basic.urlObj[item.dataUrl]){
				var url,param;
				var dataParam = item.dataParam ? _.assign({},self.defaultParam,item.dataParam) : self.defaultParam;
				param = _basic.postParam(dataParam);
				url = _basic.getUrl(item.dataUrl) + param;
				axios({
					method: 'post',
					url: url
				}).then(function(rep){
					if(rep.data.code === '0' && rep.data.data){
						self.error.status = 0;
						self.saveData(rep.data.data,item);
					}else{
						if(rep.data.code === '100' || rep.data.code === '101'){
							_basic.reLogin();
						}
						self.error.status = 1;
					}
				}).catch(function(e){
					console.log(e);
				});
			}
		},
		saveData: function(_data,_item){
			var data = _basic.formatData(_data,_item.dataRule);
			this.$set(_item,'data',data);
		},
		handleMore: function(_el){
			if(this.propsData.moreLink){
				if(typeof this.propsData.moreLink === 'function'){
					this.propsData.moreLink(_el);
				}else{
					_basic.gotoApp('linktohtml',_el.moreLink);
				}
			}
		},
		handleClickEl: function(_el){
			if(this.propsData.link){
				if(typeof this.propsData.link === 'function'){
					this.propsData.link(_el);
				}else{
					_basic.gotoApp('linktohtml',_el.link);
				}
			}
		},
		imgLoad: function(e){
			//console.log(e)
		},
		imgError: function(e){
			if(e.srcElement.src != this.defaultPic){
				e.srcElement.src = this.defaultPic;
			}
		}
	}
}

var modelMixins = {
	created: function(){
		this.loadData();
	},
	methods: {
		handleThumb: function(_id){
			var self = this;
			var url,param;
			var dataParam = {articleId: _id,memberId: _basic.QueryString('memberId')};
			param = _basic.postParam(dataParam);
			url = _basic.getUrl('hitLike') + param;
			if(!this.propsData.thumbPosting){
				this.$set(this.propsData,'thumbPosting',true);
				axios({
					method: 'post',
					url: url
				}).then(function(rep){
					if(rep.data.code === '0'){
						self.$set(self.propsData.data,'numThumbs',self.propsData.data.numThumbs+1);
					}else{
						if(rep.data.code === '100' || rep.data.code === '101'){
							_basic.reLogin();
						}else{
							popWn.list.push(rep.data.msg);
							popWn.pop();
						}
					}
					self.$set(self.propsData,'thumbPosting',false);
				}).catch(function(e){
					self.$set(self.propsData,'thumbPosting',false);
					console.log(e);
				});
			}else{
				popWn.list.push('正在提交…');
				popWn.pop();
			}
		}
	}
}

var listModelMixins = {
	props: ['propsData','scrollData'],
	data: function(){
		return {
			defaultParam: {
				pageSize: 4,
				pageNum: 1
			}
		}
	},
	watch: {
		'scrollData.adding': {
			handler: function(a,b){
				if(a===true){
					this.$set(this.scrollData,'adding',false);
					this.loadData();
				}
			},
			deep: true
		},
		'propsData.pause': {
			handler: function(a,b){
				if(a===false){
					this.loadData();
				}
			}
		}
	},
	created: function(){
		this.dataParam = this.propsData.dataParam ? _.assign({},this.defaultParam,this.propsData.dataParam) : this.defaultParam;
		if(!this.propsData.pause){
			this.loadData();
		}
	},
	methods: {
		reload: function(){
			this.propsData.items = [];
			this.dataParam.pageNum = 1;
			this.setScrollData(1);
			this.loadData();
		},
		loadData: function(_data){
			//console.log('listModelMixins-loading');
			var self = this;
			var item = _data || this.propsData;
			if(item.dataUrl && _basic.urlObj[item.dataUrl]){
				this.setScrollData(2);
				var url,param;
				this.dataParam = _.assign({},this.dataParam,this.propsData.dataParam);
				param = _basic.postParam(this.dataParam);
				url = _basic.getUrl(item.dataUrl) + param;
				var s = item.dataUrl;
				axios({
					method: 'post',
					url: url
				}).then(function(rep){
					var data = rep.data.data;
					if(rep.data.code === '0' && data){
						data.dataUrl = s;
						self.addToList(data,item);
					}else{
						if(rep.data.code === '100' || rep.data.code === '101'){
							_basic.reLogin();
						}
						if(item.items && item.items.length>0){
							self.setScrollData(3,rep.data);
						}else{
							self.setScrollData(4,rep.data);
						}
						
					}
				}).catch(function(e){
					console.log(e);
				});
			}
		},
		setScrollData: function(_status,_data){
			var status = _status;
			this.error.status = 0;
			switch(status) {
				case 1: //上划加载更多
					if(this.scrollData){
						this.$set(this.scrollData,'loading',false);
						this.$set(this.scrollData,'status',0);
					}
					break;
				case 2: //加载中…
					if(this.scrollData){
						this.$set(this.scrollData,'loading',true);
						this.$set(this.scrollData,'status',1);
					}
					break;
				case 3: //没有更多了
					if(this.scrollData){
						this.$set(this.scrollData,'loading',false);
						this.$set(this.scrollData,'status',2);
					}
					break;
				case 4: //没有数据
					this.error.status = 1;
					if(this.scrollData){
						this.$set(this.scrollData,'loading',false);
						this.$set(this.scrollData,'status',3);
					}
					break;
				default:
					if(this.scrollData){
						this.$set(this.scrollData,'loading',false);
					}
			}
			
		},
		addToList: function(_data,_item){
			var datas = _item ? _item : this.propsData;
			if(!(datas.items instanceof Array)){
				this.$set(datas,'items',new Array());
			}
			this.dataParam.totalPageNum = Math.ceil(_data.total/this.dataParam.pageSize) || 1;
			var arr = _data instanceof Array ? _data : _data.list;
			if(_data.dataUrl === datas.dataUrl){
				if(arr.length===0 || this.dataParam.pageNum > this.dataParam.totalPageNum){
					if(datas.items.length === 0){
						this.setScrollData(4);
					}else{
						this.setScrollData(3);
					}
				}else{
					if(this.dataParam.totalPageNum && this.dataParam.pageNum>=this.dataParam.totalPageNum){
						this.setScrollData(3);
					}else{
						this.setScrollData(1);
					}
					//this.dataParam.totalPageNum = Math.ceil(_data.total/this.dataParam.pageSize) || 1;
					this.dataParam.pageNum++;
					arr.forEach(function(el,key){
						var item = _basic.formatData(el,datas.itemsRule);
						datas.items.push(item);
					});
				}
			}
		}
	}
}

var newsListModel = Vue.extend({
	template: templates.newsListBox,
	mixins: [basicMixins,listModelMixins],
	methods: {
		handleThumb: function(_el){
			console.log(_el)
		}
	}
});

var quotesListModel = Vue.extend({
	template: templates.quotesListBox,
	mixins: [basicMixins,listModelMixins],
	methods: {
		handleThumb: function(_el){
			console.log(_el)
		}
	}
});

var proListModel = Vue.extend({
	template: templates.proBox,
	mixins: [basicMixins,listModelMixins],
	mounted: function(){
		//console.log(this.propsData.dataUrl)
	},
	methods: {

	}
});

var companyListModel = proListModel.extend({
	template: templates.companyListBox,
	props: ['companyData'],
	methods: {
		
	}
})

var companyModel = proListModel.extend({
	template: templates.companyBox,
	props: ['companyData'],
	methods: {
		
	}
})

var swiperModel = Vue.extend({
	template: templates.swiperBox,
	mixins: [basicMixins,listModelMixins],
	mounted: function(){
		//console.log(this.propsData)
	},
	watch: {
		'propsData.items': {
			handler: function(a,b){
				var self = this;
				this.$nextTick(function(){
					var swiper = self.$el;
					var pagination = self.$refs.pagination;
					if(a.length>1){
						self.mySwiper = new Swiper(swiper, {
							loop: true,
							pagination: pagination
						})
						self.mySwiper.update();
					}
				});
			},
			deep: true
		}
	}
});
var swiperModel1 = Vue.extend({
	template: templates.swiperBox,
	mixins: [basicMixins,listModelMixins],
	mounted: function(){
		//console.log(this.propsData)
	},
	watch: {
		'propsData.items': {
			handler: function(a,b){
				var self = this;
				this.$nextTick(function(){
					var swiper = self.$el;
					var pagination = self.$refs.pagination;
					if(a.length>1){
						self.mySwiper = new Swiper(swiper, {
							loop: true,
							pagination: pagination
						})
						self.mySwiper.update();
					}
				});
			},
			deep: true
		}
	}
});

var swiperModel2 = swiperModel.extend({
	template: templates.swiperBox
});


var quotesLinksModel = Vue.extend({
	template: templates.quoteslinksBox,
	data: function(){
		return {
			items: [
				{
					name: '废有色',
					pid: '11'
				},
				{
					name: '废塑料',
					pid: '12'
				},
				{
					name: '废电子电器',
					pid: '13'
				},
				{
					name: '废钢铁',
					pid: '14'
				},
				{
					name: '废橡胶',
					pid: '15'
				},
				{
					name: '废纸',
					pid: '18'
				}
			]
		}
	},
	props: ['propsData'],
	methods: {
		handleClickEl: function(_el){
			_basic.gotoApp('linktohtml',this.propsData.moreLink+'?pid='+_el.pid);
		}
	}
});

var articleDetailModel = Vue.extend({
	template: templates.articleDetailBox,
	mixins: [basicMixins,modelMixins],
	mounted: function(){
		console.log(this.propsData)
	},
	methods: {

	}
})

var siblingsModel = Vue.extend({
	template: templates.siblingsBox,
	mixins: [basicMixins,modelMixins],
	props: ['propsData'],
	mounted: function(){
		//console.log(this)
	}
})

var tabModel = Vue.extend({
	template: templates.tabBox,
	data: function (){
		return {
			activeIndex: 0
		}
	},
	props: ['propsData'],
	methods: {
		itemClass: function(_key){
			return { active: this.activeIndex === _key}
		},
		hanleTab: function(_key){
			this.activeIndex = _key || 0;
		}
	}
});


var quotesTableModel = Vue.extend({
	template: templates.quotesTable,
	props: ['propsData']
});

var articleModel = Vue.extend({
	template: templates.articleBox,
	props: ['propsData'],
	mixins: [basicMixins,listModelMixins]
})

var scrollViewModel = Vue.extend({
	template: templates.scrollViewBox,
	props: ['propsData'],
	data: function(){
		return {
			scrolling: {
				status: null,
				msg: '',
				msgArr: ['上划加载更多~', '加载中…', '没有更多了','没有数据'],
				loading: false,
				adding: false
			}
		}
	},
	watch: {
		'scrolling.status': {
			handler: function(a,b){
				this.scrolling.msg = this.scrolling.msgArr[a];
			},
			deep: true
		}
	},
	components: {
		Child: proListModel
	},
	mounted: function(){
		var self = this;
		setTimeout(function(){
			var scrollview = self.$refs.scrollview;
			document.body.onscroll = function(e){
				self.move();
			}
		},100);
	},
	methods: {
		move: function(){
			var self = this;
			var tool = self.$refs.loadingtool;
			var scrollview = self.$refs.scrollview;
			var bd = document.body;
			var wh = window.innerHeight;
			if(scrollview.offsetHeight<window.innerHeight){
				bd = scrollview;
				wh = bd.offsetHeight+bd.offsetTop;
			}
			var tool_position_bottom = tool ? tool.offsetTop+tool.offsetHeight : 0;
			var bottomPosition = bd.scrollTop+wh;
			//console.log(bd.scrollTop+wh,tool_position_bottom-10,self.scrolling.status)
			if(bd.scrollTop>0){
				this.propsData.isTop = false;
			}else{
				this.propsData.isTop = true;
			}
			//console.log(bottomPosition>=tool_position_bottom-tool.offsetHeight/3)
			//document.getElementById('info').innerHTML = document.body.scrollTop + '——' +document.body.clientHeight+ '——' +window.innerHeight + '——' + '——'+ !self.scrolling.loading + '——' + self.scrolling.status+e.timeStamp
			if(bottomPosition >= tool_position_bottom-10 && !self.scrolling.loading && self.scrolling.status === 0 && !self.scrolling.adding){

			//document.getElementById('info').innerHTML = document.body.scrollTop + '——' +window.innerHeight + '——' + tool_position_bottom+ '——'+ !self.scrolling.loading + '——' + self.scrolling.status
				self.scrolling.adding = true;
				//console.log(self.scrolling.loading)
			}
		},
		handleMove: function(){
			var self = this;
			if(self.timeout != null){
				clearTimeout(self.timeout);
			}
			self.timeout = setTimeout(function(){
				self.move()
			},200);
		}
	}
});

var topBarModel = Vue.extend({
	template: templates.topbar,
	props: ['propsData']
});
var footBarModel = Vue.extend({
	template: templates.footbar,
	props: ['propsData']
});

var productsTab = Vue.extend({
	template: templates.productsTab,
	props: ['propsData'],
	data: function(){
		return {
			items: [{
				name: '现货商品',
				link: 'products.html'
			},{
				name: '供应商品',
				link: 'supply.html'
			},{
				name: '求购商品',
				link: 'demand.html'
			},{
				name: '拍卖商品',
				link: 'auction.html'
			}]
		}
	},
	methods: {
		handleLink: function(link){
			if(link && typeof link === 'function'){
				link();
			}else{
				window.location.href = link;
				//_basic.gotoApp('linktohtml',link);
			}
		}
	}
})
document.body.addEventListener('click',function(){
	// _.assignIn(popWn.$data, {
	// 	callback: function(){
	// 		console.log('ss')
	// 	},
	// 	list : [1,3,4]
	// });
})
