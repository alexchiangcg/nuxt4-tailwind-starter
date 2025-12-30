export interface PlaygroundComponent {
  name: string
  route: string
  category: string
  package: string
  description?: string
}

export const components: PlaygroundComponent[] = [
  // Buttons 按鈕類
  {
    name: 'Button',
    route: '/playground/button',
    category: 'Buttons',
    package: '@syncfusion/ej2-vue-buttons',
    description: '按鈕元件，支援多種樣式（主要、次要、成功、警告、危險）、尺寸（大、中、小）、圖示按鈕、外框樣式等變體'
  },
  {
    name: 'CheckBox',
    route: '/playground/checkbox',
    category: 'Buttons',
    package: '@syncfusion/ej2-vue-buttons',
    description: '核取方塊，用於多選場景。支援勾選、未勾選、不確定三種狀態，可設定標籤位置與停用狀態'
  },
  {
    name: 'RadioButton',
    route: '/playground/radiobutton',
    category: 'Buttons',
    package: '@syncfusion/ej2-vue-buttons',
    description: '單選按鈕，用於從一組選項中選擇唯一值。支援群組化、標籤位置設定、停用狀態'
  },
  {
    name: 'Switch',
    route: '/playground/switch',
    category: 'Buttons',
    package: '@syncfusion/ej2-vue-buttons',
    description: '切換開關，用於開/關狀態切換。常用於設定頁面，支援自訂開關文字與停用狀態'
  },

  // Calendars 日期時間類
  {
    name: 'DatePicker',
    route: '/playground/datepicker',
    category: 'Calendars',
    package: '@syncfusion/ej2-vue-calendars',
    description: '日期選擇器，點擊後彈出日曆面板選擇日期。支援日期格式化、最小/最大日期限制、特定日期停用、週起始日設定'
  },
  {
    name: 'TimePicker',
    route: '/playground/timepicker',
    category: 'Calendars',
    package: '@syncfusion/ej2-vue-calendars',
    description: '時間選擇器，用於選擇時、分、秒。支援 12/24 小時制、時間間隔設定、最小/最大時間限制'
  },
  {
    name: 'DateTimePicker',
    route: '/playground/datetimepicker',
    category: 'Calendars',
    package: '@syncfusion/ej2-vue-calendars',
    description: '日期時間選擇器，結合日期與時間選擇功能。適用於需要精確到時分的場景，如預約系統、排程設定'
  },
  {
    name: 'Calendar',
    route: '/playground/calendar',
    category: 'Calendars',
    package: '@syncfusion/ej2-vue-calendars',
    description: '日曆元件，用於直接在頁面上顯示日曆供使用者選取日期。支援多選、週數顯示、日期範圍限制、停用特定日期'
  },
  {
    name: 'DateRangePicker',
    route: '/playground/daterangepicker',
    category: 'Calendars',
    package: '@syncfusion/ej2-vue-calendars',
    description: '日期範圍選擇器，用於選取起始與結束日期。支援預設範圍、自訂分隔符、最小/最大天數限制'
  },

  // Inputs 輸入類
  {
    name: 'TextBox',
    route: '/playground/textbox',
    category: 'Inputs',
    package: '@syncfusion/ej2-vue-inputs',
    description: '文字輸入框，支援浮動標籤、前後綴圖示、清除按鈕、多行輸入、字數統計、驗證狀態顯示'
  },
  {
    name: 'NumericTextBox',
    route: '/playground/numerictextbox',
    category: 'Inputs',
    package: '@syncfusion/ej2-vue-inputs',
    description: '數值輸入框，專為數字輸入設計。支援最小/最大值限制、步進值、千分位格式化、貨幣/百分比格式、小數位數控制'
  },
  {
    name: 'Slider',
    route: '/playground/slider',
    category: 'Inputs',
    package: '@syncfusion/ej2-vue-inputs',
    description: '滑桿元件，用於在數值範圍內選擇值。支援單值/範圍選擇、刻度標記、提示氣泡、垂直/水平方向、步進值設定'
  },
  {
    name: 'ColorPicker',
    route: '/playground/colorpicker',
    category: 'Inputs',
    package: '@syncfusion/ej2-vue-inputs',
    description: '顏色選擇器，提供直覺的顏色選取介面。支援調色盤模式、色票模式、透明度調整、HEX/RGB/HSV 格式、預設顏色組'
  },

  // Dropdowns 下拉選單類
  {
    name: 'DropDownList',
    route: '/playground/dropdownlist',
    category: 'Dropdowns',
    package: '@syncfusion/ej2-vue-dropdowns',
    description: '下拉選單，從預設選項列表中選擇單一值。支援分組、篩選搜尋、範本自訂、虛擬滾動（大量資料）、遠端資料載入'
  },
  {
    name: 'ComboBox',
    route: '/playground/combobox',
    category: 'Dropdowns',
    package: '@syncfusion/ej2-vue-dropdowns',
    description: '複合輸入框，結合文字輸入與下拉選單。支援自動完成、允許自訂值輸入、篩選模式設定、高亮匹配文字'
  },
  {
    name: 'MultiSelect',
    route: '/playground/multiselect',
    category: 'Dropdowns',
    package: '@syncfusion/ej2-vue-dropdowns',
    description: '多選下拉選單，可選擇多個值。支援標籤模式、核取方塊模式、選取上限設定、全選功能、分組顯示'
  },
  {
    name: 'AutoComplete',
    route: '/playground/autocomplete',
    category: 'Dropdowns',
    package: '@syncfusion/ej2-vue-dropdowns',
    description: '自動完成元件，根據使用者輸入提供建議。支援多種篩選模式、分組、高亮匹配文字、最小輸入字元設定'
  },

  // Grids 表格類
  {
    name: 'Grid',
    route: '/playground/grid',
    category: 'Grids',
    package: '@syncfusion/ej2-vue-grids',
    description: '資料表格，功能強大的資料展示元件。支援排序、篩選、分頁、分組、編輯、選取、凍結欄、虛擬滾動、匯出 Excel/PDF'
  },

  // Popups 彈出視窗類
  {
    name: 'Dialog',
    route: '/playground/dialog',
    category: 'Popups',
    package: '@syncfusion/ej2-vue-popups',
    description: '對話框，用於顯示重要資訊或收集使用者輸入。支援模態/非模態、可拖曳、可調整大小、自訂按鈕、巢狀對話框'
  },
  {
    name: 'Tooltip',
    route: '/playground/tooltip',
    category: 'Popups',
    package: '@syncfusion/ej2-vue-popups',
    description: '工具提示，在懸停或點擊時顯示額外資訊。支援多種位置、觸發模式、HTML 內容、動畫效果、延遲設定'
  },

  // Navigations 導航類
  {
    name: 'Tab',
    route: '/playground/tab',
    category: 'Navigations',
    package: '@syncfusion/ej2-vue-navigations',
    description: '分頁標籤，將內容組織為多個分頁。支援頂部/底部/左側/右側位置、捲動/彈出溢位模式、可關閉分頁、圖示標籤'
  },
  {
    name: 'Accordion',
    route: '/playground/accordion',
    category: 'Navigations',
    package: '@syncfusion/ej2-vue-navigations',
    description: '手風琴摺疊面板，垂直堆疊的可展開/收合區塊。支援單一/多重展開模式、巢狀結構、展開動畫、圖示自訂'
  },
  {
    name: 'Menu',
    route: '/playground/menu',
    category: 'Navigations',
    package: '@syncfusion/ej2-vue-navigations',
    description: '選單列，水平或垂直的多層級導航選單。支援子選單、分隔線、圖示、快捷鍵顯示、滑鼠懸停/點擊觸發'
  },
  {
    name: 'Toolbar',
    route: '/playground/toolbar',
    category: 'Navigations',
    package: '@syncfusion/ej2-vue-navigations',
    description: '工具列，將操作按鈕與控制項群組化。支援按鈕、分隔線、輸入框混合配置、溢位選單、對齊設定'
  },
  {
    name: 'Sidebar',
    route: '/playground/sidebar',
    category: 'Navigations',
    package: '@syncfusion/ej2-vue-navigations',
    description: '側邊欄，從螢幕邊緣滑入的面板。支援左側/右側位置、推擠/覆蓋/滑動模式、停靠狀態、響應式斷點'
  },
  {
    name: 'TreeView',
    route: '/playground/treeview',
    category: 'Navigations',
    package: '@syncfusion/ej2-vue-navigations',
    description: '樹狀檢視，階層式資料結構展示。支援核取方塊選取、拖放排序、節點編輯、延遲載入、圖示自訂、連接線樣式'
  },

  // Notifications 通知類
  {
    name: 'Toast',
    route: '/playground/toast',
    category: 'Notifications',
    package: '@syncfusion/ej2-vue-notifications',
    description: '吐司通知，顯示簡短的提示訊息後自動消失。支援多種位置、自訂顯示時間、進度條、動作按鈕、堆疊顯示'
  },
  {
    name: 'Badge',
    route: '/playground/badge',
    category: 'Notifications',
    package: '@syncfusion/ej2-vue-notifications',
    description: '徽章元件，用於顯示狀態、計數或標籤。純 CSS 實作，支援多種顏色、形狀（圓形/藥丸）、位置（通知/重疊）'
  },
  {
    name: 'Skeleton',
    route: '/playground/skeleton',
    category: 'Notifications',
    package: '@syncfusion/ej2-vue-notifications',
    description: '骨架屏元件，用於載入狀態的佔位符。支援多種形狀、尺寸、動畫效果（波浪/淡入淡出/脈衝）'
  },

  // Progress 進度類
  {
    name: 'ProgressBar',
    route: '/playground/progressbar',
    category: 'Progress',
    package: '@syncfusion/ej2-vue-progressbar',
    description: '進度條，顯示任務完成進度。支援線性/圓形樣式、不確定模式、區段顯示、漸層顏色、動畫效果、百分比標籤'
  },

  // Split Buttons 分割按鈕類
  {
    name: 'SplitButton',
    route: '/playground/splitbutton',
    category: 'Split Buttons',
    package: '@syncfusion/ej2-vue-splitbuttons',
    description: '分割按鈕，主要操作與下拉選單的組合。左側為預設動作，右側箭頭展開更多選項，適用於有主次操作的場景'
  },

  // Layouts 佈局類
  {
    name: 'Splitter',
    route: '/playground/splitter',
    category: 'Layouts',
    package: '@syncfusion/ej2-vue-layouts',
    description: '分割面板，可調整大小的多區塊佈局。支援水平/垂直分割、巢狀結構、最小/最大尺寸限制、收合面板、拖曳調整'
  },

  // Lists 列表類
  {
    name: 'ListView',
    route: '/playground/listview',
    category: 'Lists',
    package: '@syncfusion/ej2-vue-lists',
    description: '列表檢視，互動式資料列表展示。支援分組標題、核取方塊多選、巢狀列表、範本自訂、虛擬化滾動'
  },

  // Editors 編輯器類
  {
    name: 'RichTextEditor',
    route: '/playground/richtexteditor',
    category: 'Editors',
    package: '@syncfusion/ej2-vue-richtexteditor',
    description: '富文本編輯器，所見即所得的內容編輯工具。支援文字格式化、圖片/表格/連結插入、程式碼檢視、Markdown 模式、工具列自訂'
  },

  // Schedule 排程類
  {
    name: 'Schedule',
    route: '/playground/schedule',
    category: 'Schedule',
    package: '@syncfusion/ej2-vue-schedule',
    description: '排程行事曆，完整的日程管理元件。支援日/週/月/議程檢視、拖放調整、重複事件、時區設定、資源分組、匯出行事曆'
  },

  // PDF Viewer 檢視器類
  {
    name: 'PdfViewer',
    route: '/playground/pdfviewer',
    category: 'Viewers',
    package: '@syncfusion/ej2-vue-pdfviewer',
    description: 'PDF 檢視器，在瀏覽器中開啟 PDF 文件。支援縮放、頁面導航、文字選取、註解標記、表單填寫、列印、下載'
  },

  // Pivot View 資料分析類
  {
    name: 'PivotView',
    route: '/playground/pivotview',
    category: 'Data Analysis',
    package: '@syncfusion/ej2-vue-pivotview',
    description: '樞紐分析表，強大的資料分析與視覺化工具。支援拖放欄位配置、多維度彙總、篩選排序、圖表聯動、匯出報表'
  },

  // Charts 圖表類
  {
    name: 'Chart',
    route: '/playground/chart',
    category: 'Charts',
    package: '@syncfusion/ej2-vue-charts',
    description: '圖表元件，支援線圖、柱狀圖、區域圖、圓餅圖等多種類型。包含互動功能如縮放、工具提示、圖例、多系列資料'
  },

  // Kanban 看板類
  {
    name: 'Kanban',
    route: '/playground/kanban',
    category: 'Kanban',
    package: '@syncfusion/ej2-vue-kanban',
    description: '看板元件，用於視覺化工作流程管理。支援拖放卡片、泳道分組、WIP 限制、對話框編輯、欄位收合'
  },

  // TreeGrid 樹狀表格類
  {
    name: 'TreeGrid',
    route: '/playground/treegrid',
    category: 'Grids',
    package: '@syncfusion/ej2-vue-treegrid',
    description: '樹狀表格，支援階層式資料展示。提供排序、篩選、分頁、編輯、選取、欄位調整、核取方塊階層選取'
  },

  // Gauges 儀表類
  {
    name: 'CircularGauge',
    route: '/playground/circulargauge',
    category: 'Gauges',
    package: '@syncfusion/ej2-vue-circulargauge',
    description: '圓形儀表，用於顯示數值指標。支援多指針、色彩範圍、半圓/全圓樣式、註解、進度環'
  },
  {
    name: 'LinearGauge',
    route: '/playground/lineargauge',
    category: 'Gauges',
    package: '@syncfusion/ej2-vue-lineargauge',
    description: '線性儀表，水平或垂直的數值顯示。支援溫度計樣式、進度條、多軸、範圍顏色、標記指針'
  },

  // Document Editor 文件編輯器類
  {
    name: 'DocumentEditor',
    route: '/playground/documenteditor',
    category: 'Document Editor',
    package: '@syncfusion/ej2-vue-documenteditor',
    description: 'Word 文件編輯器，完整的文書處理功能。支援文字格式化、表格、圖片、頁首頁尾、書籤、匯出 Word/PDF'
  },

  // Gantt 甘特圖類
  {
    name: 'Gantt',
    route: '/playground/gantt',
    category: 'Gantt',
    package: '@syncfusion/ej2-vue-gantt',
    description: '甘特圖元件，專案排程管理工具。支援任務依賴關係、資源分配、里程碑、關鍵路徑、時間軸視圖切換'
  },

  // Image Editor 圖片編輯器類
  {
    name: 'ImageEditor',
    route: '/playground/imageeditor',
    category: 'Editors',
    package: '@syncfusion/ej2-vue-image-editor',
    description: '圖片編輯器，提供完整的圖片編輯功能。支援裁切、旋轉、翻轉、濾鏡效果、文字標註、自由繪圖、匯出多種格式'
  },

  // Interactive Chat 互動聊天類
  {
    name: 'AIAssistView',
    route: '/playground/aiassistview',
    category: 'Chat',
    package: '@syncfusion/ej2-vue-interactive-chat',
    description: 'AI 助理視圖，智慧對話介面。支援提示建議、AI 回應整合、Markdown 渲染、程式碼高亮、可連接 OpenAI 等 AI 服務'
  },
  {
    name: 'ChatUI',
    route: '/playground/chatui',
    category: 'Chat',
    package: '@syncfusion/ej2-vue-interactive-chat',
    description: '聊天介面元件，即時通訊 UI。支援多用戶對話、打字指示器、訊息狀態、頭像顯示、自訂訊息範本'
  },

  // Spreadsheet 試算表類
  {
    name: 'Spreadsheet',
    route: '/playground/spreadsheet',
    category: 'Editors',
    package: '@syncfusion/ej2-vue-spreadsheet',
    description: '試算表元件，提供 Excel 級別功能。支援公式計算、儲存格格式設定、資料驗證、工作表保護、匯入匯出 Excel'
  },

  // Diagram 圖表類
  {
    name: 'Diagram',
    route: '/playground/diagram',
    category: 'Data Visualization',
    package: '@syncfusion/ej2-vue-diagrams',
    description: '圖表元件，繪製流程圖、組織圖、UML、BPMN 等。支援節點、連接線、自動佈局、拖放編輯、匯出圖片'
  },

  // File Manager 檔案管理類
  {
    name: 'FileManager',
    route: '/playground/filemanager',
    category: 'Navigations',
    package: '@syncfusion/ej2-vue-filemanager',
    description: '檔案管理器，完整的檔案操作介面。支援瀏覽、上傳、下載、複製、移動、重新命名、拖放、搜尋'
  },

  // Maps 地圖類
  {
    name: 'Maps',
    route: '/playground/maps',
    category: 'Data Visualization',
    package: '@syncfusion/ej2-vue-maps',
    description: '地圖元件，地理資料視覺化。支援世界地圖、區域地圖、標記、泡泡圖、圖例、縮放平移、顏色對應'
  },

  // HeatMap 熱力圖類
  {
    name: 'HeatMap',
    route: '/playground/heatmap',
    category: 'Data Visualization',
    package: '@syncfusion/ej2-vue-heatmap',
    description: '熱力圖元件，二維資料的密度視覺化。支援色彩漸層、圖例、工具提示、自訂調色盤、多種資料格式'
  },

  // TreeMap 樹狀圖類
  {
    name: 'TreeMap',
    route: '/playground/treemap',
    category: 'Data Visualization',
    package: '@syncfusion/ej2-vue-treemap',
    description: '樹狀圖元件，以矩形區塊大小表示資料佔比。支援階層式資料、圖例、工具提示、顏色對應、標籤設定'
  },

  // Breadcrumb 麵包屑類
  {
    name: 'Breadcrumb',
    route: '/playground/breadcrumb',
    category: 'Navigations',
    package: '@syncfusion/ej2-vue-navigations',
    description: '麵包屑導航，顯示頁面階層位置。支援圖示、自訂分隔符、溢位處理、URL 導航、範本自訂'
  },

  // Carousel 輪播類
  {
    name: 'Carousel',
    route: '/playground/carousel',
    category: 'Navigations',
    package: '@syncfusion/ej2-vue-navigations',
    description: '輪播元件，滑動展示圖片或內容。支援自動播放、導航按鈕、指示器、循環播放、觸控滑動'
  },

  // Accumulation Chart 累積圖表類
  {
    name: 'AccumulationChart',
    route: '/playground/accumulationchart',
    category: 'Charts',
    package: '@syncfusion/ej2-vue-charts',
    description: '累積圖表，包含圓餅圖、甜甜圈圖等。支援資料標籤、圖例、分離效果、半圓餅圖、多系列'
  },

  // Stock Chart 股票圖表類
  {
    name: 'StockChart',
    route: '/playground/stockchart',
    category: 'Charts',
    package: '@syncfusion/ej2-vue-charts',
    description: '股票圖表，專業金融圖表功能。支援 K 線圖、OHLC、技術指標、範圍選擇器、十字線、匯出'
  },

  // ContextMenu 右鍵選單類
  {
    name: 'ContextMenu',
    route: '/playground/contextmenu',
    category: 'Navigations',
    package: '@syncfusion/ej2-vue-navigations',
    description: '右鍵選單，在指定區域顯示快捷選單。支援多層級、圖示、分隔線、動態項目、事件處理'
  },

  // Stepper 步驟指示器類
  {
    name: 'Stepper',
    route: '/playground/stepper',
    category: 'Navigations',
    package: '@syncfusion/ej2-vue-navigations',
    description: '步驟指示器，引導使用者完成多步驟流程。支援水平/垂直方向、圖示、標籤、互動控制'
  },

  // 3D Chart 3D圖表類
  {
    name: 'Chart3D',
    route: '/playground/chart3d',
    category: 'Charts',
    package: '@syncfusion/ej2-vue-charts',
    description: '3D 圖表元件，提供立體視覺效果。支援 3D 柱狀圖、長條圖、堆疊圖、可旋轉視角、傾斜角度調整'
  },

  // Sparkline 迷你圖類
  {
    name: 'Sparkline',
    route: '/playground/sparkline',
    category: 'Charts',
    package: '@syncfusion/ej2-vue-charts',
    description: '迷你圖元件，用於在有限空間中展示趨勢。支援線圖、區域圖、柱狀圖、輸贏圖、圓餅圖等類型'
  },

  // AppBar 應用程式列類
  {
    name: 'AppBar',
    route: '/playground/appbar',
    category: 'Navigations',
    package: '@syncfusion/ej2-vue-navigations',
    description: '應用程式列元件，用於頁面頂部導航。支援常規/緊湊/醒目模式、淺色/深色/主題色、搜尋整合'
  },

  // Ribbon 功能區類
  {
    name: 'Ribbon',
    route: '/playground/ribbon',
    category: 'Navigations',
    package: '@syncfusion/ej2-vue-ribbon',
    description: '功能區元件，Office 風格的工具列介面。支援分頁、群組、多種控制項類型、檔案選單、響應式佈局'
  },
]

