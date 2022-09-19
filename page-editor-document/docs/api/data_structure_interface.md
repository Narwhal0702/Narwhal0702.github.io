---
title: 数据结构与常量的定义
# sidebar_position: 2

---


## 常量定义

### 编辑器元素类型
```js
export enum BasicHtmlType {
  PAGE = 'html_page',
  SECTION = 'html_section',
  TEXT = 'html_text',
  IMAGE = 'html_image',
  LINE = 'html_line',
  SPACER = 'html_spacer',
  BUTTON = 'html_button',
  ROW = 'html_row',
  COLUMN = 'html_column',
}
```

### Block类名
`export const BLOCK_CLASS_NAME = '[data-pe-id]'`


### 富文本编辑器相关常量
```js

// 类型
export const DATA_CONTENT_EDITABLE_TYPE = 'data-content_editable-type';
// idx
export const DATA_CONTENT_EDITABLE_IDX = 'data-content_editable-idx';
// 富文本编辑器类名
export const CONTENT_EDITABLE_CLASS_NAME = 'page-content_editable_text_only';
// 文本类名
export const CONTENT_EDITABLE_RICH_TEXT_CLASS_NAME =
  'page-content_editable_rich_text';
// Type
export enum ContentEditableType {
  RichText = 'rich_text',
  Text = 'text',
}
```

### Editor当前所处环境
```js
export enum Mode {
  // B端PC
  EDITING = 'editing',
  // B端Mobile
  EDITING_MOBILE = 'editing_mobile',
  // C端
  PRODUCTION = 'production',
  // C端首屏
  PRODUCTION_FCP = 'production_fcp',
}
```

## 数据结构定义


### Block 原始数据结构 
```js
interface IBlockDataOrigin<
  Type extends string = string,
  Styles extends Record<string, any> = Record<string, any>,
  Value extends Record<string, any> = Record<string, any>
> {
  type: Type;
  idx?: string;
  data: {
    value: Value;
    layout?: number[];
  };
  styles: Styles;
  children?: string[] | IBlockDataOrigin[];
}
```


### Block 扁平数据结构

```js
interface IBlockData<
  Type extends string = string,
  Styles extends Record<string, any> = Record<string, any>,
  Value extends Record<string, any> = Record<string, any>
> extends IBlockDataOrigin<Type, Styles, Value> {
  children?: string[];
}

export interface IBlockDataWithId extends IBlockData {
  idx: string;
}
```

### PageData 数据结构

```js
export interface IPageData {
  static: {
    [key: string]: IBlockData;
  };
  mutation: {
    [key: string]: Record<string, IBlockData>;
  };
}

export interface IPageDataWithId extends IPageData {
  static: {
    [key: string]: IBlockDataWithId;
  };
  mutation: {
    [key: string]: Record<string, IBlockDataWithId>;
  };
}
```

### Block Tree数据结构

```js
export interface IBlockTree extends IBlockDataOrigin {
  children?: IBlockTree[];
}
export interface IBlockTreeWithId extends IBlockTree {
  idx: string;
  children?: IBlockTreeWithId[];
}
```


### BLock Render数据结构

```js
export type IBlockRender<T> = Component<T>;

```
