.PHONY:	help test
help:
	@echo "usage: make <option>"
	@echo "options and effects:"
	@echo "    help                     : Show help"
	@echo "    test                     : Test ..."

test:
	@echo "test ..."
	
.PHONY:	push upgrade
push:
	@git add .
	git commit -m "脚本自动push"
	git push origin main
	@echo -e "\033[1;31m --- https证书 music.zdog.top将于2024-12-04到期[更换周期3个月] --- \033[0m"

upgrade:
	@pnpm upgrade --latest
	@echo "upgrade success"