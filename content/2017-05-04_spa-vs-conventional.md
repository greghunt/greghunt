---
title: Single Page Applications VS Conventional
description: Single page applications are certainly trendy, but do they solve your problem? Here are some things to consider.
---

If you aren't already familiar with the rise of **single page applications** (<abbr title="Single Page Applications">SPAs</abbr>), you probably just aren't aware of them. They're everywhere. And the technology that drives them is being chosen more and more for new projects by web developers, mostly with good reason, but not always. Read on to find out what they are, why they're used, when they shouldn't be, and some solutions that bridge the gap between SPAs and their more static server-side counter-parts.

> [Skip below](#turbolinks) for a neat trick that can be thrown into any website and make it feel similar to navigating a SPA.

## What Are SPAs

Single page applications are web apps or sometimes entire websites, that are entirely loaded when you initially arrive, and through the <del>dark</del>magic of javascript, alter specific parts of the page according to user actions.

This is in contrast to the conventional method of loading a single static page for each unique URL address. You then navigate between URLs within your application (or website) with links and a handful of other less common methods. This is obviously very simplified and there is tons of in-between here, but that's the basic dichotomy.

### GMail

GMail is a good example, and was also a pioneer of SPA, starting with it's heavy use of AJAX requests when it first came out in 2004. The standard interface of GMail is built as an SPA and almost every action in it relies heavily on javascript, including its URL routing (notice the hash in it's URL, that's usually a good indicator of a SPA: mail.google.com/mail/u/0/ **#** inbox ).

Now that you have the feel for a SPA, you can try the conventional version of GMail by refreshing the page and clicking the "Load Basic HTML" link in the bottom right corner. Try to ignore the lack of styling of the page, since this isn't a characteristic of either, but rather GMail's attempt to save bandwidth for their users. You'll notice every action reloads the entire page and the URLs update accordingly.

### The problems SPAs Solve

The most obvious difference from the user's perspective between the two will be the speed and responsiveness of SPAs. Besides the initial load (which can still be quite similar to a regular web page with some optimization techniques), user actions are incredibly responsive. This is because instead of swapping the entire page for another to match the user's request, we simply update only the element that's supposed to update in that moment. This also saves the user's bandwidth.

The other benefits mostly fall under having a better developer experience, thereby possibly reducing the cost of development - but this entirely depends on the type of application you're building. In a nutshell, if your application will require **A LOT** of complex user actions that are more than just navigational, you may want to consider a SPA using a well established javascript framework to do the heavy lifting.

However, often times our needs don't lie on either side of the spectrum and we need a lil' from column A, and a lil' from column B. Choosing a SPA to solve only one narrow aspect of your application may be overkill.

## When SPAs are overkill

If your application consists mostly of the user navigating different pages and submitting a handful of forms, you should definitely stick with the conventional approach. This approach is generally cheaper, less error-prone, easier to maintain, more accessible and will more easily integrate with other 3<sup>rd</sup> party services.

## The Best of Both Worlds

Our personal preference usually leans towards the conventional model, for the simple reason that a lot of the problems SPAs solve can be bridged with some simple techniques.

- Optimizing your app's performance should already be a focus, so reducing the page load and aggressively caching certain parts will immediately speed up the user experience.
- We can still use frontend javascript frameworks (such as JQuery, React, & Vue) to manage some of the more interactive portions of the application without wrapping the whole site in bloated javascript.
- One of our absolute favourite tricks is using this nifty library made by the creators of [Basecamp](https://github.com/turbolinks/turbolinks/wiki/Turbolinks-5-FAQ):

### [TurboLinks](https://github.com/turbolinks/turbolinks)

[This awesome little library](https://github.com/turbolinks/turbolinks) can be thrown into any conventional application and will automatically intercept all of your links and have them **only load the difference** between the current and next page. This leads to a much snappier experience when navigating, much like a SPA. In fact, this site currently uses it! Pay attention when you navigate the site and you'll see that the page never fully reloads.
