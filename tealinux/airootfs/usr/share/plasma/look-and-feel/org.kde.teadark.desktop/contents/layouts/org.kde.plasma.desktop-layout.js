// === Top Panel Configuration ===
paneltop = new Panel
paneltop.hiding = "none"
paneltop.location = "top"
paneltop.floating = 1
paneltop.height = 32
paneltop.lengthMode = "fill"

const width = screenGeometry(paneltop.screen).width

function separators(a){
    let c;
    if (width <= 1280){
        c = 1
    } else if (width <= 1440){
        c = 2
    } else {
        c = 3
    }
    for (let b = 0; b < c; b++)
        a.addWidget("org.kde.plasma.marginsseparator")
}

function separatorsTray(){
    let c;
    if (width <= 1280){
        c = 2
    } else if (width <= 1440){
        c = 4
    } else {
        c = 6
    }
    return c
}

// Add widgets to the top panel
separators(paneltop)
paneltop.addWidget("org.kde.plasma.kickoff")
paneltop.addWidget("org.kde.plasma.appmenu")
paneltop.addWidget("org.kde.plasma.panelspacer")

let systraprev = paneltop.addWidget("org.kde.plasma.systemtray")
let SystrayContainmentId = systraprev.readConfig("SystrayContainmentId")
const systray = desktopById(SystrayContainmentId)
systray.currentConfigGroup = ["General"]
systray.writeConfig("iconSpacing", "6")

paneltop.addWidget("org.kde.plasma.marginsseparator")

let clock = paneltop.addWidget("org.kde.plasma.digitalclock")
clock.currentConfigGroup = ["Appearance"]
clock.writeConfig("customDateFormat", "ddd d MMM")
clock.writeConfig("dateFormat", "custom")
clock.writeConfig("showDate", "false")
clock.writeConfig("dateDisplayFormat", "BesideTime")
clock.writeConfig("fontStyleName", "bold")
clock.writeConfig("autoFontAndSize", "false")
clock.writeConfig("boldText", "true")
clock.writeConfig("fontWeight", 700)
clock.writeConfig("use24hFormat", "0")

separators(paneltop)

// === Bottom Panel Configuration ===
panelbottom = new Panel
panelbottom.location = "bottom"
panelbottom.height = 56
panelbottom.offset = 0
panelbottom.floating = 1
panelbottom.alignment = "center"
panelbottom.hiding = "dodgewindows"
panelbottom.lengthMode = "fit"

panelbottom.addWidget("org.kde.plasma.marginsseparator")
panelbottom.addWidget("org.kde.plasma.icontasks")
panelbottom.addWidget("org.kde.plasma.marginsseparator")

// === Dolphin Configuration ===
const IconsStatic_dolphin = ConfigFile('dolphinrc')
IconsStatic_dolphin.group = 'KFileDialog Settings'
IconsStatic_dolphin.writeEntry('Places Icons Static Size', 16)

const PlacesPanel = ConfigFile('dolphinrc')
PlacesPanel.group = 'PlacesPanel'
PlacesPanel.writeEntry('IconSize', 16)

// === Window Decoration Buttons Configuration ===
const Buttons = ConfigFile("kwinrc")
Buttons.group = "org.kde.kdecoration2"
Buttons.writeEntry("ButtonsOnRight", "XIA")
Buttons.writeEntry("ButtonsOnLeft", "")

// === Accent Color Configuration ===
const colorScheme = ConfigFile("kdeglobals")
colorScheme.group = "General"
colorScheme.writeEntry("ColorScheme", "Tea-dark")
// colorScheme.writeEntry("AccentColorFromWallpaper", "true")

// === Konsole Profile Configuration ===
const konsoleProfile = ConfigFile("konsolerc")
konsoleProfile.group = "Desktop Entry"
konsoleProfile.writeEntry("DefaultProfile", "TeaLight.profile")

// === Splash Screen Configuration ===
const splash = ConfigFile("ksplashrc")
splash.group = "KSplash"
splash.writeEntry("Theme", "Kde.Splash.Dinamic")

// === Set Wallpaper ===
var allDesktops = desktops();
for (var i = 0; i < allDesktops.length; i++) {
    var d = allDesktops[i];
    d.wallpaperPlugin = "org.kde.image";
    d.currentConfigGroup = ["Wallpaper", "org.kde.image", "General"];
    d.writeConfig("Image", "file:///usr/share/backgrounds/tea-dark.png");
}
