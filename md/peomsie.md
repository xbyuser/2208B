# peomise 
一.产生的原因
1.解决异步问题
2.解决信任问题
3.解决捕获错误问题
4.解决多个任务的回调顺序问题
二· 概念
peomise 是一个容器 也是一个对象 包含（resolve,reject）两个回调 可以获取异步操作消息
三、 特点
1 有三个状态 
    （1）padding （进行中）
    （2）fulfilled (成功)
    （3）rejected (失败)
  | padding=>fulfilled
  | padding=>rejected   一旦状态改变无法修改

  四、方法
  .then
        成功的回调
        返回的是一个promise对象 对象状态由具体的返回值决定
        链式调用
            因为返回的都是peomise对象 可以使用链式调用
  .catch
        失败的回调
  .all
        获取全部回调的方法 参数是一个数组 

# 原理
通过 new xhrHttprequest()建立网络连接