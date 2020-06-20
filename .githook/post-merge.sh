#!/usr/bin/env bash
# MIT © Sindre Sorhus - sindresorhus.com
# forked by Gustavo Ribeiro

changed_files="$(git diff-tree -r --name-only --no-commit-id ORIG_HEAD HEAD)"

check_run() {
	echo "$changed_files" | grep -E --quiet "$1" && eval "$2"
}

check_run package.json "npm install"