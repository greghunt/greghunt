---
layout: "@layouts/Post.astro"
title: Optimizing Tailwind to the Last Byte
description: Tailwind CSS has helped us enourmously in optimizing our styles. However, there are still ways to write it inefficiently that we should be thinking about. 
date: 2022-09-26 7:33 -0500
categories: frontend
---

Now that [Tailwind](https://tailwindcss.com/) pushes bytes to your HTML instead of your CSS, we should be mindful of reducing class usage in our HTML. A good example is:

### 435 Byte Styled HTML List
```html
<ul>
    <li class="text-sm text-slate-700 font-bold">Some List Item</li>
    <li class="text-sm text-slate-700 font-bold">Some List Item</li>
    <li class="text-sm text-slate-700 font-bold">Some List Item</li>
    <li class="text-sm text-slate-700 font-bold underline">Some List Item</li>
    <li class="text-sm text-slate-700 font-bold">Some List Item</li>
    <li class="text-sm text-slate-700 font-bold">Some List Item</li>
</ul>
```

### VS – 238 Byte Styled HTML List

```html
<ul class="text-sm text-slate-700 font-bold">
    <li>Some List Item</li>
    <li>Some List Item</li>
    <li>Some List Item</li>
    <li class="underline">Some List Item</li>
    <li>Some List Item</li>
    <li>Some List Item</li>
</ul>
```

And this is in a list of only 6 items, imagine the difference when we're a dealing with repetitive lists and HTML on the order of dozens or hundreds.

## Testing Byte Difference for 65K List Items

I ran a little test to confirm this. [Volkan Kaya made a good point](https://twitter.com/volkandkaya/status/1574583837971152896)  that compression may make this a trivial difference. But in fact, it wasn't.

You can see the HTML used for both the duplicated Tailwind classes and the leaner HTML [here](https://github.com/greghunt/duplicate-class-experiment/tree/main/dist).

## Results

Here are the comparisons between of an HTML file with ~65k list items of duplicated Tailwind classes, and a leaner version where the styles were moved to more efficient selectors.

![Raw HTML](https://raw.githubusercontent.com/greghunt/duplicate-class-experiment/main/charts/raw.png)

![GZipped](https://raw.githubusercontent.com/greghunt/duplicate-class-experiment/main/charts/gzip.png)

![Brotli](https://raw.githubusercontent.com/greghunt/duplicate-class-experiment/main/charts/brotli.png)

As you can see, there is a significant difference in size even with text compression being used. It's important to note, this is a contrived test and amplified to highlight a worst case scenario, so I don't imagine many will run into real-world scenarios that come close to these number differences. 

### Render and Paint Times

I also compared the render and paint times. I figured this would be the number to suffer between the examples compared to compressed HTML. But it turns out that the paint and rendering times don't vary to any significant degree between either examples. They averaged somewhere between 800 – 1100 ms for the render, and 2-10 ms for the paint time. 

## Don't Forget the Power of the Cascade

Just because using Tailwind simplifies styling into a utility based model, doesn't mean we should forget about the cascading nature of CSS and not take advantage of it. Yes, Tailwind simplifies the complexities and issues with cascading styles, but it still has an advantage to it in reducing repetition and complexitiy (when used correctly).

This was a good rule of thumb 10 years ago when crafting CSS directly by hand, but it's worth repeating today even with tools like Tailwind at your disposal. Start your styles as generically as possible on your outermost elements, and get more specific only once you must address the particularities of inner elements.

I find __abstraction__ is a great skill you get used to as a programmer over time. Look at all of the things that are in common, then group them together as one entity so they can be used more effectively. This works in programs as much as it does when dealing with CSS. If 90% of the text on your website is `#334155`, then the base text color on your html or body element (`<body class="text-black">`) probably shouldn't be black. This sounds obvious when I say it like that, but I'm continually surprised at how many websites I inspect that don't do this and instead insist on just repeating the class `text-slate-700` on 289 elements of a 5 page website.

Many of you may be familiar with the concept of a [reset](https://meyerweb.com/eric/tools/css/reset/) or [normalize](https://necolas.github.io/normalize.css/) stylesheet. That's what CSS abstraction looks like in practice and is at the far end of the "abstraction" scale. Since browsers don't have a unified way of styling default elements, we start things off with normalizing styles to get a consistent display for all elements. Then if we continue along the cascade, we may address our base element styles, where we get a bit more opinionated and style the look and feel of all of the naked elements that will be used, like `<h1>` headings and `<input>`'s. From here we usually move to component levels but the same holds true. We implement methodologies like [BEM](https://en.bem.info/methodology/) for our components so we can name and easily abstract things only at their block levels, carefully [modifying](https://en.bem.info/methodology/key-concepts/#modifier) them as needed. This makes things reusable and composable without the need to get __too specific__, __too early__.

I must admit, I hear a lot in recent years that cascading styles and CSS are a pain to work with, but I never really felt that myself. Maybe it's because I had a better experience with it when the web was a bit simpler and it was actually an elegant and powerful tool for creating a consistent visual interface across an enourmous variety of web pages with very few bytes. That's if you embraced its cascading nature and didn't work your way upstream like a desperate salmon going home to [lay eggs and die of exhaustion](https://strikeandcatch.com/why-do-salmon-swim-upstream/). Styles cascade in one direction for a reason.