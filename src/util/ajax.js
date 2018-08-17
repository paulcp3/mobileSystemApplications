import $ from 'jquery'
import {
    Loading,
    Message
} from 'element-ui'
import Cookie from 'js-cookie'
import util from './util'
import Config from './config'

let ajax = function(options) {
    options.url = util.buildUrl(options.url)
        //处理没有设置data属性的情况
    options.data = typeof options.data === 'undefined' ? {} : options.data
        //默认设置使用全局加载提示
    if (typeof options.showLoading === 'undefined') {
        options.showLoading = true
    }
    if (!options.error) {
        options.error = function(err) {
            let message = '操作失败'
            if (err.responseJSON) {
                message = err.responseJSON.Message;
            }
            Message.error({
                showClose: true,
                message: message
            });
        };
    }
    //自动添加Token
    if (options.data && !options.data.Token) {
        options.data = {
            Request: options.data
        }
        options.data.Token = Cookie.get("token");
    }

    //是否使用HTTP Body提交数据
    if (Config.ajax.dataInBody) {
        options.data = window.JSON.stringify(options.data);
        options.contentType = "application/json";
    }
    //包装方法，如果成功，直接处理数据，如果失败，调用失败方法
    var success = options.success;
    if (success) {
        options.success = function(res) {
            debugger
            if (res.Success) {
                return success(res.Data);
            } else {
                if (typeof options.error === "function") {
                    options.error({
                        responseJSON: {
                            showClose: true,
                            Message: res.result.errorMessage
                        }
                    })
                } else {
                    Message.error({
                        showClose: true,
                        message: res.result.errorMessage
                    });
                }
            }
        }
    }
    let loadingInstance = false;
    let complete = options.complete;
    options.complete = function(request, textStatus) {
        loadingInstance && loadingInstance.close();

        if (complete && typeof complete === "function") {
            complete(request, textStatus);
        }
    };
    if (options.showLoading) {
        loadingInstance = Loading.service({
            text: '加载中...',
            fullscreen: true
        });
    }
    $.ajax(options);
}
export default ajax;