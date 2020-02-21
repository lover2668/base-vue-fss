const filters = {
    //金额千分位的处理
    Money: function(data) {
        if(!!data){
            let amount = data+'';
            amount = amount.split(".");
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
        }
    },
    //返回当前时间年份
    YearFormat: function(time){
        if(!!time){
            return  new Date(parseInt(time)).getFullYear();
        }
    },
    //时间过滤器：年-月-日
    DateFormat: function(time){
        if(!!time){
            let d = new Date(time);
            let year = d.getFullYear();
            let month = d.getMonth() + 1 >= 10 ? d.getMonth() + 1 : "0"+(d.getMonth() + 1);
            let day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
            return  year+ '-' + month + '-' + day;
        }
    },
    //时间过滤器： 年-月-日 时：分：秒
    DateTimeFormat: function(time) {
        if(!!time){
            let d = new Date(time);
            let year = d.getFullYear();
            let month = d.getMonth() + 1 >= 10 ? d.getMonth() + 1 : "0"+(d.getMonth() + 1);
            let day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
            var hour = d.getHours() >= 10? d.getHours() : "0"+d.getHours();
            var minutes = d.getMinutes() >= 10 ? d.getMinutes() : "0"+d.getMinutes();
            var seconds = d.getSeconds() >= 10 ? d.getSeconds() : "0"+d.getSeconds();
            return  year+ '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
        }
    }
}
export default filters;