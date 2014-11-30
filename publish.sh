#!/usr/bin/env bash

cd src
wintersmith build
cd ..
rm build/*
mv src/build/* .
rm -rf src/build
open .
git add .
git commit -am "$1"
git push origin master
