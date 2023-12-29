# use multi-stage builds to reduce the size of the final image
FROM python:3.11-slim-buster as python-base
ENV FASTAPI_ENV=production
RUN apt-get update \
    && apt-get install --no-install-recommends -y \
    build-essential \
    # clean up
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
# Copy the application files to a consistent directory
WORKDIR /app
COPY requirements.txt /app/requirements.txt
RUN pip install -r /app/requirements.txt 

EXPOSE 8000
CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]
