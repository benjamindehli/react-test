WizardNavigation example:
```js
const wizardSteps = {
    SignIn: {
        id: 'SignIn',
        name: 'Start',
        finished: true,
        hasErrors: false
    },
    AvailableReportees: {
        id: 'AvailableReportees',
        name: 'Velg hvem du representerer',
        finished: true,
        hasErrors: false
    },
    Import: {
        id: 'Import',
        name: 'Importer fil fra ByggSøk',
        finished: false,
        hasErrors: true
    },
    NextProcessCategory: {
        id: 'NextProcessCategory',
        name: 'Velg søknadstype',
        finished: false,
        hasErrors: false
    },
    Receipt: {
        id: 'Receipt',
        name: 'Velg søknadssystem',
        finished: false,
        hasErrors: false
    }
};

<WizardNavigation steps={wizardSteps} activeStepId='NextProcessCategory' />

```

WizardNavigation with links example:
```js
import { BrowserRouter } from 'react-router-dom';

const wizardStepsWithLinks = {
    SignIn: {
        id: 'SignIn',
        name: 'Start',
        finished: true,
        hasErrors: false,
        link: { pathname: 'SignIn', search: window.location.search }
    },
    AvailableReportees: {
        id: 'AvailableReportees',
        name: 'Velg hvem du representerer',
        finished: true,
        hasErrors: false,
        link: { pathname: 'AvailableReportees', search: window.location.search }
    },
    Import: {
        id: 'Import',
        name: 'Importer fil fra ByggSøk',
        finished: false,
        hasErrors: true,
        link: { pathname: 'Import', search: window.location.search }
    },
    NextProcessCategory: {
        id: 'NextProcessCategory',
        name: 'Velg søknadstype',
        finished: false,
        hasErrors: false,
        link: { pathname: 'NextProcessCategory', search: window.location.search }
    },
    Receipt: {
        id: 'Receipt',
        name: 'Velg søknadssystem',
        finished: false,
        hasErrors: false,
        link: { pathname: 'Receipt', search: window.location.search }
    }
};
<BrowserRouter>
<WizardNavigation steps={wizardStepsWithLinks} activeStepId='NextProcessCategory' />
</BrowserRouter>
```
