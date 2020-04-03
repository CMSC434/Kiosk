# Kiosk
CMSC434 Semester Project


## Usage
First the setup will consist of two steps : 
#### 1) Install Node and npm
* https://www.npmjs.com/get-npm

Check that you have it properly installed with 
```
node -v
npm -v
```
#### 2) Start local development 
By default, npm install will install all modules listed as dependencies in package.json
```
git clone git@github.com:CMSC434/Kiosk.git
cd kiosk
npm install
```
TO run the server run:
`npm start`
In the root directory
Go to `http://localhost:3000/` to see the "app"

https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

## Git workflow 
This workflow is something I've done in the past(and still use).
I haven't interned at a crazy big company or anything, so if any 
modifications should be made, I'd appreciate the feedback. This will help us stay organized, since we will not be able to constantly communicate with each other in real time. 

The basic flow of events is listed below.
Follow the Link for a more detailed explanaion of each step.
1. [Create an Issue](https://github.com/CMSC434/Kiosk#1-create-an-issue)
1. [Create a local brach from master](https://github.com/CMSC434/Kiosk#2-create-a-local-branch-from-master)
1. [Work on implementation and make some commits](https://github.com/CMSC434/Kiosk#3-work-on-implementation-and-make-some-commits)
1. [Push local branch](https://github.com/CMSC434/Kiosk#4-push-local-branch)
1. [Create pull request](https://github.com/CMSC434/Kiosk#5-create-pull-request)
1. [Merge into master branch](https://github.com/CMSC434/Kiosk#6-merge-into-master-branch)

### 1) Create an Issue
1. At the top navbar below the repo name, click on issues
1. Click on "new issue" to create the issue. The title should be meaningful, and should identify the feature being implemented or the bug being fixed. In the textarea below, write some more details on what you will do. Here I would write something like this 
```
Tasks: 
* Create "about page" 
* Add styling for about page
* ...
Maybe a comment like "use this data file for tast a,b ..."
No need to make it super detailed, but it's also nice to link some resources you might find useful.
```
1. On the right side under "asignees", select who will be working on the issue. In big teams this would be important, since we don't want multiple people to waste time working on the same issue. In our case, you might just assign the issue to yourself. 
!. Below, add a label, probably either enhancement or bug in our case
1. Hit submit new issue

### 2) Create a local branch from master
1. Make sure repo is cloned and run `git pull` to confirm you have the latest version of the master branch. (And also make sure you are on the master branch. If you want to see your current branch, run `git rev-parse --abbrev-ref HEAD`). Go to master branch with `git checkout master`
1. Create a local branch with `git checkout -b [ISSUE-TYPE]/#[ISSUE-NUM]_[describe_issue]`\
ISSUE-TYPE = feature(enhancement), fix(bug) (In out case)\
ISSUE-NUM = shown on issue page\
Example : 
If the issue number was #1, and the issue was to implement an about page, I might do something like:\
  `git checkout -b feature/#1_about_page`\
If the issue number was #3, and the issue was to fix a bug that displayed the wrong image:\
  `git checkout -b fix/#3_image_render`

### 3) Work on implementation and make some commits
On the newly created local branch, work on your issue and make commits. 
Commit messages should somewhat indicate what changes you made with that commit. 
Let me know if I should write how to commit changes

### 4) Push local branch
Once you feel like you are done, and you commited your final changes, push the local branch with
`git push origin HEAD` (You might only need git push depending on your configuration)

### 5) Create pull request
Once you push your local branch, go to the "pull requests" tab under the repo name. Your newly pushed branch should come up, with an option to create a new pull request. Click create new pull request. The title of the pull request can just be left as is in this case, it'll usually be the name of the branch. 
In the text area below, note something like :
```
Tasks completed:
* #xx (This is the issue number of the issue you were working on. This should show up as a hyperlink to issue) 
List some changes you made not listed in issue, etc...
```
On the right hand side: 
1. Add everyone on the team as a reviewer
1. Add the label, either enhancement or bug
1. At this point, there will be an option below to merge into master. Don't do this until every reviewer has reviewed!!


### 6) Merge into master branch
Once everyone has approved the pull request, click "merge" to master and then delete the branch(Should give you the option to do it right after).
Once merged into master, be sure to checkout to master and do a `git pull` to update your local repo. 

And you're done!!

### Common Scenarios that might need further action
// TODO: add scenarios
1. Someone merges changes to master, while you are still working on your local branch.(Need to rebase )


