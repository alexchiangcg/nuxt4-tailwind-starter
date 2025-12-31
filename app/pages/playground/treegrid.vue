<script setup lang="ts">
import {
  TreeGridComponent as EjsTreegrid,
  ColumnsDirective as EColumns,
  ColumnDirective as EColumn,
  Page,
  Sort,
  Filter,
  Edit,
  Toolbar,
  Resize,
  Reorder,
  ContextMenu,
  ExcelExport,
  PdfExport,
  RowDD
} from '@syncfusion/ej2-vue-treegrid'
import { provide, ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

// 提供 TreeGrid 功能模組
provide('treegrid', [Page, Sort, Filter, Edit, Toolbar, Resize, Reorder, ContextMenu, ExcelExport, PdfExport, RowDD])

// 組織結構資料
const orgData = ref([
  {
    TaskID: 1,
    TaskName: 'Product Development',
    StartDate: new Date('2024-01-01'),
    EndDate: new Date('2024-06-30'),
    Progress: 45,
    Priority: 'High',
    Approved: true,
    subtasks: [
      {
        TaskID: 2,
        TaskName: 'Planning Phase',
        StartDate: new Date('2024-01-01'),
        EndDate: new Date('2024-01-31'),
        Progress: 100,
        Priority: 'High',
        Approved: true,
        subtasks: [
          { TaskID: 3, TaskName: 'Requirements Gathering', StartDate: new Date('2024-01-01'), EndDate: new Date('2024-01-15'), Progress: 100, Priority: 'Normal', Approved: true },
          { TaskID: 4, TaskName: 'Technical Specification', StartDate: new Date('2024-01-16'), EndDate: new Date('2024-01-31'), Progress: 100, Priority: 'High', Approved: true }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Design Phase',
        StartDate: new Date('2024-02-01'),
        EndDate: new Date('2024-02-28'),
        Progress: 100,
        Priority: 'Normal',
        Approved: true,
        subtasks: [
          { TaskID: 6, TaskName: 'UI/UX Design', StartDate: new Date('2024-02-01'), EndDate: new Date('2024-02-14'), Progress: 100, Priority: 'High', Approved: true },
          { TaskID: 7, TaskName: 'Architecture Design', StartDate: new Date('2024-02-15'), EndDate: new Date('2024-02-28'), Progress: 100, Priority: 'Critical', Approved: true }
        ]
      },
      {
        TaskID: 8,
        TaskName: 'Development Phase',
        StartDate: new Date('2024-03-01'),
        EndDate: new Date('2024-05-31'),
        Progress: 35,
        Priority: 'High',
        Approved: false,
        subtasks: [
          { TaskID: 9, TaskName: 'Frontend Development', StartDate: new Date('2024-03-01'), EndDate: new Date('2024-04-15'), Progress: 60, Priority: 'High', Approved: false },
          { TaskID: 10, TaskName: 'Backend Development', StartDate: new Date('2024-03-01'), EndDate: new Date('2024-04-30'), Progress: 40, Priority: 'High', Approved: false },
          { TaskID: 11, TaskName: 'API Integration', StartDate: new Date('2024-04-01'), EndDate: new Date('2024-05-15'), Progress: 20, Priority: 'Normal', Approved: false },
          { TaskID: 12, TaskName: 'Database Setup', StartDate: new Date('2024-03-15'), EndDate: new Date('2024-04-15'), Progress: 80, Priority: 'Critical', Approved: true }
        ]
      },
      {
        TaskID: 13,
        TaskName: 'Testing Phase',
        StartDate: new Date('2024-05-01'),
        EndDate: new Date('2024-06-15'),
        Progress: 0,
        Priority: 'Normal',
        Approved: false,
        subtasks: [
          { TaskID: 14, TaskName: 'Unit Testing', StartDate: new Date('2024-05-01'), EndDate: new Date('2024-05-20'), Progress: 0, Priority: 'High', Approved: false },
          { TaskID: 15, TaskName: 'Integration Testing', StartDate: new Date('2024-05-15'), EndDate: new Date('2024-06-01'), Progress: 0, Priority: 'High', Approved: false },
          { TaskID: 16, TaskName: 'User Acceptance Testing', StartDate: new Date('2024-06-01'), EndDate: new Date('2024-06-15'), Progress: 0, Priority: 'Critical', Approved: false }
        ]
      }
    ]
  },
  {
    TaskID: 17,
    TaskName: 'Marketing Campaign',
    StartDate: new Date('2024-04-01'),
    EndDate: new Date('2024-07-31'),
    Progress: 25,
    Priority: 'Normal',
    Approved: false,
    subtasks: [
      { TaskID: 18, TaskName: 'Market Research', StartDate: new Date('2024-04-01'), EndDate: new Date('2024-04-30'), Progress: 80, Priority: 'High', Approved: true },
      { TaskID: 19, TaskName: 'Content Creation', StartDate: new Date('2024-05-01'), EndDate: new Date('2024-05-31'), Progress: 40, Priority: 'Normal', Approved: false },
      { TaskID: 20, TaskName: 'Campaign Launch', StartDate: new Date('2024-06-01'), EndDate: new Date('2024-07-31'), Progress: 0, Priority: 'High', Approved: false }
    ]
  }
])

// 員工階層資料
const employeeData = ref([
  {
    EmployeeID: 1,
    Name: 'John Smith',
    Title: 'CEO',
    Department: 'Executive',
    Salary: 250000,
    HireDate: new Date('2015-01-15'),
    subtasks: [
      {
        EmployeeID: 2,
        Name: 'Sarah Johnson',
        Title: 'VP Engineering',
        Department: 'Engineering',
        Salary: 180000,
        HireDate: new Date('2016-03-20'),
        subtasks: [
          { EmployeeID: 5, Name: 'Mike Brown', Title: 'Tech Lead', Department: 'Engineering', Salary: 140000, HireDate: new Date('2018-06-10') },
          { EmployeeID: 6, Name: 'Emily Davis', Title: 'Senior Developer', Department: 'Engineering', Salary: 120000, HireDate: new Date('2019-09-05') },
          { EmployeeID: 7, Name: 'Tom Wilson', Title: 'Developer', Department: 'Engineering', Salary: 95000, HireDate: new Date('2021-02-14') }
        ]
      },
      {
        EmployeeID: 3,
        Name: 'Michael Chen',
        Title: 'VP Sales',
        Department: 'Sales',
        Salary: 175000,
        HireDate: new Date('2016-08-01'),
        subtasks: [
          { EmployeeID: 8, Name: 'Lisa Anderson', Title: 'Sales Manager', Department: 'Sales', Salary: 110000, HireDate: new Date('2019-01-20') },
          { EmployeeID: 9, Name: 'David Lee', Title: 'Sales Rep', Department: 'Sales', Salary: 75000, HireDate: new Date('2022-04-15') }
        ]
      },
      {
        EmployeeID: 4,
        Name: 'Jennifer White',
        Title: 'VP Marketing',
        Department: 'Marketing',
        Salary: 170000,
        HireDate: new Date('2017-02-28'),
        subtasks: [
          { EmployeeID: 10, Name: 'Robert Taylor', Title: 'Marketing Manager', Department: 'Marketing', Salary: 105000, HireDate: new Date('2020-07-10') }
        ]
      }
    ]
  }
])

// 頁面設定
const pageSettings = { pageSize: 10, pageSizes: true }

// 篩選設定
const filterSettings = { type: 'Excel' }

// 編輯設定
const editSettings = {
  allowEditing: true,
  allowAdding: true,
  allowDeleting: true,
  mode: 'Dialog'
}

// 工具列
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ExpandAll', 'CollapseAll', 'Search']

// 選取設定
const selectionSettings = { type: 'Multiple', mode: 'Row' }
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">TreeGrid Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-treegrid</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic TreeGrid -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          1. Basic TreeGrid
        </h2>
        <p class="text-gray-600 mb-6">Hierarchical data display with expand/collapse functionality</p>
        <div class="overflow-x-auto">
          <ejs-treegrid
            :data-source="orgData"
            :tree-column-index="1"
            child-mapping="subtasks"
            :allow-paging="true"
            :page-settings="{ pageSize: 8 }"
          >
            <e-columns>
              <e-column field="TaskID" header-text="ID" width="80" text-align="Right" />
              <e-column field="TaskName" header-text="Task Name" width="200" />
              <e-column field="StartDate" header-text="Start Date" width="120" type="date" format="yMd" />
              <e-column field="Progress" header-text="Progress" width="100" text-align="Right" />
              <e-column field="Priority" header-text="Priority" width="100" />
            </e-columns>
          </ejs-treegrid>
        </div>
      </section>

      <!-- 2. Sorting -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          2. Sorting
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">allowSorting</code>
          - Click column headers to sort
        </p>
        <div class="overflow-x-auto">
          <ejs-treegrid
            :data-source="orgData"
            :tree-column-index="1"
            child-mapping="subtasks"
            :allow-sorting="true"
            :allow-paging="true"
            :page-settings="{ pageSize: 8 }"
          >
            <e-columns>
              <e-column field="TaskID" header-text="ID" width="80" text-align="Right" />
              <e-column field="TaskName" header-text="Task Name" width="200" />
              <e-column field="Progress" header-text="Progress" width="100" text-align="Right" />
              <e-column field="Priority" header-text="Priority" width="100" />
            </e-columns>
          </ejs-treegrid>
        </div>
      </section>

      <!-- 3. Filtering -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          3. Filtering
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">allowFiltering</code>
          - Use column filter icons
        </p>
        <div class="overflow-x-auto">
          <ejs-treegrid
            :data-source="orgData"
            :tree-column-index="1"
            child-mapping="subtasks"
            :allow-filtering="true"
            :filter-settings="filterSettings"
            :allow-paging="true"
            :page-settings="{ pageSize: 8 }"
          >
            <e-columns>
              <e-column field="TaskID" header-text="ID" width="80" text-align="Right" />
              <e-column field="TaskName" header-text="Task Name" width="200" />
              <e-column field="Progress" header-text="Progress" width="100" text-align="Right" />
              <e-column field="Priority" header-text="Priority" width="100" />
              <e-column field="Approved" header-text="Approved" width="100" display-as-checkbox="true" />
            </e-columns>
          </ejs-treegrid>
        </div>
      </section>

      <!-- 4. Editing with Toolbar -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          4. Editing with Toolbar
        </h2>
        <p class="text-gray-600 mb-6">
          Properties: <code class="text-sm bg-gray-100 px-2 py-1 rounded">editSettings</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">toolbar</code>
        </p>
        <div class="overflow-x-auto">
          <ejs-treegrid
            :data-source="orgData"
            :tree-column-index="1"
            child-mapping="subtasks"
            :allow-paging="true"
            :page-settings="{ pageSize: 6 }"
            :edit-settings="editSettings"
            :toolbar="toolbar"
          >
            <e-columns>
              <e-column field="TaskID" header-text="ID" width="80" text-align="Right" :is-primary-key="true" />
              <e-column field="TaskName" header-text="Task Name" width="200" />
              <e-column field="StartDate" header-text="Start Date" width="120" type="date" format="yMd" edit-type="datepickeredit" />
              <e-column field="Progress" header-text="Progress" width="100" text-align="Right" edit-type="numericedit" />
              <e-column field="Priority" header-text="Priority" width="100" />
            </e-columns>
          </ejs-treegrid>
        </div>
      </section>

      <!-- 5. Employee Hierarchy -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          5. Employee Hierarchy
        </h2>
        <p class="text-gray-600 mb-6">Organizational chart displayed as tree grid</p>
        <div class="overflow-x-auto">
          <ejs-treegrid
            :data-source="employeeData"
            :tree-column-index="1"
            child-mapping="subtasks"
            :allow-sorting="true"
            :allow-resizing="true"
          >
            <e-columns>
              <e-column field="EmployeeID" header-text="ID" width="80" text-align="Right" />
              <e-column field="Name" header-text="Name" width="160" />
              <e-column field="Title" header-text="Title" width="140" />
              <e-column field="Department" header-text="Department" width="120" />
              <e-column field="Salary" header-text="Salary" width="120" text-align="Right" format="C0" />
              <e-column field="HireDate" header-text="Hire Date" width="120" type="date" format="yMd" />
            </e-columns>
          </ejs-treegrid>
        </div>
      </section>

      <!-- 6. Selection -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          6. Row Selection
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">selectionSettings</code>
          - Hold Ctrl/Cmd for multiple selection
        </p>
        <div class="overflow-x-auto">
          <ejs-treegrid
            :data-source="orgData"
            :tree-column-index="1"
            child-mapping="subtasks"
            :selection-settings="selectionSettings"
            :allow-paging="true"
            :page-settings="{ pageSize: 8 }"
          >
            <e-columns>
              <e-column field="TaskID" header-text="ID" width="80" text-align="Right" />
              <e-column field="TaskName" header-text="Task Name" width="200" />
              <e-column field="Progress" header-text="Progress" width="100" text-align="Right" />
              <e-column field="Priority" header-text="Priority" width="100" />
            </e-columns>
          </ejs-treegrid>
        </div>
      </section>

      <!-- 7. Checkbox Selection -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          7. Checkbox Selection
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">autoCheckHierarchy</code>
        </p>
        <div class="overflow-x-auto">
          <ejs-treegrid
            :data-source="orgData"
            :tree-column-index="1"
            child-mapping="subtasks"
            :auto-check-hierarchy="true"
            :allow-paging="true"
            :page-settings="{ pageSize: 8 }"
          >
            <e-columns>
              <e-column type="checkbox" width="50" />
              <e-column field="TaskID" header-text="ID" width="80" text-align="Right" />
              <e-column field="TaskName" header-text="Task Name" width="200" />
              <e-column field="Progress" header-text="Progress" width="100" text-align="Right" />
            </e-columns>
          </ejs-treegrid>
        </div>
      </section>

      <!-- 8. Column Resizing & Reordering -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          8. Column Resizing & Reordering
        </h2>
        <p class="text-gray-600 mb-6">
          Properties: <code class="text-sm bg-gray-100 px-2 py-1 rounded">allowResizing</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">allowReordering</code>
        </p>
        <div class="overflow-x-auto">
          <ejs-treegrid
            :data-source="employeeData"
            :tree-column-index="1"
            child-mapping="subtasks"
            :allow-resizing="true"
            :allow-reordering="true"
          >
            <e-columns>
              <e-column field="EmployeeID" header-text="ID" width="80" text-align="Right" />
              <e-column field="Name" header-text="Name" width="160" />
              <e-column field="Title" header-text="Title" width="140" />
              <e-column field="Department" header-text="Department" width="120" />
              <e-column field="Salary" header-text="Salary" width="120" text-align="Right" format="C0" />
            </e-columns>
          </ejs-treegrid>
        </div>
      </section>

      <!-- 9. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          9. API Reference
        </h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">dataSource</td>
                <td class="px-4 py-3 text-sm text-gray-600">array</td>
                <td class="px-4 py-3 text-sm text-gray-600">Hierarchical data source</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">childMapping</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Field name for child records</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">treeColumnIndex</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Column index with expand/collapse icons</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">allowPaging</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable pagination</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">allowSorting</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable column sorting</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">allowFiltering</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable data filtering</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">editSettings</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Editing configuration</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">autoCheckHierarchy</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Auto-check parent/child on selection</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>


