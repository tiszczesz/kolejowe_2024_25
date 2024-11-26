# Wstęp
## Tworzenie projektu
```console
npm init //zadaje pytania
npm init -y //tworzy domyslny
```

## Instalacja LOKALNA TypeScript
```console
npm install typescript --save-dev //instaluje lokanie TypeScript do pracy dla dev
npm install @types/node -D //instaluje typy TypeScript do pracy z node

```

## Kompilowanie do JS
``` npx tsc nazwaPliku  //npx oznacza uruchom polecenie z node_modules .bin
```

## Generowanie pliku konfiguracyjnego dla TypeScript

```console
npx tsc -init //generowanie pliku tsconfig.json
```
## ustawienia opcji w tsconfig.json
```json
{
  "compilerOptions": {     
    "target": "ESNext",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
  
    /* Modules */
    "module": "commonJS",                              /* Specify what module code is generated. */
    
    "rootDir": "./src",                                  /* Specify the root folder within your source files. */
  
   "outDir": "./dist",                                   /* Specify an output folder for all emitted files. */
   
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
   
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}
```
## kompilowanie z ts do js

```console 
npx tsc //wszystkie pliki
//lub
npx tsc --watch
```
## Uruchamianie w nodejs
```console
node nazwaPliku.js
```
## Wszystko o TypeScript
https://www.typescriptlang.org/
