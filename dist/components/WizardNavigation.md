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
