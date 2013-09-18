#! /bin/sh

set -e

echo "Fetching repo $1"

baseDir=$(dirname $0)
outputDir=$baseDir/../webapp/resources/
tmpDir=$baseDir/temp

repoName=`echo $1 | sed 's/^.*\/\(.*\)\.git/\1/'`

rm -rf $outputDir
mkdir -p $outputDir

rm -rf $tmpDir
mkdir -p $tmpDir

cd $tmpDir
git clone --depth=1 $1
cd $repoName
bower install --force-latest
npm install
grunt dist
cp -R $tmpDir/$repoName/dist/* $outputDir
rm -rf $tmpDir
