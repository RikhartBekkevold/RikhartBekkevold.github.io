<!-- tab, space, code, github, indentation, atom, text editor - github indentation -->
<!-- all keywords in h1 -->
<!-- github tab indentation   -->
# How to change Github tab indentation length
For tab characters Github, by default, uses an indentation length that equals the width of 8 space characters. This is not always desired, but luckily, you can change the way Github displays this indentation, both for your own code or for others code.

## Your own code
If you want to change how _your_ code is displayed by Github you need to tell your text editor to insert _space_ characters instead of
tab characters whenever you press the tab key. Changing the _display length of tab characters_ will not work, since
Github will still see it as a tab character, and apply its own logic for how these should be displayed, different from your text editor. By inserting a space you force Github to apply the rules for how
it displays space instead, which is the same as your editor (if you didn't mess with settings).

<!-- How to permanently change Github indentation when using:
  - <a>Visual Code</a>
  - <a>Atom</a>
  - <a>Sublime</a> -->


### Atom text editor
To permanently change how Github displays your code indentation if you use the Atom text editor, follow these steps:

1. Go to "Settings" (ctrl + comma)
2. Select "Editor" from menu
3. Scroll to bottom
4. Under the "Tab Type" heading select "soft" in dropdown

PS: You can also tweak how many spaces is inserted when you press tab by changing the value in the textfield under "Tab length"
(the setting directly above "Tab Type").

# For others code
If you do not have access to the file directly because the code is not yours, e.g. when you
view public code/repositories, you can still change the indentation by passing data to the browser URL.

Add <code>?ts=length</code> to the url, <code>length</code> being any number between 1 and 12, like so: https://github.com/somelibrary/src/main.js?ts=2

This is not permanent, however, and needs to be done each time you visit a new page/file.









<!-- Keep reading: internal links, 5? more bad ixd, but good SEO  -->

<!-- expect to fail. vs not expect. -->
<!-- how to manipluate others to link to you?
snowball effect  -->

<!-- does user engangemnt affect seo. comment section?  -->
<!-- does anchors to same page coutn as seointerl links?  -->
<!--
how to change tab size on github its own page?
write all these pages and link to eachother. dupli? want all to lead to same page?

show how to do it in atom
then write other pages for each one, using the atom one aswell
then decide if want to link here for each editor. how gen desc first, then link or maybe just in row.


How to make github match/use your tab editor length: atom in title?  

individual pages:
Change space to tab in atom, visual code,
Change in sublime,

screen shot tip...

For example in atom

Related: suggestions: further reading:
atom links if i have


If you want to change the spacing of the file U upload. Do so in editor.

The online gh page interprets

Note that it doesnt work to just change the tab length.
Even if you change the tab length, this works in editor, it wont work in brwoser/gh, since gh has its own way of interpreting how much sapce
a tab will visually be displayed as. a diff one to your editor. So it only works in editor,

To force gh to display 2 tab length, insert space instead of tab.

search this query and similar and see the results we get - then learn from them

hwo to and explain why?

How imp is it that its well written?

Its important to note, tabns vs sapce
Set editor to insert space instead of tabs. The set the number of spaces / space length.

Troubleshoot, todo list of things to try:
go to atom editor, find the most asked quesations. answer it? based on all the answers combined  

Most common is likely: -->
