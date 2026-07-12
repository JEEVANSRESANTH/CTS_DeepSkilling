# Spring Data JPA Quick Example

## What you need

- Java 17+
- Maven
- MySQL Server running locally

## Setting up the database

Either let Hibernate handle it (it creates the schema automatically via `spring.jpa.hibernate.ddl-auto=update`), or create the database manually:

```sql
CREATE DATABASE ormlearn;
```

Then run `src/main/resources/schema.sql` to set up tables and sample data.

## Config

Edit `src/main/resources/application.properties` with your MySQL credentials:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ormlearn?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
spring.datasource.username=your_username
spring.datasource.password=your_password
```

## Running it

From the project folder:

```bash
mvn spring-boot:run
```

Or build and run the JAR:

```bash
mvn clean package
java -jar target/orm-learn-1.0-SNAPSHOT.jar
```

## What it does

Runs a `CommandLineRunner` that tests basic CRUD on a `Country` entity — add, get by ID, update, delete, and list all. Uses Spring Data JPA repositories and `@Transactional` services.

## Troubleshooting

- Make sure MySQL is running and the `ormlearn` database exists
- If port 3306 is taken, change it in the JDBC URL
- Run `mvn clean install` if dependencies are acting up
