NPM=npm
NPX=npx
EXPO=expo

# Install dependencies
install:
	$(NPM) install

# Start the development server
start:
	$(NPX) $(EXPO) start

tunnel:
	ssh -R 80:localhost:8080 nokey@localhost.run


.PHONY: install start tunnel