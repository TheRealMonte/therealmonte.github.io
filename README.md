# Canvas Stats

Hello!

I have created an app that lets you view data from the [Canvas event](https://canvas.fediverse.events/). The data was taken from the log file [Grant](https://toast.ooo/u/grant) provided. Due to the multiple downtimes during the event, the raw log file contains duplicate entries, which have been remove for this app.

The app allows you to enter a user name, such as grant@toast.ooo, and view their ranking, number of pixels placed, the coordinate they placed the most pixels, and how many of each color placed. You can also view the pixels you have placed and download them as a png image. The image is rendered using HTML Canvas graphics. 


If you would like to view the data as a txt file of every user you can view:
* ranking.txt has a ranking of user and how many pixels they have placed.
* user_color_count.txt show how many pixels of each color a user placed.
* user_top_cord.txt show the coordinate that each user place a pixel the highest number of times.

Feel free to message me on lemmy, [the_real_monte@sh.itjust.works](https://sh.itjust.works/u/the_real_monte), with any questions or suggestions!

[Click here](https://therealmonte.github.io/) to view the Canvas Stats app.






![View a user's stats](/screenshots/stats-view.png "View a user's stats")
![View a user's placed pixels](/screenshots/pixel-view.png "View a user's placed pixels")