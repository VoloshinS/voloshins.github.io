webpackJsonp([10,11],{629:function(e,r,t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,r=arguments[1];switch(r.type){case o.a:return e.set("loading",!0).set("error",!1).set("articles",!1);case o.b:return e.set("articles",r.articles).set("loading",!1);case o.c:return e.set("error",r.error).set("loading",!1);default:return e}}var o=t(643),i=t(75),a=i&&i.__esModule?function(){return i["default"]}:function(){return i};Object.defineProperty(a,"a",{get:a});var c=i.fromJS.bind()({loading:!1,error:!1,articles:!1});r["default"]=n},643:function(e,r,t){var n="voloshins.is.org/ArticlesPage/LOAD_ARTICLES";Object.defineProperty(r,"a",{configurable:!1,enumerable:!0,get:function(){return n}});var o="voloshins.is.org/ArticlesPage/LOAD_ARTICLES_SUCCESS";Object.defineProperty(r,"b",{configurable:!1,enumerable:!0,get:function(){return o}});var i="voloshins.is.org/ArticlesPage/LOAD_ARTICLES_ERROR";Object.defineProperty(r,"c",{configurable:!1,enumerable:!0,get:function(){return i}})}});