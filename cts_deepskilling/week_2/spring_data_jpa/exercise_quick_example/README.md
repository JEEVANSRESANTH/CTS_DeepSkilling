# Spring Data JPA Quick Example

## Prerequisites

1. **Java 17 or higher** installed
2. **Maven** installed and configured
3. **MySQL Server** installed and running

## Database Setup

### Option 1: Automatic Setup (Recommended)
The application is configured to automatically create/update the database schema using `spring.jpa.hibernate.ddl-auto=update`.

### Option 2: Manual Setup
1. Create a MySQL database named `ormlearn`:
   ```sql
   CREATE DATABASE ormlearn;
   ```

2. Run the schema.sql file located in `src/main/resources/schema.sql` to create the table and insert sample data.

## Configuration

Update the database credentials in `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ormlearn?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
spring.datasource.username=your_username
spring.datasource.password=your_password
```

## Running the Application

### Using Maven
```bash
cd D:\CTS_DeepSkilling\cts_deepskilling\week_2\spring_data_jpa\exercise_quick_example
mvn spring-boot:run
```

### Using Java
1. Build the project:
   ```bash
   mvn clean package
   ```

2. Run the JAR file:
   ```bash
   java -jar target/orm-learn-1.0-SNAPSHOT.jar
   ```

## Application Features

The application demonstrates:
- **CRUD Operations**: Create, Read, Update, Delete operations on Country entities
- **Spring Data JPA**: Repository pattern with custom queries
- **Transaction Management**: @Transactional annotation for service methods
- **Error Handling**: Comprehensive exception handling and logging
- **Entity Relationships**: Proper entity mapping with JPA annotations

## Project Structure

```
src/main/java/com/cognizant/ormlearn/
├── OrmLearnApplication.java      # Main Spring Boot application
├── model/
│   └── Country.java              # JPA Entity
├── repository/
│   └── CountryRepository.java    # Spring Data JPA Repository
└── service/
    └── CountryService.java       # Business logic layer
```

## Testing the Application

The application runs as a CommandLineRunner and automatically tests:
1. `getAllCountries()` - Retrieves all countries from database
2. `addCountry()` - Adds a new country
3. `getCountryById()` - Retrieves a specific country
4. `updateCountry()` - Updates an existing country
5. `deleteCountry()` - Deletes a country

## Troubleshooting

### Connection Issues
- Ensure MySQL server is running
- Verify database credentials in application.properties
- Check if the database `ormlearn` exists

### Port Conflicts
- If port 3306 is occupied, update the MySQL port in the JDBC URL

### Dependencies Issues
- Run `mvn clean install` to refresh dependencies
- Check your internet connection for Maven dependencies download

## Logs

The application uses SLF4J for logging with the following levels:
- INFO: General application flow
- DEBUG: Detailed information about data operations
- ERROR: Error messages and stack traces

Logs are printed to the console with the format specified in application.properties.