---
title: Provider
sidebar_position: 2

---


## PageEditorProvider

### 作用

为容器内的元素提供（？）功能

<br/>

### Props

- `height?: stirng`
  - 编辑器高度
- `fontList?: { value: string; label: string }[]`
  - 字体列表？
- ```jsx
  interactiveStyle?: {
   hoverColor?: string;
   // 
   selectedColor?: string;
   dragoverColor?: string;
   tangentColor?: string;
  };
  ```
- `previewInjectData?: Record<string, any>`
  - Preview中注入的默认数据？@Frank
- `handleAddSectionWithCB?: (addIndex: number) => void`
  - 添加Section回调
- `handleAddElement?: (addElement: IAddLibrary) => void`
  - 添加Element传入方法
- `handleSaveSection?: () => void`
  - 保存Section传入方法

<br/>

### 实现逻辑

<br/>

### 相关API

#### usePageEditorStore

- errorBlocks
- setErrorBlocks
- focusEleId
- setFocusEleId
- hoverEleId
- setHoverEleId
- focusSecId
- setFocusSecId
- hoverSecId
- setHoverSecId
- registerPageEditorProps
- pageData
- setPageDataFieldValue
- handleAddElement
- handleAddSectionWithCB
- height

<br/>

## withRecordProvider

### 作用

(由于object-diff-paths库导致的问题，修复后补充该部分文档)

为容器内的元素提供（回退历史操作等功能？）

<br/>

<br/>

### 用法

包裹Components

<br/>

### 实现逻辑

<br/>

### 相关API

#### useRecord

- batchCountRef
- batchEnd
- batchStart
- clearHistory
- currentIndex
- historyBatches
- redo
- undo
