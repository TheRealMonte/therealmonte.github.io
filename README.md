# therealmonte.github.io

Hello!

I have created an app that lets you view data from the [Canvas event](https://canvas.fediverse.events/). The data was taken from the log file [Grant](https://toast.ooo/u/grant) provided. Due to the multiple downtimes during the event, the raw log file contains duplicate entries, which have been remove for this app.

The app allows you to enter a user name, such as grant@toast.ooo, and view their ranking, number of pixels placed, the coordinate they placed the most pixels, and how many of each color placed. 


If you would like to view the data as a txt file of every user you can view:
* ranking.txt has a ranking of user and how many pixels they have placed.
* user_color_count.txt show how many pixels of each color a user placed.
* user_top_cord.txt show the coordinate that each user place a pixel the highest number of times.

[place_data_only.csv](https://github.com/TheRealMonte/therealmonte.github.io/blob/main/place_data_only.csv) is the raw data for all of the pixels placed. It removes all the "pixel_undo" and "mod_rollback" entries. (You will have to download the file to view since it is too large for Github's file viewer on the site.)

I plan on adding more features, but wanted to get something out there so everyone could see how they did durning the event.

Feel free to message me on lemmy, [the_real_monte@sh.itjust.works](https://sh.itjust.works/u/the_real_monte), with any questions or suggestions!

[Click here](https://therealmonte.github.io/) to view the web app.

![Current app view](/screenshots/mainpage.png "Current app view")