webpackJsonp([8,11],{635:function(e,r,n){function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,r=arguments[1];switch(r.type){case t.a:return e.set("loading",!0).set("error",!1).set("books",!1);case t.b:return e.set("books",r.books).set("loading",!1);case t.c:return e.set("error",r.error).set("loading",!1);default:return e}}var t=n(644),i=n(75),a=i&&i.__esModule?function(){return i["default"]}:function(){return i};Object.defineProperty(a,"a",{get:a});var u=i.fromJS.bind()({loading:!1,error:!1,books:!1});r["default"]=o},644:function(e,r,n){var o="voloshins.is.org/Library/LOAD_BOOKS";Object.defineProperty(r,"a",{configurable:!1,enumerable:!0,get:function(){return o}});var t="voloshins.is.org/Library/LOAD_BOOKS_SUCCESS";Object.defineProperty(r,"b",{configurable:!1,enumerable:!0,get:function(){return t}});var i="voloshins.is.org/Library/LOAD_BOOKS_ERROR";Object.defineProperty(r,"c",{configurable:!1,enumerable:!0,get:function(){return i}})}});