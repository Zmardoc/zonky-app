# zonky-app
Aplikace používá z marketplace, avšak je nutné mít v prohlížeči CORS povoleny:

## Nastavení chromu bez cors
* Vytvořit zástupce
* Do cesty zkopírovat (nahradit cestu CHROME_FILE_PATH ):
```
  "[CHROME_FILE_PATH]" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp
```
* Vypnout Chrome a spustit přes nového zástupce

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
