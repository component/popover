
build: index.js template.js components
	@component build --dev

build-browserify: $(SRC) node_modules
	@mkdir -p build
	@browserify \
		--require query \
		--require ./index.js:popover \
		--outfile build/build.js

template.js: template.html
	@component convert $<

components:
	@component install  --dev

clean:
	rm -fr build components

.PHONY: clean build
