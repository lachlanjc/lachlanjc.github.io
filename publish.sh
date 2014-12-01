#!/usr/bin/env bash

cd src
wintersmith build
rm -r build
cd ..
git add .
git commit -am "$1"
git push origin master
