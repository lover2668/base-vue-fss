/**
 * 系统底层公共方法自定义入口
 * yangzeng 20190523*/
const defaultParam = {
    path_url: "/config/base_url.json",
    menu_path: "/config/menu.json",
    g6_data: "/data/G6.json",
    vuetable: "vuetable.json",
};

/**
 * 简单的元素查找功能
 * 注：当前检索仅仅支持id、className、tagName，三种方式，返回元素本身的格式对象
 * @Author yangzeng
 * 20190723 */
defaultParam.find = function(el){
    if(el.indexOf(".") > -1) {
        let str = el.split(".")[1];
        return document.getElementsByClassName(str);
    }else if(el.indexOf("#") > -1){
        let str = el.split("#")[1];
        return document.getElementById(str);
    }else{
        return document.getElementsByTagName(el);
    }
};

/**
 * 验证当前用户是否已经登陆，若没有登陆则强制跳转登陆进行登陆
 * @Author yangzeng
 * 20190617 */
defaultParam.isLogin = function(self){
    let access_token = window.localStorage.getItem("user_token");
    if(!!access_token) return true;
    else{
        this.logout(self);
        return false;
    }
};

/**
 * 刷新本地的用户从存储信息
 * @Author yangzeng
 * 20190724 */
defaultParam.loadUserInfo = function(self){
    self.$my.getSource(self, self.$my.path_url).then(_ => {
        let path = _.data.baseUrl + _.data.sysUrl.getUser;
        let access_token = window.localStorage.getItem("user_token");
        self.$axios.post(path+"?access_token="+access_token).then(res=>{
            //console.log(res.data);
            //localStorage.setItem("userinfo",JSON.stringify(res.data));
        }).catch(err=>{
            console.log(err);
        })
    })
}

/**
 * 自定义post请求，对token 包含对token的验证
 * @param self  当前调用的环境对象本身
 * @param url   请求发送地址
 * @param data  请求附带参数
 * @param successCallback   成功回调
 * @param errorCallback 异常回调
 * @param type 导出时的参数设置，若存在则为导出针对接口返回格式
 * @Author yangzeng 20190603 */
defaultParam.post = function(self,url, data,successCallback,errorCallback){
    let access_token = window.localStorage.getItem("user_token"),_this = this;
    //请求必须参数的封装
    let userInfo = window.localStorage.getItem("userinfo");
    userInfo = JSON.parse(userInfo);
    if(!!userInfo && !!userInfo.currentDuty){
        //新服务参数
        if(data.hasOwnProperty("bookTypeCode") && data.bookTypeCode != ''){}
        else    data["bookTypeCode"] = userInfo.currentDuty.bookTypeCode;
        //老服务参数
        if(data.hasOwnProperty("BOOK_TYPE_CODE") && !!data.BOOK_TYPE_CODE){}
        else    data["BOOK_TYPE_CODE"] = userInfo.currentDuty.bookTypeCode;
        //语言类型的传递
        data["language"] = this.getUserInfo().language;
    }
    //登陆成功则发送请求
    if(this.isLogin(self)){     
        this.getSource(self, this.path_url).then(_ => {
            if(!!url){
                const urlArr = url.split(".");
                const baseUrl = _.data.baseUrl;
                let path = _.data,_index = 0;      
                while(true){
                    if((urlArr.length) == _index) break;
                    path = path[urlArr[_index]];
                    _index += 1;
                }   
                //请求参数设置
                let opts = {
                    //请求类型
                    method: "post",     
                    //请求地址处理
                    url: baseUrl + path+"?access_token="+access_token,     
                    //请求头设定   
                    headers: {'Content-Type': 'application/json'},   
                    //请求参数处理
                    data: JSON.stringify(data)        
                };
                //服务请求的发送
                //_this.setOpenLoading(self,true);
                // _this.openLoading();
                _this.axios(self,_this,opts,successCallback,errorCallback,path);
            }
        });
    }
};
/**
 * 移动端自定义post请求，对token 包含对token的验证
 * @param self  当前调用的环境对象本身
 * @param url   请求发送地址
 * @param data  请求附带参数
 * @param successCallback   成功回调
 * @param errorCallback 异常回调
 * @param type 导出时的参数设置，若存在则为导出针对接口返回格式
 * @Author yangzeng 20190603 */