export const categories = [
  'Buttons',
  'Calendars',
  'Charts',
  'Chat',
  'Data Analysis',
  'Data Visualization',
  'Document Editor',
  'Dropdowns',
  'Editors',
  'Gantt',
  'Gauges',
  'Grids',
  'Inputs',
  'Kanban',
  'Layouts',
  'Lists',
  'Navigations',
  'Notifications',
  'Popups',
  'Progress',
  'Schedule',
  'Split Buttons',
  'Viewers',
]

// 類別中文對照表（給設計師參考）
export const categoryLabels: Record<string, string> = {
  'Buttons': '按鈕類',
  'Calendars': '日期時間類',
  'Charts': '圖表類',
  'Chat': '互動聊天類',
  'Data Analysis': '資料分析類',
  'Data Visualization': '資料視覺化類',
  'Document Editor': '文件編輯器類',
  'Dropdowns': '下拉選單類',
  'Editors': '編輯器類',
  'Gantt': '甘特圖類',
  'Gauges': '儀表類',
  'Grids': '表格類',
  'Inputs': '輸入類',
  'Kanban': '看板類',
  'Layouts': '佈局類',
  'Lists': '列表類',
  'Navigations': '導航類',
  'Notifications': '通知類',
  'Popups': '彈出視窗類',
  'Progress': '進度類',
  'Schedule': '排程類',
  'Split Buttons': '分割按鈕類',
  'Viewers': '檢視器類',
}
