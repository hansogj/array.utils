# Array.utils


```bash
$>  npm i -s @hansogj/array.utils
```


```js
import "@hansogj/array.utils";
```

Se usages in 
* [defined](./src/defined/README.md)
* [onEmpty](./src/onEmpty/README.md)
* [flatMap](./src/flatMap/README.md)


## UMD

This package supports UMD import wia script-loading. _onEmpty_ and _flatMap_ are mere polyfills, whereas defined should be used as functions ie: 


```html
<script src="../node_modules/@hansogj/array.utils/lib/index.js"></script>
<script src="../node_modules/@hansogj/array.utils/lib/defined/index.js"></script>
```
in your `index.html`-file, and 

```js
    const { defined, definedList } = window.defined;

    if(defined([1,2,3]) {
        console.log("this is not empty);
    }
    [].onEmpty(...)
    [[1,2,3]].flatMap()

```
should then be available in you js-files


## Publish

```bash
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease]
git push --follow-tags
npm publish
```
