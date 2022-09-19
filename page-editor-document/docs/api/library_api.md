---
title: Library API
# sidebar_position: 2

---


## API



### Block/Section库(LibraryManager)



### LibraryManager.getElements()
* 类型: `Array<ILibraryType>`
* 用法: 
    ```js
    const elements = LibraryManager.getElements()
    ```
* 详细: 返回一个包含所有Element的数组

---
### LibraryManager.getElementByType()
* 类型: `(type: string): ILibraryType | undefined`
* 用法: 
    ```js
     const elements = LibraryManager.getElements('pb-text')
    ```
* 详细: 返回指定type的Element列表

---
### LibraryManager.getSections()
* 类型: `Array<ILibraryType>`
* 用法: 
    ```js
    const sections = LibraryManager.getSections()
    ```
* 详细: 返回Section列表

---

### LibraryManager.getSectionByType()
* 类型: `(type: string): ILibraryType | undefined`
* 用法: 
    ```js
     const sections = LibraryManager.getSections('pb-text')
    ```
* 详细: 返回指定类型的Section列表

---

### LibraryManager.getLibraryTypeByBlockType()
* 类型: `( blockType: string ): ILibraryTypeType | undefined `
* 用法: 
    ```js
    const textElementLibraryType = getLibraryTypeByBlockType('pb-text')
    ```
* 详细: 根据指定的Type找到element/section合集中指定的type合集

---

### LibraryManager.registerElement()
* 类型: `< T extends Record<string, unknown> >(elementMap: { [key: string]: ILibraryType<T>; }) => void = (elementMap: { [key: string]: ILibraryType })`
* 用法: 
    ```js
    useEffect(() => {
		LibraryManager.registerElement({
			...ElementsLibrary,
		});
	}, []);
    ```
* 详细: 注册element合集并将其补充到现有的element合集中

---

### LibraryManager.registerSection()
* 类型: `< T extends Record<string, unknown> >(sectionMap: { [key: string]: ILibraryType<T>; }) => void = (sectionMap: { [key: string]: ILibraryType })`
* 用法: 
    ```js
    useEffect(() => {
		LibraryManager.registerSection({
			...SectionsLibrary,
			...CustomSectionLibrary,
		});
	}, []);
    
    ```
* 详细: 注册section合集并将其补充到现有的section合集中

---