defaultParam.wx_post = function(self,url, data,successCallback,errorCallback){
    let _this = this;
    this.getSource(self, this.path_url).then(_ => {
        if(!!url){
            const urlArr = url.split(".");
            const baseUrl = _.data.baseUrl;
            let path = _.data,_index = 0;      
            while(true){
                if((urlArr.length) == _index) break;
                path = path[urlArr[_index]];
                _index += 1;
            }   
            //请求参数设置
            let opts = {
                //请求类型
                method: "post",     
                //请求地址处理
                url: baseUrl + path,     
                //请求头设定   
                headers: {'Content-Type': 'application/json'},   
                //请求参数处理
                data: JSON.stringify(data)        
            };
            _this.axios(self,_this,opts,successCallback,errorCallback,path);
        }
    });
};
//post接口中服务请求的发送，不建议外部使用（仅仅在当前文件内部使用） yangzeng
defaultParam.axios = (self,club,opts,successCallback,errorCallback,path) => {
    //页面返回的参数自定义status中0为成功 ，非0 为失败
    axios(opts).then(res=>{
        club.closeLoading();
        //返回参数结果判断
        if(club.isSuccess(res.status)){
            let _data= res.data;
            //验证数据本身是否按照指定格式传递
            if(typeof _data != "object")  return club.errorMsg(self, "请返回正确格式的参数！");
            //对成功回调的调用
            if(_data.status == 0)  successCallback(_data.message);
            else if(_data.status != 0) club.errorMsg(self, _data.message);
        }else if(!!errorCallback && typeof errorCallback == 'function')  errorCallback(err);
    }).catch(err=>{
        //club.setOpenLoading(self, false);
        club.closeLoading();
        //若异常方法在外部声明则进行抛出
        if(!!errorCallback && typeof errorCallback == 'function')  errorCallback(err);
        //未声明异常处理方法，则在公共区域进行处理
        else{
            if(!!err.response && err.response.status == 401) {
                club.errorMsg(self, "验证失效请重新登陆！"+err.toString());
                club.logout(self);
            }else if(!!err.response && err.response.status == 500)  {
                // self.$message({type: "error",message: err.response.data.error+"::"+path});
                club.errorMsg(self,err.response.data.error);
            }else{
                // club.errorMsg(self, "出现异常："+err.toString()+"::"+path);
                club.errorMsg(self, "出现异常："+err.toString());
            }
        }
    });
};

//开放全部参数设置
defaultParam.http = function(self,url, data,successCallback,errorCallback){
    let access_token = window.localStorage.getItem("user_token"),_this = this;
    //判断token是否存在若不存在则需要重新进行登陆操作
    //登陆成功
    if(!!access_token){     
        let userInfo = window.localStorage.getItem("userinfo");
        userInfo = JSON.parse(userInfo);
        if(data.hasOwnProperty("BOOK_TYPE_CODE") && data.BOOK_TYPE_CODE != ''){}
        else    data["BOOK_TYPE_CODE"] = userInfo.currentDuty.bookTypeCode;
        let opts = {
            method: "post",     
            url: this.path_app+url+"?access_token="+access_token,     
            headers: {
                'Content-Type': 'application/json'
            },    
            data: JSON.stringify({params: data})      
        };
        axios(opts).then(res=>{
            //返回参数结果判断
            if(this.isSuccess(res.status)){
                let _data= res.data;
                if(typeof _data != "object") return _this.errorMsg(self, "请返回正确格式的参数！");
                successCallback(_data);
            }else if(!!errorCallback && typeof errorCallback == 'function')  errorCallback(err);
        }).catch(err=>{
            if(!!errorCallback && typeof errorCallback == 'function')  errorCallback(err);
            else{
                if(!!err.request && err.request.status == 401) {
                    _this.errorMsg(self, "验证失效请重新登陆！"+err.toString());
                    this.logout(self);
                }else if(!!err.request && err.request.status == 500)     _this.errorMsg(self, "参数异常："+err.toString());
                else _this.errorMsg(self, "出现异常："+err.toString());
            }
        });
    }else{
        window.localStorage.clear();    
        self.$router.push("/login");
    }
};
//返回请求的成功与否验证
defaultParam.isSuccess= function(code){
    let successFlg = false;
    switch (code) {
        case 200:
            successFlg = true;
            break;
        case "400":
            break;
        case "401":
            break;
        case "403":
            break;
        case "404":
            break;
        case "500":
            break;
        case "501":
            break;
        case "503":
            break;
    }
    return successFlg;
};

