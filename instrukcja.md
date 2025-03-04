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
    "target": "ESNext",    
    "module": "commonJS",  
    "rootDir": "./src", 
   "outDir": "./dist", 
    "esModuleInterop": true,                          
    "forceConsistentCasingInFileNames": true,   
    "strict": true, 
    "skipLibCheck": true                       
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


# React i Vite
```console
npm create vite@latest
//ewetualnie zgoda na zainstalowanie aplikacji create
//utworzenie projektu podanie nazwy wybranie React i potem Typescript
//zgodnie z tym co jest napisane w konsoli
cd nazwaKatalogu
npm i
npm run dev //uruchmienie aplikacji
//do edycji 
code . //uzycie VS code
```

