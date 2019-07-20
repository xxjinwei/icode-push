# baidu icode push shortcut

`npm i -D icode-push`

### HOW TO USE
1. `npx icode-push`
2. npm-scripts `{push: 'icode-push'}`

### API
```javascript
    const {getRemoteName, push} = require('icode-push')

    getRemoteName().then(push)
```