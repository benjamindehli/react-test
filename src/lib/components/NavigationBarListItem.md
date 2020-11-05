NavigationBarListItem example:
```js
<ul>
<NavigationBarListItem listItem='Primary item 1' />
<NavigationBarListItem listItem={{name: 'Primary item 2', href: '#'}} />
</ul>
```

Themed NavigationBarListItem example:
```js
import customTheme from 'data/customTheme';
<ul>
<NavigationBarListItem listItem='Primary item 1' theme={customTheme} />
<NavigationBarListItem listItem={{name: 'Primary item 2', href: '#'}} theme={customTheme} />
</ul>
```