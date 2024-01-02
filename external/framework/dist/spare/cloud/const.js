'use strict';

var NODE_VERSION = '1.4.16';
var THEME_INFO_MAP = {
  key: 'cloud',
  version: NODE_VERSION,
  name: '云主题',
  primary: '#0099F2',
  palette: ["#0099F2", "#0e94d7", "#1a9ad9", "#0CA3DD", "#33a5dd", "#43aadd", "#4db0e1", "#54b8e9", "#66bbe5", "#6dc0e9", "#80c7ea", "#89cdef", "#9ad2ee", "#acd8ef", "#cce8f6", "#e6f4fa"],
  description: {
    'THEME_CONST_COLOR.primary': '主色系',
    'THEME_CONST_COLOR.palette': '调色板',
    'THEME_CONST_COLOR.textPrimary': '主要文字',
    'THEME_CONST_COLOR.auto': '适应性颜色',
    'THEME_CONST_COLOR.success': '成功颜色',
    'THEME_CONST_COLOR.warning': '警告颜色',
    'THEME_CONST_COLOR.danger': '失败颜色',
    'THEME_CONST_COLOR.textRegular': '常规文字',
    'THEME_CONST_COLOR.textSecondary': '次要文字',
    'THEME_CONST_COLOR.textPlaceholder': '占位文字',
    'THEME_CONST_COLOR.border': '边框颜色',
    'THEME_CONST_COLOR.background': '背景颜色',
    'THEME_CONST_COLOR.selected': '选中颜色',
    'THEME_CONST_COLOR.textPrimaryReverse': '主要文字 - 反色',
    'THEME_CONST_COLOR.textRegularReverse': '常规文字 - 反色',
    'THEME_CONST_COLOR.textSecondaryReverse': '次要文字 - 反色',
    'THEME_CONST_COLOR.textPlaceholderReverse': '占位文字 - 反色',
    'THEME_CONST_COLOR.borderReverse': '边框颜色 - 反色',
    'THEME_CONST_COLOR.highlightBg': '次要高亮背景色',
    'THEME_CONST_COLOR.transparent': '透明色',
    'THEME_LAYOUT_COLOR.mainContentBgColor': '内容区域背景色',
    'THEME_LAYOUT_COLOR.selectedBgColor': '选中背景色',
    'THEME_LAYOUT_COLOR.mainInnerBgColor': '内容内部背景色',
    'THEME_LAYOUT_COLOR.headerIconColor': '头部图标颜色',
    'THEME_LAYOUT_COLOR.headerTitleColor': '头部标题字体颜色',
    'THEME_LAYOUT_COLOR.headerBgColor': '头部整体背景色',
    'THEME_LAYOUT_COLOR.sidebarBgColor': '侧边栏整体的背景颜色',
    'THEME_LAYOUT_COLOR.tagsBgColor': '标签页背景色',
    'THEME_LAYOUT_COLOR.topMenuBoxBgColor': '水平菜单背景颜色'
  }
};

var THEME_CONST_COLOR = {
  /* 一般需要修改的颜色 */
  // 主色系
  primary: THEME_INFO_MAP.primary,
  // 调色板
  palette: THEME_INFO_MAP.palette,
  /* 一般不用改的属性 */
  // 主要文字
  textPrimary: 'rgba(0,0,0,.92)',
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
  highlightBg: '#ecf5ff',
  // 透明色
  transparent: 'rgba(0,0,0,0)',
  // 分割类组件头部颜色
  headerColor: '#F5F5F5',
  // 分割类组件头部颜色 - 对比
  headerColorContrast: '#C9D0D4'
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
  headerBgColor: THEME_INFO_MAP.primary,
  // 侧边栏整体的背景颜色
  sidebarBgColor: THEME_CONST_COLOR.textPrimaryReverse,
  // 标签页背景色
  tagsBgColor: THEME_CONST_COLOR.textPrimaryReverse,
  // 水平菜单背景颜色
  topMenuBoxBgColor: THEME_CONST_COLOR.textPrimaryReverse,
  // 登录验证码滑块原始颜色
  verifyBlockColorDefault: THEME_INFO_MAP.primary,
  // 登录验证码滑块停止颜色
  verifyBlockColorEnd: THEME_INFO_MAP.primary,
  // 登录验证码图标原始颜色
  verifyIconColorDefault: '#ffffff'
};

var THEME_LAYOUT_BASIC = {
  // 侧边栏宽度
  sidebarWidth: '200px',
  // 头部高度
  headerHeight: '48px',
  // 水平菜单区域高度
  horizontalMenuHeight: '48px',
  // 头部标题字体大小
  headerTitleFontSize: '18px',
  // logo容器宽度
  headerLogoBoxWidth: '164px',
  // logo图片宽度
  headerLogoImgWidth: '106px',
  // logo图片高度
  headerLogoImgHeight: '17px',
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
  horizontalMenuDisplayType: 'headerSameRow',
  pageMainContentPaddingTop: 20,
  pageMainContentPaddingBottom: 20,
  pageMainContentFullScreenPadding: 32,
  tagHeight: 40,
  collapseSidebarWidth: '64px',
  loginBgDynamic: false,
  // 导航展开位置
  collapsePosition: 'bottom',
  // 显示用户名称
  showUserInfo: true,
  // 显示用户头像
  useUserAvatar: true,
  // 菜单缩进
  subMenuIndent: 12,
  // 子菜单缩进
  menuItemIndent: 0,
  // 子菜单规则缩进
  menuItemRule: function menuItemRule(level) {
    return (level < 0 ? 0 : level * 12) + 'px';
  },
  // 页签按钮类型：icon、button。默认button
  tagMenuType: 'icon',
  // 主题图标
  themeIcon: 'icon-cloud-theme',
  // 全屏图标
  fullscreenIcon: 'icon-cloud-fullscreen',
  // 取消全屏图标
  fullscreenExitIcon: 'icon-cloud-fullscreen-exit',
  // 布局图标
  layoutIcon: 'icon-cloud-layout',
  // 收起图标
  foldIcon: 'icon-cloud-fold',
  // 展开图标
  unfoldIcon: 'icon-cloud-unfold',
  // 登录验证码宽度
  verifyWidth: '340px',
  // 登录验证码高度
  verifyHeight: '135px',
  // 忘记密码位置
  rememberPosition: 1,
  // 登录错误警告图标
  loginErrorIcon: 'el-icon-warning',
  // 隐藏除一级菜单以外的菜单图标
  menuHiddenIconWithoutTop: true,
  // 水平菜单一级菜单为叶子菜单图标显示
  horizontalTopMenuIcon: true
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

var THEME_PAGE_BASIC = {
  // 标题头颜色
  blockPaddingLarge: [20, 20, 20, 20],
  blockPaddingNormal: [10, 10, 10, 10],
  blockPaddingMini: [5, 5, 5, 5],
  blockBorder: {
    width: [1, 1, 1, 1],
    style: ['solid', 'solid', 'solid', 'solid'],
    color: ['rgba(220, 223, 230, 1)', 'rgba(220, 223, 230, 1)', 'rgba(220, 223, 230, 1)', 'rgba(220, 223, 230, 1)']
  },
  blockBackground: 'rgba(255, 255, 255, 1)',
  blockShadow: '0 2px 12px 0 rgba(0, 0, 0, .1)',
  blockRadius: [3, 3, 3, 3],
  editorPadding: [21, 21, 21, 21]
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