/**
* 页面加载层的操作 */
defaultParam.setOpenLoading = function(self,flg){
    if(typeof flg == 'boolean'){
        if(self instanceof Object && self.hasOwnProperty("$parent")){
            if(self.$el.className.indexOf('wrapper') !== -1) {
                self.loading = flg;
            } 
            else this.setOpenLoading(self.$parent,flg);
        };    
    }
}
defaultParam.openLoading = function(){
    let dialog = document.createElement('div');
    let title = document.createElement("div");
    dialog.className = "my-dialog";
    dialog.id = "myDialog";
    dialog.style.height = "100%";
    dialog.style.width = "100%";
    dialog.style.backgroundColor = "rgba(0,0,0,.5)";
    dialog.style.position = "fixed";
    dialog.style.zIndex = 3000;
    title.style.height = "30px";
    title.style.width = "100%";
    title.style.textAlign = "center";
    title.style.color = "#0C59DD";
    title.style.position = "absolute";
    title.style.top = "50%";
    title.innerHTML = "请求处理中。。。。";
    dialog.appendChild(title);
    document.body.insertBefore(dialog,document.body.firstElementChild);
}
defaultParam.closeLoading = function(){
    let div = document.getElementById("myDialog");
    if(!!div && div != null && !!div.parentNode){
        div.parentNode.removeChild(div);
    }
}

/**
 * 成功消息提醒
 * @param self  调用环境本身
 * @param message   消息内容
 * @Author yangzeng */
defaultParam.successMsg = function(self,message){
    self.$message({
        type: "success",
        message: message,
        showClose: true
    });
};
/**
 * 异常消息提醒
 * @param self  调用环境本身
 * @param message 消息提醒内容
 * @Author yangzeng */
defaultParam.errorMsg = function(self, message){
    self.$message({
        type: "error",
        message: message,
        showClose: true
    });
};
/**
* 警告提醒消息
* @Param self 调用环境
* @Param message 提示消息内容
* @Author yangzeng 20190703
*/
defaultParam.warningMsg = function(self, message){
    self.$message({
        type: "warning",
        message: message,
        showClose: true
    });
};
/**
 * 提示框封装
 * @param self 调用者当前环境对象
 * @param opts 调用的参数 */
defaultParam.confrirm = function(self,opts){
    self.$confirm(opts.message, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
        if(opts.hasOwnProperty("ok"))   opts.ok();
    }).catch(() => {
        if(opts.hasOwnProperty("cancel"))   opts.cancel();
    });
}
/**
 * 对参数左右空字符串的处理
 * @param val   需要去除空字符的参数对象(String)
 * @constructor */
defaultParam.removeEmptyString = function(val){
    return val.replace(/^\s+|\s+$/g,"");
};
/**
 * 是否是数字的判断
 * @param val
 * @author yangzeng */
defaultParam.isNumber = function(val){
    return !isNaN(val);
};
/**
 * 金额千分位的转换
 * @param data
 * @author yangzeng */
defaultParam.numberToMoney = function(data){
    if(!!data && !isNaN(data)){
        amount = data.split(".");
        let leftStr = amount[0],newLeftStr='';
        while(true){
            if(leftStr == "") break;
            if(leftStr.length > 3){
                if(newLeftStr.length > 0){
                    newLeftStr = leftStr.substr(leftStr.length-3,leftStr.length)+ ',' + newLeftStr;         
                }else newLeftStr = leftStr.substr(leftStr.length-3,leftStr.length);
            }else newLeftStr = leftStr + ',' + newLeftStr;
            leftStr = leftStr.substr(0,leftStr.length - 3);
        }
        newLeftStr = amount[1] == undefined ? newLeftStr : newLeftStr + "." + amount[1];
        if(newLeftStr.substr(newLeftStr.length - 1 , newLeftStr.length) == ","){
            newLeftStr = newLeftStr.substr(0,newLeftStr.length - 1);
        }
        return newLeftStr;
    }else return data;
};
/**
 * 千分位转换为数字
 * @param data
 * @author yangzeng */
defaultParam.moneyToNumber = function(data){
    let dataArr = data.split(",");
    return dataArr.json("");
};
/**
 * 时间戳转日期格式
 * @param data
 * @Author yangzeng
 * @constructor */
defaultParam.DateFormat = function(data){
    let d = new Date(data);
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
    return  year+ '-' + month + '-' + day;
};
/**
 * 时间戳转日期时间字符串
 * @param data
 * @returns {string}
 * @Author yangzeng
 * @constructor */
defaultParam.DateTimeFormat = function(data){
    let d = new Date(data);
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
    let hour = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    return  year+ '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
};
/**
 * 获取指定类型的参数： 
 * @param data {date: timers, forMat: year}   
 *      forMat: 年-year
 *              月-month
 *              日-day
 *              小时-hour
 *              分钟-minute
 *              秒-second
 * @Authro yangzeng
 * @constructor */
