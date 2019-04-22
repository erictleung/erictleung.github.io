DATE=`date +"%Y-%m-%d"`

all :
	bundle exec jekyll serve

draft :
	touch ./_drafts/$(DATE)-tba.md
	vim ./_drafts/$(DATE)-tba.md

post :
	@read -p "Slug?: " SLUG;\
	cp _drafts/template.md _posts/$(DATE)-$$SLUG.md;\
	vim _posts/$(DATE)-$$SLUG.md

.PHONY : all

.DEFAULT_GOAL := all
