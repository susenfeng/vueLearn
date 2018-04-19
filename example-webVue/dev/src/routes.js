import Login from './components/account/Login.vue'
import Home from './components/Home.vue'
import error from './components/common/404.vue'
import reload from './components/common/reload.vue'

import publicClientList from './components/client/publicClient/list.vue'
import publicClientDetail from './components/client/publicClient/detail.vue'
import publicClientAdd from './components/client/publicClient/add.vue'
import publicClientCount from './components/client/publicClient/count.vue'
import publicClientInfo from './components/client/publicClient/info.vue'
import publicClientRecord from './components/client/publicClient/record.vue'

import myClientList from './components/client/myClient/list.vue'
import myClientDetail from './components/client/myClient/detail.vue'
import myClientCount from './components/client/myClient/count.vue'
import myClientInfo from './components/client/myClient/info.vue'
import myClientRecord from './components/client/myClient/record.vue'

import unRelativeDemand from './components/client/unRelative/demandList.vue'
import unRelativeService from './components/client/unRelative/serviceList.vue'

import infoArticle from './components/data/info/article.vue'
import infoFeedback from './components/data/info/feedback.vue'
import infoPic from './components/data/info/pic.vue'
import infoNews from './components/data/info/news.vue'
import infoWorks from './components/data/info/works.vue'
import infoVideo from './components/data/info/video.vue'
import infoAdd from './components/data/info/add.vue'
import infoEdit from './components/data/info/edit.vue'
import infoNewsAdd from './components/data/info/news_add.vue'
import infoNewsEdit from './components/data/info/news_edit.vue'
import infoExpert from './components/data/info/expertGroup.vue'

import labelLabel from './components/data/label/labelLabel.vue'
import labelLClass from './components/data/label/labelLClass.vue'
import serviceList from './components/data/service/serviceList.vue'
import demanderList from './components/data/service/demanderList.vue'
import deDetail from './components/data/service/DEdetail.vue'
import demanderAdd from './components/data/service/add.vue'
import serviceRecord from './components/data/service/serviceRecord.vue'
import serviceInfo from './components/data/service/serviceInfo.vue'
import serviceOrder from './components/data/service/serviceOrder.vue'
import serviceDetail from './components/data/service/serviceDetail.vue'
import serviceAdd from './components/data/service/serviceAdd.vue'

import demandList from './components/service/demand/demandList.vue'
import demandDetail from './components/service/demand/demandDetail.vue'
import historyList from './components/service/demand/historyList.vue'
import orderList from './components/service/order/list.vue'
import orderDetail from './components/service/order/detail.vue'
import overList from './components/service/order/overList.vue'
import flow from './components/service/finance/flow.vue'
import record from './components/service/finance/record.vue'
import payRecord from './components/service/finance/payRecord.vue'

import roleList from './components/system/rule/roleList.vue'
import roleAdd from './components/system/rule/roleAdd.vue'
import roleEdit from './components/system/rule/roleEdit.vue'
import userList from './components/system/rule/userList.vue'
import userAdd from './components/system/rule/userAdd.vue'
import userEdit from './components/system/rule/userEdit.vue'
import config from './components/system/config/config.vue'
import email from './components/system/config/email.vue'

import MenuList from './components/system/menu/list.vue'
import MenuAdd from './components/system/menu/add.vue'
import MenuEdit from './components/system/menu/edit.vue'

