# Use official PHP with Apache
FROM php:8.2-apache

# Install system dependencies
RUN apt-get update && apt-get install -y \
    unzip git curl libpng-dev libonig-dev libxml2-dev zip nodejs npm \
    libzip-dev sqlite3 libsqlite3-dev pkg-config libjpeg-dev libfreetype6-dev libwebp-dev \
    autoconf make g++ && \
    docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp && \
    docker-php-ext-install pdo_mysql pdo_sqlite mbstring exif pcntl bcmath gd zip && \
    apt-get clean && rm -rf /var/lib/apt/lists/*
    
# Enable Apache modules
RUN a2enmod rewrite headers

# Set working directory
WORKDIR /var/www/html

# Copy app files
COPY . .

# Create SQLite database directory with proper permissions
RUN mkdir -p /var/www/html/database /var/www/html/storage/logs && \
    touch /var/www/html/database/database.sqlite && \
    chmod -R 775 /var/www/html/database /var/www/html/storage && \
    chown -R www-data:www-data /var/www/html

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Copy environment file and configure
RUN cp .env.example .env && \
    echo "APP_ENV=production" >> .env && \
    echo "APP_DEBUG=false" >> .env && \
    echo "DB_CONNECTION=sqlite" >> .env && \
    echo "DB_DATABASE=/var/www/html/database/database.sqlite" >> .env && \
    echo "ASSET_URL=https://blueprint-b8i9.onrender.com/" >> .env

# Generate app key
RUN php artisan key:generate --force

# Install and build frontend assets
RUN npm ci --legacy-peer-deps && npm run build && rm -rf node_modules

# Set proper permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache && \
    chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache && \
    chmod -R 755 /var/www/html/public

# Configure Apache to use /var/www/html/public as document root
RUN cat > /etc/apache2/sites-available/000-default.conf <<'EOF'
<VirtualHost *:80>
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/html/public

    <Directory /var/www/html/public>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
EOF

# Expose port
EXPOSE 10000

# Create startup script
RUN cat > /usr/local/bin/start.sh <<'EOF'
#!/bin/bash
set -e

# Update Apache port
sed -i "s/Listen 80/Listen ${PORT:-10000}/g" /etc/apache2/ports.conf
sed -i "s/<VirtualHost \*:80>/<VirtualHost *:${PORT:-10000}>/g" /etc/apache2/sites-available/000-default.conf

# Run migrations
php artisan migrate --force

# Clear and cache config
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Start Apache
apache2-foreground
EOF

RUN chmod +x /usr/local/bin/start.sh

CMD ["/usr/local/bin/start.sh"]
