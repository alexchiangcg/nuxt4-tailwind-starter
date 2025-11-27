---
mode: 'agent'
tools: ['resolve-library-id','get-library-docs','codebase','search']
description: '以官方文件為依據，從契約/故事產生 Controller/DTO/Advice 與測試'
---
輸入：User Story/AC 或 OpenAPI。
步驟：web/validation/error-handling → Controller/DTO/Advice（Problem Details）→ MockMvc 測試（1 正常＋2 異常）→ PageableDTO → 列引用章節與版本。
