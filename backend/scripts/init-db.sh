#!/bin/bash
set -e

# Create the databases
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE DATABASE skillbridge_user;
    CREATE DATABASE skillbridge_auth;
    
    GRANT ALL PRIVILEGES ON DATABASE skillbridge_user TO postgres;
    GRANT ALL PRIVILEGES ON DATABASE skillbridge_auth TO postgres;
EOSQL
