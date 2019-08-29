PROTOCOL_PATH=../client/protocol
AVDLC=$(PROTOCOL_PATH)/node_modules/.bin/avdlc
PRETTIER=./node_modules/.bin/prettier

.DEFAULT_GOAL := types

types:
	@mkdir -p src/types/{keybase1,gregor1,chat1,stellar1}/
	$(AVDLC) -b -l typescript -t -o src/types/keybase1 $(PROTOCOL_PATH)/avdl/keybase1/*.avdl
	$(AVDLC) -b -l typescript -t -o src/types/gregor1 $(PROTOCOL_PATH)/avdl/gregor1/*.avdl
	$(AVDLC) -b -l typescript -t -o src/types/chat1 $(PROTOCOL_PATH)/avdl/chat1/*.avdl
	$(AVDLC) -b -l typescript -t -o src/types/stellar1 $(PROTOCOL_PATH)/avdl/stellar1/*.avdl
	$(PRETTIER) --write src/types/**/*.ts
