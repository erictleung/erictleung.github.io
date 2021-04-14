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

# https://stackoverflow.com/a/46553586/6873133
update :
	bundle lock --update

.PHONY : all draft post

.DEFAULT_GOAL := all
