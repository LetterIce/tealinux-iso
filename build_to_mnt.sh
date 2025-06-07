#!/bin/bash
sudo sed -i "s|Server = file://.*|Server = file://$(pwd)/localrepo/|" ./tealinux/pacman.conf
sudo rm -rf .work
sudo mkarchiso -r -v -w .work -o /mnt tealinux
