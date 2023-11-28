#!/bin/bash
#bundle lock --add-platform ruby
#bundle lock --add-platform x86_64-linux
export PATH=$PATH:$(dirname $(which npm))
echo 'export PATH=$PATH:$(dirname $(which npm))' >> ~/.bashrc
