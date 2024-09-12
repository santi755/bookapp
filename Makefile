NPM=npm
NPX=npx
EXPO=expo
FRONT_DIR=front

# Install dependencies
install:
	cd $(FRONT_DIR) && $(NPM) install

# Start the development server
start:
	cd $(FRONT_DIR) && $(NPX) $(EXPO) start


.PHONY: install start