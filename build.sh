#!/bin/bash
sudo rm -rf .work
start_time=$(date +%s)
time sudo mkarchiso -r -v -w .work -o out tealinux
end_time=$(date +%s)
elapsed_time=$((end_time - start_time))

notify-send -u critical "Tealinux Build" "Exited. done in $elapsed_time seconds"
mpv notif.mp3