#!/bin/bash
sudo rm -rf .work
sudo rm -rf out-baseline
sudo mkarchiso -r -v -w .work -o out tealinux
