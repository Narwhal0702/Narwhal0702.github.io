---
title: 数据结构定义
# sidebar_position: 2

---


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


### 

```js

```


### 

```js

```