#!/bin/bash
sudo rm -rf .work
start_time=$(date +%s)
time sudo systemd-inhibit mkarchiso -r -v -w .work -o out tealinux
end_time=$(date +%s)
elapsed_time=$((end_time - start_time))

notify-send -u critical "Tealinux Build" "Exited. done in $elapsed_time seconds"
mpv notif.mp3 > /dev/null 2>&1 &