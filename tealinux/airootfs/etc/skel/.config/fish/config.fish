function fish_greeting
    fastfetch
end

function fish_command_not_found
    __fish_default_command_not_found_handler $argv
end

fish_add_path ~/.local/bin
starship init fish | source

alias suspend="systemctl suspend"
alias img=swayimg
alias vcp="vim ~/code/cpp/temp.cpp"
alias nvcp="nvim ~/code/cpp/temp.cpp"
alias pdf=mercury-browser
alias ls=eza
alias ll="eza --long"
alias la="eza --long --all"
