(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const palette = {
    sunset: ["#ef6a58", "#f2a45f", "#5579d9", "#3aa987", "#8569c7", "#c95f7c", "#e2ba52", "#527e91"],
    ocean: ["#315c9b", "#4f87b6", "#63a6af", "#78c4b3", "#5371b8", "#7e92c9", "#3b7d8d", "#9fc7d4"],
    forest: ["#2c6e5b", "#438f70", "#79aa72", "#afbd6b", "#507958", "#9a7d4d", "#5aa293", "#7c9a5d"],
    mono: ["#17233b", "#35425a", "#536078", "#707c91", "#8e98aa", "#aab2c0", "#c5cad3", "#dde0e5"]
  };

  const I18N = {
    zh: {
      brandTag: "数据工坊", navOverview: "总览", navTable: "数据表", navTransform: "数据处理", navStats: "统计分析", navCharts: "图表工坊",
      localTitle: "本地计算", localNote: "数据不会上传至服务器", shortcuts: "快捷键", undo: "撤销", reset: "重置", import: "导入数据", export: "导出",
      uploadFile: "上传文件", pasteData: "粘贴数据", pasteDataSub: "表格文本或 JSON", sampleData: "加载示例", sampleDataSub: "零售经营数据",
      overviewEyebrow: "DATA PULSE · 数据脉搏", overviewTitle: "一眼读懂你的数据", overviewSub: "自动概览数据规模、质量、分布与关键关系。", createChart: "创建图表",
      rows: "数据行", columns: "字段列", missing: "缺失值", duplicates: "重复行", numericProfile: "数值走势速览", quality: "数据质量", qualitySub: "综合完整性与唯一性", auto: "自动",
      completeRate: "完整率", uniqueRate: "唯一率", fieldTypes: "字段类型", fieldTypesSub: "自动推断的数据结构", topCategories: "主要类别", correlationClues: "相关线索", correlationCluesSub: "最强数值关系", viewAll: "查看全部",
      tableEyebrow: "DATAFRAME · 数据框", tableTitle: "查看与编辑数据", tableSub: "搜索、排序、分页，双击单元格可直接修改。", addRow: "新增行", copy: "复制", searchRows: "搜索所有字段…", pageSize: "每页",
      transformEyebrow: "WRANGLE · 数据整理", transformTitle: "像 Pandas 一样处理数据", transformSub: "把常用代码操作变成可见、可撤销的交互步骤。", filterRows: "筛选行", value: "值", applyFilter: "应用筛选",
      missingValues: "处理缺失值", fillValue: "填充值", run: "执行", typeConvert: "转换类型", convert: "转换", computedColumn: "计算列", newColumnName: "新列名", formulaExample: "例如：(revenue-cost)/revenue", create: "创建",
      renameColumn: "重命名列", newName: "新名称", rename: "重命名", duplicatesOp: "移除重复", duplicatesDesc: "删除所有字段完全一致的重复记录。", removeDuplicates: "移除重复行", groupAggregate: "分组聚合", aggregate: "聚合", groupHint: "选择字段，结果将在这里预览", operationHistory: "操作历史", historySub: "每一步都可撤销",
      statsEyebrow: "DESCRIBE · 统计描述", statsTitle: "发现分布与关系", statsSub: "从描述统计到相关矩阵，用图形捕捉异常与关联。", describeTable: "描述统计", distribution: "分布直方图", boxPlot: "箱线图", outlierHint: "四分位范围与异常值", correlationMatrix: "相关矩阵",
      chartsEyebrow: "VISUALIZE · 可视化", chartsTitle: "把数据变成故事", chartsSub: "选择字段和图形，实时探索趋势、比较与关系。", downloadSvg: "下载 SVG", chartType: "图表类型", bar: "柱状", line: "折线", scatter: "散点", pie: "饼图", area: "面积", histogram: "直方图", xAxis: "X 轴 / 类别", yAxis: "Y 轴 / 数值", aggregation: "聚合方式", colorTheme: "配色主题", smartRecommend: "智能推荐",
      quickImport: "QUICK IMPORT · 快速导入", pasteTitle: "粘贴表格或 JSON", pasteHint: "支持从 Excel 复制的制表符数据、CSV 和 JSON 数组。", cancel: "取消", importNow: "立即导入", exportData: "EXPORT · 导出数据", exportTitle: "选择导出格式", csvDesc: "通用表格格式", jsonDesc: "结构化数据",
      shortcutTitle: "键盘快捷键", switchView: "切换分析视图", undoAction: "撤销操作", openFile: "打开文件", focusSearch: "聚焦搜索",
      sampleName: "零售经营示例", rowsUnit: "行", colsUnit: "列", inferred: "已自动识别字段类型", completeRecords: "完整记录", typeSummary: "数值 / 分类 / 日期", dataComplete: "数据完整", noDuplicates: "暂无重复",
      numeric: "数值", categorical: "分类", date: "日期", boolean: "布尔", empty: "空列", records: "条记录", operations: "个操作", noHistory: "尚未执行数据处理操作。\n从左侧选择一个功能开始。",
      page: "第", of: "页，共", filtered: "筛选后", selected: "显示", sortAsc: "升序", sortDesc: "降序", copied: "已复制到剪贴板", imported: "数据导入成功", resetDone: "已恢复原始数据", undone: "已撤销上一步", exported: "已导出",
      filterDone: "筛选行", missingDone: "处理缺失值", typeDone: "类型转换", formulaDone: "创建计算列", renameDone: "重命名字段", dedupeDone: "移除重复行", groupDone: "分组聚合", editDone: "编辑单元格", addDone: "新增空行",
      chooseColumn: "选择字段", allColumns: "全部字段", apply: "应用", useResult: "使用聚合结果", count: "计数", unique: "唯一值", mean: "均值", std: "标准差", min: "最小值", q25: "25%", median: "中位数", q75: "75%", max: "最大值", mode: "众数",
      noNumeric: "需要至少一个数值字段", noCategory: "需要至少一个分类字段", invalidFile: "无法读取该文件，请检查格式", invalidData: "未识别到有效表格数据", invalidFormula: "公式无效；仅支持字段名、数字和 + − × ÷ 括号", nameRequired: "请输入新列名", sameName: "字段名已存在", noChange: "没有可应用的更改", downloadReady: "图表 SVG 已下载", localProcessing: "文件仅在浏览器内解析",
      chartInsightPrefix: "观察：", peakAt: "最高值出现在", strongPositive: "呈明显正相关", strongNegative: "呈明显负相关", balanced: "各组分布相对均衡", recordsShown: "条记录", fileTooLarge: "文件较大，浏览器处理可能需要一些时间"
    },
    en: {
      brandTag: "DATA STUDIO", navOverview: "Overview", navTable: "Data table", navTransform: "Transform", navStats: "Statistics", navCharts: "Chart studio",
      localTitle: "Local compute", localNote: "Your data never leaves this device", shortcuts: "Shortcuts", undo: "Undo", reset: "Reset", import: "Import", export: "Export",
      uploadFile: "Upload file", pasteData: "Paste data", pasteDataSub: "Table text or JSON", sampleData: "Load sample", sampleDataSub: "Retail operations data",
      overviewEyebrow: "DATA PULSE · OVERVIEW", overviewTitle: "Understand data at a glance", overviewSub: "An instant view of scale, quality, distribution and key relationships.", createChart: "Create chart",
      rows: "Rows", columns: "Columns", missing: "Missing", duplicates: "Duplicates", numericProfile: "Numeric trend", quality: "Data quality", qualitySub: "Completeness and uniqueness", auto: "AUTO",
      completeRate: "Completeness", uniqueRate: "Uniqueness", fieldTypes: "Field types", fieldTypesSub: "Automatically inferred schema", topCategories: "Top categories", correlationClues: "Correlation clues", correlationCluesSub: "Strongest numeric relationships", viewAll: "View all",
      tableEyebrow: "DATAFRAME · RECORDS", tableTitle: "Inspect and edit data", tableSub: "Search, sort, paginate, and double-click cells to edit.", addRow: "Add row", copy: "Copy", searchRows: "Search all fields…", pageSize: "Rows",
      transformEyebrow: "WRANGLE · TRANSFORM", transformTitle: "Work with data like Pandas", transformSub: "Turn familiar code operations into visible, reversible steps.", filterRows: "Filter rows", value: "Value", applyFilter: "Apply filter",
      missingValues: "Handle missing values", fillValue: "Fill value", run: "Run", typeConvert: "Convert type", convert: "Convert", computedColumn: "Computed column", newColumnName: "New column", formulaExample: "e.g. (revenue-cost)/revenue", create: "Create",
      renameColumn: "Rename column", newName: "New name", rename: "Rename", duplicatesOp: "Remove duplicates", duplicatesDesc: "Remove records whose values match across every field.", removeDuplicates: "Remove duplicate rows", groupAggregate: "Group & aggregate", aggregate: "Aggregate", groupHint: "Choose fields to preview grouped results", operationHistory: "Operation history", historySub: "Every step is reversible",
      statsEyebrow: "DESCRIBE · STATISTICS", statsTitle: "Discover distributions & relationships", statsSub: "Use descriptive statistics and correlations to spot patterns and outliers.", describeTable: "Descriptive statistics", distribution: "Distribution histogram", boxPlot: "Box plot", outlierHint: "Quartile range and outliers", correlationMatrix: "Correlation matrix",
      chartsEyebrow: "VISUALIZE · CHARTS", chartsTitle: "Turn data into a story", chartsSub: "Choose fields and marks to explore trends, comparisons and relationships.", downloadSvg: "Download SVG", chartType: "Chart type", bar: "Bar", line: "Line", scatter: "Scatter", pie: "Pie", area: "Area", histogram: "Histogram", xAxis: "X axis / category", yAxis: "Y axis / value", aggregation: "Aggregation", colorTheme: "Color theme", smartRecommend: "Smart suggestion",
      quickImport: "QUICK IMPORT", pasteTitle: "Paste table or JSON", pasteHint: "Accepts tab-separated Excel data, CSV, and JSON arrays.", cancel: "Cancel", importNow: "Import now", exportData: "EXPORT DATA", exportTitle: "Choose an export format", csvDesc: "Universal table format", jsonDesc: "Structured data",
      shortcutTitle: "Keyboard shortcuts", switchView: "Switch analysis view", undoAction: "Undo operation", openFile: "Open file", focusSearch: "Focus search",
      sampleName: "Retail operations sample", rowsUnit: "rows", colsUnit: "columns", inferred: "field types inferred", completeRecords: "complete records", typeSummary: "numeric / category / date", dataComplete: "data complete", noDuplicates: "no duplicates",
      numeric: "Numeric", categorical: "Category", date: "Date", boolean: "Boolean", empty: "Empty", records: "records", operations: "operations", noHistory: "No transformations yet.\nChoose an operation to get started.",
      page: "Page", of: "of", filtered: "filtered", selected: "Showing", sortAsc: "ascending", sortDesc: "descending", copied: "Copied to clipboard", imported: "Data imported", resetDone: "Original data restored", undone: "Last operation undone", exported: "Exported",
      filterDone: "Filter rows", missingDone: "Handle missing", typeDone: "Convert type", formulaDone: "Create computed column", renameDone: "Rename column", dedupeDone: "Remove duplicates", groupDone: "Group & aggregate", editDone: "Edit cell", addDone: "Add empty row",
      chooseColumn: "Choose column", allColumns: "All columns", apply: "Apply", useResult: "Use grouped result", count: "Count", unique: "Unique", mean: "Mean", std: "Std. dev.", min: "Minimum", q25: "25%", median: "Median", q75: "75%", max: "Maximum", mode: "Mode",
      noNumeric: "At least one numeric field is required", noCategory: "At least one category field is required", invalidFile: "Could not read this file; check its format", invalidData: "No valid table data detected", invalidFormula: "Invalid formula; use column names, numbers, + − × ÷ and parentheses", nameRequired: "Enter a new column name", sameName: "That column name already exists", noChange: "No applicable changes", downloadReady: "Chart SVG downloaded", localProcessing: "The file was parsed entirely in your browser",
      chartInsightPrefix: "Observation: ", peakAt: "the highest value occurs at", strongPositive: "shows a strong positive relationship", strongNegative: "shows a strong negative relationship", balanced: "groups are relatively balanced", recordsShown: "records", fileTooLarge: "This is a large file and may take a moment to process"
    }
  };

  const sampleData = [
    ["2026-01-05","华东","办公用品","笔记本",46,5980,3260,4.7,"线上"], ["2026-01-18","华南","科技","无线耳机",28,12600,7420,4.5,"线上"],
    ["2026-02-03","华北","家具","人体工学椅",17,15300,10400,4.8,"门店"], ["2026-02-14","西南","办公用品","中性笔",88,3520,1760,4.2,"经销"],
    ["2026-03-02","华东","科技","机械键盘",35,11200,6650,4.6,"线上"], ["2026-03-19","华中","家具","升降桌",13,16900,11700,4.9,"门店"],
    ["2026-04-06","华南","办公用品","文件夹",72,4320,2240,4.1,"经销"], ["2026-04-22","华北","科技","显示器",21,18900,13200,4.7,"线上"],
    ["2026-05-08","西北","家具","书架",19,8550,5510,4.3,"门店"], ["2026-05-25","华东","科技","扩展坞",31,9920,5890,4.4,"线上"],
    ["2026-06-11","西南","办公用品","打印纸",105,6300,3570,4.0,"经销"], ["2026-06-27","华中","家具","会议桌",8,14400,9800,4.6,"门店"],
    ["2026-07-09","华南","科技","摄像头",42,10920,6300,4.5,"线上"], ["2026-07-24","华北","办公用品","订书机",63,4410,2520,4.2,"门店"],
    ["2026-08-04","华东","家具","储物柜",14,12600,8680,4.7,"经销"], ["2026-08-21","西北","科技","路由器",27,8100,4725,4.3,"线上"],
    ["2026-09-07","华中","办公用品","白板",23,5750,3220,4.4,"门店"], ["2026-09-18","西南","科技","便携投影",11,17600,12100,4.8,"线上"],
    ["2026-10-03","华南","家具","休闲椅",16,10400,7040,4.6,"门店"], ["2026-10-17","华东","办公用品","标签纸",97,4850,2425,4.1,"经销"],
    ["2026-11-06","华北","科技","平板电脑",15,22500,15750,4.9,"线上"], ["2026-11-20","华中","家具","移动边桌",22,7700,4840,4.4,"门店"],
    ["2026-12-05","西北","办公用品","桌面收纳",54,5940,3078,4.3,"线上"], ["2026-12-19","西南","科技","智能音箱",29,9570,5510,4.5,"经销"]
  ].map(r => Object.fromEntries(["date","region","category","product","units","revenue","cost","rating","channel"].map((k,i) => [k,r[i]])));

  const state = {
    lang: "zh", data: structuredClone(sampleData), originalData: structuredClone(sampleData), name: "零售经营示例", originalName: "零售经营示例",
    types: {}, history: [], page: 1, pageSize: 20, search: "", sort: { column: null, direction: 1 }, chartType: "bar", groupResult: null
  };

  const t = key => I18N[state.lang][key] ?? key;
  const columns = () => state.data.length ? [...new Set(state.data.flatMap(Object.keys))] : [];
  const isMissing = v => v === null || v === undefined || (typeof v === "string" && v.trim() === "") || (typeof v === "number" && Number.isNaN(v));
  const asNumber = v => { if (typeof v === "number") return Number.isFinite(v) ? v : null; const n = Number(String(v ?? "").replace(/,/g, "")); return Number.isFinite(n) ? n : null; };
  const fmt = (v, digits = 2) => {
    if (isMissing(v)) return "—";
    if (typeof v === "number") return new Intl.NumberFormat(state.lang === "zh" ? "zh-CN" : "en-US", { maximumFractionDigits: digits }).format(v);
    return String(v);
  };
  const escapeHTML = value => String(value ?? "").replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
  const escapeXML = escapeHTML;
  const clamp = (v,min,max) => Math.max(min, Math.min(max,v));
  const mean = a => a.length ? a.reduce((s,v)=>s+v,0)/a.length : null;
  const median = a => quantile(a,.5);
  function quantile(values, q) { const a = [...values].filter(Number.isFinite).sort((x,y)=>x-y); if (!a.length) return null; const p=(a.length-1)*q, b=Math.floor(p), r=p-b; return a[b+1]!==undefined ? a[b]+r*(a[b+1]-a[b]) : a[b]; }
  const std = a => { if (a.length < 2) return 0; const m=mean(a); return Math.sqrt(a.reduce((s,v)=>s+(v-m)**2,0)/(a.length-1)); };
  function pearson(a,b) { const pairs=a.map((v,i)=>[asNumber(v),asNumber(b[i])]).filter(([x,y])=>x!==null&&y!==null); if(pairs.length<2)return 0; const xs=pairs.map(p=>p[0]), ys=pairs.map(p=>p[1]), mx=mean(xs), my=mean(ys); const num=pairs.reduce((s,[x,y])=>s+(x-mx)*(y-my),0); const den=Math.sqrt(xs.reduce((s,x)=>s+(x-mx)**2,0)*ys.reduce((s,y)=>s+(y-my)**2,0)); return den ? num/den : 0; }
  function inferTypes() {
    const result = {};
    columns().forEach(col => {
      const vals = state.data.map(r=>r[col]).filter(v=>!isMissing(v));
      if (!vals.length) return result[col] = "empty";
      const boolRatio = vals.filter(v => typeof v === "boolean" || /^(true|false|yes|no|是|否)$/i.test(String(v))).length / vals.length;
      const numberRatio = vals.filter(v => asNumber(v) !== null).length / vals.length;
      const dateRatio = vals.filter(v => typeof v === "string" && /^\d{4}[-/.]\d{1,2}[-/.]\d{1,2}/.test(v) && !Number.isNaN(Date.parse(v))).length / vals.length;
      result[col] = boolRatio > .8 ? "boolean" : dateRatio > .7 ? "date" : numberRatio > .8 ? "numeric" : "categorical";
    });
    state.types = result;
  }

  function normalizeRows(rows) {
    if (!Array.isArray(rows)) return [];
    const objects = rows.filter(r => r && typeof r === "object" && !Array.isArray(r));
    const cols = [...new Set(objects.flatMap(Object.keys))];
    return objects.map(row => Object.fromEntries(cols.map(c => [c, row[c] ?? null])));
  }

  function duplicateCount(data = state.data) {
    const seen = new Set(); let dupes = 0;
    data.forEach(r => { const key = JSON.stringify(r); if(seen.has(key)) dupes++; else seen.add(key); });
    return dupes;
  }

  function updateAll() {
    inferTypes();
    updateI18n(); updateHeader(); populateControls(); renderMetrics(); renderOverview(); renderTable(); renderHistory(); renderStats(); renderStudio();
  }

  function updateI18n() {
    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
    $$('[data-i18n]').forEach(el => el.textContent = t(el.dataset.i18n));
    $$('[data-i18n-placeholder]').forEach(el => el.placeholder = t(el.dataset.i18nPlaceholder));
    $("#langBtn").textContent = state.lang === "zh" ? "EN" : "中";
    $("#datasetName").textContent = state.name === "零售经营示例" || state.name === "Retail operations sample" ? t("sampleName") : state.name;
    setOptions($("#filterOperator"), [
      ["contains", state.lang==='zh'?"包含":"Contains"], ["eq","="], ["neq","≠"], ["gt",">"], ["gte","≥"], ["lt","<"], ["lte","≤"],
      ["empty", state.lang==='zh'?"为空":"Is empty"], ["notempty", state.lang==='zh'?"非空":"Not empty"]
    ], $("#filterOperator").value);
    setOptions($("#missingAction"), [
      ["drop", state.lang==='zh'?"删除缺失行":"Drop missing rows"], ["mean", state.lang==='zh'?"填充均值":"Fill with mean"], ["median", state.lang==='zh'?"填充中位数":"Fill with median"], ["mode", state.lang==='zh'?"填充众数":"Fill with mode"], ["zero", state.lang==='zh'?"填充 0":"Fill with 0"], ["custom", state.lang==='zh'?"自定义填充":"Custom value"]
    ], $("#missingAction").value);
    $("#chartTitle").value = $("#chartTitle").value === "经营数据概览" || $("#chartTitle").value === "Operations overview" ? (state.lang==='zh'?"经营数据概览":"Operations overview") : $("#chartTitle").value;
  }

  function updateHeader() {
    const c = columns().length;
    $("#datasetName").textContent = state.name === "零售经营示例" || state.name === "Retail operations sample" ? t("sampleName") : state.name;
    $("#datasetMeta").textContent = `${fmt(state.data.length,0)} ${t("rowsUnit")} · ${c} ${t("colsUnit")} · ${t("inferred")}`;
    $("#undoBtn").disabled = !state.history.length;
    $("#historyLabel").textContent = `${state.history.length} ${t("operations")}`;
  }

  function setOptions(select, options, preferred) {
    if (!select) return;
    const old = preferred ?? select.value;
    select.innerHTML = options.map(([v,label])=>`<option value="${escapeHTML(v)}">${escapeHTML(label)}</option>`).join("");
    if (options.some(([v])=>String(v)===String(old))) select.value = old;
  }

  function populateControls() {
    const cols = columns(), numeric = cols.filter(c=>state.types[c]==="numeric"), categorical = cols.filter(c=>state.types[c]!=="numeric");
    ["filterColumn","typeColumn","renameColumn"].forEach(id => setOptions($("#"+id), cols.map(c=>[c,c])));
    setOptions($("#missingColumn"), [["__all__",t("allColumns")],...cols.map(c=>[c,c])]);
    setOptions($("#groupColumn"), cols.map(c=>[c,c])); setOptions($("#aggColumn"), numeric.map(c=>[c,c]));
    setOptions($("#overviewMetric"), numeric.map(c=>[c,c]), $("#overviewMetric").value || numeric.find(c=>/revenue|sales|amount|收入|销售/i.test(c)) || numeric[0]);
    setOptions($("#overviewCategory"), categorical.map(c=>[c,c]), $("#overviewCategory").value || categorical.find(c=>/category|类别|region|区域/i.test(c)) || categorical[0]);
    setOptions($("#statsColumn"), numeric.map(c=>[c,c]), $("#statsColumn").value || numeric[0]);
    setOptions($("#chartX"), cols.map(c=>[c,c]), $("#chartX").value || categorical[0] || cols[0]);
    setOptions($("#chartY"), numeric.map(c=>[c,c]), $("#chartY").value || numeric.find(c=>/revenue|sales|amount|收入|销售/i.test(c)) || numeric[0]);
  }

  function renderMetrics() {
    const cells = state.data.length * columns().length;
    const missing = state.data.reduce((s,r)=>s+columns().filter(c=>isMissing(r[c])).length,0);
    const dupes = duplicateCount();
    $("#metricRows").textContent = fmt(state.data.length,0); $("#metricCols").textContent = fmt(columns().length,0); $("#metricMissing").textContent = fmt(missing,0); $("#metricDupes").textContent = fmt(dupes,0);
    $("#metricRowsSub").textContent = `${fmt(state.data.length - state.data.filter(r=>columns().some(c=>isMissing(r[c]))).length,0)} ${t("completeRecords")}`;
    const counts = ["numeric","categorical","date"].map(k=>Object.values(state.types).filter(v=>v===k).length);
    $("#metricColsSub").textContent = counts.join(" / ") + " " + t("typeSummary");
    $("#metricMissingSub").textContent = cells ? `${((1-missing/cells)*100).toFixed(1)}% ${t("dataComplete")}` : "—";
    $("#metricDupesSub").textContent = dupes ? `${dupes} / ${state.data.length}` : t("noDuplicates");
    const completeness = cells ? (1-missing/cells)*100 : 0, uniqueness = state.data.length ? (1-dupes/state.data.length)*100 : 0, score = Math.round(completeness*.7+uniqueness*.3);
    $("#qualityScore").textContent = score; $("#completeness").textContent = completeness.toFixed(1)+"%"; $("#uniqueness").textContent = uniqueness.toFixed(1)+"%";
    $("#qualityRing").style.background = `conic-gradient(var(--mint) 0deg, var(--blue) ${score*3.6}deg, #ebe8e1 ${score*3.6}deg)`;
  }

  function renderOverview() {
    const counts = {};
    Object.values(state.types).forEach(type => counts[type]=(counts[type]||0)+1);
    const typeColors = {numeric:"var(--coral)",categorical:"var(--blue)",date:"var(--gold)",boolean:"var(--mint)",empty:"#aaa"};
    const total = Math.max(1,columns().length);
    $("#typeBreakdown").innerHTML = Object.entries(counts).map(([type,count])=>`<div class="type-item"><span>${t(type)}</span><div class="bar-track"><div class="bar-fill" style="width:${count/total*100}%;background:${typeColors[type]}"></div></div><b>${count}</b></div>`).join("") || `<div class="history-empty">${t("invalidData")}</div>`;

    const category = $("#overviewCategory").value, categoryCounts = frequency(category).slice(0,6), maxCount = Math.max(1,...categoryCounts.map(d=>d.value));
    $("#categorySubtitle").textContent = category ? `${state.lang==='zh'?'按':'Count by'} ${category} ${state.lang==='zh'?'计数':''}` : t("noCategory");
    $("#categoryBars").innerHTML = categoryCounts.map((d,i)=>`<div class="category-item"><div class="category-column" style="height:${Math.max(5,d.value/maxCount*145)}px;background:${palette.sunset[i%palette.sunset.length]}"><b>${d.value}</b></div><span title="${escapeHTML(d.label)}">${escapeHTML(d.label)}</span></div>`).join("") || `<div class="history-empty">${t("noCategory")}</div>`;

    const metric = $("#overviewMetric").value;
    $("#profileSubtitle").textContent = metric ? `${state.lang==='zh'?'按记录顺序观察':'By record order:'} ${metric}` : t("noNumeric");
    renderLineChart($("#overviewChart"), state.data.map((r,i)=>({label: (r.date || r.Date || i+1), value: asNumber(r[metric])})).filter(d=>d.value!==null), palette.sunset[0], false);

    const corr = correlationPairs().slice(0,4);
    $("#correlationList").innerHTML = corr.map(d=>`<div class="corr-row"><div><span>${escapeHTML(d.a)}</span><small>×</small><span>${escapeHTML(d.b)}</span></div><b>${d.r.toFixed(2)}</b><div class="corr-track"><div class="corr-fill" style="width:${Math.abs(d.r)*100}%"></div></div></div>`).join("") || `<div class="history-empty">${t("noNumeric")}</div>`;
  }

  function frequency(col) {
    if (!col) return [];
    const map = new Map(); state.data.forEach(r=>{const k=isMissing(r[col])?"(NA)":String(r[col]);map.set(k,(map.get(k)||0)+1);});
    return [...map].map(([label,value])=>({label,value})).sort((a,b)=>b.value-a.value);
  }

  function correlationPairs() {
    const nums=columns().filter(c=>state.types[c]==="numeric"), pairs=[];
    nums.forEach((a,i)=>nums.slice(i+1).forEach(b=>pairs.push({a,b,r:pearson(state.data.map(r=>r[a]),state.data.map(r=>r[b]))})));
    return pairs.sort((a,b)=>Math.abs(b.r)-Math.abs(a.r));
  }

  function filteredRows() {
    const q=state.search.trim().toLowerCase(); let rows=state.data.map((row,index)=>({row,index}));
    if(q) rows=rows.filter(({row})=>columns().some(c=>String(row[c]??"").toLowerCase().includes(q)));
    if(state.sort.column) rows.sort((a,b)=>compare(a.row[state.sort.column],b.row[state.sort.column])*state.sort.direction);
    return rows;
  }
  function compare(a,b){ if(isMissing(a)&&isMissing(b))return 0;if(isMissing(a))return 1;if(isMissing(b))return -1; const na=asNumber(a),nb=asNumber(b);if(na!==null&&nb!==null)return na-nb;return String(a).localeCompare(String(b), state.lang==='zh'?'zh':'en'); }

  function renderTable() {
    const cols=columns(), all=filteredRows(), pages=Math.max(1,Math.ceil(all.length/state.pageSize)); state.page=clamp(state.page,1,pages);
    const start=(state.page-1)*state.pageSize, slice=all.slice(start,start+state.pageSize);
    $("#dataTable thead").innerHTML=`<tr><th>#</th>${cols.map(c=>`<th data-col="${escapeHTML(c)}">${escapeHTML(c)} <span class="type-label">${t(state.types[c])}</span>${state.sort.column===c?(state.sort.direction===1?' ↑':' ↓'):''}</th>`).join("")}</tr>`;
    $("#dataTable tbody").innerHTML=slice.map(({row,index},ri)=>`<tr><td>${start+ri+1}</td>${cols.map(c=>`<td contenteditable="true" data-row="${index}" data-col="${escapeHTML(c)}" title="${escapeHTML(row[c])}">${escapeHTML(fmt(row[c]))}</td>`).join("")}</tr>`).join("") || `<tr><td colspan="${cols.length+1}">${t("invalidData")}</td></tr>`;
    $("#pageInfo").textContent=`${t("page")} ${state.page} ${t("of")} ${pages}`; $("#selectionInfo").textContent=`${t("selected")} ${slice.length} / ${all.length} ${t("recordsShown")}`;
    $("#prevPage").disabled=state.page<=1; $("#nextPage").disabled=state.page>=pages;
    $$("#dataTable th[data-col]").forEach(th=>th.onclick=()=>{const c=th.dataset.col;if(state.sort.column===c)state.sort.direction*=-1;else state.sort={column:c,direction:1};renderTable();});
    $$("#dataTable td[contenteditable]").forEach(td=>{ td.addEventListener("focus",()=>td.dataset.before=td.textContent); td.addEventListener("blur",()=>{if(td.textContent===td.dataset.before)return; const row=Number(td.dataset.row),col=td.dataset.col,val=parseValueByType(td.textContent,state.types[col]); mutate("editDone",`${col} · #${row+1}`,()=>{state.data[row][col]=val;});}); });
  }

  function parseValueByType(v,type){ if(v==="—"||v.trim()==="")return null;if(type==="numeric")return asNumber(v);if(type==="boolean")return /^(true|yes|1|是)$/i.test(v);return v; }

  function renderHistory() {
    const el=$("#historyList");
    if(!state.history.length){el.innerHTML=`<div class="history-empty">${escapeHTML(t("noHistory")).replace(/\n/g,"<br>")}</div>`;return;}
    el.innerHTML=state.history.slice().reverse().map((h,i)=>`<div class="history-item"><span class="history-number">${state.history.length-i}</span><div><b>${t(h.key)}</b><small>${escapeHTML(h.detail)}</small></div></div>`).join("");
  }

  function describeColumn(col) {
    const vals=state.data.map(r=>r[col]).filter(v=>!isMissing(v)), nums=vals.map(asNumber).filter(v=>v!==null), numeric=state.types[col]==="numeric";
    const counts=new Map(); vals.forEach(v=>counts.set(String(v),(counts.get(String(v))||0)+1)); const mode=[...counts].sort((a,b)=>b[1]-a[1])[0]?.[0] ?? "—";
    return {count:vals.length, unique:new Set(vals.map(String)).size, mean:numeric?mean(nums):null, std:numeric?std(nums):null, min:numeric?Math.min(...nums):null, q25:numeric?quantile(nums,.25):null, median:numeric?median(nums):null, q75:numeric?quantile(nums,.75):null, max:numeric?Math.max(...nums):null, mode};
  }

  function renderStats() {
    const cols=columns(), metrics=["count","unique","mean","std","min","q25","median","q75","max","mode"];
    $("#describeTable thead").innerHTML=`<tr><th>${state.lang==='zh'?'指标':'Metric'}</th>${cols.map(c=>`<th>${escapeHTML(c)}</th>`).join("")}</tr>`;
    const desc=Object.fromEntries(cols.map(c=>[c,describeColumn(c)]));
    $("#describeTable tbody").innerHTML=metrics.map(m=>`<tr><td><b>${t(m)}</b></td>${cols.map(c=>`<td>${fmt(desc[c][m])}</td>`).join("")}</tr>`).join("");
    const selected=$("#statsColumn").value, values=state.data.map(r=>asNumber(r[selected])).filter(v=>v!==null);
    $("#distributionSub").textContent=selected||t("noNumeric"); renderHistogram($("#histogramChart"),values,palette.sunset[0]); renderBoxPlot($("#boxPlotChart"),values,palette.sunset[1]); renderHeatmap();
  }

  function renderHeatmap() {
    const nums=columns().filter(c=>state.types[c]==="numeric"), el=$("#correlationHeatmap");
    if(!nums.length){el.innerHTML=`<div class="history-empty">${t("noNumeric")}</div>`;return;}
    const grid=`repeat(${nums.length+1}, minmax(54px,1fr))`; let html=`<div class="heatmap" style="grid-template-columns:${grid}"><div></div>${nums.map(c=>`<div class="heat-label" title="${escapeHTML(c)}">${escapeHTML(c)}</div>`).join("")}`;
    nums.forEach(a=>{html+=`<div class="heat-label" title="${escapeHTML(a)}">${escapeHTML(a)}</div>`;nums.forEach(b=>{const r=pearson(state.data.map(x=>x[a]),state.data.map(x=>x[b])); const color=mixColor(r);html+=`<div class="heat-cell" style="background:${color}" title="${escapeHTML(a)} × ${escapeHTML(b)}: ${r.toFixed(3)}">${r.toFixed(2)}</div>`;});});
    el.innerHTML=html+"</div>";
  }
  function mixColor(r){const target=r>=0?[239,106,88]:[85,121,217],base=[238,236,230],a=Math.abs(r);return `rgb(${base.map((v,i)=>Math.round(v+(target[i]-v)*a)).join(",")})`;}

  function mutate(key,detail,fn){ state.history.push({key,detail,data:structuredClone(state.data),name:state.name}); if(state.history.length>30)state.history.shift(); fn(); state.page=1; updateAll(); toast(`${t(key)} · ${detail}`,"success"); }
  function undo(){const h=state.history.pop();if(!h)return;state.data=h.data;state.name=h.name;state.page=1;updateAll();toast(t("undone"),"success");}
  function reset(){state.data=structuredClone(state.originalData);state.name=state.originalName;state.history=[];state.page=1;updateAll();toast(t("resetDone"),"success");}

  function renderStudio(){
    const x=$("#chartX").value,y=$("#chartY").value,agg=$("#chartAgg").value,colors=palette[$("#chartColor").value]||palette.sunset,type=state.chartType;
    $("#chartBadge").textContent=type.toUpperCase(); $("#chartSubtitle").textContent= type==="scatter" ? `${x} × ${y}` : `${state.lang==='zh'?'按':'By'} ${x} · ${agg}(${y||t("count")})`;
    let data;
    if(type==="scatter") data=state.data.map(r=>({x:asNumber(r[x]),y:asNumber(r[y]),label:String(r[x]??"")})).filter(d=>d.x!==null&&d.y!==null);
    else if(type==="histogram") data=state.data.map(r=>asNumber(r[y])).filter(v=>v!==null);
    else data=aggregateData(x,y,agg).slice(0,14);
    const el=$("#studioChart");
    if(type==="bar")renderBarChart(el,data,colors); else if(type==="line")renderLineChart(el,data,colors[0],false); else if(type==="area")renderLineChart(el,data,colors[0],true); else if(type==="pie")renderPieChart(el,data,colors); else if(type==="scatter")renderScatterChart(el,data,colors[0]); else renderHistogram(el,data,colors[0]);
    const insight=$("#chartInsight p");
    if(type==="scatter"&&data.length>1){const r=pearson(data.map(d=>d.x),data.map(d=>d.y));insight.textContent=t("chartInsightPrefix")+`${x} × ${y} ${r>=.5?t("strongPositive"):r<=-.5?t("strongNegative"):t("balanced")} (r=${r.toFixed(2)})`;
    } else if(Array.isArray(data)&&data[0]&&typeof data[0]==="object"&&"value" in data[0]){const peak=[...data].sort((a,b)=>b.value-a.value)[0];insight.textContent=t("chartInsightPrefix")+`${t("peakAt")} “${peak?.label||'—'}” (${fmt(peak?.value)})`;} else insight.textContent=t("chartInsightPrefix")+t("balanced");
  }

  function aggregateData(x,y,method){const groups=new Map();state.data.forEach(r=>{const k=String(r[x]??"(NA)");if(!groups.has(k))groups.set(k,[]);const n=asNumber(r[y]);if(n!==null)groups.get(k).push(n);});return [...groups].map(([label,values])=>({label,value:aggregate(values,method)})).sort((a,b)=>b.value-a.value);}
  function aggregate(values,method){if(method==="count")return values.length;if(!values.length)return 0;if(method==="sum")return values.reduce((a,b)=>a+b,0);if(method==="mean")return mean(values);if(method==="median")return median(values);if(method==="min")return Math.min(...values);if(method==="max")return Math.max(...values);return 0;}

  function svgFrame(content,w=760,h=300){return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Data visualization" xmlns="http://www.w3.org/2000/svg"><style>.g{stroke:#dedbd3;stroke-width:1}.l{fill:#7b8290;font:10px system-ui}.v{fill:#17233b;font:600 10px system-ui}</style>${content}</svg>`;}
  function emptyViz(el,msg=t("noNumeric")){el.innerHTML=`<div class="empty">${escapeHTML(msg)}</div>`;}
  function axisGrid(w,h,m,max,ticks=4){let s="";for(let i=0;i<=ticks;i++){const y=m+(h-2*m)*i/ticks,val=max*(1-i/ticks);s+=`<line class="g" x1="${m}" y1="${y}" x2="${w-m}" y2="${y}"/><text class="l" x="${m-8}" y="${y+3}" text-anchor="end">${fmt(val,1)}</text>`;}return s;}
  function renderBarChart(el,data,colors=palette.sunset){if(!data?.length)return emptyViz(el,t("noCategory"));const w=760,h=330,m=45,max=Math.max(1,...data.map(d=>d.value)),inner=w-2*m,gap=8,bw=Math.max(8,inner/data.length-gap);let s=axisGrid(w,h,m,max);data.forEach((d,i)=>{const bh=(h-2*m)*d.value/max,x=m+i*inner/data.length+(inner/data.length-bw)/2,y=h-m-bh;s+=`<rect x="${x}" y="${y}" width="${bw}" height="${Math.max(1,bh)}" rx="5" fill="${colors[i%colors.length]}"><title>${escapeXML(d.label)}: ${fmt(d.value)}</title></rect><text class="l" x="${x+bw/2}" y="${h-m+15}" text-anchor="middle">${escapeXML(String(d.label).slice(0,9))}</text>`;});el.innerHTML=svgFrame(s,w,h);}
  function renderLineChart(el,data,color="#ef6a58",area=false){data=(data||[]).filter(d=>Number.isFinite(d.value));if(!data.length)return emptyViz(el);const w=760,h=300,m=42,max=Math.max(...data.map(d=>d.value)),min=Math.min(...data.map(d=>d.value)),range=max-min||1,innerW=w-2*m,innerH=h-2*m,pts=data.map((d,i)=>({x:m+(data.length===1?innerW/2:i/(data.length-1)*innerW),y:m+(max-d.value)/range*innerH,...d}));let s=axisGrid(w,h,m,max||1);const path=pts.map((p,i)=>`${i?'L':'M'} ${p.x} ${p.y}`).join(" ");if(area)s+=`<path d="${path} L ${pts.at(-1).x} ${h-m} L ${pts[0].x} ${h-m} Z" fill="${color}" opacity=".13"/>`;s+=`<path d="${path}" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;pts.forEach((p,i)=>{s+=`<circle cx="${p.x}" cy="${p.y}" r="4" fill="#fff" stroke="${color}" stroke-width="2"><title>${escapeXML(p.label)}: ${fmt(p.value)}</title></circle>`;if(i===0||i===pts.length-1||i%Math.ceil(pts.length/6)===0)s+=`<text class="l" x="${p.x}" y="${h-m+16}" text-anchor="middle">${escapeXML(String(p.label).slice(0,8))}</text>`;});el.innerHTML=svgFrame(s,w,h);}
  function renderPieChart(el,data,colors=palette.sunset){if(!data?.length)return emptyViz(el);const w=760,h=330,cx=250,cy=165,r=115,total=data.reduce((s,d)=>s+Math.max(0,d.value),0)||1;let a=-Math.PI/2,s="";data.forEach((d,i)=>{const da=Math.max(0,d.value)/total*Math.PI*2,x1=cx+r*Math.cos(a),y1=cy+r*Math.sin(a),x2=cx+r*Math.cos(a+da),y2=cy+r*Math.sin(a+da),large=da>Math.PI?1:0;s+=`<path d="M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z" fill="${colors[i%colors.length]}" stroke="#fffdfa" stroke-width="3"><title>${escapeXML(d.label)}: ${fmt(d.value)} (${(d.value/total*100).toFixed(1)}%)</title></path>`;a+=da;});data.slice(0,8).forEach((d,i)=>{s+=`<rect x="430" y="${60+i*28}" width="10" height="10" rx="3" fill="${colors[i%colors.length]}"/><text class="l" x="448" y="${69+i*28}">${escapeXML(String(d.label).slice(0,20))} · ${(d.value/total*100).toFixed(1)}%</text>`;});el.innerHTML=svgFrame(s,w,h);}
  function renderScatterChart(el,data,color="#5579d9"){if(!data?.length)return emptyViz(el);const w=760,h=330,m=48,minX=Math.min(...data.map(d=>d.x)),maxX=Math.max(...data.map(d=>d.x)),minY=Math.min(...data.map(d=>d.y)),maxY=Math.max(...data.map(d=>d.y)),rx=maxX-minX||1,ry=maxY-minY||1;let s=axisGrid(w,h,m,maxY||1);data.forEach(d=>{const x=m+(d.x-minX)/rx*(w-2*m),y=h-m-(d.y-minY)/ry*(h-2*m);s+=`<circle cx="${x}" cy="${y}" r="5" fill="${color}" opacity=".7"><title>${fmt(d.x)} × ${fmt(d.y)}</title></circle>`;});s+=`<text class="l" x="${m}" y="${h-18}">${fmt(minX)}</text><text class="l" x="${w-m}" y="${h-18}" text-anchor="end">${fmt(maxX)}</text>`;el.innerHTML=svgFrame(s,w,h);}
  function histogramData(values,bins=10){if(!values.length)return[];const min=Math.min(...values),max=Math.max(...values),size=(max-min||1)/bins,arr=Array.from({length:bins},(_,i)=>({label:`${fmt(min+i*size,1)}–${fmt(min+(i+1)*size,1)}`,value:0}));values.forEach(v=>arr[Math.min(bins-1,Math.floor((v-min)/size))].value++);return arr;}
  function renderHistogram(el,values,color="#ef6a58"){if(!values?.length)return emptyViz(el);renderBarChart(el,histogramData(values,Math.min(10,Math.max(4,Math.ceil(Math.sqrt(values.length))))),Array(10).fill(color));}
  function renderBoxPlot(el,values,color="#e6a94d"){if(!values?.length)return emptyViz(el);const w=760,h=260,m=65,a=[...values].sort((x,y)=>x-y),mn=a[0],q1=quantile(a,.25),med=quantile(a,.5),q3=quantile(a,.75),mx=a.at(-1),range=mx-mn||1,x=v=>m+(v-mn)/range*(w-2*m),cy=125;let s=`<line x1="${x(mn)}" y1="${cy}" x2="${x(mx)}" y2="${cy}" stroke="#777f8c" stroke-width="2"/><line x1="${x(mn)}" y1="${cy-25}" x2="${x(mn)}" y2="${cy+25}" stroke="#777f8c" stroke-width="2"/><line x1="${x(mx)}" y1="${cy-25}" x2="${x(mx)}" y2="${cy+25}" stroke="#777f8c" stroke-width="2"/><rect x="${x(q1)}" y="${cy-45}" width="${Math.max(1,x(q3)-x(q1))}" height="90" rx="8" fill="${color}" opacity=".35" stroke="${color}" stroke-width="2"/><line x1="${x(med)}" y1="${cy-45}" x2="${x(med)}" y2="${cy+45}" stroke="${color}" stroke-width="4"/>`;[[mn,"min"],[q1,"Q1"],[med,"Q2"],[q3,"Q3"],[mx,"max"]].forEach(([v,l])=>s+=`<text class="l" x="${x(v)}" y="${cy+70}" text-anchor="middle">${l}</text><text class="v" x="${x(v)}" y="${cy-58}" text-anchor="middle">${fmt(v)}</text>`);el.innerHTML=svgFrame(s,w,h);}

  function parseDelimited(text, delimiter) {
    const rows=[];let row=[],field="",quoted=false;
    for(let i=0;i<text.length;i++){const c=text[i],n=text[i+1];if(c==='"'){if(quoted&&n==='"'){field+='"';i++;}else quoted=!quoted;}else if(c===delimiter&&!quoted){row.push(field);field="";}else if((c==='\n'||c==='\r')&&!quoted){if(c==='\r'&&n==='\n')i++;row.push(field);if(row.some(x=>x.trim()!==""))rows.push(row);row=[];field="";}else field+=c;}
    row.push(field);if(row.some(x=>x.trim()!==""))rows.push(row);if(rows.length<2)return[];const headers=rows[0].map((h,i)=>h.trim()||`column_${i+1}`);return rows.slice(1).map(r=>Object.fromEntries(headers.map((h,i)=>[h,autoValue(r[i]??"")])));
  }
  function autoValue(value){const s=String(value).trim();if(s===""||/^(null|na|n\/a)$/i.test(s))return null;if(/^-?\d+(\.\d+)?$/.test(s))return Number(s);if(/^(true|false)$/i.test(s))return s.toLowerCase()==="true";return s;}
  function detectAndParse(text){const trimmed=text.trim();if(!trimmed)return[];if(trimmed.startsWith("[")||trimmed.startsWith("{")){const parsed=JSON.parse(trimmed);return normalizeRows(Array.isArray(parsed)?parsed:(parsed.data||parsed.rows||[parsed]));}const first=trimmed.split(/\r?\n/)[0], delimiter=first.includes("\t")?"\t":first.includes(";")&&!first.includes(",")?";":",";return normalizeRows(parseDelimited(trimmed,delimiter));}

  async function importFile(file){
    if(file.size>15*1024*1024)toast(t("fileTooLarge")); try{let rows;if(/\.xlsx?$/i.test(file.name)){if(!window.XLSX)throw new Error("XLSX library unavailable");const book=XLSX.read(await file.arrayBuffer(),{type:"array",cellDates:true});const sheet=book.Sheets[book.SheetNames[0]];rows=XLSX.utils.sheet_to_json(sheet,{defval:null,raw:false});}else rows=detectAndParse(await file.text());setDataset(rows,file.name.replace(/\.[^.]+$/,""));toast(`${t("imported")} · ${t("localProcessing")}`,"success");}catch(e){console.error(e);toast(t("invalidFile"),"error");}
  }
  function setDataset(rows,name){rows=normalizeRows(rows);if(!rows.length){toast(t("invalidData"),"error");return;}state.data=rows;state.originalData=structuredClone(rows);state.name=name;state.originalName=name;state.history=[];state.page=1;state.search="";$("#tableSearch").value="";updateAll();}

  function csvString(data){const cols=columns();const quote=v=>{const s=isMissing(v)?"":String(v);return /[",\n\r]/.test(s)?`"${s.replace(/"/g,'""')}"`:s;};return [cols.map(quote).join(","),...data.map(r=>cols.map(c=>quote(r[c])).join(","))].join("\r\n");}
  function download(content,filename,type){const blob=new Blob([content],{type}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
  function toast(message,type=""){const el=document.createElement("div");el.className=`toast ${type}`;el.textContent=message;$("#toastWrap").append(el);setTimeout(()=>el.remove(),3200);}
  function switchView(name){$$('.nav-item').forEach(n=>n.classList.toggle('active',n.dataset.view===name));$$('.view').forEach(v=>v.classList.toggle('active',v.id===`view-${name}`));if(name==="charts")renderStudio();window.scrollTo({top:0,behavior:"smooth"});}

  function bindEvents() {
    $$(".nav-item").forEach(btn=>btn.onclick=()=>switchView(btn.dataset.view)); $$('[data-go]').forEach(btn=>btn.onclick=()=>switchView(btn.dataset.go));
    $("#langBtn").onclick=()=>{state.lang=state.lang==='zh'?'en':'zh';updateAll();}; $("#undoBtn").onclick=undo; $("#resetBtn").onclick=reset;
    $("#importBtn").onclick=e=>{e.stopPropagation();$("#importMenu").classList.toggle("open");}; document.addEventListener("click",()=>$("#importMenu").classList.remove("open"));
    $("#fileInput").onchange=e=>{if(e.target.files[0])importFile(e.target.files[0]);e.target.value="";};
    $("#pasteDataBtn").onclick=()=>{$("#importMenu").classList.remove("open");$("#pasteDialog").showModal();}; $("#confirmPaste").onclick=()=>{try{const rows=detectAndParse($("#pasteInput").value);setDataset(rows,state.lang==='zh'?"粘贴数据":"Pasted data");if(rows.length)$("#pasteDialog").close();}catch{toast(t("invalidData"),"error");}};
    $("#loadSampleBtn").onclick=()=>{setDataset(structuredClone(sampleData),"零售经营示例");toast(t("imported"),"success");};
    $("#exportBtn").onclick=()=>$("#exportDialog").showModal(); $$('[data-export]').forEach(b=>b.onclick=()=>{const type=b.dataset.export;if(type==='csv')download('\ufeff'+csvString(state.data),`${state.name}.csv`,'text/csv;charset=utf-8');else download(JSON.stringify(state.data,null,2),`${state.name}.json`,'application/json');$("#exportDialog").close();toast(`${t("exported")} ${type.toUpperCase()}`,"success");});
    $("#shortcutsBtn").onclick=()=>$("#shortcutDialog").showModal();
    $("#tableSearch").oninput=e=>{state.search=e.target.value;state.page=1;renderTable();}; $("#pageSize").onchange=e=>{state.pageSize=Number(e.target.value);state.page=1;renderTable();}; $("#prevPage").onclick=()=>{state.page--;renderTable();}; $("#nextPage").onclick=()=>{state.page++;renderTable();};
    $("#copyTableBtn").onclick=async()=>{await navigator.clipboard.writeText(csvString(filteredRows().map(x=>x.row)));toast(t("copied"),"success");};
    $("#addRowBtn").onclick=()=>mutate("addDone","+1",()=>state.data.push(Object.fromEntries(columns().map(c=>[c,null]))));
    $("#overviewMetric").onchange=renderOverview; $("#overviewCategory").onchange=renderOverview; $("#statsColumn").onchange=renderStats;
    $("#missingAction").onchange=e=>$("#missingCustom").classList.toggle("hidden",e.target.value!=="custom");
    $("#applyFilter").onclick=applyFilter; $("#applyMissing").onclick=applyMissing; $("#applyType").onclick=applyType; $("#applyFormula").onclick=applyFormula; $("#applyRename").onclick=applyRename; $("#applyDedupe").onclick=applyDedupe; $("#applyGroup").onclick=previewGroup;
    $$(".chart-type").forEach(b=>b.onclick=()=>{$$(".chart-type").forEach(x=>x.classList.remove("active"));b.classList.add("active");state.chartType=b.dataset.chart;renderStudio();});
    ["chartX","chartY","chartAgg","chartColor"].forEach(id=>$("#"+id).onchange=renderStudio); $("#smartChart").onclick=smartChart;
    $("#downloadChart").onclick=()=>{const svg=$("#studioChart svg");if(!svg)return;download(new XMLSerializer().serializeToString(svg),"pandavista-chart.svg","image/svg+xml");toast(t("downloadReady"),"success");};
    window.addEventListener("dragover",e=>e.preventDefault());window.addEventListener("drop",e=>{e.preventDefault();if(e.dataTransfer.files[0])importFile(e.dataTransfer.files[0]);});
    document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){e.preventDefault();undo();}if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='o'){e.preventDefault();$("#fileInput").click();}if(e.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)){e.preventDefault();switchView('table');$("#tableSearch").focus();}if(!e.ctrlKey&&!e.metaKey&&/^[1-5]$/.test(e.key)&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)){switchView(['overview','table','transform','statistics','charts'][Number(e.key)-1]);}});
  }

  function applyFilter(){const col=$("#filterColumn").value,op=$("#filterOperator").value,raw=$("#filterValue").value,val=state.types[col]==="numeric"?asNumber(raw):raw;const before=state.data.length,fn=v=>{if(op==='empty')return isMissing(v);if(op==='notempty')return!isMissing(v);if(op==='contains')return String(v??'').toLowerCase().includes(String(raw).toLowerCase());if(op==='eq')return state.types[col]==='numeric'?asNumber(v)===val:String(v)===raw;if(op==='neq')return state.types[col]==='numeric'?asNumber(v)!==val:String(v)!==raw;const n=asNumber(v);if(n===null||val===null)return false;return op==='gt'?n>val:op==='gte'?n>=val:op==='lt'?n<val:n<=val;};const next=state.data.filter(r=>fn(r[col]));if(next.length===before)return toast(t("noChange"));mutate("filterDone",`${col} ${op} ${raw} · ${before}→${next.length}`,()=>state.data=next);}
  function applyMissing(){const col=$("#missingColumn").value,action=$("#missingAction").value,targets=col==='__all__'?columns():[col],before=state.data.length;let next=structuredClone(state.data);if(action==='drop')next=next.filter(r=>targets.every(c=>!isMissing(r[c])));else targets.forEach(c=>{const vals=next.map(r=>r[c]).filter(v=>!isMissing(v)),nums=vals.map(asNumber).filter(v=>v!==null),counts=new Map();vals.forEach(v=>counts.set(String(v),(counts.get(String(v))||0)+1));let fill=action==='mean'?mean(nums):action==='median'?median(nums):action==='mode'?[...counts].sort((a,b)=>b[1]-a[1])[0]?.[0]:action==='zero'?0:$("#missingCustom").value;next.forEach(r=>{if(isMissing(r[c]))r[c]=fill;});});if(JSON.stringify(next)===JSON.stringify(state.data))return toast(t("noChange"));mutate("missingDone",`${col} · ${action} · ${before}→${next.length}`,()=>state.data=next);}
  function applyType(){const col=$("#typeColumn").value,type=$("#targetType").value;mutate("typeDone",`${col} → ${type}`,()=>state.data.forEach(r=>{const v=r[col];if(isMissing(v))return;if(type==='number')r[col]=asNumber(v);else if(type==='string')r[col]=String(v);else if(type==='boolean')r[col]=/^(true|yes|1|是)$/i.test(String(v));else if(type==='date'){const d=new Date(v);r[col]=Number.isNaN(d.getTime())?null:d.toISOString().slice(0,10);}}));}
  function applyFormula(){const name=$("#formulaName").value.trim(),expr=$("#formulaExpr").value.trim();if(!name)return toast(t("nameRequired"),"error");if(columns().includes(name))return toast(t("sameName"),"error");if(!/^[\w\s.+\-*/%()]+$/.test(expr))return toast(t("invalidFormula"),"error");const identifiers=[...new Set(expr.match(/[A-Za-z_$][\w$]*/g)||[])];if(identifiers.some(id=>!columns().includes(id)))return toast(t("invalidFormula"),"error");try{const fn=new Function(...identifiers,`"use strict"; return (${expr});`);const values=state.data.map(r=>fn(...identifiers.map(c=>asNumber(r[c])??r[c])));if(values.some(v=>typeof v==='function'||typeof v==='object'))throw Error();mutate("formulaDone",`${name} = ${expr}`,()=>state.data.forEach((r,i)=>r[name]=Number.isFinite(values[i])?values[i]:values[i]??null));}catch{return toast(t("invalidFormula"),"error");}}
  function applyRename(){const old=$("#renameColumn").value,name=$("#renameValue").value.trim();if(!name)return toast(t("nameRequired"),"error");if(columns().includes(name))return toast(t("sameName"),"error");mutate("renameDone",`${old} → ${name}`,()=>state.data=state.data.map(r=>{const n={};Object.keys(r).forEach(k=>n[k===old?name:k]=r[k]);return n;}));}
  function applyDedupe(){const seen=new Set(),next=state.data.filter(r=>{const k=JSON.stringify(r);if(seen.has(k))return false;seen.add(k);return true;});const removed=state.data.length-next.length;if(!removed)return toast(t("noChange"));mutate("dedupeDone",`−${removed}`,()=>state.data=next);}
  function previewGroup(){const group=$("#groupColumn").value,col=$("#aggColumn").value,method=$("#aggMethod").value;if(!group||(!col&&method!=='count'))return toast(t("noNumeric"),"error");const result=aggregateData(group,col,method).map(d=>({[group]:d.label,[`${method}_${col}`]:d.value}));state.groupResult=result;const keys=Object.keys(result[0]||{});$("#groupPreview").classList.remove("empty-result");$("#groupPreview").innerHTML=`<table class="mini-table"><thead><tr>${keys.map(k=>`<th>${escapeHTML(k)}</th>`).join('')}</tr></thead><tbody>${result.slice(0,10).map(r=>`<tr>${keys.map(k=>`<td>${fmt(r[k])}</td>`).join('')}</tr>`).join('')}</tbody></table><button id="useGroupResult" class="btn primary wide">${t("useResult")}</button>`;$("#useGroupResult").onclick=()=>mutate("groupDone",`${group} · ${method}(${col})`,()=>state.data=structuredClone(state.groupResult));}
  function smartChart(){const nums=columns().filter(c=>state.types[c]==='numeric'),cats=columns().filter(c=>state.types[c]!=='numeric');if(!nums.length)return toast(t("noNumeric"),"error");const date=columns().find(c=>state.types[c]==='date');state.chartType=date?'line':cats.length?'bar':'scatter';$$('.chart-type').forEach(b=>b.classList.toggle('active',b.dataset.chart===state.chartType));$("#chartX").value=date||cats[0]||nums[0];$("#chartY").value=nums.find(c=>c!==$("#chartX").value)||nums[0];renderStudio();}

  bindEvents(); updateAll();
})();
