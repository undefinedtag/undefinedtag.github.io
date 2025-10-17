# Use official PHP + Composer + Node base
FROM php:8.2-cli

# 1️⃣ Install system dependencies
RUN apt-get update && apt-get install -y \
    unzip git curl libpng-dev libonig-dev libxml2-dev zip nodejs npm && \
    docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# 2️⃣ Set working directory
WORKDIR /var/www/html

# 3️⃣ Copy app files
COPY . .

# 4️⃣ Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# 5️⃣ Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# 6️⃣ Generate app key (safe for containerized builds)
RUN cp .env.example .env || true && php artisan key:generate

# 7️⃣ Install and build frontend
RUN npm install && npm run build

# 8️⃣ Expose port (Render uses $PORT env automatically)
EXPOSE 10000

# 9️⃣ Start the PHP built-in server instead of `artisan serve`
CMD sh -c "php -S 0.0.0.0:${PORT:-8000} -t public"
