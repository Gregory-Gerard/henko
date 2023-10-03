.PHONY: installation migration link schedule helpers pint

sail := ./vendor/bin/sail

install:
	docker run --rm \
		-u "$(shell id -u):$(shell id -g)" \
		-v "$(shell pwd):/var/www/html" \
		-w /var/www/html \
		laravelsail/php82-composer:latest \
		composer install --ignore-platform-reqs
	$(sail) up -d
	$(sail) artisan key:generate
	$(sail) artisan migrate
	$(sail) artisan db:seed

migrate:
	$(sail) artisan migrate

fresh:
	$(sail) artisan migrate:fresh --seed

link:
	$(sail) artisan storage:link

schedule:
	$(sail) artisan schedule:work

helpers:
	$(sail) artisan ide-helper:generate
	$(sail) artisan ide-helper:models -M
	$(sail) artisan ide-helper:meta

pint:
	$(sail) pint

start:
	$(sail) up -d
	$(sail) bun run dev

stop:
	$(sail) down
