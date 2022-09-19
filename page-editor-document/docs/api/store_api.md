---
title: Store API
sidebar_position: 5

---



### store
* 类型: 
```js
interface IStore {
  pageData: IPageDataWithId;
  mode: Mode;
}
```
* 用法: 
    ```js
    
    ```
* 详细: 同步所有Block的数据到page-editor储存在store中

---

### setStore()
* 类型: `SetStoreFunction<IStore>`
* 用法: 
    ```js
    
    ```
* 详细: 修改store的值

---

### getByPath()
* 类型: `(path: string)`
* 用法: 
    ```js
    
    ```
* 详细: 取得store对应path的值

---

### getValue()
* 类型: `(idx: string)`
* 用法: 
    ```js
    
    ```
* 详细: 获取传入的idx对应block的value值(`pageData.static[${idx}].data.value`)

---

### getStyles()
* 类型: `(idx: string)`
* 用法: 
    ```js
    
    ```
* 详细: 获取传入的idx对应block的style值(`pageData.static[${idx}].styles`)

---

### getBlockData()
* 类型: `(idx: string)`
* 用法: 
    ```js
    
    ```
* 详细: 获取传入idx对应的Block的数据(`pageData.static[${idx}]`)

---

### getParentSection()
* 类型: `(idx: string)`
* 用法: 
    ```js
    
    ```
* 详细: 获取包含传入idx的父级Block，也就是children属性中包含该block的Section

---


