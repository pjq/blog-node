#!/bin/bash

echo "Start to deploy the latest code..."

workspace=`pwd`
echo "Current workspace is ${workspace}"

echo "run git pull origin master"
git pull origin master

echo "done"
