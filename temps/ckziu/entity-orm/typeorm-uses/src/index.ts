// import "reflect-metadata";
// import { AppDataSource } from "./data-source.js";
// import { User } from "./entity/User.js";

// AppDataSource.initialize().then(async () => {
//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.name = "John Doe";
//     user.email = "john.doe@example.com";
//     console.log("Inserting a new user2 into the database...");

//     await AppDataSource.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await AppDataSource.manager.find(User);
//     console.log("Loaded users: ", users);
// }).catch(error => console.log(error));


import "reflect-metadata";
import { AppDataSource } from "./data-source.js";
import { User } from "./entity/User.js";
import { QueryRunner, Table } from "typeorm";
import { createConnection } from "mysql2/promise";
async function ensureDatabaseExists() {
    const connection = await createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "ormTest",
    });

    await connection.query(`CREATE DATABASE IF NOT EXISTS ormTest`);
    await connection.end();
}

async function main() {
    await ensureDatabaseExists();
    AppDataSource.initialize().then(async () => {
        console.log("Checking if the 'User' table exists...");

        const queryRunner = AppDataSource.createQueryRunner();
        const tableExists = await queryRunner.hasTable("user");
        console.log("tableExists: ", tableExists);

        if (!tableExists) {
            console.log("The 'User' table does not exist. Creating the table...");
            await createTable(queryRunner);
            console.log("The 'User' table has been created.");

            console.log("Inserting new users into the database...");

            await addUsersToTable();

            console.log("Loading users from the database...");
            const loadedUsers = await AppDataSource.manager.find(User);
            console.log("Loaded users: ", loadedUsers);
        }
        else {
            console.log("The 'User' table already exists.");
            await queryRunner.dropTable("user");
            console.log("recreate the 'User' table...");
            await createTable(queryRunner);
            await addUsersToTable();
        }


        await queryRunner.release();
    }).catch(error => console.log(error));

}

async function createTable(queryRunner: QueryRunner) {
    await queryRunner.createTable(
        new Table({
            name: "user",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "255"
                },
                {
                    name: "email",
                    type: "varchar",
                    length: "255"
                }
            ]
        })
    );
}

const addUsersToTable = async () => {
    const users = [
        { name: "John Doe", email: "john.doe@example.com" },
        { name: "Jane Doe", email: "jane.doe@example.com" },
        { name: "Alice Smith", email: "alice.smith@example.com" },
        { name: "Rob Johnson", email: "bob.johnson@example.com" },
        { name: "Dob Johnson", email: "bob.johnson@example.com" },
        { name: "Bob Nowak", email: "bob.johnson@example.com" },
        { name: "Bob Nowak", email: "bob.johnson@example.com" },
        { name: "xxxxxx", email: "bob.johnson@example.com" },
        { name: "yyyyy", email: "bob.johnson@example.com" },
    ];

    const userEntities = users.map(userData => {
        const user = new User();
        user.name = userData.name;
        user.email = userData.email;
        return user;
    });

    await AppDataSource.manager.save(userEntities);
    console.log("Saved new users");
}

main();