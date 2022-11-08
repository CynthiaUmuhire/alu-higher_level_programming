#!/bin/bash
cp /mnt/c/Users/Jaakko/.vscode/extensions/black-theme/themes/Dark.json themes/black.json
cp /mnt/c/Users/Jaakko/.vscode/extensions/black-theme/themes/Dark-italic.json themes/black-italic.json
git add .
git commit -a && git push && vsce publish minor && git push