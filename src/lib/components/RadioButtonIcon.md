Regular radio button icons example:

```js
<RadioButtonIcon />
<RadioButtonIcon checked={true} />
```

Themed Regular radio button icons example:

```js
import customTheme from 'data/customTheme';
<React.Fragment>
  <RadioButtonIcon theme={customTheme}/>
  <RadioButtonIcon checked={true} theme={customTheme}/>
</React.Fragment>
```

Radio button icons with custom size example:

```js
<RadioButtonIcon size='36px' />
<RadioButtonIcon size='36px' checked={true} />
```
