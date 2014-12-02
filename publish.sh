#!/usr/bin/env bash

cd src
wintersmith build
cd ..
git add .
git commit -am "$1"
git push origin master
