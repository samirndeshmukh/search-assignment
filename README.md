# search-assignment
Demo search application using `angular`,`java`,`springboot`,`hsql`.

## search-service
  CORS origin value is configured in `application.properties` file with key `cors.allowOrigin`. Default value `http://localhost:8080`.
    
  Data set is provided in `data.sql` file in `KEYWORD`,`ITEM`,`ITEM_KEYWORDS` tables.
  
  Search is based on keyword entered by user in the search bar.

## search-frontend
  Service endpoints base url in search-frontend is provided in `environments` file.Default value `http://localhost:8080/`.
