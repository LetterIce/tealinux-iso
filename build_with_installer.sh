#!/bin/bash
sudo sed -i "s|Server = file://.*|Server = file://$(pwd)/localrepo/|" ./tealinux/pacman.conf

# Build and add installer to localrepo
cd ./localrepo
makepkg -f
repo-add localrepo.db.tar.xz tealinux-installer-git-2.0-1-x86_64.pkg.tar.zst
cd ..

sudo rm -rf .work
sudo mkarchiso -r -v -w .work -o out tealinux
