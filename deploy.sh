set -e

yarn build

cd dist

rm -rf .git

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/Az212At/rick-and-morty.git master:gh-pages

cd -
