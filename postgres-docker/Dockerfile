# Use the official PostgreSQL image as a base image
FROM postgres:latest

# Copy the init.sql script to the /docker-entrypoint-initdb.d/ directory
# This directory is automatically executed by PostgreSQL when the container starts
COPY init.sql /docker-entrypoint-initdb.d/

# Expose the default PostgreSQL port (optional)
EXPOSE 5432