const routes = [
  { path: '/', component: Login, name: 'Login' },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '/common/404', component: error, name: 'error', meta: { hideLeft: true } },
      { path: '/reload', component: reload, name: 'reload', meta: { hideLeft: false } }
    ]
  },
  {
    path: '/home',
    component: Home,
    children: [
      // { path: '/client/publicClient/list', component: publicClientList, name: 'publicClientList', meta: { hideLeft: false, index_: 1, module: 'client', menu: 'publicClient/list' } },
      { path: '/client/publicClient/list/demand', component: publicClientList, name: 'publicClientDemandList', meta: { hideLeft: false, index_: 1, module: 'client', menu: 'publicClient/list/demand' } },
      { path: '/client/publicClient/list/service', component: publicClientList, name: 'publicClientServiceList', meta: { hideLeft: false, index_: 1, module: 'client', menu: 'publicClient/list/service' } },
      { path: '/client/publicClient/unRelative/demand', component: unRelativeDemand, name: 'publicClientUnRelativeDemand', meta: { hideLeft: false, index_: 1, module: 'client', menu: 'publicClient/unRelative/demand' } },
      { path: '/client/publicClient/unRelative/service', component: unRelativeService, name: 'publicClientUnRelativeService', meta: { hideLeft: false, index_: 1, module: 'client', menu: 'publicClient/unRelative/service' } },
      { path: '/client/publicClient/detail/:id', component: publicClientDetail, name: 'publicClientDetail', meta: { hideLeft: false, index_: 1, module: 'client', menu: 'publicClient/list' } },
      { path: '/client/publicClient/edit/:id', component: publicClientDetail, name: 'publicClientEdit', meta: { hideLeft: false, index_: 1, module: 'client', menu: 'publicClient/list' } },
      { path: '/client/publicClient/add', component: publicClientAdd, name: 'publicClientAdd', meta: { hideLeft: false, index_: 1, module: 'client', menu: 'publicClient/list' } },
      { path: '/client/publicClient/add', component: publicClientAdd, name: 'publicClientAdd', meta: { hideLeft: false, index_: 1, module: 'client', menu: 'publicClient/list' } },
      { path: '/client/publicClient/demandDetail/:id', component: demandDetail, name: 'publicClienDemand', meta: { hideLeft: false, index_: 1, module: 'client', menu: 'publicClient/list' } },
      { path: '/client/publicClient/count', component: publicClientCount, name: 'publicClientCount', meta: { hideLeft: false, index_: 1, module: 'client', menu: 'publicClient/count' } }
    ]
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '/client/myClient/list', component: myClientList, name: 'myClientList', meta: { hideLeft: false, index_: 1, module: 'client', menu: 'myClient/list' } },
      { path: '/client/myClient/list/demand', component: myClientList, name: 'myClientDemandList', meta: { hideLeft: false, index_: 1, module: 'client', menu: 'myClient/list/demand' } },
      { path: '/client/myClient/list/service', component: myClientList, name: 'myClientServiceList', meta: { hideLeft: false, index_: 1, module: 'client', menu: 'myClient/list/service' } },
      { path: '/client/myClient/edit/:id', component: myClientDetail, name: 'myClientEdit', meta: { hideLeft: false, index_: 1, module: 'client', menu: 'myClient/list' } },
      { path: '/client/myClient/detail/:id', component: myClientDetail, name: 'myClientDetail', meta: { hideLeft: false, index_: 1, module: 'client', menu: 'myClient/list' } },
      { path: '/client/myClient/demandDetail/:id', component: demandDetail, name: 'myClienDemand', meta: { hideLeft: false, index_: 1, module: 'client', menu: 'myClient/list' } },
      { path: '/client/myClient/count', component: myClientCount, name: 'myClientCount', meta: { hideLeft: false, index_: 1, module: 'client', menu: 'myClient/count' } }
    ]
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '/data/info/article', component: infoArticle, name: 'infoArticle', meta: { hideLeft: false, index_: 1, module: 'data', menu: 'info/article' } },
      { path: '/data/info/feedback', component: infoFeedback, name: 'infoFeedback', meta: { hideLeft: false, index_: 1, module: 'data', menu: 'info/article' } },
      { path: '/data/info/pic', component: infoPic, name: 'infoPic', meta: { hideLeft: false, index_: 1, module: 'data', menu: 'info/pic' } },
      { path: '/data/info/news', component: infoNews, name: 'infoNews', meta: { hideLeft: false, index_: 1, module: 'data', menu: 'info/news' } },
      { path: '/data/info/work', component: infoWorks, name: 'infoWorks', meta: { hideLeft: false, index_: 1, module: 'data', menu: 'info/work' } },
      { path: '/data/info/video', component: infoVideo, name: 'infoVideo', meta: { hideLeft: false, index_: 1, module: 'data', menu: 'info/video' } },
      { path: '/data/info/add', component: infoAdd, name: 'infoAdd', meta: { hideLeft: false, index_: 1, module: 'data', menu: 'info/work' } },
      { path: '/data/info/edit/:id', component: infoEdit, name: 'infoEdit', meta: { hideLeft: false, index_: 1, module: 'data', menu: 'info/edit' } },
      { path: '/data/info/expertgroup', component: infoExpert, name: 'infoExpert', meta: { hideLeft: false, index_: 1, module: 'data', menu: 'info/expertgroup' } },
      { path: '/data/info/newsAdd', component: infoNewsAdd, name: 'infoNewsAdd', meta: { hideLeft: false, index_: 1, module: 'data', menu: 'info/news' } },
      { path: '/data/info/newsEdit/:id', component: infoNewsEdit, name: 'infoNewsEdit', meta: { hideLeft: false, index_: 1, module: 'data', menu: 'info/news_edit' } }
    ]
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '/data/label/label', component: labelLabel, name: 'labelLabel', meta: { hideLeft: false, index_: 1, module: 'data', menu: 'label/label' } },
      { path: '/data/label/lClass', component: labelLClass, name: 'labelLClass', meta: { hideLeft: false, index_: 1, module: 'data', menu: 'label/lClass' } }
    ]
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '/data/service/info', component: serviceInfo, name: 'serviceInfo', meta: { hideLeft: false, index_: 1, module: 'data', menu: 'service/list' } },
      { path: '/data/service/order', component: serviceOrder, name: 'serviceOrder', meta: { hideLeft: false, index_: 1, module: 'data', menu: 'service/list' } },
      { path: '/data/service/serviceDetail/:id', component: serviceDetail, name: 'serviceDetail', meta: { hideLeft: false, index_: 1, module: 'data', menu: 'service/list' } },
      { path: '/data/service/serviceAdd', component: serviceAdd, name: 'serviceAdd', meta: { hideLeft: false, index_: 1, module: 'data', menu: 'service/list' } },
      { path: '/data/service/demanderAdd', component: demanderAdd, name: 'demanderAdd', meta: { hideLeft: false, index_: 1, module: 'data', menu: 'service/demanderList' } },
      { path: '/data/service/list', component: serviceList, name: 'serviceList', meta: { hideLeft: false, index_: 1, module: 'data', menu: 'service/list' } },
      { path: '/data/service/demanderList', component: demanderList, name: 'demanderList', meta: { hideLeft: false, index_: 1, module: 'data', menu: 'service/demanderList' } },
      { path: '/data/service/deDetail/:id', component: deDetail, name: 'deDetail', meta: { hideLeft: false, index_: 1, module: 'data', menu: 'service/demanderList' } },
      { path: '/data/service/demanderDetail/:id', component: demandDetail, name: 'demandDemandDetail', meta: { hideLeft: false, index_: 1, module: 'data', menu: 'service/demanderList' } },
      { path: '/data/service/demandDetail/:id', component: demandDetail, name: 'serviceDemandDetail', meta: { hideLeft: false, index_: 1, module: 'data', menu: 'service/list' } },
      { path: '/data/service/orderDetail/:id', component: orderDetail, name: 'serviceOrderDetail', meta: { hideLeft: false, index_: 1, module: 'data', menu: 'service/list' } },
      { path: '/data/service/record', component: serviceRecord, name: 'serviceRecord', meta: { hideLeft: false, index_: 1, module: 'data', menu: 'service/list' } }
    ]
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '/service/demand/demandlist', component: demandList, name: 'demandList', meta: { hideLeft: false, index_: 1, module: 'service', menu: 'demand/demandlist' } },
      { path: '/service/demand/demanddetail/:id', component: demandDetail, name: 'demandDetail', meta: { hideLeft: false, index_: 1, module: 'service', menu: 'demand/demandlist' } },
      { path: '/service/demand/historydetail/:id', component: demandDetail, name: 'historyDetail', meta: { hideLeft: false, index_: 1, module: 'service', menu: 'demand/historylist' } },
      { path: '/service/demand/historylist', component: historyList, name: 'historyList', meta: { hideLeft: false, index_: 1, module: 'service', menu: 'demand/historylist' } }
    ]
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '/service/order/list', component: orderList, name: 'orderList', meta: { hideLeft: false, index_: 1, module: 'service', menu: 'order/list' } },
      { path: '/service/order/detail/:id', component: orderDetail, name: 'orderDetail', meta: { hideLeft: false, index_: 1, module: 'service', menu: 'order/list' } },
      { path: '/service/order/overdetail/:id', component: orderDetail, name: 'overDetail', meta: { hideLeft: false, index_: 1, module: 'service', menu: 'order/overList' } },
      { path: '/service/order/overList', component: overList, name: 'overList', meta: { hideLeft: false, index_: 1, module: 'service', menu: 'order/overList' } }
    ]
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '/service/finance/flow', component: flow, name: 'flow', meta: { hideLeft: false, index_: 1, module: 'service', menu: 'finance/flow' } },
      { path: '/service/finance/record', component: record, name: 'record', meta: { hideLeft: false, index_: 1, module: 'service', menu: 'finance/record' } },
      { path: '/service/finance/payRecord', component: payRecord, name: 'payRecord', meta: { hideLeft: false, index_: 1, module: 'service', menu: 'finance/payRecord' } }
    ]
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '/system/menu/index', component: MenuList, name: 'MenuList', meta: { hideLeft: false, index_: 1, module: 'system', menu: 'menu' }},
      { path: '/system/menu/add', component: MenuAdd, name: 'MenuAdd', meta: { hideLeft: false, index_: 1, module: 'system', menu: 'menu' }},
      { path: '/system/menu/edit/:id', component: MenuEdit, name: 'MenuEdit', meta: { hideLeft: false, index_: 1, module: 'system', menu: 'menu' }}
    ]
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '/system/rule/roleList', component: roleList, name: 'roleList', meta: { hideLeft: false, index_: 1, module: 'system', menu: 'rule/roleList' } },
      { path: '/system/rule/roleAdd', component: roleAdd, name: 'roleAdd', meta: { hideLeft: false, index_: 1, module: 'system', menu: 'rule/roleList' } },
      { path: '/system/rule/roleEdit/:id', component: roleEdit, name: 'roleEdit', meta: { hideLeft: false, index_: 1, module: 'system', menu: 'rule/roleList' } }
    ]
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '/system/rule/userList', component: userList, name: 'userList', meta: { hideLeft: false, index_: 1, module: 'system', menu: 'rule/userList' } },
      { path: '/system/rule/userAdd', component: userAdd, name: 'userAdd', meta: { hideLeft: false, index_: 1, module: 'system', menu: 'rule/userList' } },
      { path: '/system/rule/userEdit/:id', component: userEdit, name: 'userEdit', meta: { hideLeft: false, index_: 1, module: 'system', menu: 'rule/userList' } }
    ]
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '/system/config/config', component: config, name: 'config', meta: { hideLeft: false, index_: 1, module: 'system', menu: 'config/config' } },
      { path: '/system/config/email', component: email, name: 'email', meta: { hideLeft: false, index_: 1, module: 'system', menu: 'config/email' } }
    ]
  }
]
export default routes
