---
mode: 'agent'
tools: ['resolve-library-id','get-library-docs','codebase','usages']
description: '比對 PR 差異並用官方文件逐點驗證'
---
輸入：PR Diff 或檔案清單。
輸出：變更點 → 官方依據 → 風險/替代 → 審查清單。
