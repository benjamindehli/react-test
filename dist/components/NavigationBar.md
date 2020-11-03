NavigationBar example:

```js
<NavigationBar primaryListItems={[{name: 'Primary item 1', listItems:['Sub item 1', 'Sub item 2']}, 'Primary item 2', {name: 'Primary item 3', href: '#'}]} secondaryListItems={['Secondary item 1', 'Secondary item 2']} />
```

NavigationBar without list items example
```js
<NavigationBar />
```

NavigationBar with child elements
```js
<NavigationBar primaryListItems={[{name: 'Primary item 1', listItems:['Sub item 1', 'Sub item 2']}, 'Primary item 2', {name: 'Primary item 3', href: '#'}]} secondaryListItems={['Secondary item 1', 'Secondary item 2']} >
Content here
</NavigationBar>
```


NavigationBar with child elements and without list items example
```js
<NavigationBar>
Content here
</NavigationBar>
```

Themed NavigationBar example:
```js
import customTheme from 'data/customTheme';
<NavigationBar theme={customTheme} primaryListItems={[{name: 'Primary item 1', listItems:['Sub item 1', 'Sub item 2']}, 'Primary item 2', {name: 'Primary item 3', href: '#'}]} secondaryListItems={['Secondary item 1', 'Secondary item 2']} />
```
