((function (root, factory) {
    var name = 'events';
    if (typeof define === 'function' && define.amd) {
      console.log('amd')
      define(name, [], function () {
        return factory({});
      });
    } else if (typeof module === 'object' && module.exports) {
      console.log('module')
      factory(module);
    } else {
      console.log('else')
      root[name] = factory({});
    }
  })(window, function (module) {
    /**
     * Minified by jsDelivr using Terser v5.3.5.
     * Original file: /npm/events@3.3.0/events.js
     *
     * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
     */
    "use strict";var ReflectOwnKeys,R="object"==typeof Reflect?Reflect:null,ReflectApply=R&&"function"==typeof R.apply?R.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};function ProcessEmitWarning(e){console&&console.warn&&console.warn(e)}ReflectOwnKeys=R&&"function"==typeof R.ownKeys?R.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var NumberIsNaN=Number.isNaN||function(e){return e!=e};function EventEmitter(){EventEmitter.init.call(this)}module.exports=EventEmitter,module.exports.once=once,EventEmitter.EventEmitter=EventEmitter,EventEmitter.prototype._events=void 0,EventEmitter.prototype._eventsCount=0,EventEmitter.prototype._maxListeners=void 0;var defaultMaxListeners=10;function checkListener(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function _getMaxListeners(e){return void 0===e._maxListeners?EventEmitter.defaultMaxListeners:e._maxListeners}function _addListener(e,t,n,r){var i,o,s;if(checkListener(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),s=o[t]),void 0===s)s=o[t]=n,++e._eventsCount;else if("function"==typeof s?s=o[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(i=_getMaxListeners(e))>0&&s.length>i&&!s.warned){s.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=e,u.type=t,u.count=s.length,ProcessEmitWarning(u)}return e}function onceWrapper(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function _onceWrap(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=onceWrapper.bind(r);return i.listener=n,r.wrapFn=i,i}function _listeners(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?unwrapListeners(i):arrayClone(i,i.length)}function listenerCount(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function arrayClone(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function spliceOne(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function unwrapListeners(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}function once(e,t){return new Promise((function(n,r){function i(n){e.removeListener(t,o),r(n)}function o(){"function"==typeof e.removeListener&&e.removeListener("error",i),n([].slice.call(arguments))}eventTargetAgnosticAddListener(e,t,o,{once:!0}),"error"!==t&&addErrorHandlerIfEventEmitter(e,i,{once:!0})}))}function addErrorHandlerIfEventEmitter(e,t,n){"function"==typeof e.on&&eventTargetAgnosticAddListener(e,"error",t,n)}function eventTargetAgnosticAddListener(e,t,n,r){if("function"==typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function i(o){r.once&&e.removeEventListener(t,i),n(o)}))}}Object.defineProperty(EventEmitter,"defaultMaxListeners",{enumerable:!0,get:function(){return defaultMaxListeners},set:function(e){if("number"!=typeof e||e<0||NumberIsNaN(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");defaultMaxListeners=e}}),EventEmitter.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},EventEmitter.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||NumberIsNaN(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},EventEmitter.prototype.getMaxListeners=function(){return _getMaxListeners(this)},EventEmitter.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,i=this._events;if(void 0!==i)r=r&&void 0===i.error;else if(!r)return!1;if(r){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var s=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw s.context=o,s}var u=i[e];if(void 0===u)return!1;if("function"==typeof u)ReflectApply(u,this,t);else{var f=u.length,v=arrayClone(u,f);for(n=0;n<f;++n)ReflectApply(v[n],this,t)}return!0},EventEmitter.prototype.addListener=function(e,t){return _addListener(this,e,t,!1)},EventEmitter.prototype.on=EventEmitter.prototype.addListener,EventEmitter.prototype.prependListener=function(e,t){return _addListener(this,e,t,!0)},EventEmitter.prototype.once=function(e,t){return checkListener(t),this.on(e,_onceWrap(this,e,t)),this},EventEmitter.prototype.prependOnceListener=function(e,t){return checkListener(t),this.prependListener(e,_onceWrap(this,e,t)),this},EventEmitter.prototype.removeListener=function(e,t){var n,r,i,o,s;if(checkListener(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){s=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():spliceOne(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},EventEmitter.prototype.off=EventEmitter.prototype.removeListener,EventEmitter.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},EventEmitter.prototype.listeners=function(e){return _listeners(this,e,!0)},EventEmitter.prototype.rawListeners=function(e){return _listeners(this,e,!1)},EventEmitter.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):listenerCount.call(e,t)},EventEmitter.prototype.listenerCount=listenerCount,EventEmitter.prototype.eventNames=function(){return this._eventsCount>0?ReflectOwnKeys(this._events):[]};
    return EventEmitter;
}));


//     "use strict";
function initAutoJs(){
    if(!(window.$autojs && window.$autojs.__sendEvent)){
        alert('非法进入系统，请下载峰峰助手使用功能')
        return
    };
    const EVENT_RESPONSE = "$autojs:internal:response:";
    const EVENT_REQUEST = "$autojs:internal:request";
    Object.setPrototypeOf($autojs, new events.EventEmitter());
    let nextId = 1;
    $autojs.__on_event = function (event, args) {
        $autojs.emit(event, ...unwrapJson(args));
    };
    $autojs.send = function (event, ...args) {
        this.__sendEvent(event, wrapJson(args));
    };
    $autojs.invoke = function (channel, ...args) {
        const id = nextId++;
        return new Promise((resolve, reject) => {
            this.once(EVENT_RESPONSE + id, (result) => {
                if (result.error) {
                    reject(new Error('Error occurred while handling invoke: channel = ' + channel + ', error = ' + result.error));
                }
                else {
                    resolve(result.result);
                }
            });
            this.send(EVENT_REQUEST, {
                id, channel, args
            });
        });
    };
    $autojs._requestHandlers = {};
    $autojs.handle = function (channel, handler) {
        $autojs._requestHandlers[channel || ''] = handler;
        return this;
    };
    $autojs.removeHandler = function (channel) {
        delete $autojs._requestHandlers[channel];
    };
    $autojs.on(EVENT_REQUEST, (request) => {
        const handler = $autojs._requestHandlers[request.channel] || $autojs._requestHandlers[''];
        if (!handler) {
            return;
        }
        const event = {
            channel: request.channel,
            arguments: request.args,
        };
        let result;
        try {
            result = handler(event, ...event.arguments);
        }
        catch (e) {
            sendResponse(request, undefined, e);
            return;
        }
        if (isPromise(request)) {
            result.then((r) => {
                sendResponse(request, r);
            }).catch((err) => {
                sendResponse(request, undefined, err);
            });
        }
        else {
            sendResponse(request, result);
        }
    });
    function sendResponse(request, result, error) {
        $autojs.send(EVENT_RESPONSE + request.id, {
            result: result,
            error: error,
        });
    }
    function isPromise(obj) {
        return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
    }
    function unwrapJson(maybeJson) {
        if (!maybeJson) {
            return undefined;
        }
        return JSON.parse(maybeJson);
    }
    function wrapJson(obj) {
        if (typeof (obj) === 'undefined') {
            return undefined;
        }
        return JSON.stringify(obj);
    }
}

function autojsRunExec(){
    initAutoJs()
    console.log('点击run')
    const token = window.userToken
    $autojs.invoke('run', {token: token})
} 