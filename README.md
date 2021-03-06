# Terraforming Mars Score Card App

Digital recreation of the score card mat for the game [Terraforming Mars](https://boardgamegeek.com/boardgame/167791/terraforming-mars).

<img src="static/img/app_img.jpg" width=500px>

Hosted on github pages [here](https://steview-d.github.io/tm-score-app/).

Anyone who has played Terraforming Mars will know the pain of being an hour into a game and then accidently moving the score card. Your cubes fly off in all directions, forcing you to spend the next 10 minutes trying to figure out where they all were.

This app tries to solve that problem. It works on displays of all sizes, but I find it's best used with a tablet - something around the same size as the original player mats.

## How does it work?

If you have played Terraforming Mars before, it should already be clear how this app works.

### Icons

|Icon|Resource|Icon|Resource|Icon|Resource|
|---|---|---|---|---|---|
|<img src="static/img/credits_icon.png" width=40px>|Credits|<img src="static/img/steel_icon.png" width=40px>|Steel|<img src="static/img/titanium_icon.png" width=40px>|Titanium|
|<img src="static/img/greenery_icon.png" width=40px>|Greenery|<img src="static/img/power_icon.png" width=40px>|Power|<img src="static/img/heat_icon.png" width=40px>|Heat|

### Buttons

```
TR : + 0 -
```
Adjust the `Terraform Rating` with these buttons. This value is used when running the `production phase`, to calculate the correct number of credits.

```
Run Production Phase
```
Automate the `production phase` of the game.

```
Load / Save State
```
This will retrieve / store all current values (bank and production for each resource, and the current TR value) to local storage.

```
Clear State
```
This will delete any data stored by this app from your local storage.

```
Reset Card
```
This will reset the TR to 20, and all other values to 0.

## Credits

Resource icons created by [Yves Tourigny](https://boardgamegeek.com/filepage/197366/terraforming-mars-resource-icons-vector)

Backgrounds for each resource area sourced from [unsplash](https://unsplash.com/)

Everything else, by me.