#!/usr/bin/env bash
# shellcheck disable=SC2034

iso_name="tealinux"
iso_label="TEALINUX_$(date --date="@${SOURCE_DATE_EPOCH:-$(date +%s)}" +%Y%m)"
iso_publisher="Tea Linux <https://tealinux.org>"
iso_application="Tea Linux baseline"
iso_version="$(date --date="@${SOURCE_DATE_EPOCH:-$(date +%s)}" +%Y.%m.%d)"
install_dir="arch"
buildmodes=('iso')
bootmodes=('bios.syslinux.mbr' 'bios.syslinux.eltorito'
           'uefi-ia32.grub.esp' 'uefi-x64.grub.esp'
           'uefi-ia32.grub.eltorito' 'uefi-x64.grub.eltorito')
arch="x86_64"
pacman_conf="pacman.conf"
# airootfs_image_type="erofs"
airootfs_image_type="squashfs"
# airootfs_image_tool_options=('-zlzma,109' -E 'ztailpacking,fragments,dedupe')
airootfs_image_tool_options=('-comp' 'xz' '-Xbcj' 'x86' '-b' '1M' '-Xdict-size' '1M')
bootstrap_tarball_compression=(zstd -c -T0 --long -19)
file_permissions=(
  ["/etc/shadow"]="0:0:400"
  ["/etc/gshadow"]="0:0:400"
)
