DATE=`date +"%Y-%m-%d"`

all :
	bundle exec jekyll serve

draft :
	@read -p "Slug?: " SLUG;\
	cp _drafts/template.md _drafts/$(DATE)-$$SLUG.md;\
	vim _drafts/$(DATE)-$$SLUG.md

post :
	@read -p "Slug?: " SLUG;\
	cp _drafts/template.md _posts/$(DATE)-$$SLUG.md;\
	vim _posts/$(DATE)-$$SLUG.md

.PHONY : all

.DEFAULT_GOAL := all
