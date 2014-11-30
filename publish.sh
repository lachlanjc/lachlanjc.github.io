#!/usr/bin/env bash

cd src
wintersmith build
cd ..
rm build/*
mv src/build/* .
rm -rf src/build
open .
git status
