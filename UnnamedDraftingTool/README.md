# Foreword
This program is aiming to build on top of the currently available drafting tools, such as drafting.gg, Prodraft, Draftlol and Pick Ban, improving upon their UI, UX and adding new features. Basic navigation should pose no trouble to an experienced drafter, and to learn about new or advanced features you can consult the manual

# Manual

## Running the program 

### On the website
Head over to https://acertainprogrammer.github.io/UnnamedDraftingTool/ and you're good to go

### Local installation
The program can be used locally, as it has no backend.

`git clone https://github.com/aCertainProgrammer/UnnamedDraftingTool.git`

Then run it with something like `live-server` or `vite`

```
cd UnnamedDraftingTool
live-server
```

This will open the app in localhost

There is no build step required.
To install the live server:
`npm install -g live-server`

To update the program, run `git pull`

Running the program locally makes the performance better since images (the main bottleneck) are on your disk and don't need to be downloaded on the fly.
You will also occasionally get access to new features before they are published on the website

## Picking and banning champions
You can pick or ban a champion in four ways:
- click a champion, then click a pick/ban slot
- drag and drop the champion 
- hover over a champion, then press a number on your keyboard (1 to 10, with 10 being represented by 0 to keep consistency left-to-right).

This will either pick or ban the champion, depending on your current mode (pick or ban, toggled with `P` and `B` respectively)

- search for a champion until there is only one available to be picked, then use the number method from above.

This method has the advantage of not requiring a hover to work, which will certainly be appreciated by the Vim enthusiasts

## Keyboard shortucts

### Picking and banning

- `P` to get into `pick` mode
- `B` to get into `ban` mode
- any number from 1 to 10 (10 being represented by 0) to pick or ban a champion into that slot, depending on the current mode 
- `Delete` to clear all picks and bans
- `X` to clear picks or bans depending on the mode

### Search bar operations
- `Spacebar`, `Backspace` or any small letter (`a` to `z`) to focus the search bar (no need to click it with the mouse).

Backspace removes the last character, while a letter adds a character after focusing the search bar

### Data management
- `C` to load custom data
- `D` to load default data 
- `I` to open the "Input custom data" input area (note that this disables keyboard input until the input area is hidden)
- `F` to open the file data input dialog

## Personalisation and configuration

Currently you are given the option to customize the following:

### Border coloring
This colors the borders of the champions depending on which team they belong to:
- green for ally champions
- red for enemy champions
- orange for champions in both teams
- champions that are not in either ally or enemy teams are not given a colored border

### Load user data on page reload
This option decides which data source the program loads on startup (or when the page is reloaded).
If enabled, your custom data will be loaded, provided it is available

## Custom data input

**Note: if the data doesn't load, it means you made a mistake in your input. Press F12 or open your browser's console to check the error message. 
You can also validate your JSON here:
https://jsonchecker.com/
or on any other JSON validation website**

The custom data needs to be in the form of valid JSON, as an object containing 3 objects:
```
{
    "all",
    "ally",
    "enemy"
}
```

Each one of the objects contains 5 arrays, one for each role, as follows:
```
{
    "all": {
		"top": ["camille", "aatrox", "darius", "chogath"],
		"jungle": ["udyr", "xinzhao", "wukong", "jarvan"],
		"mid": ["syndra", "orianna", "sylas", "akali"],
		"adc": ["jhin", "jinx", "ashe", "kalista"],
		"support": ["leona", "nautilus", "sona", "taric"]
    },
    etc...
}
```

Together, they define the 3 teams you can select in the tool.

**Note**: You don't need to provide all 3 teams, if you omit a team the data will be pulled from the default data. 

This enables you to not have to bother with pasting the list of all champions for every config.

`all` is intended to simply be a list of all champions, but there might be other uses for it so I made it customizable. A full list of champions is provided below.

`ally` and `enemy` are simply the pools of two teams involved in the draft, use them however you like

An example of a full, valid config:
```
{
	"all": {
		"top": ["camille", "aatrox", "darius", "chogath"],
		"jungle": ["udyr", "xinzhao", "wukong", "jarvan"],
		"mid": ["syndra", "orianna", "sylas", "akali"],
		"adc": ["jhin", "jinx", "ashe", "kalista"],
		"support": ["leona", "nautilus", "sona", "taric"]
	},
	"ally": {
		"top": ["darius", "chogath"],
		"jungle": ["wukong", "jarvan"],
		"mid": ["sylas", "akali"],
		"adc": ["ashe", "kalista"],
		"support": ["sona", "taric"]
	},
	"enemy": {
		"top": ["camille", "aatrox"],
		"jungle": ["udyr", "xinzhao"],
		"mid": ["syndra", "orianna"],
		"adc": ["jhin", "jinx"],
		"support": ["leona", "nautilus"]
	}
}
```

**Pay attention to how some names are changed (xinzhao, jarvan, chogath)**. 

This is to make writing configs more convenient. Consult the list of all champions for the accepted names.

### All champions
The current list of all champions:
```
"aatrox",
"ahri",
"akali",
"alistar",
"ambessa",
"amumu",
"anivia",
"annie",
"aphelios",
"ashe",
"aurelionsol",
"aurora",
"azir",
"bard",
"belveth",
"blitzcrank",
"brand",
"braum",
"briar",
"caitlyn",
"camille",
"cassiopeia",
"chogath",
"corki",
"darius",
"diana",
"draven",
"drmundo",
"ekko",
"elise",
"evelynn",
"ezreal",
"fiddlesticks",
"fiora",
"fizz",
"galio",
"gangplank",
"garen",
"gnar",
"gragas",
"graves",
"gwen",
"hecarim",
"hwei",
"illaoi",
"irelia",
"ivern",
"janna",
"jarvan",
"jax",
"jayce",
"jhin",
"jinx",
"kaisa",
"kalista",
"karma",
"karthus",
"kassadin",
"katarina",
"kayle",
"kayn",
"kennen",
"kindred",
"kled",
"kogmaw",
"ksante",
"leblanc",
"leesin",
"leona",
"lillia",
"lissandra",
"lucian",
"lulu",
"lux",
"malphite",
"malzahar",
"maokai",
"masteryi",
"milio",
"missfortune",
"mordekaiser",
"morgana",
"naafiri",
"nami",
"nasus",
"nautilus",
"neeko",
"nidalee",
"nilah",
"nocturne",
"nunu",
"olaf",
"orianna",
"ornn",
"pantheon",
"poppy",
"qiyana",
"quinn",
"rakan",
"rammus",
"reksai",
"rell",
"renata",
"renekton",
"rengar",
"riven",
"rumble",
"ryze",
"samira",
"sejuani",
"senna",
"seraphine",
"sett",
"shaco",
"shen",
"shyvana",
"singed",
"sion",
"sivir",
"skarner",
"smolder",
"sona",
"soraka",
"swain",
"sylas",
"syndra",
"tahmkench",
"taliyah",
"talon",
"taric",
"teemo",
"thresh",
"tristana",
"trundle",
"tryndamere",
"twistedfate",
"twitch",
"udyr",
"urgot",
"varus",
"vayne",
"veigar",
"velkoz",
"vex",
"vi",
"viego",
"viktor",
"vladimir",
"volibear",
"warwick",
"wukong",
"xayah",
"xerath",
"xinzhao",
"yasuo",
"yone",
"yorick",
"yuumi",
"zac",
"zed",
"zeri",
"ziggs",
"zilean",
"zoe",
"zyra"
```

---

UnnamedDraftingTool isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc.
UnnamedDraftingTool was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games.  Riot Games does not endorse or sponsor this project.