defaultParam.getForMatDate = function(date,forMat){
    let d = new Date(date),result;
    switch(forMat){
        case 'year':
            result = d.getFullYear();
            break;
        case 'month':
            result = d.getMonth() + 1;
            break;
        case 'day':
            result = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
            break;
        case 'hour':
            result = d.getHours();
            break;
        case 'minute':
            result = d.getMinutes();
            break;
        case 'second':
            result = d.getSeconds();
            break;
    }
    return  result;
};
/**
 * 退出登陆
 * @param self  调用环境本身
 * @Author yangzeng */
defaultParam.logout = function(self){
    window.localStorage.clear();
    self.$router.push("/login");
};
/**
 * 开启指定数据的行编辑操作
 * @data 当前提交的源数据
 * @arr 转换参数指定的key
 * @Author yangzeng 
 * @Date 20190716 */
defaultParam.converRowEditData = function(data, arr){
    let result = new Array(),obj;
    data.forEach(_ => {
        obj = new Object()
        Object.keys(_).forEach(key => {
            if(arr.includes(key)) obj[key] = {"isEdit": false, "value": _[key]};
            else obj[key] = !!_[key] ? _[key]: null;
        });
        result.push(obj);
    });
    return result;
};
/**
 * 把指定行编辑数据修改为提交参数形式
 * @data 转换源数据
 * @arr 转换的键值指定
 * @Author yangzeng 
 * @Date 20190716 */
defaultParam.converRequestData = function(data){
    let result = new Array(),obj;
    data.forEach(_ => {
        obj = new Object();
        Object.keys(_).forEach(key => {
            if(_[key] instanceof Object && _[key].hasOwnProperty("value")) {
                obj[key] = _[key].value;
            }else {
                obj[key] = _[key];
            }
        });
        result.push(obj);
    });
    return result;
};

/**
 * 把 AA_BB_CC 类型大写数据转换为驼峰命名格式
 * @data 转换源数据 [{key: value,key: value},{key: value,key: value},...]
 * @Author yangzeng 
 * @Date 20190720 */
defaultParam.converToLower = function(data){
    if(data instanceof Array && data.length >0){
        let newData = [],obj = {};
        data.forEach(_ => {
            obj = {};
            Object.keys(_).forEach(key => {
                let lowerKey = key.toLocaleLowerCase();
                let keyArr = lowerKey.split("_");
                let firstStr,lastStr,newKey;
                for(let i in keyArr){
                    if(i > 0){
                        firstStr = keyArr[i].substr(0,1);
                        lastStr = keyArr[i].substr(1,keyArr[i].length - 1);
                        newKey += firstStr.toUpperCase() + lastStr;
                    }else newKey = keyArr[i];
                }
                obj[newKey] = _[key];
            });
            newData.push(obj);
        });
        return newData;
    }else return "请传入正确格式参数！";
}

/**
 * 获取当前用户详情 */
defaultParam.getUserInfo = function(){
    return JSON.parse(window.localStorage.getItem("userinfo"));
}
/**
 * 获取职责信息 */
defaultParam.getDuty = function(){
    const userInfo = this.getUserInfo();
    return userInfo.currentDuty;
}
/**
 * 获取组织列表 */
defaultParam.getOrganizationList = function(self){
    this.post(self, "sysUrl.organizationList",{}, function(data){
        window.localStorage.setItem("organizationList", data);
    });
};
/**
 * 简单数组的去重操作 
 * @param _[Array] 当前去重的数组对象 ['a','b','a']
 * @return 去重之后的数组对象
 * @Author yangzeng */
defaultParam.repeatArray = function(_){
    if(_ instanceof Array){
        let result = [];
        _.forEach(e => {
            if(!result.includes(e))   result.push(e);
        });
        return result;
    }else return "当前方法仅仅接收数组参数";
};
/**
 * 对象数组的去操作
 * @param data[Array] 去重操作的对象数组  [{key: value...},...]
 * @param key[String] 指定相同条件的key，用作参数相等的判断   keyName
 */
defaultParam.repeatObjectList = (data,key) => {
    if(data instanceof Array && typeof key == "string"){
        let result = [],keyVal=[];
        data.forEach(_ => {
            if(!keyVal.includes(_[key])){
                result.push(_);
                keyVal.push(_[key]);
            };
        });
        return result;
    }else return "请输入正确的参数";
};
/**
 * 本地静态资源的调用，默认资源需放在public下
 * @Param self 当前调用的环境对象
 * @param filePath 调用的当前文件路径
 * @Returns Promise 当前请求的数据结果，需使用'.then()'进行数据解析
 */
defaultParam.getSource = async (self,filePath) => {
    return await self.$axios.get(filePath);
};
import axios from 'axios';
import { async } from 'q';
export default defaultParam;