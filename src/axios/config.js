
// PRODUCTION
// const PRODUCTION                = 'http://ssp.sa-green.cn/';
// const SYSTEM                    = 'http://my.sa-green.cn/';
// const ARRIVETODAY               = 'http://at.sa-green.cn/';
// export const LOGIN_OUT_URL      = 'http://my.sa-green.cn/#/login';

// test
const PRODUCTION = 'http://ssptest.sa-green.cn:8093/';
const SYSTEM = 'http://test.sa-green.cn:8080/';
const ARRIVETODAY = 'http://attest.sa-green.cn:8089/';
export const LOGIN_OUT_URL = 'http://test.sa-green.cn:8080/#/login';


/*
    common
*/
//首页模块
export const GET_INDEX_MODEL = SYSTEM + 'index/get/modules';
//获取验证码
export const GET_CODE = SYSTEM + 'system/operator/sendverifycode';
//登陆
export const LOGIN = SYSTEM + 'system/operator/login';
//获取所有门店列表
export const GET_SHOP_LIST = PRODUCTION + 'compatiblewitharrivetoday/arriveTodayInfo';
//获取所有门店列表2
export const GET_SHOP_LIST2 = PRODUCTION + 'compatiblewitharrivetoday/arriveTodayInfo2';
/* SSP */

//===================================> 订单管理

//查询门店订单数量
export const SSP_ORDER_COUNT = ARRIVETODAY + 'arrivetoday/orderQuery/orderCountGroupByStatus';
//查询订单列表
export const SSP_QUERY_ORDER_LIST = ARRIVETODAY + 'arrivetoday/orderQuery/querySiteOrderByStatus';
//批量查询订单列表
export const SSP_QUERY_ALL_ORDER_LIST = ARRIVETODAY + 'arrivetoday/orderQuery/querySiteOrderByStatusList';
//实时单 接单
export const SSP_ACCEPT_ORDER = ARRIVETODAY + 'arrivetoday/order/accept/{arriveTodayOrderId}/{siteId}';
//获取订单打印信息
export const SSP_GET_PRINT_INFO = ARRIVETODAY + 'arrivetoday/orderQuery/orderInfoForPrint/{arriveTodayOrderId}'
//拒单
export const SSP_REFUSE = ARRIVETODAY + 'arrivetoday/order/refuse/{arriveTodayOrderId}';
//门店交易额
export const SSP_SITE_GMV = ARRIVETODAY + 'arrivetoday/orderstatistics/siteGmv';
//取件
export const SSP_UPDATE_STATUS = ARRIVETODAY + 'arrivetoday/order/updateStatus';
//订单查询
export const SSP_QUERY_ORDER = ARRIVETODAY + 'arrivetoday/orderList/query';


//===================================> 上架管理
//查询站点库存
export const SSP_SEARCH_SITE_STOCK = ARRIVETODAY + 'arrivetoday/stock/searchSiteSkuStock';
//出入库记录查询
export const SSP_SEARCH_CHECKED_HISTORY = ARRIVETODAY + 'arrivetoday/inOutStock/searchCheckedHistory';
//出入库记录查询导出
export const SSP_INOUT_STOCK_EXPORT = ARRIVETODAY + 'arrivetoday/inOutStockExport/export';
//商品上架列表查询
export const SSP_SEARCH_SITE_SKU = ARRIVETODAY + 'arrivetoday/stockv2/searchSiteSkuStock';
//商品上架列表更新
export const SSP_UPDATE_SKU_STOCK = ARRIVETODAY + 'arrivetoday/stockv2/updateSkuStock';
//=================================> 订货管理

//销售计划查询
export const SSP_PLAN_DATA = PRODUCTION + 'store/requisition/queryRequisitionPlan';
//发起领用
export const SSP_PLAN_DISASSEMBLY = PRODUCTION + 'store/requisition/queryPlanDisassemblyDetail';
//提交领用
export const SSP_APPLY_BEAN = PRODUCTION + 'store/requisition/applyRequisitionRequestBean';
//修改计划数据
export const SSP_UPDATE_PLAN_DATA = PRODUCTION + 'store/requisition/updateSiteSalePlan';
//订货单查询
export const SSP_QUERY_ORDER_MANAGE = PRODUCTION + 'site/order/manage/query';
//查看领用详情
export const SSP_QUERY_ORDER_DETAIL = PRODUCTION + 'site/order/manage/queryOrderDetail';
//撤回订货单
export const SSP_REMOVE_MANAGE = PRODUCTION + 'site/order/manage/remove';
//基于草稿快速下单
export const SSP_QUICKLY_SUBMIT = PRODUCTION + 'site/order/manage/quicklySubmit';
//提交订货单
export const SSP_MANAGE_SUBMIT = PRODUCTION + 'site/order/manage/submit';
//手工订货查询接口 SKU
export const SSP_MANAGE_QUERY_SKU = PRODUCTION + 'site/order/manage/querySku';
//手工订货查询接口 CODE
export const SSP_MANAGE_QUERY_CODE = PRODUCTION + 'site/order/manage/queryCode';
//手工订货查询接口 ITEM
export const SSP_MANAGE_QUERY_ITEM = PRODUCTION + 'site/order/manage/queryItem';
//手工订货code分类
export const SSP_ALL_CATEGORY = PRODUCTION + 'store/stock/allCategory';
//手工订货item分类
export const SSP_ITEM_CATEGORY = PRODUCTION + 'store/stock/allItemCategory';
//发起订货 创建领用申请单
export const SSP_MANUAL_APPLY = PRODUCTION + 'site/order/manage/manualApplyRequisition';
//订货单管理 查询自订单详情
export const SSP_QUERY_SUBORDER = PRODUCTION + 'site/order/manage/querySubOrderInfoDetail';
//订货单管理 保存
export const SSP_ORDER_SAVE = PRODUCTION + 'site/order/manage/save';
//周期订货 CODE信息查询
export const SSP_QUERY_LONG_TERM = PRODUCTION + 'store/requisition/queryLongTermMaterial';
//收货管理 查询收货订单
export const SSP_QUERY_RECEIVE_ORDER = PRODUCTION + 'site/order/receive/queryReceiveOrder';
//收货管理 提交收货订单
export const SSP_SUBMIT_RECEIVR_ORDER = PRODUCTION + 'site/order/receive/submitReceiveOrder';
