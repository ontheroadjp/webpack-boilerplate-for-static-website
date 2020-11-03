#!/bin/bash

(
    git clone https://github.com/scriptype/sorted-colors
    cd sorted-colors
    npm install
    npm run build
)

exit 0
