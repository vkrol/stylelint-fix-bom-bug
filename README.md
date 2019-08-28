# stylelint-fix-bom-bug

https://github.com/stylelint/stylelint/issues/4228

## Steps

1. Run `yarn` or `npm install`
2. Run `yarn check-bom` or `npm run check-bom`

```
Has BOM? true
```

3. Run `yarn fix` or `npm run fix`
4. Run `yarn check-bom` or `npm run check-bom`

```
Has BOM? false
```
