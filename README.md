# search-app
Demo search application using `angular`,`java`,`springboot`,`hsql`.
  
Search is based on keyword entered by user in the search bar *i.e; like %keyword%*

## search-service
  CORS origin value is configured in `application.properties` file with key `cors.allowOrigin`. Default value `http://localhost:4200`.
    
  Data set is provided in `data.sql` file in `KEYWORD`,`ITEM`,`ITEM_KEYWORDS` tables.

  #### Run
  ```
  mvnw spring-boot:run
  ```
  
## search-frontend
  Service endpoints base url in search-frontend is provided in `environments` file.Default value `http://localhost:8080/`.
  
  #### Run
  ```
  npm install
  ng serve --open --port 4200
  ```
  
