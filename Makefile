TESTS = ./tests/*.js
test:
	mocha  $(TESTS)

.PHONY: test