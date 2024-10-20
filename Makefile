NPM=npm
NPX=npx
EXPO=expo

# Install dependencies
install:
	$(NPM) install

# Start the development server
start:
	$(NPX) $(EXPO) start


.PHONY: install start