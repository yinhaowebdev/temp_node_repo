'use strict';

var THEME_INFO_MAP = {
  primary: '#436EF3',
  palette: ['#000079', '#000093', '#0000C6', '#0000C6', '#0000E3', '#2828FF', '#4A4AFF', '#6A6AFF', '#7D7DFF', '#9393FF', '#AAAAFF', '#B9B9FF', '#CECEFF', '#DDDDFF', '#ECECFF', '#FBFBFF']
};

var THEME_CONST_COLOR = {
  /* 一般需要修改的颜色 */
  // 主色系
  primary: THEME_INFO_MAP.primary,
  // 调色板
  palette: THEME_INFO_MAP.palette,
  /* 一般不用改的属性 */
  // 主要文字
  textPrimary: '#1f2d3d',
  // 适应性颜色，一般等于主色系
  auto: THEME_INFO_MAP.primary,
  // 成功颜色
  success: '#67C23A',
  // 警告颜色
  warning: '#E6A23C',
  // 失败颜色
  danger: '#F56C6C',
  // 常规文字
  textRegular: '#303133',
  // 次要文字
  textSecondary: '#909399',
  // 占位文字
  textPlaceholder: '#C0C4CC',
  // 边框颜色
  border: '#DCDFE6',
  // 背景颜色
  background: '#FFFFFF',
  // 选中颜色
  selected: '#f0f3fe',
  // 主要文字 - 反色
  textPrimaryReverse: '#FFFFFF',
  // 常规文字 - 反色
  textRegularReverse: '#C0C4CC',
  // 次要文字 - 反色
  textSecondaryReverse: '#909399',
  // 占位文字 - 反色
  textPlaceholderReverse: '#606266',
  // 边框颜色 - 反色
  borderReverse: '#303133',
  // 次要高亮背景色
  highlightBg: '#ecf5ff'
};

var THEME_CONST_BASIC = {
  // 边框大小
  borderWidth: '1px',
  // 边框样式
  borderStyle: 'solid',
  // 边框圆角
  borderRadius: '4px',
  // 边框圆角 - 小
  borderRadiusSmall: '2px',
  // 边框阴影
  boxShadow: '0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)',
  // 边框阴影 - 暗
  boxShadowDark: '0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .12)',
  // 边框阴影 - 亮
  boxShadowLight: '0 2px 12px 0 rgba(0, 0, 0, .1)',
  // 字体大小
  fontSize: '14px',
  // 字体大小 - 中
  fontSizeMedium: '16px',
  // 字体大小 - 大
  fontSizeLarge: '18px',
  // 外边距
  margin: '5px',
  // 外边距 - 中
  marginMedium: '10px',
  // 外边距 - 大
  marginLarge: '15px',
  // 内边距
  padding: '5px',
  // 内边距 - 中
  paddingMedium: '10px',
  // 内边距 - 大
  paddingLarge: '15px'
};
// 边框
THEME_CONST_BASIC.border = THEME_CONST_BASIC.borderWidth + ' ' + THEME_CONST_BASIC.borderStyle + ' ' + THEME_CONST_COLOR.border;

var THEME_LAYOUT_COLOR = {
  // 内容区域背景色
  mainContentBgColor: '#F0F2F5',
  // 选中背景色
  selectedBgColor: THEME_CONST_COLOR.selected,
  // 内容内部背景色
  mainInnerBgColor: '#FFFFFF',
  // 头部图标颜色
  headerIconColor: THEME_CONST_COLOR.textPrimaryReverse,
  // 头部标题字体颜色
  headerTitleColor: THEME_CONST_COLOR.textPrimaryReverse,
  // 头部整体背景色
  headerBgColor: THEME_CONST_COLOR.primary,
  // 侧边栏整体的背景颜色
  sidebarBgColor: THEME_CONST_COLOR.textPrimaryReverse,
  // 标签页背景色
  tagsBgColor: THEME_CONST_COLOR.textPrimaryReverse,
  // 水平菜单背景颜色
  topMenuBoxBgColor: THEME_CONST_COLOR.textPrimaryReverse
};

var THEME_LAYOUT_BASIC = {
  // 侧边栏宽度
  sidebarWidth: '220px',
  // 头部高度
  headerHeight: '50px',
  // 水平菜单区域高度
  horizontalMenuHeight: '40px',
  // 头部标题字体大小
  headerTitleFontSize: '18px',
  // logo容器宽度
  headerLogoBoxWidth: '200px',
  // logo图片宽度
  headerLogoImgWidth: '150px',
  // logo图片高度
  headerLogoImgHeight: '24px',
  // 头部菜单距离左侧边距（菜单不在header时）
  topMenuBoxML: '50px',
  // 鼠标悬浮显示取消全屏模式区块宽高及位置
  hoverShowCancelFullScreenBoxHeight: '20px',
  hoverShowCancelFullScreenBoxWidth: '100%',
  // 取消全屏模式点击的区域宽高
  cancelFullScreenModeBoxWidth: '150px',
  cancelFullScreenModeBoxHeight: '22px',
  cancelFullScreenModeBoxPositionLeft: 'calc(50% - 75px)',
  cancelFullScreenModeBoxPositionTop: '0px',
  cancelFullScreenModeBoxBorderRadius: '5px',
  // 取消全屏模式点击的图标类
  cancelFullScreenIconClass: 'el-icon-arrow-down',
  // 水平菜单显示方式  头部下方另起一栏 headerOtherRow  头部平行一栏  headerSameRow
  horizontalMenuDisplayType: 'headerOtherRow',
  pageMainContentPaddingTop: 20,
  pageMainContentPaddingBottom: 20,
  pageMainContentFullScreenPadding: 40,
  tagHeight: 40,
  collapseSidebarWidth: '64px'
};
// 主体内容宽度 - 纵向菜单
THEME_LAYOUT_BASIC.contentMainWidth = 'calc(100% - ' + THEME_LAYOUT_BASIC.sidebarWidth + ')';
// 主体内容高度 - 纵向菜单
THEME_LAYOUT_BASIC.contentMainHeight = 'calc(100% - ' + THEME_LAYOUT_BASIC.headerHeight + ')';
// 主体内容高度 - 横向菜单
THEME_LAYOUT_BASIC.horizontalContentMainHeight = 'calc(100% - ' + THEME_LAYOUT_BASIC.headerHeight + ' - ' + THEME_LAYOUT_BASIC.horizontalMenuHeight + ')';

var THEME_PAGE_COLOR = {
  // 标题头颜色
  titleBackground: '#f9f9f9'
};

var THEME_UED_CONST = {
  PORTAL_THEME_CONST: {
    filterLgSpan: {
      name: 6
    }
  },
  BASIC_TABLE_CONST: {
    handlerDivider: true,
    rowHandlerWidth: 60
  },
  BASIC_FILTER_CONST: {
    borderBottom: true,
    formLabelWidth: {
      charWidth: 9,
      deviation: 10,
      filterLgSpan: 6,
      filterMdSpan: 8
    }
  },
  ACCOUNT_THEME_CONST: {
    table: {
      rowHandlerWidth: 310,
      formLabelWidth: '70px',
      columnWidth: {
        username: 100,
        account: 100,
        status: 120,
        email: 220,
        telephone: 100,
        updateTime: 150
      }
    }
  }
};