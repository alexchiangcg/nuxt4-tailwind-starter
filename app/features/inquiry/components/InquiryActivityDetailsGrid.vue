<template>
  <div class="inquiry-activity-details-grid">
    <ejs-grid
      ref="gridInstance"
      :dataSource="dataSource"
      :allowPaging="true"
      :pageSettings="{ pageSize: 50 }"
      :allowSorting="true"
      :height="500"
    >
      <e-columns>
        <!-- 第 1 欄：OpenPOPUP* 按鈕 -->
        <e-column
          headerText=""
          width="60"
          textAlign="Center"
          template="openButtonTemplate"
        />

        <!-- 第 2 欄：預計主場地 -->
        <e-column
          field="mainVenue"
          headerText="預計主場地"
          width="120"
        />

        <!-- 第 3 欄：預計子場地 + More 按鈕 -->
        <e-column
          field="subVenue"
          headerText="預計子場地"
          width="150"
          template="subVenueTemplate"
        />

        <!-- 第 4 欄：使用日期 -->
        <e-column
          field="usageDate"
          headerText="使用日期"
          width="120"
          type="date"
          :format="{ type: 'date', format: 'yyyy/MM/dd' }"
        />

        <!-- 第 5-6 欄：時間 -->
        <e-column field="startTime" headerText="開始時間" width="100" />
        <e-column field="endTime" headerText="結束時間" width="100" />

        <!-- 第 7-8 欄：活動資訊 -->
        <e-column field="activityCategory" headerText="活動類別" width="100" />
        <e-column field="activitySubject" headerText="活動主旨" width="150" />

        <!-- 第 9 欄：桌圖 -->
        <e-column field="tableLayout" headerText="桌圖" width="100" />

        <!-- 第 10 欄：預計設備需求 + More 按鈕 -->
        <e-column
          field="equipmentNeeds"
          headerText="預計設備需求"
          width="150"
          template="equipmentTemplate"
        />

        <!-- 第 11-12 欄：數量（右對齊） -->
        <e-column
          field="reservedTables"
          headerText="預訂桌數"
          width="100"
          textAlign="Right"
        />
        <e-column
          field="reservedPeople"
          headerText="預訂人數"
          width="100"
          textAlign="Right"
        />

        <!-- 第 13 欄：備註 -->
        <e-column field="remarks" headerText="備註" width="150" />

        <!-- 第 14-17 欄：稽核欄位 -->
        <e-column field="modifiedBy" headerText="修改者" width="100" />
        <e-column
          field="modifiedDate"
          headerText="修改日期"
          width="120"
          type="date"
          :format="{ type: 'date', format: 'yyyy/MM/dd' }"
        />
        <e-column field="createdBy" headerText="新增者" width="100" />
        <e-column
          field="createdDate"
          headerText="新增日期"
          width="120"
          type="date"
          :format="{ type: 'date', format: 'yyyy/MM/dd' }"
        />
      </e-columns>

      <!-- Template: 開啟按鈕 -->
      <template v-slot:openButtonTemplate="{data}">
        <ejs-button
          iconCss="iconify material-symbols--description-outline"
          cssClass="e-icon-btn"
          @click="handleOpenPopup(data)"
        />
      </template>

      <!-- Template: 預計子場地 + More 按鈕 -->
      <template v-slot:subVenueTemplate="{data}">
        <div class="cell-with-more">
          <span>{{ data.subVenue }}</span>
          <ejs-button
            content="..."
            cssClass="e-small"
            @click="handleShowMore('subVenue', data)"
          />
        </div>
      </template>

      <!-- Template: 預計設備需求 + More 按鈕 -->
      <template v-slot:equipmentTemplate="{data}">
        <div class="cell-with-more">
          <span>{{ data.equipmentNeeds }}</span>
          <ejs-button
            content="..."
            cssClass="e-small"
            @click="handleShowMore('equipment', data)"
          />
        </div>
      </template>
    </ejs-grid>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import { GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn, Page, Sort } from '@syncfusion/ej2-vue-grids'
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons'
import type { InquiryActivityDetail } from '../types/inquiry.types'

interface InquiryActivityDetailsGridProps {
  dataSource: InquiryActivityDetail[]
}

defineProps<InquiryActivityDetailsGridProps>()

const gridInstance = ref<InstanceType<typeof EjsGrid> | null>(null)

// 提供 Grid 所需的服務
provide('grid', [Page, Sort])

const handleOpenPopup = (data: InquiryActivityDetail) => {
  console.log('Open popup for:', data)
}

const handleShowMore = (type: string, data: InquiryActivityDetail) => {
  console.log('Show more:', type, data)
}
</script>

<style scoped>
.inquiry-activity-details-grid {
  width: 100%;
  background: rgb(var(--color-sf-surface));
  border-radius: 6px;
  overflow: hidden;
}

/* Grid 容器 */
:deep(.e-grid) {
  border: none;
}

/* Header 樣式 */
:deep(.e-grid .e-headercell) {
  background: rgba(40, 119, 238, 0.05);
  height: 48px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.24px;
  color: rgb(var(--color-sf-on-surface));
  border-bottom: 1px solid rgb(var(--color-sf-outline-variant));
  padding: 0 8px;
}

:deep(.e-grid .e-headercell .e-headercelldiv) {
  display: flex;
  align-items: center;
  height: 100%;
}

/* Cell 樣式 */
:deep(.e-grid .e-row) {
  height: 48px;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: rgb(var(--color-sf-on-surface));
}

:deep(.e-grid .e-rowcell) {
  border-bottom: 1px solid rgb(var(--color-sf-outline-variant));
  padding: 0 8px;
  vertical-align: middle;
}

/* 奇數行背景透明 */
:deep(.e-grid .e-row:nth-child(odd)) {
  background: transparent;
}

/* 偶數行背景色 */
:deep(.e-grid .e-row:nth-child(even)) {
  background: rgba(15, 23, 42, 0.04);
}

/* Pager 樣式 */
:deep(.e-pager) {
  height: 56px;
  padding: 8px 20px;
  border-top: 1px solid rgb(var(--color-sf-outline-variant));
  background: rgb(var(--color-sf-surface));
}

:deep(.e-pager .e-numericcontainer) {
  display: flex;
  gap: 0;
}

:deep(.e-pager .e-numericitem),
:deep(.e-pager .e-prevpage),
:deep(.e-pager .e-nextpage),
:deep(.e-pager .e-firstpage),
:deep(.e-pager .e-lastpage) {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.1px;
}

:deep(.e-pager .e-currentitem) {
  background: transparent;
  color: rgb(var(--color-sf-on-surface));
}

:deep(.e-pager .e-pagercontainer) {
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: rgb(var(--color-sf-on-surface-variant));
}

.cell-with-more {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
}

.cell-with-more span {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
