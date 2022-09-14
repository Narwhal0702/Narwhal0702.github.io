#!/bin/bash


echo "开始提交至开发分支"
git add .
git remote add origin git@github.com:Narwhal0702/Narwhal0702.github.io.git
git commit -am ":sparkles: (APB-0) Add new commit to repo"
git push origin release/kiwi

echo "已提交至开发仓库"

yarn build
cd build
git init
git remote add origin git@github.com:Narwhal0702/Narwhal0702.github.io.git
echo "开始提交"
git add .
git status
echo "请确认是否提交 y/n"
read submit
if [ $submit == 'y' ]; then
git commit -m ":sparkles: (APB-0) Commit to show brach"
git push -f origin master
echo "提交成功"
else
echo "终止提交"
fi