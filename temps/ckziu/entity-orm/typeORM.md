Aby użyć TypeScript i TypeORM, musisz najpierw zainstalować odpowiednie pakiety. Oto kroki, jak to zrobić:

1. **Zainstaluj TypeScript i TypeORM**:
   ```sh
   npm install typescript typeorm reflect-metadata @types/node
   npm install mysql2
   ```

2. **Skonfiguruj TypeScript**:
   Utwórz plik `tsconfig.json` w katalogu głównym projektu:
   ```json
   {
     "compilerOptions": {
       "target": "ES6",
       "module": "commonjs",
       "outDir": "./dist",
       "rootDir": "./src",
       "strict": true,
       "esModuleInterop": true,
       "experimentalDecorators": true,
       "emitDecoratorMetadata": true
     },
     "include": ["src/**/*"]
   }
   ```

3. **Skonfiguruj TypeORM**:
   Utwórz plik `ormconfig.json` w katalogu głównym projektu:
   ```json
   {
     "type": "mysql",
     "host": "localhost",
     "port": 3306,
     "username": "test",
     "password": "test",
     "database": "test",
     "synchronize": true,
     "logging": false,
     "entities": ["src/entity/**/*.ts"],
     "migrations": ["src/migration/**/*.ts"],
     "subscribers": ["src/subscriber/**/*.ts"]
   }
   ```

4. **Utwórz strukturę katalogów**:
   ```
   src/
   ├── entity/
   │   └── User.ts
   ├── index.ts
   └── ormconfig.json
   ```

5. **Zdefiniuj encję**:
   Utwórz plik `src/entity/User.ts`:
   ```typescript
   import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

   @Entity()
   export class User {
     @PrimaryGeneratedColumn()
     id: number;

     @Column()
     name: string;

     @Column()
     email: string;
   }
   ```

6. **Utwórz plik startowy**:
   Utwórz plik `src/index.ts`:
   ```typescript
   import "reflect-metadata";
   import { createConnection } from "typeorm";
   import { User } from "./entity/User";

   createConnection().then(async connection => {
     console.log("Inserting a new user into the database...");
     const user = new User();
     user.name = "John Doe";
     user.email = "john.doe@example.com";
     await connection.manager.save(user);
     console.log("Saved a new user with id: " + user.id);

     console.log("Loading users from the database...");
     const users = await connection.manager.find(User);
     console.log("Loaded users: ", users);
   }).catch(error => console.log(error));
   ```

7. **Uruchom projekt**:
   Skonfiguruj skrypt w `package.json`:
   ```json
   "scripts": {
     "start": "tsc && node dist/index.js"
   }
   ```

   Następnie uruchom projekt:
   ```sh
   npm start
   ```

To wszystko! Teraz masz działający projekt TypeScript z TypeORM, który łączy się z bazą danych MySQL, tworzy tabelę `User`, wstawia nowego użytkownika i ładuje wszystkich użytkowników z bazy danych.

---------------------------------

# Jak powyżej ale używając esmodules

Aby użyć TypeScript i TypeORM z importami ESModule, musisz skonfigurować TypeScript do używania modułów ES i odpowiednio zmodyfikować kod. Oto kroki:

1. **Zainstaluj TypeScript i TypeORM**:
   ```sh
   npm install typescript typeorm reflect-metadata @types/node
   npm install mysql2
   ```

2. **Skonfiguruj TypeScript**:
   Utwórz plik `tsconfig.json` w katalogu głównym projektu:
   ```json
   {
     "compilerOptions": {
       "target": "ES6",
       "module": "ES6",
       "outDir": "./dist",
       "rootDir": "./src",
       "strict": true,
       "esModuleInterop": true,
       "experimentalDecorators": true,
       "emitDecoratorMetadata": true,
       "moduleResolution": "node"
     },
     "include": ["src/**/*"]
   }
   ```

3. **Skonfiguruj TypeORM**:
   Utwórz plik `ormconfig.json` w katalogu głównym projektu:
   ```json
   {
     "type": "mysql",
     "host": "localhost",
     "port": 3306,
     "username": "test",
     "password": "test",
     "database": "test",
     "synchronize": true,
     "logging": false,
     "entities": ["src/entity/**/*.ts"],
     "migrations": ["src/migration/**/*.ts"],
     "subscribers": ["src/subscriber/**/*.ts"]
   }
   ```

4. **Utwórz strukturę katalogów**:
   ```
   src/
   ├── entity/
   │   └── User.ts
   ├── index.ts
   └── ormconfig.json
   ```

5. **Zdefiniuj encję**:
   Utwórz plik `src/entity/User.ts`:
   ```typescript
   import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

   @Entity()
   export class User {
     @PrimaryGeneratedColumn()
     id: number;

     @Column()
     name: string;

     @Column()
     email: string;
   }
   ```

6. **Utwórz plik startowy**:
   Utwórz plik `src/index.ts`:
   ```typescript
   import "reflect-metadata";
   import { createConnection } from "typeorm";
   import { User } from "./entity/User.js";

   createConnection().then(async connection => {
     console.log("Inserting a new user into the database...");
     const user = new User();
     user.name = "John Doe";
     user.email = "john.doe@example.com";
     await connection.manager.save(user);
     console.log("Saved a new user with id: " + user.id);

     console.log("Loading users from the database...");
     const users = await connection.manager.find(User);
     console.log("Loaded users: ", users);
   }).catch(error => console.log(error));
   ```

7. **Uruchom projekt**:
   Skonfiguruj skrypt w `package.json`:
   ```json
   "scripts": {
     "start": "tsc && node --loader ts-node/esm dist/index.js"
   }
   ```

   Następnie uruchom projekt:
   ```sh
   npm start
   ```

To wszystko! Teraz masz działający projekt TypeScript z TypeORM, który używa importów ESModule, łączy się z bazą danych MySQL, tworzy tabelę `User`, wstawia nowego użytkownika i ładuje wszystkich użytkowników z bazy danych.

