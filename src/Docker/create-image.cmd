docker build --no-cache -f SQL\Dockerfile.PostgreSql -t iss21/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t iss21/app ../..
