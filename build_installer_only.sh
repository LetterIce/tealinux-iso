#!/bin/bash
start_time=$(date +%s)

# Build and add installer to localrepo
cd ./localrepo
makepkg -fs
repo-add localrepo.db.tar.xz tealinux-installer-git-2.0-1-x86_64.pkg.tar.zst
cd ..

end_time=$(date +%s)
elapsed_time=$((end_time - start_time))

notify-send -u critical "Tealinux Installer Build" "Exited. done in $elapsed_time seconds"
mpv notif.mp3 > /dev/null 2>&1 &

