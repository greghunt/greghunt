---
title: Component Development and Taillwind CSS
date: 2022-10-01T14:09:16+00:00
layout: "@layouts/Post.astro"
tags:
    - styling
    - tailwind
---

CSS frameworks have been around for a long time and for good reason. If you’ve ever written CSS from scratch, you’ll know that you’re often writing the same CSS for the same basic UI components in every project, perhaps with small variances. In fact, most front-end developers probably have their own mini “framework” stylesheet they included as a starter for most projects.

Enter [Bootstrap](https://getbootstrap.com/). Even though there were several CSS frameworks around this time, Bootstrap became the unquestioned leader for years. Whole templates and categories of development arose that revolved around Bootstrap styles. This is because it had well refined amount of styles and a large enough component library that you could easily finish most websites and even web applications using only this framework.

With such an influx of Bootstrap built sites, a pattern began to emerge. It seamed like half of all websites had the same “bootstrapped” look. Sites and design systems began to lose personality. This was the first issue.

Luckily, Bootstrap was built with SASS and so developers were able to download their own personalized flavour of it by tweaking its variables with different colours, sizes and spacing. This helped the “bootstrap” look a bit, but it still had another problem.

The minified build of Bootstrap began to grow. Version 3 was **121KB**. Version 4 was **162KB**. And even as recently as last year, Bootstrap 5 was released at **194KB**. As the years and versions past, Bootstrap did more and more and grew and grew.

At the same time, the front-end development community was going through a transformation. There was a huge focus on performance while maintaining a good developer experience.

Build processes had taken hold and so we no longer needed to pull in entire pre-built frameworks. Instead we could pull in only what we needed and crunch down the size as much as possible later in the build chain. Frameworks like React came to prominence and the component driven UI became more and more popular. But when you start making your own functional components, you end up fighting against the prebuilt nature of Bootstrap components to fit into your own.

Performance wasn’t just about the time of a full page load. It now relied on other metrics like [web vitals](https://web.dev/vitals/). This meant the render blocking nature of CSS was much more important so minimizing every byte of CSS that needed to be downloaded was crucial for perceived load times.

So we had 3 main problems at this stage:

1. Bootstrap sites still looked like a bootstrap site
2. Bootstrap included way too much CSS up front
3. Bootstrap components were too opinionated to fit in with custom component development.

There was one redeeming quality that emerged from Bootstrap in our company around this later period. We found ourselves using mostly only their utility classes. It provided a great base of classes that did low-level things like add margin, padding, shadows and backgrounds. This fit perfectly in the build process of components and sites looked less “bootstrappy.” Including only the reset and utilities also cut down the amount of CSS needed to begin rendering the page.

## Is Tailwind better than bootstrap?

Having already had this realization, when I came across [Tailwind CSS](https://tailwindcss.com/) I immediately saw its potential to replace Bootstrap in our development. After actually using it for a project I was even more convinced. The speed at which you could develop handcrafted components was astounding. It was the perfect companion to developing UI components and solved all of the problems inherent with Bootstrap while elevating all of the advantages of the utilitarian nature of Bootstrap. Since transitioning to Tailwind CSS I’ve completely ditched Bootstrap, and this is after working with it religiously for several years.

## Criticisms of Tailwind CSS

The major criticism of Tailwind was the fact that you were essentially binding your styles to your markup and polluting your HTML with a plethora of weird looking classes. Admittedly, it looked ugly. But given some deeper thought, it actually makes a lot of sense.

For a long time we were taught as developers to keep styles separate from markup. Why? Because they were of separate concerns, or something like that, right? HTML was your structure data and content, and CSS was now you presented it. The thing is that in practice styles are almost always intimately linked with the structure of your HTML.

Also, it’s difficult to maintain a lot of granular classes in your HTML if you want to reproduce some UI. However this concern completely goes away when you consider that you can abstract both your HTML and long class styles into one component file that get’s reused. So there’s no repetition and you can maintain everything in one file, in one component.

## Is Tailwind faster than CSS?

There are two ways of interpreting this question.

1. Is it faster *developing* with Tailwind instead of CSS
2. Does a web page load faster using Tailwind instead of vanilla CSS

### Speed of Development with Tailwind

I would say it’s undoubtedly faster developing sites with Tailwind instead of CSS. However this is only the case when you have some sort of component system where you don’t have to repeat the same long class names and can simply abstract your classes and markup into a reusable component. Something like [React](https://reactjs.org/), [Vue](https://vuejs.org/), or even backend templating languages like [Blade](https://laravel.com/docs/9.x/blade).

Since transitioning to Tailwind, I estimate that I can develop a static web page using some sort of component framework 40% faster than if I were using the same component framework but writing [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) either plainly or as [SASS](https://sass-lang.com/) and with a methodology like [BEM](http://getbem.com/).

The reason I believe it’s faster is that you can stay within your HTML and not have to rotate between a stylesheet. It doesn’t seem like a big deal, but it certainly adds up. Also, there is just so much repetition of simple style properties and values like `margin: 0px` that you have to rewrite within your rule statements countless times instead of the 3 keystrokes of `m-0`

### Tailwind Performance

In regards to performance, I believe Tailwind also wins the battle of performance as well. For two main reasons: purging and file size.

#### Purging

Purging your unused CSS is baked into Tailwind. You can obviously do this to your plain CSS as well, but not many people do unfortunately – even though its critical to increasing your [web vitals](https://web.dev/learn-web-vitals/). CSS is critical to visually rendering your page and so you want the absolute smallest file size in order for it to not only download but parse and render your styles visually to the user. This is a requirement in Tailwind but not necessarily when you manually author your CSS.

#### File Size

By using utility classes, you are essentially omitting any repetition of style rules in your CSS leading to the smallest CSS file size possible. However, this is at the expense of repeating your classes in your actual HTML.

However, the bytes required to express these styles as classes in your HTML instead of rules in your CSS is substantially lower.

On that note, Tailwind CSS can be considered better for SEO, since Google favours faster web pages with [better core vitals](https://www.searchenginejournal.com/ranking-factors/core-web-vitals/#close).

## Is CSS better than Tailwind?

As much as I love working with Tailwind, I truly wish I could simply write plain CSS. I’m a big believer in leveraging the native technologies of your platform and the truth is CSS is built into the browser, but you need a build chain and NodeJS dependencies in order to compile your Tailwind CSS.

Tailwind isn’t a replacement for CSS, it’s a supplemental tool. Therefore, as a developer you need to make the decision whether the advantages this tool brings to your project is worth the increase in complexity since *it’s not a native technology* of the browser, as opposed to plain CSS.

For example, I used to use SASS for several reasons. But mainly it allowed me to use variables in my CSS and keep things very <abbr title="Don't Repeat Yourself">DRY</abbr> and maintainable. It was worth the added complexity for quite awhile because the browser didn’t offer this natively but it allowed me to write and maintain my styles substantially faster. *But,* once [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) arrived to the browser and became well-supported, I ditched SASS in favour of this native technology.

So the question that needs answering is twofold, is there a native way of authoring lean, utility based CSS natively? And is the advantage of adding Tailwind to fill this gap worth the added complexity to your projects. This is a question every developer must answer for themselves and the particular project under consideration.

## Can I use Tailwind CSS for free?

[Tailwind CSS](https://tailwindcss.com/) is completely free, however [Tailwind UI](https://tailwindui.com/) is not. Tailwind CSS is the CSS framework and Tailwind UI is the premium set of components built from Tailwind CSS. It’s a collection of copyable markup you can paste as components into your own projects. Tailwind UI also leverages [Headless UI](https://headlessui.com/) in order to add interactive functionality with an un-styled, un-opinionated blank slate to work from while maintaining all the the functionality and accessibility necessary for many complex components.