---
title: Quick Start
# sidebar_position: 2

---


# 安装流程

## 安装要求
* node 版本？

## 安装

```javascript
yarn add solid-js
yarn add @aftership/page-editor
yarn add @aftership/page-editor-core
```
## 本地调试流程
* 从github仓库拉代码
* `yarn`安装项目依赖
* `yarn dev`启动开发环境
* 接入项目调试
    * 在page-editor中运行`yarn build`
    * 在需要使用的项目中使用`npm-link 进行调试`


## B端接入使用
* 创建一个`PageEditorProvider`
```jsx
import {
  IAddLibrary,
  makeDefaultPageData,
  PageEditorProvider,
} from '@aftership/page-editor';


// 通过调用makeDefaultPageData方法生成初始数据

export default function App() {
  const [pageData, setPageData] = useState(makeDefaultPageData());
  // 传入所需参数
  <PageEditorProvider
    pageData={pageData}
    height="100vh"
    setPageDataFieldValue={(path, value) => {
      if (path === null) return setPageData(value);
      setPageData((prev) => {
        const data = cloneDeep(prev);
        set(data, path, value);
        return data;
      });
    }}
    handleAddSectionWithCB={(index: number) => {
      (ref.current)?.addSection({
        index,
        val: "html_section",
      });
    }}
    handleAddElement={(addElement: IAddLibrary) => {
      addElement("html_button");
    }}
  >
    
  /* ...... */

  </PageEditorProvider>
}

```



## C端渲染


## Demo
