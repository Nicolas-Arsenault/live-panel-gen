1. docker build -t custom-postgres .
2. docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=mydatabase -p 5432:5432 -d custom-postgres
3. (optional) docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=mydatabase -p 5432:5432 -v pgdata:/var/lib/postgresql/data -d custom-postgres


Now to log in:
1. docker exec -it my-postgres psql -U postgres -d mydatabase


