DATE=`date +"%Y-%m-%d"`

all :
	bundle exec jekyll serve

draft :
	touch ./_drafts/$(DATE)-tba.md
	vim ./_drafts/$(DATE)-tba.md

.PHONY : all

.DEFAULT_GOAL := all
