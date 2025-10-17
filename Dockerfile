# 🧩 1. Use the official PHP 8.3 image with extensions
FROM php:8.3-fpm

# 🧰 2. Install system dependencies and Node for Vite builds
RUN apt-get update && apt-get install -y \
    git curl zip unzip nodejs npm \
    && docker-php-ext-install pdo pdo_mysql

# 🏗️ 3. Set the working directory
WORKDIR /var/www/html

# 📦 4. Copy project files
COPY . .

# 🧰 5. Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# 🧱 6. Install dependencies
RUN composer install --no-dev --optimize-autoloader
RUN npm install && npm run build

# 🔑 7. Generate app key
RUN php artisan key:generate

# ⚙️ 8. Expose port
EXPOSE 8000

# 🚀 9. Run Laravel
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
