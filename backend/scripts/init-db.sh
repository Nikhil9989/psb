#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE DATABASE skillbridge_user;
    CREATE DATABASE skillbridge_auth;
    
    GRANT ALL PRIVILEGES ON DATABASE skillbridge_user TO postgres;
    GRANT ALL PRIVILEGES ON DATABASE skillbridge_auth TO postgres;
EOSQL