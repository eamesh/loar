export default{
	
	// api 基础 url
	apiBaseUrl        : 'http://192.168.0.185/API/',
	
	// 调试模式 [ false 关闭调试输出，项目发包时请设置此项为 false ]
	debug             : true,
	
	// 本地 Token 数据键名称
	localTokenKeyName : 'reqToken',
	// 提交时基础数据令牌 header 数据名称
	requestHeaderTokenName : "RTK",
	
	// 用户登录 Token 数据键名称
	userTokenKeyName  : 'uToken',
	// 提交时用户数据令牌 header 数据名称
	requestUserTokenName : "UTK",
	
	// token 有效期, 单位 秒 ，要与后端保持一致
	expiredTime       : 3600,
	
	// post 方式 header[content-type] 默认值
	postHeaderDefault : 'application/x-www-form-urlencoded',
	
	// 接口请求秘钥 与后端开发人员协商格式及获取
	apiKey            : '******',
	
	// 基础 token 获取 api 接口地址
	baseTokenUrl      : 'http://192.168.0.185/API/InitBaseToken',
	
	// 从服务器获取 token 函数
	// 因后端语言不同、思路不同，请跟据自己的 api 情况完成 token 获取函数
	// 一个示例，实际开发请跟据自己情况复写此函数	
	getToken          : function(){
		var apiKey       = this.apiKey;
		var baseTokenUrl = this.baseTokenUrl;
		return new Promise((resolve, reject) => {
			// 发起请求
			uni.request({
				// token 授权 api 服务器地址
				url      : baseTokenUrl,
				// 请求秘钥
				data     : { 'appKey' : apiKey},
				// 请求方式 POST
				method   : "GET",
				// 返回值类型
				dataType : "json"
			}).then((res)=>{
				var data = res.data;
				console.log(data);
				if(data.errcode == 0){
					// 将 token 保存在本地并记录获取时间
					uni.setStorageSync(this.localTokenKeyName, data.data);
					// 记录时间
					var dateObj = new Date();
					var cTime   = dateObj.getTime();
					cTime      += '';
					uni.setStorageSync('GraceRequestTokenTime', cTime);
					resolve(data.data);
				}else{
					reject('token error 01');
				}
			}).catch((e) => {reject('token error 01');});
		});
	},
	
	// 记录 用户 token 到本地方法
	// 格式 loginToken-uid
	// 您可以根据项目需要继续改进
	writeLoginToken : function (token, uid){
		var loginToken = token+'-'+uid;
		uni.setStorageSync(this.userTokenKeyName, loginToken);
		return ;
	},
	
	// 获取基础 token 失败提示函数
	tokenErrorMessage : function(){
		uni.showToast({
			title : "请求失败, 请重试",
			icon  : "none"
		})
	}
}