# 🧩 1. Use official PHP image
FROM php:8.3-fpm

# 🧰 2. Install system dependencies + Node for Vite
RUN apt-get update && apt-get install -y \
    git curl zip unzip nodejs npm \
    && docker-php-ext-install pdo pdo_mysql

# 🏗️ 3. Set working directory
WORKDIR /var/www/html

# 🧾 4. Copy composer and package manifests first (for caching)
COPY composer.json composer.lock package.json package-lock.json* ./

# 🧱 5. Install Composer + dependencies
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install --no-dev --optimize-autoloader

# 📦 6. Install Node dependencies and build
RUN npm install && npm run build

# 📂 7. Copy rest of project files
COPY . .

# ⚙️ 8. Copy .env.example → .env (so key:generate works)
RUN cp .env.example .env

# 🔑 9. Generate Laravel app key (now safe)
RUN php artisan key:generate

# 🧹 10. Optimize for production
RUN php artisan config:cache && php artisan route:cache && php artisan view:cache

# 🔒 11. Fix permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# 🌐 12. Expose port
EXPOSE 8000

# 🚀 13. Start Laravel
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
